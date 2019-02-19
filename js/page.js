
//Contact Modal 



formSubmit = () => {
  var name, email, message, contactErrorName, contactErrorEmail, contactErrorMessage; 

  name = document.querySelector('#contact-name').value; 
  email = document.querySelector('#contact-email').value; 
  message = document.querySelector('#contact-message').value; 

  contactErrorName = document.querySelector('#contact-error-name'); 
  contactErrorEmail = document.querySelector('#contact-error-email'); 
  contactErrorMessage = document.querySelector('#contact-error-message'); 
  var genBool = true; 

  if(name == '') {
    contactErrorName.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorName.style.display = 'none';
    genBool = true; 
  }

  if(email == '') {
    contactErrorEmail.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorEmail.style.display = 'none';
    genBool = true; 
  }

  if(message == '') {
    contactErrorMessage.style.display = 'block';
    genBool = false; 
  } else {
    contactErrorMessage.style.display = 'none';
    genBool = true; 
  }

  if(genBool) {
    $.post('message-email.php', {
      name: name, 
      email: email, 
      message: message
  }, function(data) {
      if(data === 'Sent!') {
        $( '#contactModal' )
      }
    });
  }


}


