var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var selectplanbutton=document.querySelectorAll('.plan .button');
for(var i=0; i<selectplanbutton.length ;i++){
    selectplanbutton[i].addEventListener('click',function(){
        // backdrop.style.display='block';
        // modal.style.display='block';
        modal.classList.add('open');
        backdrop.classList.add('open');
        
    });
}

var modalNo=document.querySelector(".modal__action--negative");
modalNo.addEventListener('click',closeModal);
function closeModal(){
    // backdrop.style.display="none";
    // modal.style.display="none";
    backdrop.classList.remove('open')
    modal.classList.remove('open')
    
}
backdrop.addEventListener('click',function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
});

 