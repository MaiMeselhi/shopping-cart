// this file contains all login functions
"use strict";
const loginFunctions = {
  handlloginToSignupPageBtnClick() {
    //     go to signup.html page in the same window
    window.location.href = "../signup.html";
    //     window.open("../signup.html","_self")
  },
  /**
   * when login Button is clicked
   * 1-
   */
  handleLoginBtnClick() {
  
    
    if(validation.isUserDataLoginValid()){
      let user = sharedFunctions.createUser(
        "",
        elements.loginUserEmail,
        elements.loginUserPassword
      );
      console.log("user", user);
      
    }
    else{
      console.log("not valid data");
    }
  },
  appendLoginEventListeners() {
    if (
      elements.goToSignupPage !== undefined &&
      elements.goToSignupPage !== null
    ) {
      elements.goToSignupPage.addEventListener(
        "click",
        loginFunctions.handlloginToSignupPageBtnClick
      );
    }
    if (elements.loginBtn !== undefined && elements.loginBtn !== null) {
      elements.loginBtn.addEventListener(
        "click",
        loginFunctions.handleLoginBtnClick
      );
    }
  },
};
