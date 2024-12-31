'use strict'

elements.allUsers = [];

//allUsers:array of objects -> contains  data for each user (name,email,password)
const signupFunctions = {
    createUser(userNameInput,userEmailInput,userPasswordInput){
        let user = { 
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value,
        }
        return user;
    }

}

