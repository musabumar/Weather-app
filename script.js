let details = document.querySelector('.details')

let imgContainer = document.querySelector(".img-container")

let getUserBtn = document.getElementById("get-user-btn")

let url = "https://random-data-api.com/api/v2/users?response_type=json"


let getUser = () =>{
    fetch(url)
 .then(response => response.json())
 .then((data) =>{
    // console.log(data.first_name);
    // console.log(data.last_name);
    // console.log(data.gender);
    // console.log(data.employment.title);
    // console.log(data.password);
    // console.log(data.address.city);
    // console.log(data.avatar);
imgContainer.innerHTML = ` <img src = ${data.avatar} >`
    details.innerHTML = `<h2>${data.first_name} ${data.last_name}  </h2>
    <h3>${data.employment.title} </h3>
    <h4> <i class="fa fa-map-marker" aria-hidden="true"></i> 
    ${data.address.city} <h4>`;

    let randomColor = "#" + ((Math.random() * 0xffffff ) << 0).toString(16).padStart(6 , "0")

    document.documentElement.style.setProperty("--theme-color" , randomColor)
 })

}

getUserBtn.addEventListener("click" , getUser)
window.addEventListener("load" , getUser)