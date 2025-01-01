//this file contains all  signup functions
"use strict";

/*
  -allUsers:array of objects -> contains  data for each user (name,email,password)
  - when local storge contains users data ,get this data and save it in the allUsers array.
  - else return empty array
 */
elements.allUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log("allusers",elements.allUsers);

const signupFunctions = {
  createUser(userNameInput, userEmailInput, userPasswordInput) {
    let user = {
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    return user;
  },
  //clear inputs field when signuo button is clicked and user data saved to local storage.
  clearInputsField(userNameInput, userEmailInput, userPasswordInput) {
    userNameInput.value = null;
    userEmailInput.value = null;
    userPasswordInput.value = null;
  },
 /**when signup button is clicked
  * * check if user data valid or not when it valid :
  *   1-the user's data is saved in the allUsers array.
  *   2- the user's data is saved in local storage as well.
  * */
  handleSignupBtnClick() {
    if (validation.isUserDataValid()) {
      console.log("valid data");
      let user = signupFunctions.createUser(
        elements.userName,
        elements.userEmail,
        elements.userPassword
      );
      elements.allUsers.push(user);

      LocalStorageFunctions.setToLocalStorage("users", elements.allUsers);
      console.log(elements.allUsers);

      signupFunctions.clearInputsField(
        elements.userName,
        elements.userEmail,
        elements.userPassword
      );
    }
    else{
      console.log("not valid data");   
    }
  },
  appendSignupEventListeners() {
    elements.signupSubmitBtn.addEventListener(
      "click",
      signupFunctions.handleSignupBtnClick
    );
  },
};
