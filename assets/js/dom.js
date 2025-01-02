"use strict";

const dom = {
  $(selector) {
    return document.querySelector(selector);
  },
  mapping() {
    //login
    elements.loginUserEmail = dom.$('#loginUserEmail');
    elements.loginUserPassword =dom.$('#loginUserPassword');
    elements.loginBtn =dom.$('#loginBtn');
    //sign up
    elements.signupSubmitBtn = dom.$("#signupSubmitBtn");
    elements.userName = dom.$("#userName");
    elements.userEmail = dom.$("#userEmail ");
    elements.userPassword =dom.$('#userPassword');
    elements.goToSignupPage=dom.$('#goToSignupPage');
    elements.goToLoginPage =dom.$('#goToLoginPage');

    

  },

 
   
 
}
