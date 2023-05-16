let searchText = document.getElementById("search-1");
let searchText2 = document.getElementById("search-2");
let searchButton = document.getElementById("search-button-1");
let searchButton2 = document.getElementById("search-button-2");
let container = document.getElementById("whole-container");



console.log(searchText);

function fetchUserData(username, profileContainerId,reposID) {
    let token = "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";

    fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then((data) => {
        let profileContainer = document.getElementById(profileContainerId);
        if (data.login==undefined){
            profileContainer.innerHTML = `<h3 style="color: gray;">No Profile Found.</h3>`;
        }else{
        profileContainer.innerHTML = `
            <div><img class="profile1__img" src="${data.avatar_url}" alt="img" style="width: 200px;"></div>
            <div class="username"><h3>${data.login}</h3></div>
            <div class="number__repos" id="repo-${reposID}" data-value="${data.public_repos}"><h5>Number of Repos: ${data.public_repos}</h5></div>`;
        }
            
    });
}

searchText.addEventListener("input", function() {
    let username = searchText.value;
    
    
    fetchUserData(username, "profile-container-1",1);
});

searchText2.addEventListener("input", function() {
    let username = searchText2.value;
    fetchUserData(username, "profile-container-2",2);;

});


let compare=document.getElementById("compare")
compare.addEventListener("click",function(){
let firstProfileValue =parseInt(document.getElementById("repo-1").getAttribute("data-value"),10);
let secondProfileValue=parseInt(document.getElementById("repo-2").getAttribute("data-value"),10);
console.log(document.getElementById("repo-1").getAttribute("data-key"));
console.log(secondProfileValue);
let profileContainer1=document.getElementById("profile-container-1")
let profileContainer2=document.getElementById("profile-container-2")
let winner=document.createElement("div")
winner.innerHTML=`<div><h3 class="result">WINNER</h3></div>`
let draw=document.createElement("div")
draw.innerHTML=`<div><h3 class="result" style="color:gray;">DRAW</h3></div>`

let loser=document.createElement("div")
loser.innerHTML=`<div><h3 class="result" style="color:red;">LOSER</h3></div>`


if (firstProfileValue>secondProfileValue){
    console.log(profileContainer1.children.length)
    console.log(profileContainer2.children.length)
    let draw__container=document.getElementById("draw-result")
    if(draw__container.children.length==3){
        draw__container.removeChild(draw__container.lastChild)
    }
    if (profileContainer1.children.length==4){
    profileContainer1.removeChild(profileContainer1.lastChild)
}
if (profileContainer2.children.length==4){
    profileContainer2.removeChild(profileContainer2.lastChild)
}
profileContainer1.appendChild(winner)
profileContainer2.appendChild(loser)



}else if(firstProfileValue<secondProfileValue){
    let draw__container=document.getElementById("draw-result")
    if(draw__container.children.length==3){
        draw__container.removeChild(draw__container.lastChild)
    }
    if (profileContainer1.children.length==4){
    profileContainer1.removeChild(profileContainer1.lastChild)
}
if (profileContainer2.children.length==4){
    profileContainer2.removeChild(profileContainer2.lastChild)
}
profileContainer1.appendChild(loser)
profileContainer2.appendChild(winner)



}else if(firstProfileValue==secondProfileValue){
    let draw__container=document.getElementById("draw-result")
    console.log(draw__container.children.length)
    if(draw__container.children.length==2){
        draw__container.appendChild(draw)
    }
    if (profileContainer1.children.length==4){
        profileContainer1.removeChild(profileContainer1.lastChild)
    }
    if (profileContainer2.children.length==4){
        profileContainer2.removeChild(profileContainer2.lastChild)
    }
    
}


}

)

let checkBox=document.getElementById("checkbox");
checkBox.addEventListener("click", function(){
    let firstProfile=document.getElementById("profile-container-1")
    let secondProfile=document.getElementById("profile-container-2")
  if (checkBox.checked==true){
    firstProfile.style.background="white"
    secondProfile.style.background="white"
    document.body.style.background="white"
    document.body.style.color="black"
    
  }else{
    firstProfile.style.background="#161b22"
    secondProfile.style.background="#161b22"
    document.body.style.background="#0d1117"
    document.body.style.color="white"
  }
  
})
