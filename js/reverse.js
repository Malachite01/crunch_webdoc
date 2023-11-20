// Définition de la touche a presser pour dégager
var DefEsc = {27: 'esc'};
var Liste = ['esc'];
var ListePosition = 0;

document.addEventListener('keydown', function(e) {

  var Touche = DefEsc[e.keyCode];
  var ToucheNécessaire = Liste[ListePosition];

  if(Touche == ToucheNécessaire) {
    ListePosition++;
    if (ListePosition == Liste.length) {
      ReverseEasterEgg();
      ListePosition = 0;
    } else {
      ListePosition = 0;
    }
  }
});

function ReverseEasterEgg() {
  var audio = new Audio('sounds/swoop.mp3');
  audio.play();
  let ImageCadenasReverse = document.querySelector('#ReverseIMG');
  ImageCadenasReverse.style.display ='flex';
  Tag.style.display ='none';

  setTimeout(CacherEasterEgg,2500);
  function CacherEasterEgg() {
    IMGMatrix.style.display ='none';
    ImageCadenasReverse.style.display ='none';
    for (var i = 0; i < P.length; i++) {
      P[i].style.color = "#fcfcfc";
    };
    for (var i = 0; i < H2.length; i++) {
      H2[i].style.color = "#fcfcfc";
      H2[i].style.fontFamily = "Jose";
    };
    for (var i = 0; i < txtNavBar.length; i++) {
      txtNavBar[i].style.color = "#fcfcfc";
      txtNavBar[i].style.fontFamily = "Fredoka";
    };
    ImgHautV2.style.backgroundImage = "url('images/oui.png')";
    Logo2.src = 'images/Logo.png';
    document.body.style.backgroundImage = "linear-gradient(to right bottom,#7faaf5, #6d9ef3, #4684ee)";
    clearInterval(clearClignotte1);
  }
}



//             ,_)/
//            (-'
//         .-'\
//           "'\'"""""'),
//             )/---,(
//             / \  / |
