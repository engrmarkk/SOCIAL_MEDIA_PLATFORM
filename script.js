let navBar = document.querySelector(".nav-bar");
let sideBar = document.querySelector(".side-bar");
let sideBarLink = document.querySelectorAll(".this-link");
let sideBarIcon = document.querySelectorAll(".this-icon");
let hamburgerMenu = document.querySelector(".hamburger");
let menuOfLinks = document.querySelector(".mediaQ");
let openMenu = document.querySelector(".open");
let closeMenu = document.querySelector(".close");
let postInHtml = document.querySelectorAll(".post1");
let fetchedPost = document.querySelector(".post-section1");
let inputName = document.querySelector("#name");
let inputPost = document.querySelector("#post");
let inputBtn = document.querySelector("#post-btn");
let likeBtn = document.querySelectorAll("div.reactions .this-icon2");
let prependText = document.querySelector("#prependd");
let image = document.querySelector(".output");



inputBtn.addEventListener("click", ()=>{

    fetchedPost.insertAdjacentHTML("afterbegin", `
    <div class="display-post">

            <div class="display-head">
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="" class="output" />
                <p class="name-display">${inputName.value}</p>
            </div>
            <p class="post1">
                ${inputPost.value}
            </p>

            <span class="likes-num"></span>
            <div class="reactions">
                <i class="fa-solid fa-thumbs-up this-icon2"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-share"></i>
            </div>

            <div class="comm">
                <img src=https://i.pinimg.com/736x/40/aa/9b/40aa9bf04b9c64f594ea30aa7c837eca.jpg alt="" id="comm-image">
                <input type="text" placeholder="Write your comment" class="comment-section">
            </div>
        </div>
    `);


    inputName.value ="";
    inputPost.value = ""

})





hamburgerMenu.addEventListener("click", () => {
  menuOfLinks.classList.toggle("active");

  setTimeout(() => {
    closeMenu.classList.toggle("active");
    openMenu.classList.toggle("active");
  }, 300);

  sideBar.classList.toggle("active");
});


const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchPost() {
  const response = await fetch(url);
  const data = await response.json();

  if(!response.ok){
    throw new Error("ERROR")
  }

  const html = data.slice(0,10)
    .map((user) => {

        
      return `
    <div class="display-post">

            <div class="display-head">
                <img src=https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-HD-Image.png alt="" />
                <p class="name-display">Esther Amanda</p>
            </div>
            <p class="post1">
                ${user.body}
            </p>

            <span class="likes-num">2 likes</span>
            <div class="reactions">
                <i class="fa-solid fa-thumbs-up this-icon2"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-share"></i>
            </div>

            <div class="comm">
                <img src=https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-HD-Image.png alt="" id="comm-image">
                <input type="text" placeholder="Write your comment" class="comment-section">
            </div>
        </div>

    `;
    })
    .join("");

  fetchedPost.insertAdjacentHTML("afterbegin", html);

}

fetchPost()


.catch(() => {
  fetchedPost.insertAdjacentHTML(
    "afterbegin",
    `
    <div style="text-align: center; 
    text-transform: uppercase; 
    color:red; 
    font-size:1.5rem; 
    font-weight: bold">Couldn't Fetch Post</div>
    `
  );
});




// The code under this comment is yet to work..you can fix it sha
for(i=0; i<likeBtn.length; i++){
  for(i=0; i<countLike.length; i++){
    likeBtn[i].addEventListener("click",()=>{
      countLike[i]  + 1
    })
  }
}