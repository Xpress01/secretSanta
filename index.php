<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>Secret Santa</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary newBTN" data-toggle="modal" data-target="#exampleModal">
  Number Of People
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h3>How Many Participants?</h3>
        <input type="number" class="num_of_ppl" placeholder="How many">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary selectBTN" data-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
    
<!-- Form Body -->
 
    <div class="container form-container">
        <!--
        <div class="row">
            <div class="col">
                <label>1. Name:</label>
                <input type="text" id="person1" class="name-input" placeholder="Name">
            </div>
            <div class="col">
                <label>Email:</label>
                <input type="text" id="email1" class="email-input" placeholder="E-Mail">
            </div>
            <div class="col">
                <label>Exclude:</label>
                <input type="text" id="exclude1" class="exclude-input" placeholder="Use Person's Number to Exclude">
            </div>
        </div>
        -->
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <button type="submit" class="submitBTN">Submit</button>
            </div>
        </div>
    </div>
    
    
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script src="app.js"></script>
</body>
</html>