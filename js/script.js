// id="sticky" is the scroll to top button
var sticky = document.getElementById("sticky")
var rootElement = document.documentElement //For Chrome/Firefox/IE/Opera
var bodyElement = document.body //For Safari

// create new window scroll function named scroll Appear
window.onscroll = function() { scrollAppear() };

// define scroll Appear to be visible when user is 100px from top of document
function scrollAppear() {
  if (bodyElement.scrollTop > 100 || rootElement.scrollTop > 100) {
      sticky.style.display = ("block");
  } else {
      sticky.style.display = ("none");
  }
}

// define scroll to top function
function scrollToTop() {
  bodyElement.scrollTo( {
    top: 0,
    behavior: "smooth"
  }) ||
  rootElement.scrollTo( {
    top: 0,
    behavior: "smooth"
  })
}

// add onclick function to scroll to top button
sticky.addEventListener("click", scrollToTop)
