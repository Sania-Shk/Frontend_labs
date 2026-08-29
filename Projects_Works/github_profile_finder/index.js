let userinput = document.querySelector("#userprofile");
let userbutton = document.querySelector("#btn");

let userName = document.querySelector("#userName");
let userId = document.querySelector("#userId");
let userBio = document.querySelector("#userBio");
let followernum = document.querySelector(".followernum");
let followingnum = document.querySelector(".followingnum");

userbutton.addEventListener("click", getuserporfile);

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
  return console.log(repo_response);
}

function userDetail(info) {
  let userInfo = info;

  // userName.textContent = userInfo.name;
  userId.textContent = userInfo.login;
  userBio.textContent = userInfo.bio;
  followernum.textContent = userInfo.followers;
  followingnum.textContent = userInfo.following;
}
