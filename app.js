//SELECTOR CONTROLLER
var selectorController = (function() {
    
    function person(name, email, exclude) {
        this.name = name;
        this.email = email;
        this.exclide = exclude;
    }
    
    var peopleArr = []; 
    
    
    
    
})();


//UI CONTROLLER
var UIController = (function() {
    var DOMelements = {
        newBtn: document.querySelector('.newBTN'),
        selectInputValue: document.querySelector('.num_of_ppl'), 
        selectBtn: document.querySelector('.selectBTN'),
        formContainer: document.querySelector('.form-container'),
        submitBtn: document.querySelector('.submitBTN'),
        inputName: '#person-',
        inputEmail: '#email-',
        inputExclude: 'exclude-'
        
    }
    
    
    return {
        
        getDOMelements: function() {
            return DOMelements; 
        },
        
        //Generate fields 
        genFields: function(num) {
        
            for (i = 0; i < num; i++) {
                var html, htmlNew; 

                html = '<div class="row"><div class="col"><label>%num%. Name:</label><input type="text" id="person-%id%" class="name-input" placeholder="Name"></div><div class="col"><label>Email:</label><input type="text" id="email-%id%" class="email-input" placeholder="E-Mail"></div><div class="col"><label>Exclude:</label><input type="text" id="exclude-%id%" class="exclude-input" placeholder="Use Person\'s Number to Exclude"></div></div>'

                newHTML = html.replace('%num%', i + 1); 
                newHTML = newHTML.replace(/%id%/g, i);

                DOMelements.formContainer.insertAdjacentHTML('beforeend', newHTML);

            }
        },
        
        /*
        getInputs: function() {
            var numberOfPeople; 
            
            numberOfPeople = parseInt(DOMelements.selectInputValue.value);
            
            for (i = 0; i < numberOfPeople; i++) {
                
            }
        },
        */
        
        //Clear fields
        clearFields: function() {
            
            DOMelements.selectInputValue.value = "";
            
            DOMelements.formContainer.textContent = ""; 
            
        }
        
    }
    
})();


//GLOBAL APP CONTOLLER
var controller = (function(selCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        //Get DOMelements
        DOM = UICtrl.getDOMelements();
        
        DOM.selectBtn.addEventListener('click', generateFields);
        
        DOM.newBtn.addEventListener('click', clearFields);
        
        DOM.submitBtn.addEventListener('click', submit);
      
    };
    
    var generateFields = function() {
        
        var numOfPeople; 
            
        //Get Number of people
        numOfPeople = DOM.selectInputValue.value;

        if (numOfPeople > 0) {
            
            //Generate Fields
            UICtrl.genFields(numOfPeople);
            
        } else {
            
            event.preventDefault(); 
        }
        
            
    };
    
    var clearFields = function() {
        
        UICtrl.clearFields();
    }
    
    var submit = function() {
        var numOfPeople; 
        
        //Get number of participants
        numOfPeople = parseInt(DOM.selectInputValue.value); 
        
        //Get user input and add to arr
        for (i = 0; i < numOfPeople; i++) {
            name = DOM.inputName + i;
            email = DOM.inputEmail + i; 
            exclude = DOM.inputExclude + i; 
            
            curName = document.querySelector(name).value; 
            curEmail = document.querySelector(email).value; 
            if (curExclude = document.querySelector(exclude).value == "") {
                curExclude = 0
            } else {
                curExclude = document.querySelector(exclude).value;
            }
            
            
            console.log(curName + curEmail);
        }
        
    }

    return {
        
        init: function() {
           //Setup Event Listeners
           setupEventListeners(); 
            
           //Diplay Modal 
           $(window).on('load',function(){
                $('#exampleModal').modal('show');
            });

           console.log('App Started');
        },
        
        
    }
        
})(selectorController, UIController);

controller.init();

