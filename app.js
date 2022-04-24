let theform = document.querySelector("#theform");
let buttonsubmit = document.querySelector("#buttonsubmit");
let pass = document.querySelector("#password_1");
let confirm_pass = document.querySelector("#confirmpassword");
let right = document.querySelector("#rightside");
buttonsubmit.addEventListener("click", submitForm);

function submitForm() {
    if (validate()) {
        theform.submit();
        console.log("clicked");
    }
       
    
   

    console.log("error")
}

let passError = document.createElement("p");
passError.textContent = "Passwords Do Not Match";
passError.style.color = "red";
passError.style.position = "absolute";
passError.style.fontSize = "14px";
passError.style.top = "640px";
passError.style.left = "1035px";
confirm_pass.addEventListener("keyup", validate);

function validate() {
if(pass.value !== confirm_pass.value) {
    right.appendChild(passError);
console.log("error not a match");
    return false;
} else if (pass.value === "" || confirm_pass.value === ""){
return false
} else {

        passError.remove();
        console.log("its a match");
        return true
}

}

































