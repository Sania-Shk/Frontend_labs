let userinput = document.querySelector("#userprofile");
let userbutton = document.querySelector("#btn");

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

  return console.log(respone, repo_response);
}
