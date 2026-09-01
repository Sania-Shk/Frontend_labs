let userinput = document.querySelector("#userprofile");
let userbutton = document.querySelector("#btn");

let userName = document.querySelector("#userName");
let userId = document.querySelector("#userId");
let userBio = document.querySelector("#userBio");

let followernum = document.querySelector(".followernum");
let followingnum = document.querySelector(".followingnum");

// let follower = document.querySelector("#follower");
// let following = document.querySelector("#following");

let joinDate = document.querySelector("#userjoined");

let repoList = document.querySelector(".repoList");
let totalrepo = document.querySelector("#totalRepo");
let repolink = document.querySelector(".repolink");

let profilePic = document.querySelector(".profilePic");
let loading_img = document.querySelector(".loading_img");

let errorMsg = document.querySelector(".errorMsg");

// 2 main container:
let container = document.querySelector(".container");
let PFcontainer = document.querySelector(".PFcontainer");

// main function
userbutton.addEventListener("click", (event) => {
  event.preventDefault();
  getuserporfile();
  return (userinput.value = "");
});

async function getuserporfile() {
  let user = userinput.value;
  let apiurl = `https://api.github.com/users/${user}`;
  let repourl = `https://api.github.com/users/${user}/repos`;

  let respone;
  let repo_response;

  try {
    let fetchdata = await fetch(apiurl);
    if (!fetchdata.ok) {
      throw new Error(`  User not found <br />
        Please check the username !!!`);
    }

    errorMsg.style.visibility = "hidden";

    PFcontainer.style.visibility = "visible";

    respone = await fetchdata.json();
    let repodata = await fetch(repourl);
    repo_response = await repodata.json();

    userDetail(respone);
    userRepo(repo_response);
  } catch (error) {
    console.error(error.message);
    errorMsg.innerHTML = error.message;
    errorMsg.style.visibility = "visible";
    PFcontainer.style.visibility = "hidden";
  }
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
  followernum.textContent = `${info.followers} follower`;
  followingnum.textContent = `${info.following} following`;

  const optionsIn = { day: "numeric", month: "long", year: "numeric" }; //  converting date
  joinDate.textContent = `Joined at: ${new Date(
    userInfo.created_at,
  ).toLocaleDateString("en-In", optionsIn)}`;

  repolink.href = info.html_url; // github repository page
  profilePic.src = info.avatar_url; // user github profile picture
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
