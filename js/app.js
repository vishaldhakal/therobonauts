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

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
      });
  })