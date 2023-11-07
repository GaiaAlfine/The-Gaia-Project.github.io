function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var btn = document.querySelector(".toggle-btn");

  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    btn.style.left = '0';
    btn.innerHTML = '☰';
  } else {
    sidebar.style.width = '250px';
    btn.style.left = '250px';
    btn.innerHTML = '☰';
  }
}