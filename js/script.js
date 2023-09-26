function slide() {
    const slideTab = document.getElementById("slideTab");
    
    if (slideTab.classList.contains("hidden")) {
      slideTab.classList.remove("hidden");
      slideTab.classList.add("visible");
    } else {
      slideTab.classList.remove("visible");
      slideTab.classList.add("hidden");
    }
}
function slide2() {
    const slideTab = document.getElementById("slideTab2");
    
    if (slideTab.classList.contains("hidden")) {
      slideTab.classList.remove("hidden");
      slideTab.classList.add("visible");
    } else {
      slideTab.classList.remove("visible");
      slideTab.classList.add("hidden");
    }
}
  