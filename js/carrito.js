

document.addEventListener("DOMContentLoaded", function () {
    
    const productCards = document.querySelectorAll(".card");
    const cartCountInput = document.getElementById("contar");
  
    let cartCount = 0;
  
    productCards.forEach((card) => {
      card.addEventListener("click", function () {
   
        cartCount++;
        cartCountInput.value = cartCount;
 
      });
    });
  });
  