let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});