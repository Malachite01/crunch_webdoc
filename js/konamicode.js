// Définition des touches a écouter
var DefTouches = {37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
//Séquence pour le konamicode (déclencheur)
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
// variable de position dans le konamicode
var konamiCodePosition = 0;

document.addEventListener('keydown', function (e) {
  // avoir la valeur de la touche depuis le keymap
  var key = DefTouches[e.keyCode];
  // avoir la valeur nécessaire depuis le konamicode
  var KeyNécessaire = konamiCode[konamiCodePosition];
  if (key == KeyNécessaire) {
    // aller a la touche d'apres dans le konamicode
    konamiCodePosition++;
    // NOTES DE PIANO
    if(konamiCodePosition == 1) {
      var audio1 = new Audio('sounds/do.mp3');
      audio1.play();
    }
    else if(konamiCodePosition == 2) {
      var audio2 = new Audio('sounds/re.mp3');
      audio2.play();
    }
    else if(konamiCodePosition == 3) {
      var audio3 = new Audio('sounds/mi.mp3');
      audio3.play();
    }
    else if(konamiCodePosition == 4) {
      var audio4 = new Audio('sounds/fa.mp3');
      audio4.play();
    }
    else if(konamiCodePosition == 5) {
      var audio5 = new Audio('sounds/sol.mp3');
      audio5.play();
    }
    else if(konamiCodePosition == 6) {
      var audio6 = new Audio('sounds/la.mp3');
      audio6.play();
    }
    else if(konamiCodePosition == 7) {
      var audio7 = new Audio('sounds/si.mp3');
      audio7.play();
    }
    else if(konamiCodePosition == 8) {
      var audio8 = new Audio('sounds/do2.mp3');
      audio8.play();
    }
    else if(konamiCodePosition == 9) {
      var audio9 = new Audio('sounds/re2.mp3');
      audio9.play();
    }
    // et si toute les touches sont bonne, ACTIVER le konamicode
    else if (konamiCodePosition == konamiCode.length) {
      EasterEgg();
      konamiCodePosition = 0;
    }
    } else {
      konamiCodePosition = 0;
    }
});


// DEFINITION variables EasterEgg (en dehors car utilisée dans le reverse)
var IMGMatrix = document.querySelector('#EasterEgg');
var ImgHautV2 = document.querySelector('#ImgDuHaut');
var Logo2 = document.querySelector('#inline-nav-logo');
var Tag = document.querySelector('#tag');
// txt couleur et src images
var P = document.getElementsByTagName('p');
var H2 = document.getElementsByTagName('h2');
var txtNavBar = document.getElementsByClassName('a-nav-bar');
var txtEchap = document.querySelector('#PressToEsc');
var clearClignotte1; //Pour dégager le texte qui clignotte au reverse

// FONCTION EASTEREGG
function EasterEgg() {
  var audio = new Audio('sounds/kling.mp3');
  audio.play();
  let ImageReverse = document.querySelector('#UnlockIMG');
  ImageReverse.style.display ='flex';
  Tag.style.display ='block';

  setTimeout(affichageEasterEgg,3000);
  function affichageEasterEgg() {
    ImageReverse.style.display ='none';
    IMGMatrix.style.display ='block';
    for (var i = 0; i < P.length; i++) {
      P[i].style.color = "#ff0000";
    };
    for (var i = 0; i < H2.length; i++) {
      H2[i].style.color = "#ff0000";
      H2[i].style.fontFamily = "Retro";
    };
    for (var i = 0; i < txtNavBar.length; i++) {
      txtNavBar[i].style.color = "#ff0000";
      txtNavBar[i].style.fontFamily = "Retro";
    };
    ImgHautV2.style.backgroundImage = "url('images/oui2.png')";
    Logo2.src = 'images/westillwork.png';
    document.body.style.backgroundImage = "linear-gradient(#000,#ff0000)";
    txtEchap.style.display = 'block';


    // CLIGNOTTEMENTS
    clearClignotte1 = setInterval(Clignotte, 900);
    function Clignotte(){
      txtEchap.style.display = 'block';
    }
    setInterval(Clignotte2, 1800);
    function Clignotte2(){
      txtEchap.style.display = 'none';
    }
  }
}





//             ,_)/
//            (-'
//         .-'\
//           "'\'"""""'),
//             )/---,(
//             / \  / |
