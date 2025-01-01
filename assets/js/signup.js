//this file contains all  signup functions
"use strict";

/*
  -allUsers:array of objects -> contains  data for each user (name,email,password)
  - when local storge contains users data ,get this data and save it in the allUsers array.
  - else return empty array
 */
elements.allUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log("allusers", elements.allUsers);
const signupFunctions = {
  
  /**when signup button is clicked
   * * check if user data valid or not when it valid :
   *   1-check userEmail exist or not
   *   2-the user's data is saved in the allUsers array.
   *   3- the user's data is saved in local storage as well.
   * *
   * */
  handleSignupBtnClick() {
    if (validation.isUserDataValid()) {
      let newUser = sharedFunctions.createUser(
        elements.userName,
        elements.userEmail,
        elements.userPassword
      );
      console.log("new user", newUser);

      //if newUserEmail does not match any Email in alUsers array
      if (!validation.isUserEmailExist(elements.allUsers, newUser)) {
        elements.allUsers.push(newUser);

        LocalStorageFunctions.setToLocalStorage("users", elements.allUsers);
        console.log(elements.allUsers);

        sharedFunctions.clearInputsField(
          elements.userName,
          elements.userEmail,
          elements.userPassword
        );
        validation.showSucessAlert();
      } else {
        console.log("email exist");
      }
    } else {
      console.log("not valid data ");
    }
  },

  appendSignupEventListeners() {
    elements.signupSubmitBtn.addEventListener(
      "click",
      signupFunctions.handleSignupBtnClick
    );
 
    
  },
};
