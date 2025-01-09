'use strict';
//definiert der Code ein Ajax-Objekt mit einer Methode loadJSON, die eine HTTP-GET-Anfrage zum Abrufen einer JSON-Datei von einer URL durchführt.
const ajax = {
    loadJSON(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                callback(JSON.parse(xhr.response));
            } else {
                console.warn(xhr.statusText, xhr.responseURL);
            }
        })
        xhr.send();
    }
}