//this file contains all  signup functions
"use strict";

const signupFunctions = {
  
  /**when signup button is clicked
   * * check if user data valid or not when it valid :
   *   1-check userEmail exist or not
   *   2-the user's data is saved in the allUsers array.
   *   3- the user's data is saved in local storage as well.
   * *
   * */
  handleSignupBtnClick(evt) {
    evt.preventDefault();
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
        elements.emailExistWarning.classList.remove("d-none")
        elements.emailExistWarning.classList.add("d-block");
        elements.userEmail.classList.add("is-invalid");
        elements.userEmail.classList.remove("is-valid");
        console.log("email exist");
      }
      setTimeout(function() {
        signupFunctions.goToLoginPage();
          }, 3000)
    
    } else {
      console.log("not valid data ");



    }
  },
  goToLoginPage(){
    console.log("clickeddd")
    window.location.href = "../index.html";

  },

  appendSignupEventListeners() {
    if(elements.signupSubmitBtn !== undefined && elements.signupSubmitBtn !== null)
    {
      elements.signupSubmitBtn.addEventListener(
        "click",
        signupFunctions.handleSignupBtnClick
      );
    }
    
   
 
    
  },
};
