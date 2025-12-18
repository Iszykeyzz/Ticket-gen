const btn  = document.querySelector(".submit-btn");
const myForm = document.getElementById("my-form");
const profileName = document.getElementById("profile-name");
const profileUsername = document.getElementById("profile-username");
const formcontainer = document.querySelector(".form-container");
const container = document.querySelector(".container2");
const nameAvatar = document.getElementById("name-avatar");
const ticketEmail = document.getElementById("ticket-email");
const uploadInput = document.getElementById("upload-input");
const avatarImg = document.querySelector(".avatar-img");

uploadInput.addEventListener("change", function(){
    const file = uploadInput.files[0];
    if(file){
        const reader = new FileReader();    
        reader.onload = function(){
            const img = document.createElement("img");
            img.src = reader.result;
            img.classList.add("avatar-img");
            img.style.width = "120px";
            img.style.height = "120px";
            img.style.objectFit = "cover";
            const uploadBox = document.querySelector(".upload-box");
            uploadBox.innerHTML = "";
            uploadBox.appendChild(img);
        }   
        reader.readAsDataURL(file);
    }
});




myForm.addEventListener("submit", function(event){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    let errorMessages = "";

    if(name === "" || email === "" || username === ""){
        errorMessages += "All fields are required.\n";
    }
    if(errorMessages !== ""){
        alert(errorMessages);
        event.preventDefault();
    } else {
        profileName.textContent = name;
        profileUsername.textContent = "@" + username;
        nameAvatar.textContent = name;
        ticketEmail.textContent = email;
        formcontainer.style.display = "none";
        container.style.display = "block";
        uploadInput.src = uploadInput.files[0] ? URL.createObjectURL(uploadInput.files[0]) : "";
        



        
    }

    event.preventDefault();

   

})