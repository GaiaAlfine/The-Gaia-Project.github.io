function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var btn = document.querySelector(".toggle-btn");

  // Add transition for smooth toggling
  sidebar.style.transition = "0.5s";
  btn.style.transition = "0.5s";

  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    btn.style.left = '0';
    btn.innerHTML = '☰';
  } else {
    sidebar.style.width = '250px';
    btn.style.left = '250px';
    btn.innerHTML = '☰';
  }

  // Remove transition after a delay equal to the transition duration
  setTimeout(() => {
    sidebar.style.transition = "none";
    btn.style.transition = "none";
  }, 500); // 500 milliseconds or the duration of your transition
}


// Additional JavaScript for dynamic sidebar positioning
window.onscroll = function() {
  var sidebar = document.getElementById("mySidebar");
  var btn = document.querySelector(".toggle-btn");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    sidebar.style.top = '0';
    btn.style.top = '10px';
  } else {
    sidebar.style.top = '60px';
    btn.style.top = '20px';
  }
};

function closeAllSubmenus() {
  var submenus = document.getElementsByClassName('submenu');
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = 'none';
  }
}
window.onscroll = function() {
  var sidebar = document.getElementById("mySidebar");
  var btn = document.querySelector(".toggle-btn");
  var header = document.getElementById("header");

  // Calculate the bottom position of the header
  var headerBottom = header.offsetTop + header.offsetHeight;

  if (window.scrollY > headerBottom) {
    sidebar.style.top = '0';
    btn.style.top = '0px';
  } else {
    sidebar.style.top = (headerBottom - window.scrollY) + 'px';
    btn.style.top = (headerBottom - window.scrollY + 0) + 'px';
  }
};
document.addEventListener('DOMContentLoaded', function() {
  var tabItems = document.querySelectorAll('.tab-item');

  tabItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var nextElement = this.nextElementSibling;
          if (nextElement && nextElement.classList.contains('submenu')) {
              nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
          }
      });
  });
});
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let numOfSlides = slides.length;
showSlides();

function showSlides() {
    // Remove 'slide-active' and 'slide-leave' from all slides
    for (let i = 0; i < numOfSlides; i++) {
        slides[i].className = "slide";
    }
    
    // Calculate next index (with wrapping)
    let nextIndex = (slideIndex + 1) % numOfSlides;

    // Add 'slide-active' to the next slide
    slides[nextIndex].classList.add("slide-active");

    // Add 'slide-leave' to the current slide if it's not the first iteration
    if (slideIndex !== -1) {
        slides[slideIndex].classList.add("slide-leave");
    }

    // Update the slide index for the next iteration
    slideIndex = nextIndex;

    setTimeout(showSlides, 10000); // Change image every 3 seconds
}
$("div p").hover(function() {
  // On hover, find the index of the period
  var periodIndex = $(this).text().indexOf('.');
  // Extract the text up to the period
  var textUpToPeriod = $(this).text().substring(0, periodIndex + 1);
  // Wrap that part in a span for styling
  $(this).html('<span>' + textUpToPeriod + '</span>' + $(this).text().substring(periodIndex + 1));
}, function() {
  // When not hovered, remove the span
  $(this).text($(this).text());
});
