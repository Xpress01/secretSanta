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

        addTitle: function (title) {
            data.title = title;
        },

        clearData: function () {
            data.peopleArr = [];
            data.selectArr = [];
            data.completeArr = [];
            data.title = "";
        },

        calcSecretSanta: function () {


            var genBool, c;

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

            //Call function to sort array 
            genSanta();

            while (!genBool && c <= 10) {
                //Increase var c to prevent infinite loop
                c++;

                //Reset selector array
                duplicateArr();

                //Reset genBool
                genBool = true;

                //Choose secret Santa
                genSanta();

                //Break when everyone is selected or start again. 
                if (data.selectArr.length === 0) {
                    break;
                } else if (c > 10) {
                    console.log("please check your inputs/exclusions");
                    break;
                }
            }



        },

        createSendArr: function () {

            for (i = 0; i < data.peopleArr.length; i++) {
                var person, result;

                person = data.peopleArr[i];
                result = new completedPerson(person.name, person.email, person.chosen.name);

                data.completeArr.push(result);

            }


        },

        sendEmail: function () {
            var completeArr, title;

            completeArr = JSON.stringify(data.completeArr);
            title = data.title;

            $.post('email.php', {
                people_arr: completeArr,
                title: title
            }, function (data) {
                console.log(data);
            });

        },

        test: function () {
            return data;
        }
    }


})();


//UI CONTROLLER
var UIController = (function () {
    var DOMelements = {
        newBtn: document.querySelector('.newBTN'),
        selectInputValue: document.querySelector('.num_of_ppl'),
        selectBtn: document.querySelector('.selectBTN'),
        formContainer: document.querySelector('.form-container'),
        submitBtn: document.querySelector('.submitBTN'),
        title: document.querySelector('.title'),
        nameErr: document.querySelector('.form-error-name'),
        emailErr: document.querySelector('.form-error-email'),
        titleErr: document.querySelector('.form-error-title'),
        peopleErr: document.querySelector('.form-error-people'),
        inputName: '#person-',
        inputEmail: '#email-',
        inputExclude: '#exclude-'

    }


    return {

        getDOMelements: function () {
            return DOMelements;
        },

        //Generate fields 
        genFields: function (num) {

            var option;
            option = '<option value="">-</option>';

            for (i = 0; i < num; i++) {
                var numSel = i + 1;

                option += '<option value="' + i + '">' + numSel + '</option>';
            }

            for (i = 0; i < num; i++) {
                var html, newHTML;
                
                html = '<tr><th scope="row">%num%.</th><td><input type="text" id="person-%id%" class="name-input" placeholder="Name" autocomplete="off"><div class="form-error-name">*Please Enter Valid Name</div></td><td><input type="text" id="email-%id%" class="email-input" placeholder="E-Mail" autocomplete="off"><div class="form-error-email">*Please Enter Valid E-Mail</div></td><td><select id="exclude-%id%" class="exclude-input">' + option + '</select></td></tr>';
                
                newHTML = html.replace('%num%', i + 1);
                newHTML = newHTML.replace(/%id%/g, i);

                DOMelements.formContainer.insertAdjacentHTML('beforeend', newHTML);

            }
        },


        //Clear fields
        clearFields: function () {

            DOMelements.selectInputValue.value = "";

            DOMelements.formContainer.textContent = "";

        }

    }

})();


//GLOBAL APP CONTOLLER
var controller = (function (selCtrl, UICtrl) {

    var setupEventListeners = function () {

        //Get DOMelements
        DOM = UICtrl.getDOMelements();

        DOM.selectBtn.addEventListener('click', generateFields);

        DOM.newBtn.addEventListener('click', clearFields);

        DOM.submitBtn.addEventListener('click', submit);

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

        } else {

            //Clear Error
            document.querySelector('.form-error-people').style.display = 'none';
            
        }
        
        if (fieldCheck) {
            
            //Generate Fields
            UICtrl.genFields(numOfPeople);
            
           //Close Modal
            $('#exampleModal').modal('hide'); 
            
        }

    };

    var clearFields = function () {

        //Clear UI Fields
        UICtrl.clearFields();

        //Clear Data
        selCtrl.clearData();
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
            if (curEmail === "") {
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

            //Assign secret santa
            selCtrl.calcSecretSanta();

            //Create a simple array to transport to PHP 
            selCtrl.createSendArr();

            //Send Email 
            selCtrl.sendEmail();

        }

    }

    return {

        init: function () {
            //Setup Event Listeners
            setupEventListeners();

            //Diplay Modal 
            $(window).on('load', function () {
                $('#exampleModal').modal('show');
            });

            console.log('App Started');
        },


    }

})(selectorController, UIController);

controller.init();
