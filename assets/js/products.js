'use strict';
const productsFunctions = {
showWelcomeUser  () {
   if (userLoginIndex >= 0 && userLoginIndex < elements.allUsers.length) {
      // Safe to access elements.allUsers[userLoginIndex]
  
   elements.welcomeUser.innerHTML = `Welcome ${elements.allUsers[userLoginIndex].name}`;
  
   } else {
  
      console.error("Invalid index:", userLoginIndex);
   }
  console.log(userLoginIndex );
}
}


