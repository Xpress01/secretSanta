<?php 


echo '
<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal__container">
      <div class="modal-header modal__title-container">
        <h5 class="modal-title modal__title">Contact Us</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body modal__body modal__body--form">
        <div class="modal-contact__input-container">
          <label for="name">Name:</label>
          <input type="text" name="name" id="contact-name">
          <div class="error" id="contact-error-name">*Please enter your name</div>
        </div>
        <div class="modal-contact__input-container">
          <label for="email">Email:</label>
          <input type="email" name="email" id="contact-email">
          <div class="error" id="contact-error-email">*Please enter your email</div>
        </div>
        <div class="modal-contact__input-container">
          <label for="message">Message:</label>
          <textarea name="message" id="contact-message"></textarea>
          <div class="error" id="contact-error-message">*Please enter a message</div>
        </div>
      </div>
      <div class="modal-footer modal__title-container">
        <button onclick=formSubmit() class="btn new__btn">Submit</button>
      </div>
    </div>
  </div>
</div>
'

?>