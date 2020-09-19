const toggleBtn = document.querySelector('.togglebtn');
const menuIcon = document.querySelector('.menu');
const images = document.querySelector('#myimages')

toggleBtn.addEventListener('click',toggleClick)
function toggleClick(e){
    if(menuIcon.classList.contains('abc')){
        menuIcon.src = "../images/cross.svg";
        menuIcon.classList.remove('abc');
    }else{
        menuIcon.src = "../images/menu.svg";
        menuIcon.classList.add('abc');
    }
}