let searchText=document.getElementById("search")
let searchButton=document.getElementById("search-button")
let container=document.getElementById("whole-container")


let form=document.getElementById("form")
form.addEventListener("submit",function(e){
   e.preventDefault()
    username=searchText.value
    container.innerHTML=""
    // function UrlExists(url) {
    //     var http = new XMLHttpRequest();
    //     http.open('HEAD', url, false);
    //     http.send();
    //     if (http.status != 404)
    //         return true;
    //     else
    //         return false;
    // }

    let token="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"

fetch(`https://api.github.com/users/${username}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>response.json())
.then((data)=>{


let imgNav=document.getElementById("image")
imgNav.setAttribute("src",data.avatar_url)
let containerGrid=document.createElement("div")
containerGrid.className="row"
containerGrid.id="container-grid"
containerGrid.innerHTML=""
let loginUser=document.getElementById("username")
bio=""
if (data.bio !=null){
 bio=data.bio
}
if(data.login==undefined){
  containerGrid.innerHTML=`<div><h3>Profile not found.</h3>
</div>`
container.appendChild(containerGrid)
}else{

containerGrid.innerHTML+=`            <div class="col-md-3 col-sm-12 d-flex flex-column justify-content-start" style="height: 400px;">
<img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
<h1 class="username" id="username">${data.name}</h1>
<h4 class="username" id="username" style="color:#adb1b5">${data.login}</h4>
<h3 class="repos" id="repos">repositories: ${data.public_repos}</h3>
<h3 class="repos" id="repos">Followers: ${data.followers}</h3>
<p>${bio}<p>
</div>`
container.appendChild(containerGrid)
// loginUser.innerHTML=`${data.login}`
}
}).catch( error => console.error(error));


fetch(`https://api.github.com/users/${username}/repos`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>response.json())
.then((repos)=>{
    let containerGrid=document.getElementById("container-grid")
    let reposContainer=document.createElement("div")
    reposContainer.className="col-md-9 col-sm-12"
    containerGrid.appendChild(reposContainer)
    let reposRows=document.createElement("div")

    reposRows.className="row mt-5 gap-5 ms-5 m-auto"
    reposRows.innerHTML="<h2>Repositories:</h2>"
    reposContainer.appendChild(reposRows)

for(let repo of repos){
    console.log(repo.fork)
    color="green"
    if (!repo.fork){
      color="red"
    }
    console.log(repo.created_at.slice(0, 10))
    createdDate=repo.created_at.slice(0, 10);
    createdTime=repo.created_at.slice(11,repo.created_at.length-1);
    console.log(repo.created_at.slice(11,repo.created_at.length-1))
    if (repo.language==null){
        reposRows.innerHTML+=`<div class="col-md-5 col-sm-12 rounded d-flex justify-content-between flex-column" style="word-wrap: break-word;border:1px solid #282d34;height: 150px;">
        <a href=""${repo.clone_url}"" style="text-decoration: none; font-size: large;"><h4 class="repo__name" id="repo-name">${repo.full_name}</h4></a>
        <h5>fork: <span style="color: ${color};">${repo.fork}</span></h5>
        <h6 style="color: rgb(111, 111, 111);">${createdTime} ${createdDate}</h6>
        </div>`
    }else{
    reposRows.innerHTML+=`<div class="col-md-5 col-sm-12 rounded d-flex justify-content-between flex-column" style="word-wrap: break-word;border:1px solid #282d34;height: 150px;">
    <a href="${repo.clone_url}" style="text-decoration: none; font-size: large;"><h4 class="repo__name" id="repo-name">${repo.name}</h4></a>
    <div class="language d-flex gap-1">
        <div class="language-icon mt-1"></div>
        <div class="language" style="font-size: medium;">${repo.language}</div>
    </div>
    <h5>fork: <span style="color: ${color};">${repo.fork}</span></h5>
    <h6 style="color: rgb(111, 111, 111);">${createdTime} ${createdDate}</h6>
    </div>`}

}







}).catch( error => console.error(error));



});

let checkBox=document.getElementById("checkbox");
checkBox.addEventListener("click", function(){
  if (checkBox.checked==true){
    document.body.style.background="white"
    document.body.style.color="black"
    
  }else{
    document.body.style.background="#0d1117"
    document.body.style.color="white"
  }
  
})


{/* <div class="col-md-6 col-sm-6 mb-4">
<a href="https://github.com/logos" style="text-decoration: none; font-size: large;"><h4 class="repo__name" id="repo-name">dwdddddddddddddd</h4></a>
<div class="language d-flex gap-1">
    <div class="language-icon mt-1"></div>
    <div class="language" style="font-size: medium;">HTML</div>
</div>
</div> */}