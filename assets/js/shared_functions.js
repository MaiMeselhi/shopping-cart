'use strict'
const sharedFunctions = {
    createUser(userNameInput, userEmailInput, userPasswordInput) {
        let user = {
          name: userNameInput.value,
          email: userEmailInput.value,
          password: userPasswordInput.value,
        };
        return user;
      },
      
  //clear inputs field when  button is clicked and user data saved to local storage.
  clearInputsField(userNameInput, userEmailInput, userPasswordInput) {
    userNameInput.value = null;
    userEmailInput.value = null;
    userPasswordInput.value = null;
  },
}