//this file contains crud operation copy , remove , update and display products functions
"use strict";
let productsList = [];
const crudOperations = {
  //function to display Catalog  in products.html page
  displayCatalog(data) {
    let productsContainer = "";
    for (let product of data.products) {
      productsContainer += `
            <div class="col-md-4 my-4 ">
                 <img src="${product.imageSource}" class="w-50 h-50 my-2 " alt="${product.productName}" id="productImage" />
                  <p class="card-title" id="productName">${product.productName}</p>
                  <p class="card-text"><strong id="productPries">Price: ${product.productPreis}</strong></p>
                  <p class="card-text" id="productCategory">Category: ${product.productCategory}</p>
                  <button type="button" class="btn btn-primary" id="addtocartbtn">zum warenkorb hinzufügen</button> 
            </div> 
             
            `;
      productsList.push(product);
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
        listContainer += `<div class="col-md-4 ">
                <img src="${
                  list[i].imageSource
                }" class="w-50 h-50 my-1 " alt="" />

                  <p>product name: ${
                    searchTerm
                      ? list[i].productName
                          .toLowerCase()
                          .replace(
                            searchTerm,
                            `<span class="text-danger fs-4">${searchTerm}</span>`
                          )
                      : list[i].productName
                  }</p>
                  <p>product price: ${list[i].productPreis}</p>
                  <p>product categogry: ${
                    searchTerm
                      ? list[i].productCategory
                          .toLowerCase()
                          .replace(
                            searchTerm,
                            `<span class="text-danger fs-4">${searchTerm}</span>`
                          )
                      : list[i].productCategory
                  }</p>
                 <button type="button" class="btn btn-primary " id="addtocartbtn">zum warenkorb hinzufügen</button> 

              </div>`;
      }
      elements.productsRow.innerHTML = listContainer;
    } else {
      elements.productsRow.innerHTML = `<div class="alert alert-danger text-center"> No Match Found </div>`;
    }
  },
  //function to add product to shopping cart
  addProductToShoppingCart(){
    let product = {
      productName
    }


  }
};
