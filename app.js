let theform = document.querySelector("#theform");
let buttonsubmit = document.querySelector("#buttonsubmit");
let pass = document.querySelector("#password_1");
let confirm_pass = document.querySelector("#confirmpassword");
buttonsubmit.addEventListener("click", submitForm);

function submitForm() {
    theform.submit();
    console.log("clicked")
}



confirm_pass.addEventListener("oninput", validate);

function validate() {
if(pass.value !== confirm_pass.value) {
confirm_pass.setCustomValidity("The Passwords do not match");
console.log("error not a match")
} else {
    confirm_pass.setCustomValidity("");
    console.log("its a match")
}

}
// function test() {
// console.log("works")
// }
































