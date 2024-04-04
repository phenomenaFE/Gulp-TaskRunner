document.addEventListener("DOMContentLoaded", function () {
  
  const allBtn = document.getElementById("allBtn");
  const sellBtn = document.getElementById("Sell");
  const rentBtn = document.getElementById("Rent");
  const cards = document.querySelectorAll(".card-prop");

  allBtn.addEventListener("click", function () {
    
    cards.forEach(card => {
      card.style.display = "inline-block";
    });
  });

  sellBtn.addEventListener("click", function() {
    cards.forEach(card => {
      debugger
      if (card.dataset.type === "sell") {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  });

  rentBtn.addEventListener("click", function() {
    cards.forEach(card => {
      if (card.dataset.type === "rent") {
        card.style.display = "inline-block";
      } else {
        card.style.display = "none";
      }
    });
  });

   // Get carousel element
   const carousel = document.getElementById("carouselBlogIndicators");

   // Initialize the carousel
   const myCarousel = new bootstrap.Carousel(carousel, {
     interval: 5000, 
     wrap: true 
   });
 
   // Get carousel control elements
   const prevButton = document.querySelector(".prev-blog");
   const nextButton = document.querySelector(".next-blog");
 
   
   prevButton.addEventListener("click", function () {
     myCarousel.prev(); 
   });
 
   nextButton.addEventListener("click", function () {
     myCarousel.next(); 
   });
 
   // Get carousel indicator elements
   const indicators = document.querySelectorAll("[data-bs-target='#carouselBlogIndicators']");
 
   
   indicators.forEach(function (indicator, index) {
     indicator.addEventListener("click", function () {
       myCarousel.to(index); // Go to the specific slide indicated by the index
     });
   });
});