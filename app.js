"use strict"

let budgetController = (function() {

    let x = 23;

    let add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


let UIController = (function() {

    // some code


}) ();


let controller = (function(budgetCtrl, UICtrl) {

    //some code

    let z = budgetCtrl.publicTest(6);

    return {
        anotherPublicTest: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);