"use strict";
const productsFunctions = {
  showWelcomeUser() {
    if (userLoginIndex >= 0 && userLoginIndex < elements.allUsers.length) {
      // Safe to access elements.allUsers[userLoginIndex]

      elements.welcomeUser.innerHTML = `Willkommen ${elements.allUsers[userLoginIndex].name}`;
    } else {
      console.error("Invalid index:", userLoginIndex);
    }
    console.log(userLoginIndex);
  },
  //function to search product by name
  searchProductsByName() {
    let searchList = [];
    for (let i = 0; i < productsList.length; i++) {
      let searchTerm = elements.searchProductsByName.value;
      if (
        productsList[i].productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        searchList.push(productsList[i]);
      }
      crudOperations.displayList(searchList, searchTerm);
    }
  },
  appendEventListeners() {
    elements.searchProductsByName.addEventListener(
      "input",
      productsFunctions.searchProductsByName
    );
    elements.openShopping.addEventListener('click', ()=>{
      elements.productsBody.classList.add('active');
  });
  elements.closeShopping.addEventListener('click', ()=>{
    elements.productsBody.classList.remove('active');
})
  },
};
