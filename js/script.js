// sticky navbar

const mainNav = document.querySelector(".main-nav")
const mainNavOffset = mainNav.offsetTop

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= mainNavOffset + 50) {
    mainNav.classList.add("fixy")
  }else {
    mainNav.classList.remove("fixy")
  }
})





// carousel section

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const liIndicator = document.querySelectorAll(".controls li");
const indicatorParent = document.querySelector(".controls ul");
const carousel = document.querySelector(".carousel");

const testimonialSlider = document.querySelector(".testimonial-slider");
// const testimonialCarousel = document.querySelector(".testimonial-carousel");

let sectionIndex = 0;


// The control arrows

rightArrow.addEventListener("click", function() {
    if (sectionIndex < 3) {
        sectionIndex = sectionIndex + 1;
    } else {
        sectionIndex = 0;
    }

    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParent.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    testimonialSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";
})


leftArrow.addEventListener("click", function() {
    if (sectionIndex > 0) {
        sectionIndex = sectionIndex - 1;
    } else {
        sectionIndex = 3;
    }

    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParent.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    testimonialSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";

})


// The indicator circles

liIndicator.forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex = ind;
        document.querySelector(".controls .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
        testimonialSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";

    })
})


// Autoplay mood

let intervalId = 0;

function autoPlay() {
    intervalId = setInterval(function () {
        if (sectionIndex < 3) {
            sectionIndex = sectionIndex + 1;
        } else {
            sectionIndex = 0;
        }
    
        document.querySelector(".controls .selected").classList.remove("selected");
        indicatorParent.children[sectionIndex].classList.add("selected");
        slider.style.transform = `translate(${sectionIndex * -25}%)`;
        testimonialSlider.style.transform = "translate(" + sectionIndex * -25 + "%)";

    }, 5000)
}
autoPlay();



// counters

// Function to start the counter animation

let valueDisplays = document.querySelectorAll(".counter span");
let interval = 5000;

function startCounterAnimation() {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-count"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
      startValue += 1
      valueDisplay.textContent = startValue
      if (startValue == endValue) {
        clearInterval(counter)
      }
    }, duration);
  })
}

  // Function to check if an element is in the viewport

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
        counter.classList.add('counted');
        startCounterAnimation();
      }
    });
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  


// scroll reveal

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000
});

ScrollReveal().reveal('.activity-header, .tour-header', { origin: 'top' });
ScrollReveal().reveal('.card-wrapper, .activity, .school-classes', { origin: 'bottom' });
ScrollReveal().reveal('.top-nav-background, .bigmommy, .footer-content', { origin: 'right' });
ScrollReveal().reveal('.about-content, .second-footer', { origin: 'left' });


