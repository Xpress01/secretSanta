//SELECTOR CONTROLLER
var selectorController = (function () {

    function person(name, email, exclude, id) {
        this.name = name;
        this.email = email;
        this.exclude = exclude;
        this.id = id;
    }

    function completedPerson(name, email, chosenName) {
        this.name = name;
        this.email = email;
        this.chosenName = chosenName;
    }



    var data = {
        title: "",
        peopleArr: [],
        selectArr: [],
        completeArr: []
    }

    return {

        addPerson: function (nam, email, excl, id) {

            var pers;

            pers = new person(nam, email, excl, id);

            data.peopleArr.push(pers);
            data.selectArr.push(pers);

        },

        addTitle: function(title) {
            data.title = title;
        },

        clearData: function () {
            data.peopleArr = [];
            data.selectArr = [];
            data.completeArr = [];
        },

        calcSecretSanta: function () {


            var genBool, c;

            //C = counter (counter for how many times matches are tried) genBool = a switch to continue or stop
            c = 0;
            genBool = true;

            function genNumber(y) {
                //y is the maximum range *max number not included
                return Math.floor((Math.random() * y));
            }

            function genSanta() {

                for (i = 0; i < data.peopleArr.length; i++) {
                    var person, randNum, selectedPerson, n;

                    person = data.peopleArr[i];
                    randNum = genNumber(data.selectArr.length);
                    selectedPerson = data.selectArr[randNum];
                    //Add counter to prevent infinite loop 
                    n = 0;

                    console.log(randNum);

                    //Make sure person's exclude is not selected and self. 
                    while (selectedPerson.id == person.id || person.exclude === selectedPerson.id && n <= 5) {

                        n++;
                        randNum = genNumber(data.selectArr.length);
                        selectedPerson = data.selectArr[randNum];

                        if (selectedPerson.id !== person.id && person.exclude !== selectedPerson.id) {
                            console.log("new number " + randNum);
                            break;

                        } else if (n > 5) {
                            console.log('While loop end');
                            genBool = false;
                            break;
                        }

                    }

                    if (genBool) {
                        //Add selected person to person object
                        person.chosen = selectedPerson;

                        //Remove selected person from array
                        data.selectArr.splice(randNum, 1);

                    } else {
                        console.log("No more matches");
                        break;
                    }

                }
            }

            function duplicateArr() {

                data.selectArr = data.peopleArr.slice(0);

            }

            //Start choosing names
            genSanta();

            return new Promise(function(resolve, reject) {
                while (!genBool && c <= 10) {
                    //Increase var c to prevent infinite loop
                    c++;

                    //Reset selector/duplicate array
                    duplicateArr();

                    //Reset genBool
                    genBool = true;

                    //Choose secret Santa
                    genSanta();

                    //Break when everyone is selected or start again. 
                    if (data.selectArr.length === 0) {
                        break;
                    } else if (c > 10) {
                        reject("Check");
                        break;
                    }
                }
            });
        },

        createSendArr: function () {

            for (i = 0; i < data.peopleArr.length; i++) {
                var person, result;

                person = data.peopleArr[i];
                result = new completedPerson(person.name, person.email, person.chosen.name);

                data.completeArr.push(result);

            }


        },

        sendEmail: function() {
            var completeArr, title;

            completeArr = JSON.stringify(data.completeArr);
            title = data.title;

            return new Promise(function(resolve, reject) {
                $.post('email.php', {
                    people_arr: completeArr,
                    title: title
                }, function(data) {
                    resolve(data);
                });
            });
            
            
        },

        test: function () {

        }
    }


})();


//UI CONTROLLER
var UIController = (function () {
    var DOMelements = {
        //BUTTONS
        newBtn: document.querySelector('#new-btn'),
        selectBtn: document.querySelector('.selectBTN'),
        startBtn: document.querySelector('.startBTN'),
        submitBtn: document.querySelector('#submit-btn'),

        //ERRORS
        nameErr: document.querySelector('.form-error-name'),
        emailErr: document.querySelector('.form-error-email'),
        titleErr: document.querySelector('.form-error-title'),
        peopleErr: document.querySelector('.form-error-people'),

        //INPUTS
        selectInputValue: document.querySelector('.num_of_ppl'),
        title: document.querySelector('#title'),
        inputName: '#person-',
        inputEmail: '#email-',
        inputExclude: '#exclude-',

        //MODAL
        modalSubmitLoading: document.querySelector('#modal-submit-loading'),
        modalSubmitSent: document.querySelector('#modal-submit-sent'),
        modalSubmitErrorCheck: document.querySelector('#modal-submit-error-check'),
        modalSubmitErrorMail: document.querySelector('#modal-submit-error-mail'),

        //FORM 
        formBox: document.querySelector('#form-box'),
        formContainer: document.querySelector('#form-container'),

        footer: document.querySelector('.footer')
        
    }

    return {

        //Return Dom Elements into global app 
        getDOMelements: function () {
            return DOMelements;
        },

        //Generate fields 
        genFields: function (num) {

            DOMelements.formBox.style.display = 'inherit';

            var option;
            option = '<option value="">-</option>';

            for (i = 0; i < num; i++) {
                var numSel = i + 1;

                option += '<option value="' + i + '">' + numSel + '</option>';
            }

            for (i = 0; i < num; i++) {
                var html, newHTML;
                
                html = '<tr><th scope="row"><div class="form__number"><span class="form__person-heading">Person </span>%num%.</div></th><td><span><i class="fas fa-user input--logo"></i></span> <input type="text" id="person-%id%" class="name-input input input--name" placeholder="Name" autocomplete="off" required><div class="form-error-name form__error">*Please Enter Valid Name</div></td><td><span><i class="fas fa-envelope input--logo"></i></span><input type="text" id="email-%id%" class="email-input input input--email" placeholder="E-Mail" autocomplete="off" required><div class="form-error-email form__error">*Please Enter Valid E-Mail</div></td><td><div class="input--exclude-text">Exclude?</div><select id="exclude-%id%" class="exclude-input input--exclude">' + option + '</select></td></tr>';
                
                newHTML = html.replace('%num%', i + 1);
                newHTML = newHTML.replace(/%id%/g, i);

                DOMelements.formContainer.insertAdjacentHTML('beforeend', newHTML);

            }
        },

        //Clear input fields
        clearFields: function () {

            DOMelements.title.value = "";

            DOMelements.selectInputValue.value = "";

            DOMelements.formContainer.textContent = "";

            DOMelements.formBox.style.display = "none";

        },

        //Submit Modal Displays
        hideModalLoading: function() {
            DOMelements.modalSubmitLoading.style.display = "none";
        },

        hideModalSent: function() {
            DOMelements.modalSubmitSent.style.display = "none";
        },

        hideModalErrorCheck: function() {
            DOMelements.modalSubmitErrorCheck.style.display = "none";
        },

        hideModalErrorMail: function() {
            DOMelements.modalSubmitErrorMail.style.display = "none";
        },

        showModalLoading: function() {
            DOMelements.modalSubmitLoading.style.display = "inherit";
        },

        showModalSent: function() {
            DOMelements.modalSubmitSent.style.display = "inherit";
        }, 

        showModalErrorCheck: function() {
            DOMelements.modalSubmitErrorCheck.style.display = "inherit";
        }, 

        showModalErrorMail: function() {
            DOMelements.modalSubmitErrorMail.style.display = "inherit";
        }, 

        hideFooter: function() {
            DOMelements.footer.style.display = "none"; 
        },

        showFooter: function() {
            DOMelements.footer.style.display = "table-row";
        }

    }

})();


//GLOBAL APP CONTOLLER
var controller = (function (selCtrl, UICtrl) {

    var setupEventListeners = function () {

        //Setup Event Listeners
        DOM = UICtrl.getDOMelements();
        DOM.selectBtn.addEventListener('click', generateFields);
        DOM.newBtn.addEventListener('click', clearFields);
        DOM.submitBtn.addEventListener('click', submit);
        DOM.startBtn.addEventListener('click', getStarted);

    };

    var generateFields = function () {

        var numOfPeople, title, fieldCheck;
        
        //Reset form validation check
        fieldCheck = true; 

        //Get Title
        title = DOM.title.value;
        

        if (title === "") {

            DOM.titleErr.style.display = 'block';
            fieldCheck = false; 

        } else {
            DOM.titleErr.style.display = 'none';
            fieldCheck = true; 
        }

        //Add Title
        selCtrl.addTitle(title);

        //Get Number of people
        numOfPeople = DOM.selectInputValue.value;

        if (numOfPeople < 3) {

            document.querySelector('.form-error-people').style.display = 'block';
            fieldCheck = false; 
        } else {

            //Clear Error
            document.querySelector('.form-error-people').style.display = 'none';
            fieldCheck = true; 
            
        }
        
        if (fieldCheck) {
            
            //Generate Fields
            UICtrl.genFields(numOfPeople);
            
           //Close Modal
            $( '#formModal' ).modal( 'hide' ); 

            //Show Footer 
            UICtrl.showFooter(); 
            
        }

    };

    var clearFields = function () {

        //Clear UI Fields
        UICtrl.clearFields();

        //Hide Footer 
        UICtrl.hideFooter();

        //Clear Data
        selCtrl.clearData();

        //Reset Submit Modal 
        resetSubmitModal();
    }

    var getStarted = function() {
        //Hide get started modal 
        $( '#welcomeModal' ).modal( 'hide' ); 

        //Show form modal
        $( '#formModal' ).modal( 'show' ); 
    }
    
    var submitModal = function(el) {
        switch(el) {
            case 'Check':
                UICtrl.hideModalLoading(); 
                UICtrl.showModalErrorCheck(); 
                break; 
            case 'Error':
                UICtrl.hideModalLoading(); 
                UICtrl.showModalErrorMail(); 
                break; 
            case 'Sent':
                UICtrl.hideModalLoading(); 
                UICtrl.showModalSent(); 
                break;  
        }
    }

    var resetSubmitModal = function() {
        $( '#submitModal' ).modal( 'hide' ); 

        UICtrl.showModalLoading(); 
        UICtrl.hideModalSent();
        UICtrl.hideModalErrorCheck();
        UICtrl.hideModalErrorMail();
    }

    var submit = function () {

        var numOfPeople, submitBool;

        //Reset Bool 
        submitBool = true;

        //Clear data before beginning
        selCtrl.clearData();

        //Get number of participants
        numOfPeople = parseInt(DOM.selectInputValue.value);

        //Get user input and add to arr
        for (i = 0; i < numOfPeople; i++) {
            var id, name, email, exclude, curName, curEmail, curExclude;

            name = DOM.inputName + i;
            email = DOM.inputEmail + i;
            exclude = DOM.inputExclude + i;
            id = i;

            curName = document.querySelector(name).value;
            //Name Validator 
            if (curName === "") {
            
                document.querySelector(name).nextSibling.style.display = 'block';
                submitBool = false;
                break;
            } else {
            
                document.querySelector(name).nextSibling.style.display = 'none';
                submitBool = true;
            }

            curEmail = document.querySelector(email).value;
            //Email Validator 
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            if (!validateEmail(curEmail)) {
                document.querySelector(email).nextSibling.style.display = 'block';
                submitBool = false;
                break;
            } else {
                document.querySelector(email).nextSibling.style.display = 'none';
                submitBool = true;
            }

            curExclude = parseInt(document.querySelector(exclude).value);


            //Add to Arr
            selCtrl.addPerson(curName, curEmail, curExclude, id);

        }

        if (submitBool) {
            //Show submit modal
            resetSubmitModal(); 
            $( '#submitModal' ).modal( 'show' );

            //Assign secret santa
            selCtrl.calcSecretSanta().catch(function(reject){submitModal(reject)});

            //Create a simple array to transport to PHP 
            selCtrl.createSendArr();

            //Send Email 
            selCtrl.sendEmail().then(function(resolve){submitModal(resolve)});

            
        }

    }

    return {

        init: function () {
            //Setup Event Listeners
            setupEventListeners();

            //Diplay Modal 
            $(window).on('load', function () {
                $('#welcomeModal').modal('show');
            });

            console.log('App Started');
        }


    }

})(selectorController, UIController);

controller.init();
