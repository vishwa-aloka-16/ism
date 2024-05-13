const menuOpenButton = document.getElementById('menuOpenBtn');
const menuCloseButton = document.getElementById('menuCloseBtn');
const mobileMenu = document.getElementById('mobileMenu');


menuOpenButton.addEventListener('click', function(){
    mobileMenu.style.opacity="1";
    mobileMenu.style.zIndex="100";
});
menuCloseButton.addEventListener('click', function(){
    mobileMenu.style.opacity="0";
    mobileMenu.style.zIndex="-5";
});