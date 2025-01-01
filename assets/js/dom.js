"use strict";

const dom = {
  $(selector) {
    return document.querySelector(selector);
  },
  mapping() {
    elements.signupSubmitBtn = dom.$("#signupSubmitBtn");
    elements.loginBtn =dom.$('#loginBtn');
    elements.userName = dom.$("#userName");
    elements.userEmail = dom.$("#userEmail ");
    elements.userPassword =dom.$('#userPassword');
    elements.goToSignupPageBtn=dom.$('#goToSignupPage')
    elements.goToLoginPage =dom.$('#goToLoginPage');

    

  },

 
   
 
}
