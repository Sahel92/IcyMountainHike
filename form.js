const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const createButton = document.querySelector('.create-account');
const form = document.querySelector('form');

createButton.addEventListener('click',function(){
    if(matchingPassword()){

        // reset the form 
        form.reset();

        // confirmation to the user

        alert("Account created successfully, you are signed up for the Ice King Icy Hike!")
    }
});


function matchingPassword(){
if(password.value != confirmPassword.value){
     alert("Please make sure that passwords match!");
     return false;
}
return true;
}