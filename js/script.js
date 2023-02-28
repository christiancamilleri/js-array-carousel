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
let asideEl = document.getElementById("aside")


// creo variabile index
let index = 0;

// inserisco in img src il valore di index
myimgEl.src = images[index];

// genero le immagini laterali 
for(let i = 0; i <images.length; i++) {
  // genero elemento img 
  let newImg = document.createElement("img")
  // aggiungo classe necessaria
  newImg.classList.add("littleimg")
  // lo imposto come figlio di asideEl
  asideEl.append(newImg);
  // inseriso immagini
  newImg.src = images[i];
}



// prendo littleimg
const littleimgEl = document.querySelectorAll(".littleimg");
// aggiungo al primo classe active
littleimgEl[index].classList.add("active");

// - creo evnto click freccia down
arrowbottomEl.addEventListener("click", function() {
    // index aumenta di 1 
    index++;
    
    // ciclo infinito carosello
    if(index >= images.length) {
      index = 0;
      littleimgEl[4].classList.remove("active");
    }
   // cambia immagine in base all'index
   myimgEl.src = images[index];

  //  aggiungo classe active ad immagine attiva
  littleimgEl[index].classList.add("active");

  // rimuoviamo classe active immagine non più attiva
  littleimgEl[index - 1].classList.remove("active");
  
});

// creo evento freccia up
arrowtopEl.addEventListener("click", function() {
    // index diminuisce di 1 
    index--;
    
    // ciclo infinito carosello
    if(index < 0) {
      index = images.length - 1;
      littleimgEl[0].classList.remove("active");
    }
   // cambia immagine in base all'index
   myimgEl.src = images[index];

    //  aggiungo classe active ad immagine attiva
  littleimgEl[index].classList.add("active");

  // rimuoviamo classe active immagine non più attiva
  littleimgEl[index + 1].classList.remove("active");

});

