<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>ezGIFTex</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary newBTN" data-toggle="modal" data-target="#exampleModal">
  New List
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h3>Title</h3>
        <input type="text" class="title" placeholder="Title">
        <div class="form-error-title">*Please Enter Valid Title</div>
        <h3>How Many Participants?</h3>
        <input type="number" class="num_of_ppl" placeholder="How many">
        <div class="form-error-people">*Please Choose 3 or More Participants</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary selectBTN">Submit</button>
      </div>
    </div>
  </div>
</div>
    
<!-- Form Body -->
 
<div class="container">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Exclude</th>
        </tr>
      </thead>
      <tbody class="form-container">
      </tbody>
    </table>
</div>
<div class="col">
    <button type="submit" class="btn btn-primary submitBTN">Submit</button>
</div>

    
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script src="app.js"></script>
</body>
</html>