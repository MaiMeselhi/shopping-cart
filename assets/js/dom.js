"use strict";

const dom = {
  $(selector) {
    return document.querySelector(selector);
  },
  mapping() {
    elements.signupSubmitBtn = dom.$("#signupSubmitBtn");
    elements.userName = dom.$("#userName");
    elements.userEmail = dom.$("#userEmail ");
    elements.userPassword =dom.$('#userPassword');

  },

  appendEventListeners() {
    elements.signupSubmitBtn.addEventListener(
      'click',()=> {
        elements.allUsers.push(signupFunctions.createUser(elements.userName,elements.userEmail,elements.userPassword))
        console.log(elements.allUsers)
        ;
        
      }
    );
  },
};
