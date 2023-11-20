// LOADING variables
var loadingWrapper = document.querySelector('.loading-wrapper');
var navBarWrapper = document.querySelector('#nav-bar');
var onglet1 = document.querySelector('#onglet1');
var onglet2 = document.querySelector('#onglet2');
var onglet3 = document.querySelector('#onglet3');
var onglet4 = document.querySelector('#onglet4');
var onglet5 = document.querySelector('#onglet5');
var topbtn = document.querySelector('.btn');
var HiddenCode = document.querySelector('#secretIMG');
// DEBUT
loadingWrapper.style.opacity = 1;
navBarWrapper.style.opacity = 0;
//Donne la valeur 0 a opacité si page a fini de charger
window.addEventListener('load', function(){
  loadingWrapper.style.opacity = 0;
  navBarWrapper.style.opacity = 1;
});

//vérifier toute les 10ms que la page a une valeur d'opacité a 0
setInterval(affichagePage, 10);
function affichagePage() {
  //si oui alors on attends 1s (temps anim) ET APRES ON PREND DISPLAY NONE
  if(loadingWrapper.style.opacity == 0){
    onglet1.style.display ='block';
    onglet2.style.display ='block';
    onglet3.style.display ='block';
    onglet4.style.display ='block';
    onglet5.style.display ='grid';
    topbtn.style.display ='flex';
    HiddenCode.style.display ='block';
    navBarWrapper.style.display ='inline';
    setTimeout(assigner0,1000);
    function assigner0() {
      loadingWrapper.style.display ='none';
    }
  }
}

// CLICK
var audio = new Audio('sounds/click.mp3');
var pulse = function(){
  var e = document.createElement("div");
  e.setAttribute('class','circle'),
  document.body.appendChild(e),
  e.style.top = event.pageY + 'px',
  e.style.left = event.pageX + 'px',
  setTimeout(function(){
    document.body.removeChild(e)
  },1000),
  audio.play()
};
document.addEventListener('click',pulse);

// SCROLL NAVBAR
var DernierScroll;
navBarWrapper.style.top='5px';
window.addEventListener('scroll',function(){
 //a chaque scroll, la fonction est appellée
  var ScrollHaut = window.pageYOffset || document.documentElement.scrollTop;
  //zone de scroll
  if(ScrollHaut > DernierScroll){ //si plus grand que celui d'avant
    navBarWrapper.style.top='-80px';
  }else{
    navBarWrapper.style.top='5px';
  }
  DernierScroll = ScrollHaut; //Nouvelle position
});



//             ,_)/
//            (-'
//         .-'\
//           "'\'"""""'),
//             )/---,(
//             / \  / |
