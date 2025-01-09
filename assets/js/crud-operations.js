//this file contains crud operation copy , remove , update and display products functions
//diese Datei enthält Funktionen zum Kopieren, Entfernen, Aktualisieren und Anzeigen von Produkten
"use strict";
let productsList = [];
let listCards = [] ;
let shoppingCartList ;
// let userLoginId = localStorage.getItem("userLoginIndex");
// console.log("userLoginId", userLoginId);

const crudOperations = {
   //check if localStorage empty or not if not empty -> get and display products in the page
   shoppingCartListEmptyOrNot() {
    if (localStorage.getItem("shoppingCartList")) {
       shoppingCartList= JSON.parse(localStorage.getItem("shoppingCartList"));
       crudOperations.displayShoppingCart();
     } else {
       shoppingCartList= [];
     }
   },
  //function to display Catalog  in products.html page
  displayCatalog(data) {
    let productsContainer = "";
    for (let product of data.products) {
      productsContainer += `
            <div class="col-md-4 my-4 ">
                 <img src="${product.imageSource}" class="w-50 h-50 my-2 " alt="${product.productName}"  />
                  <p class="card-title" >${product.productName}</p>
                  <p class="card-text"><strong >Price: ${product.productPrice}</strong></p>
                  <p class="card-text" >Category: ${product.productCategory}</p>
                  <button type="button" class="btn btn-primary " id="addToCartBtn" onclick="crudOperations.addToCart(${product.id})" >zum warenkorb hinzufügen</button> 
            </div> 
             
            `;
      productsList.push(product);
      //  localStorage.setItem("productsList", JSON.stringify(productsList));
    }

    console.log("productsList", productsList);
    elements.productsRow.innerHTML = productsContainer;
  },
  //function to display list
  displayList(list, searchTerm = 0) {
    //check if list empty or not
    if (list.length > 0) {
      let listContainer = "";
      for (let i = 0; i < list.length; i++) {
        listContainer += `<div class="col-md-3 ">
                <img src="${
                  list[i].imageSource
                }" class="w-50 h-50 my-1 " id="productImage" alt="" />

                  <p id="productName">product name: ${
                    searchTerm
                      ? list[i].productName
                          .toLowerCase()
                          .replace(
                            searchTerm,
                            `<span class="text-danger fs-4">${searchTerm}</span>`
                          )
                      : list[i].productName
                  }</p>
                  <p id="productPries">product price: ${
                    list[i].productPrice
                  }</p>
                  <p id="productCategory">product categogry: ${
                    searchTerm
                      ? list[i].productCategory
                          .toLowerCase()
                          .replace(
                            searchTerm,
                            `<span class="text-danger fs-4">${searchTerm}</span>`
                          )
                      : list[i].productCategory
                  }</p>
                  <button type="button" class="btn btn-primary " id="addToCartBtn" onclick="crudOperations.addToCart(${
                    list[i].id
                  })" >zum warenkorb hinzufügen</button> 

              </div>`;
      }
      elements.productsRow.innerHTML = listContainer;
    } else {
      elements.productsRow.innerHTML = `<div class="alert alert-danger text-center"> No Match Found </div>`;
    }
  },
  //function to add product to shopping cart
  addToCart(key) {

    if (listCards[key] == null) {
      // copy product form productslist to list card
      listCards[key] = JSON.parse(JSON.stringify(productsList[key]));
      listCards[key].quantity = 1;
    }

      shoppingCartList.push(listCards[key]);
      
      crudOperations.displayShoppingCart()
      crudOperations.saveToLocalStorage()
  },
  displayShoppingCart() {
    
    elements.listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    shoppingCartList.forEach((value, key)=>{
       
        if(value != null){
          totalPrice = totalPrice + value.productPrice;
          count = count + value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML =` <div class="container">
            <div class="cart-item">
                <img src="${value.imageSource}" alt="Product Image">
               <div class="item-details">
                   <div class="item-name">ProducktName: ${
                    value.productName
                   }</div>
         
                    <div class="item-price">Preis: ${
                     value.productPrice
                    }</div>
                </div>
                <div class="quantity-controls">
                            <button onclick="crudOperations.changeQuantity(${
                            key
                            }, ${value.quantity - 1})">-</button>
                            
                    <span id="product2-quantity">${
                      value.quantity
                    }</span>
                    <button onclick="crudOperations.changeQuantity(${
                   key
                    }, ${value.quantity + 1})">+</button>
                  </div>     
                <button class="delete-btn" onclick="crudOperations.deleteCard(${key})">Löschen</button>
            </div>   
           </div>`
                elements.listCard.appendChild(newDiv);
        }
    })
    elements.total.innerText = ` Gesamtpreis : ${totalPrice}`;
    elements.quantity.innerText = ` Gesamtanzahl: ${count}`;
  },
  changeQuantity(key, quantity) {
    if(quantity == 0){
      crudOperations.deleteCard(key);
      
  }else{
      shoppingCartList[key].quantity = quantity;
      
         shoppingCartList[key].productPrice = quantity * productsList[key].productPrice;
  }
      crudOperations.displayShoppingCart()
      crudOperations.saveToLocalStorage()

  },
  deleteCard(index) {
    shoppingCartList.splice(index, 1);
    crudOperations.displayShoppingCart();
    crudOperations.saveToLocalStorage();

  },
  saveToLocalStorage() {
    localStorage.setItem("shoppingCartList", JSON.stringify(shoppingCartList));
   crudOperations.displayShoppingCart();
  },
};
