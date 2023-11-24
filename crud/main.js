let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
var fup = document.getElementById('filename');
let fileName =fup.files

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("button clicked");
    formValidation();
});

let formValidation = () => {

    if (input.value === "") {
        msg.innerHTML = "Post cannot be Blank";
        console.log("failure");
        return false
    }
  
      console.log({fileName},"this is the file")
      console.log({fup})
    if (fup.value===""){
        msg.innerHTML = "image must be jpg,png or jpeg";
        return true
    }
    else {
        console.log("Successs");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML +=
    `
    <div>
        <p>${data.text}</p>
        <span class="options"> 
            <i onClick="editPost(this)"class="fa-solid fa-pen-to-square"></i>
            <i onClick="deletePost(this)"class="fa-light fa-trash fa-beat"></i>
        </span>
    </div>
    `;
    input.value = "";
};



let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}


let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}