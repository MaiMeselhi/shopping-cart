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
    elements.emailExistWarning = dom.$('#emailExistWarning');
    elements.goToSignupPage=dom.$('#goToSignupPage');
    elements.goToLoginPage =dom.$('#goToLoginPage');
    //products
    elements.welcomeUser =dom.$('#welcomeUser');
    elements.productImage=dom.$('#productImage');
    elements.productName = dom.$('#productName');
    elements.productPries =dom.$('#productPries');
    elements.productCategory =dom.$('#productCategory');
    //crud-operations
    elements.productsRow = dom.$('#productsRow');
    elements.searchProductsByName = dom.$('#searchProductsByName');
    

  },

 
   
 
}
