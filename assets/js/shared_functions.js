'use strict';
//gemeinsame Funktionen z.B in beide regestrieung and anmeldung brauche ich create user und clear inputs field

/*
  -allUsers:array of objects -> contains  data for each user (name,email,password)
  - when local storge contains users data ,get this data and save it in the allUsers array.
  - else return empty array
 */
  elements.allUsers = JSON.parse(localStorage.getItem("users")) || [];
  console.log("allusers", elements.allUsers);

  // userLoginIndex : this is the index of the user in local storage
  let userLoginIndex = JSON.parse(localStorage.getItem("userLoginIndex"))
  const sharedFunctions = {
    createUser(userNameInput, userEmailInput, userPasswordInput) {
        let user = {
          //userName is undefined in login page
          name: userNameInput.value || undefined,
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