/* 
- creo array img 
- recupero elementi html
- creo variabile index
- inserisco in img src il valore di index
- creo evnto click freccia down
° index aumenta di 1 
° cambia immagine in base all'index
- creo evento freccia up
° index diminuisce di 1 
° cambio immagine in base all'index
*/

/* 
- creo variabile transition complete
- 


*/




// creo array img 
const images =["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// recupero elementi html
let arrowtopEl = document.getElementById("arrow-top");
let arrowbottomEl = document.getElementById("arrow-bottom");
let myimgEl = document.getElementById("myimg");


// creo variabile index
let index = 0;

// inserisco in img src il valore di index
myimgEl.src = images[index];

// - creo evnto click freccia down
arrowbottomEl.addEventListener("click", function() {
    // index aumenta di 1 
    index++;
    
    // ciclo infinito carosello
    if(index >= 5) {
     index = 0;
    }
   // cambia immagine in base all'index
   myimgEl.src = images[index];


});

// creo evento freccia up
arrowtopEl.addEventListener("click", function() {
    // index diminuisce di 1 
    index--;
    
    // ciclo infinito carosello
    if(index <= 0) {
      index = 4;
    }
   // cambia immagine in base all'index
   myimgEl.src = images[index];

});

