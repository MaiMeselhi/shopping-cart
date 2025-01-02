// this file contains all login functions
"use strict";

const loginFunctions = {
  isUserExist(users, loginUser) {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === loginUser.email &&
        users[i].password === loginUser.password
      ) {
      userLoginIndex = i;
      return true;  
      } 
    }
    //the does not exist
    return false;
  },
  handlloginToSignupPageBtnClick() {
    //     go to signup.html page in the same window
    window.location.href = "../signup.html";
  },
  /**
   * when login Button is clicked
   * 1-
   */
  handleLoginBtnClick() {
    if (validation.isUserDataLoginValid()) {
      let user = sharedFunctions.createUser(
        "",
        elements.loginUserEmail,
        elements.loginUserPassword
      );
      loginFunctions.isUserExist(elements.allUsers, user);
      LocalStorageFunctions.setToLocalStorage("userLoginIndex",userLoginIndex)
      window.location.href = "../products.html";


    } else {
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
