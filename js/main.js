'use strict';
let toggler = document.querySelector('header .links .icon');
let links = document.querySelector('header .links ul');
let icon1 = document.querySelector('header .links .icon span:first-child');
let icon2 = document.querySelector('header .links .icon span:nth-child(2)');
let icon3 = document.querySelector('header .links .icon span:last-child');
let rotate = 0;

toggler.addEventListener('click', function(){
	if(rotate == 0){
	icon1.style.transform = 'rotate(45deg) translate(5px)';
	icon2.style.display = 'none';
	icon3.style.transform = 'rotate(-45deg) translate(5px)';
	links.style.display = 'block';
	rotate = 1;
} else{
	icon1.style.transform = 'rotate(0deg)';
	icon2.style.display = '';
	icon3.style.transform = 'rotate(0deg)';
	links.style.display = ''; 
	rotate = 0;
}

});

