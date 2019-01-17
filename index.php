<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" /> 
<title>Fast & Free Secret Santa Generator Gift Exchange | EZgiftEX</title>
<meta name="description" content="Secret Santa Generator, no sign up or registration required! Simply fill out participants names and email and receive your exchange partner instantly!">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<link rel="shortcut icon" type="image/png" href="img/favicon.png">
<link rel="stylesheet" href="/css/style.css">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-3967759120531101",
    enable_page_level_ads: true
  });
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-17991088-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-17991088-5');
</script>

</head>
<body>



<!-- Modals -->

<!-- FORM MODAL -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal__container">
      <div class="modal-header modal__title-container">
        <h5 class="modal-title modal__title">New Exchange</h5>
      </div>
      <div class="modal-body modal__body modal__body--form">
        <h4 class="modal__title--sub">Title</h4>
        <input type="text" class="title" id="title" placeholder="Title" autocomplete="off">
        <div class="form-error-title form__error">*Please Enter Valid Title</div>
        <h4 class="modal__title--sub u-margin__top--sm">How Many Participants?</h4>
        <input type="number" class="num_of_ppl" placeholder="How many">
        <div class="form-error-people form__error">*Please Choose 3 or More Participants</div>
      </div>
      <div class="modal-footer modal__title-container">
        <button type="button" class="btn selectBTN new__btn">Submit</button>
      </div>
    </div>
  </div>
</div>

<!-- SUBMIT MODAL -->
<div class="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal__container">
      <div class="modal-header modal__title-container">
        <h5 class="modal-title modal__title">Thank You</h5>
      </div>
      <div class="modal-body modal__body modal__body--submit">
        <div class="modal-submit--loading" id="modal-submit-loading">
          <div class="loader"></div>
          <div class="modal-submit-text u-margin__top--sm">Please Wait While Your List Is Being Generated</div>
        </div>
        <div class="modal-submit--sent" id="modal-submit-sent">
          <div class="modal-submit-text">
            <p>Emails Sent!</p> 
            <p>Thank you for using EZgiftEX!</p>
            </div>
        </div>
        <div class="modal-submit--error-1" id="modal-submit-error-check">
          <div class="modal-submit-text">
            <p><span class="font-color--error">Error!</span><br></p>
            <p>No matches can be made</p>
            <p>Please Check Your Inputs and Exclusions</p>
          </div>
        </div>
        <div class="modal-submit--error-2" id="modal-submit-error-mail">
          <div class="modal-submit-text">
            <p><span class="font-color--error">Error!</span><br></p>
            <p>Error sending the email, please contact the administrator</p>
            </div>
        </div>
      </div>
      <div class="modal-footer modal__title-container modal-footer--submit">
        <button type="button" class="btn new__btn" data-toggle="modal" data-target="#submitModal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- WELCOME MODAL -->
<div class="modal fade" id="welcomeModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal__container">
      <div class="modal-header modal__title-container">
        <h5 class="modal-title modal__title">Welcome to EZGIFTEX</h5>
      </div>
      <div class="modal-body modal__body modal__body--welcome">
        <p>EZgiftEX effortlessly helps you randomly match gift exchange participants for any size Secret Santa party!</p>
        <p>EZgiftEX was made to fill a personal need, and has been made public for others to use and enjoy the holidays!</p>
        Happy Easy Gift Exchanging!</p> 
        <p>
          <h4>How to Use:</h4>
          <ul>
            <li>Enter the Event Name</li>
            <li>Enter the number of Participants</li> 
            <li>Enter the name of Participant</li>
            <li>Enter the emails of Participants</li>
            <li>Click Submit, and all Participants will receive a random gift exchange partner!</li>
          </ul>
        </p>
        <p>Note: To avoid gift exchanges amongst couples for example, the exclude column allows you to make sure the generator doesn’t 
          match the participant of the line number specified by you.</p>  
        <p>Disclaimer: All data is never shared as we highly value your privacy.</p> 
      </div>
      <div class="modal-footer modal__title-container">
        <button type="button" class="btn startBTN new__btn">Get Started</button>
      </div>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="header">
  <div class="header__logo-box">
    <img src="/img/logo.png" alt="logo" id="logo" class="header__logo">
  </div>
  <div class="header__text-box">
    <button type="button" class="btn new__btn" id="new-btn" data-toggle="modal" data-target="#formModal">New Exchange</button>
    <div id="registration-text" class="header__text">No Registration or Sign Up Required</div>
  </div>
</header>
    
<!-- Form Body -->
<div class="form__box" id="form-box">
  <table class="table table-striped form__table">
    <thead>
      <tr>
        <th class="form__heading form__heading--number">#</th>
        <th class="form__heading">Name</th>
        <th class="form__heading">Email Address</th>
        <th class="form__heading">Exclude</th>
      </tr>
    </thead>
    <tbody class="form-container" id="form-container">
    </tbody>
  </table>
  <hr>
  <div class="form-button-box">
    <button type="submit" class="btn btn-primary submitBTN new__btn" id="submit-btn">Submit</button>
  </div> 
</div>

<footer class="footer">
  <div class="footer__container">
    <div class="footer__logo-box">
      <img src="/img/logo.png" alt="logo" id="logo" class="footer__logo">
    </div>
    <div class="footer__links">
      <a href="#" class="footer__link-item">Contact</a>
      <a href="#" class="footer__link-item">Terms &amp; Conditions</a>
      <a href="#" class="footer__link-item">Privacy Policy</a>
    </div>
  </div> 
 </footer> 
    
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script src="/js/app.js"></script>
</body>
</html>