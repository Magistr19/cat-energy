/* Js active */

var bodyElement = document.querySelector ('.no-js');
bodyElement.classList.remove('no-js');

/* Mobile nav open */

var toogleBtn = document.querySelector ('.toggle-nav');
var mobileNav = document.querySelector ('.main-nav');

toogleBtn.addEventListener("click", function(evt) {
  if (toogleBtn.classList.contains('toggle-nav--open')) {
    toogleBtn.classList.remove ('toggle-nav--open');
    mobileNav.classList.remove ('main-nav--open');
  }
  else {
    toogleBtn.classList.add ('toggle-nav--open');
    mobileNav.classList.add ('main-nav--open');
  }
});
