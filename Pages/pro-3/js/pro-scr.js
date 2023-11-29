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
