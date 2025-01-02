'use strict'


const init = () => {

    dom.mapping();
    loginFunctions.appendLoginEventListeners();
   signupFunctions.appendSignupEventListeners();
   productsFunctions.showWelcomeUser();

}

init();