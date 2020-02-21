function hamburger(){
  console.log("Help!");
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

function openTab(evt, tabName){
  // Source: https://www.w3schools.com/howto/howto_js_tabs.asp
  let i, tabcontent, tablinks;
  
  // Get all with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
    
  // Remove all active
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Set current tab to show & active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openHome(){
  document.getElementById("defaultOpen").click();
}
