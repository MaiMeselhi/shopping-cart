'use strict'


const init = () => {

    dom.mapping();
    loginFunctions.appendLoginEventListeners();
   signupFunctions.appendSignupEventListeners();
   productsFunctions.showWelcomeUser();
   ajax.loadJSON('/data/catalog.json',crudOperations.displayProducts)

}

init();