'use strict'


const init = () => {

    dom.mapping();
    loginFunctions.appendLoginEventListeners();
   signupFunctions.appendSignupEventListeners();
   productsFunctions.appendEventListeners();
   productsFunctions.showWelcomeUser();
   ajax.loadJSON('/data/catalog.json', crudOperations.displayCatalog);

}

init();