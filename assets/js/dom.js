//enthält alle dom elemente
"use strict";

const dom = {
  $(selector) {
    return document.querySelector(selector);
  },
  mapping() {
    //login
    elements.loginUserEmail = dom.$("#loginUserEmail");
    elements.loginUserPassword = dom.$("#loginUserPassword");
    elements.loginBtn = dom.$("#loginBtn");
    //sign up
    elements.signupSubmitBtn = dom.$("#signupSubmitBtn");
    elements.userName = dom.$("#userName");
    elements.userEmail = dom.$("#userEmail ");
    elements.userPassword = dom.$("#userPassword");
    elements.emailExistWarning = dom.$("#emailExistWarning");
    elements.goToSignupPage = dom.$("#goToSignupPage");
    elements.goToLoginPage = dom.$("#goToLoginPage");
    //products
    elements.productsBody = dom.$("#productsBody");
    elements.openShopping = dom.$(".openShopping");
    elements.openShopping = dom.$(".openShopping");
    elements.closeShopping = dom.$(".closeShopping");
    elements.welcomeUser = dom.$("#welcomeUser");
    elements.productImage = dom.$("#productImage");
    elements.productName = dom.$("#productName");
    elements.productPrice = dom.$("#productPrice");
    elements.productCategory = dom.$("#productCategory");
    elements.addToCartBtn = dom.$("#addToCartBtn");
    //crud-operations
    elements.productsRow = dom.$("#productsRow");
    elements.searchProductsByName = dom.$("#searchProductsByName");
    //shopping-cart
    elements.listCard = dom.$("#listcard");
    elements.total = dom.$("#total");
    elements.quantity = dom.$("#quantity");
    elements.count = dom.$(".quantity");
    elements.goToShoppingCartBtn = dom.$("#goToShoppingCartBtn");
  },
};
