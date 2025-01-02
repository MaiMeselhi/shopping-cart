//this file contains all validation functions
"use strict";
let regexUserName = /^[A-Za-z]{3,}/;
/*
[a-zA-Z0-9]: Matches any alphanumeric character (both uppercase and lowercase letters, and digits).
._%+-: Matches any of these special characters commonly allowed in the username part of an email (dot, underscore, percent sign, plus, and hyphen).
+: Ensures that there is at least one character before the "@" symbol.
@: This matches the literal "@" symbol, which separates the username and domain part of the email.
[a-zA-Z0-9]: Matches any alphanumeric character.
.-: Matches either a dot or a hyphen in the domain name.
+: Ensures that the domain name part has at least one character after the "@".
\.: Matches the literal dot (.) before the top-level domain (TLD), like .com, .org, etc. The backslash is needed because dot is a special character in regex.
[a-zA-Z]: Matches any letter (uppercase or lowercase).
{2,}: Ensures that the TLD has at least two characters (e.g., .com, .org), and it can be more.
 */
let regexUserEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
/**
 * contains upper and lower letters
 *  8 to 15 characters
 * @ - is allowed
 */
let regexUserPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
;

const validation = {
  isvalidInputs(input, regex) {
    return regex.test(input.value) ? true : false;
  },

  //check userName , userEmail ,userPassword valid or not valid
  isUserDataValid() {
    if(validation.isvalidInputs(elements.userName, regexUserName))
      {
       elements.userName.classList.add("is-valid");
       elements.userName.classList.remove("is-invalid");
      }
      else{
       elements.userName.classList.add("is-invalid");
       elements.userName.classList.remove("is-valid");
      }
      if(validation.isvalidInputs(elements.userEmail, regexUserEmail))
        {
          elements.userEmail.classList.add("is-valid");
          elements.userEmail.classList.remove("is-invalid");
        }
        else{
          elements.userEmail.classList.add("is-invalid");
          elements.userEmail.classList.remove("is-valid");
        }
        if(validation.isvalidInputs(elements.userPassword, regexUserPassword))
          {
            elements.userPassword.classList.add("is-valid");
            elements.userPassword.classList.remove("is-invalid");
          }
          else{
            elements.userPassword.classList.add("is-invalid");
            elements.userPassword.classList.remove("is-valid");
          }
    return (
      validation.isvalidInputs(elements.userName, regexUserName) &&
      validation.isvalidInputs(elements.userEmail, regexUserEmail) &&
       validation.isvalidInputs(elements.userPassword, regexUserPassword) 
     );
  },
  isUserDataLoginValid () {
    
    return (
      validation.isvalidInputs(elements.loginUserEmail, regexUserEmail) &&
      validation.isvalidInputs(elements.loginUserPassword, regexUserPassword) 
    ); 
  },
  isUserEmailExist(users,newUser){
    for(let i=0 ; i< users.length ; i++){
      if (users[i].email == newUser.email){
        //newUser exist!
        return true;
      }
      else{
        //newUser doesn't exist
        return false;
      }
    }
  },
  //sweet alert
  showSucessAlert(){
    Swal.fire({
      title: "erledigt!",
      text: "Willkommen im Kinderkaufhaus!",
      icon: "success"
    }); 

  }
};
