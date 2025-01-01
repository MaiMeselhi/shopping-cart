// this file contains all login functions
'use strict'
const loginFunctions = { 
    handlloginToSignupPageBtnClick(){
        //go to signup.html page in the same window
        window.location.href = "../signup.html";
        // window.open("../signup.html","_self")
        
    },
    appendLoginEventListeners() {
        elements.goToSignupPageBtn.addEventListener(
          'click',
          loginFunctions.handlloginToSignupPageBtnClick
        );
    },

}