document.addEventListener("DOMContentLoaded", () => {
  let sliderContainer = document.querySelectorAll(".slider-item");
  let currentIndex = 0;

  function slide(currIndex) {
    sliderContainer.forEach((element, i) => {
      element.style.display = i === currentIndex ? "block" : "none";
    });
  }

  function next() {
    currentIndex = (currentIndex + 1) % sliderContainer.length;
    slide(currentIndex);
  }

  function previous() {
    currentIndex = (currentIndex - 1 + sliderContainer.length) % sliderContainer.length;
    slide(currentIndex);
  }

  // Initial slide
  // slide(currentIndex);

  let slider = setInterval(() => next(), 5000);


  document.getElementById("next").addEventListener("click",next)
  document.querySelector(".slider-item").addEventListener("mouseenter",() =>{
    clearInterval(slider)
  })
  document.getElementById("previous").addEventListener("click",previous)
  document.querySelector(".slider-item").addEventListener("mouseleave",() =>{
    setInterval(() => next(), 5000)
  })
});
