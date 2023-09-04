// /* Set the width of the sidebar to 250px (show it) */
// function openNav() {
//     document.getElementById("mySidepanel").style.width = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 (hide it) */
//   function closeNav() {
//     document.getElementById("mySidepanel").style.width = "0";
//   }
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}