'use strict'

const LocalStorageFunctions = { 
    setToLocalStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
}