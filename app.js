//Budget Controller
var budgetController = (function(){
    
    //some code

})();




//UI Controller
var UIController = (function(){
    
    //some code

})();




//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){











        console.log('it works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }

    });

    
})(budgetController, UIController);




