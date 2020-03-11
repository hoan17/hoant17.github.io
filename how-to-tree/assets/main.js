function openTab(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tablinkon", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tablinkon";
}

function openPopup() {
  var popup = document.getElementById("about");
  popup.classList.toggle("show");
}
