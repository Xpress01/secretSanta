//SELECTOR CONTROLLER
var selectorController = (function() {
    
    
    
    
    
    
    
})();


//UI CONTROLLER
var UIController = (function() {
    var DOMelements = {
        newBtn: document.querySelector('.newBTN'),
        selectInputValue: document.querySelector('.num_of_ppl'), 
        selectBtn: document.querySelector('.selectBTN'),
        formContainer: document.querySelector('.form-container'),
        submitBtn: document.querySelector('.submitBTN')
    }
    
    
    return {
        
        getDOMelements: function() {
            return DOMelements; 
        },
        
        //Generate fields 
        genFields: function(num) {
        
            for (i = 0; i < num; i++) {
                var html, htmlNew; 

                html = '<div class="row"><div class="col"><label>%num%. Name:</label><input type="text" id="person%id%" class="name-input" placeholder="Name"></div><div class="col"><label>Email:</label><input type="text" id="email%id%" class="email-input" placeholder="E-Mail"></div><div class="col"><label>Exclude:</label><input type="text" id="exclude1" class="exclude-input" placeholder="Use Person\'s Number to Exclude"></div></div>'

                newHTML = html.replace('%num%', i + 1); 
                newHTML = newHTML.replace('%id%', i + 1);

                DOMelements.formContainer.insertAdjacentHTML('beforeend', newHTML);

            }
        },
        
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
      
    };
    
    var generateFields = function() {
        
        var numOfPeople; 
            
        //Get Number of people
        numOfPeople = DOM.selectInputValue.value;

        if (numOfPeople > 0) {
            
            //Generate Fields
            UICtrl.genFields(numOfPeople);
            
        } else {
            
            console.log('Add value');
        }
        
            
    };
    
    var clearFields = function() {
        
        UICtrl.clearFields();
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

