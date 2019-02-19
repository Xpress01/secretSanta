
//Display Welcome Modal on startup
$(window).on('load', function () {
  $('#welcomeModal').modal('show');
});

//Navbar
var NavBar = document.querySelector('.navBar'); 
NavBar.style.top = "-50px";

window.onscroll = function() {NavBarScroll()};

function NavBarScroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    NavBar.style.top = "0px";
  } else {
    NavBar.style.top = "-50px";
  }
}

//Contact Form
var name, email, message, contactErrorName, contactErrorEmail, contactErrorMessage; 

name = document.querySelector('#contact-name'); 
email = document.querySelector('#contact-email'); 
message = document.querySelector('#contact-message'); 

contactErrorName = document.querySelector('#contact-error-name'); 
contactErrorEmail = document.querySelector('#contact-error-email'); 
contactErrorMessage = document.querySelector('#contact-error-message'); 


formSubmit = () => {
  let genBool = true; 

  if(name.value == '') {
    contactErrorName.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorName.style.display = 'none';
    genBool = true; 
  }

  if(email.value == '') {
    contactErrorEmail.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorEmail.style.display = 'none';
    genBool = true; 
  }

  if(message.value == '') {
    contactErrorMessage.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorMessage.style.display = 'none';
    genBool = true; 
  }

}