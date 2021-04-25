var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');



var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');
toggleButton.addEventListener('click', function(){
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
    
});

backdrop.addEventListener('click',function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open')
});