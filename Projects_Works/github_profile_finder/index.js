let userinput = document.querySelector("#userprofile");
let userbutton = document.querySelector("#btn");

let userName = document.querySelector("#userName");
let userId = document.querySelector("#userId");
let userBio = document.querySelector("#userBio");
let followernum = document.querySelector(".followernum");
let followingnum = document.querySelector(".followingnum");

let joinDate = document.querySelector("#joined");

let repoList = document.querySelector(".repoList");
let totalrepo = document.querySelector("#totalRepo");
let repolink = document.querySelector(".repolink");

let userlocation = document.querySelector(".userlocation");
let usertwitter = document.querySelector(".usertwitter");
let useremail = document.querySelector(".useremail");
let userblog = document.querySelector(".userblog");

// main function
userbutton.addEventListener("click", (event) => {
  event.preventDefault();
  getuserporfile();

  return (userinput.value = "");
});

async function getuserporfile() {
  console.log("working start");
  let user = userinput.value;
  let apiurl = `https://api.github.com/users/${user}`;
  let repourl = `https://api.github.com/users/${user}/repos`;
  let fetchdata = await fetch(apiurl);
  const respone = await fetchdata.json();

  let repodata = await fetch(repourl);
  const repo_response = await repodata.json();

  userDetail(respone);
  userRepo(repo_response);
  minorDetail(respone);
}

function userDetail(info) {
  let userInfo = info;

  userName.textContent = userInfo.name;
  userId.textContent = userInfo.login;

  if (!userInfo.bio) {
    userBio.textContent = "This profile has no bio";
  } else {
    userBio.textContent = userInfo.bio;
  }
  followernum.textContent = userInfo.followers;
  followingnum.textContent = userInfo.following;

  const optionsIn = { day: "numeric", month: "long", year: "numeric" }; //  converting date
  joinDate.textContent = new Date(userInfo.created_at).toLocaleDateString(
    "en-In",
    optionsIn,
  );
}

function userRepo(RepoInfo) {
  let repos = RepoInfo;
  let count = 0;
  repoList.innerHTML = "";
  repos.forEach((element) => {
    repobox = document.createElement("div");
    repobox.className = "box";

    repohead = document.createElement("div");
    repohead.className = "repohead";

    repofile = document.createElement("img");
    repofile.className = "filelogo";
    repofile.src = "assets/images/fileLogo.svg";

    repotitle = document.createElement("h2");
    repotitle.className = "repotitle";
    repotitle.textContent = element.name;

    reposdecription = document.createElement("div");
    reposdecription.className = "description";
    reposdecription.textContent = element.description;

    reposlanguage = document.createElement("div");
    reposlanguage.className = "language";
    reposlanguage.textContent = element.language;

    repohead.appendChild(repofile);
    repohead.appendChild(repotitle);
    repobox.appendChild(repohead);
    repobox.appendChild(reposdecription);
    repobox.appendChild(reposlanguage);

    repoList.appendChild(repobox);
    count++;
  });

  totalrepo.textContent = `Repositories :  ${count}`;
}

function minorDetail(minorinfo) {
  let userinfo = minorinfo;

  repolink.textContent = userinfo.url;
  userlocation.textContent = userinfo.location;

  if (!usertwitter) {
    usertwitter.textContent = "not available";
  } else {
    usertwitter.textContent = userinfo.twitter_username;
  }

  useremail.textContent = userinfo.email;

  if (!userblog) {
    userblog.textContent = "not available!";
  } else {
    userblog.textContent = userinfo.blog;
  }
}
