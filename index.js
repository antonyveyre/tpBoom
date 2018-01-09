//click event on the button
let button = document.querySelector('#pushTheButton');
let counterTxt = document.querySelector('#counter');
button.addEventListener('click', detonateClick, true);


function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function detonateClick() {


  // 1) Générer deux nombres aléatoire entre 0 et 10

   let rand1 = getRandomArbitrary(1,4);
   let rand2 = getRandomArbitrary(1,4);

  // 2) Poser la question avec window.prompt : rand1 + rand2 ?
   let answer= window.prompt(rand1+'+'+rand2+'=');

  //3) Tester la réponse
  if (answer == rand1+rand2){
    // Ici la réponse et correct, afficher un alert avec un message BOOM
    window.alert('BOOM');
    counter();

  } else {
    if (answer==null){
//      window.alert('operation anulé');
      counter();

    }
    else {
      window.alert('mauvaise reponse !!!');
    }
    // Mauvaise réponse deux cas possible
    // l'utilsateur a appuyé sur annuler
    // ou l'utilisateur a renseigné la mauvaise réponse
  }
}

function counter() {

  let counterDiv = document.querySelector('#counter');
  let n = 6;
  let interval = setInterval(() => {
        n -=1;
        if (n=='-1'){
          clearInterval(interval);
          counterTxt.textContent = '';
          boom();
          return;
        }
        counterTxt.textContent = n;

  }, 1000);
}


function boom() {
  let s =10;
  let boomDiv = document.querySelector('#boom');
  boomDiv.style.display = 'block';
  let t = window.innerHeight/2;
  let l = window.innerWidth/2;
  boomDiv.style.left = l+'px';
  boomDiv.style.top = t+'px';


  // console.log(boomDiv.style.top);
  // console.log(window.innerWidth);
  // console.log(window.innerHeight);


  let interval = setInterval(() => {
    //increase the with and heigh of boomDiv
    // console.log(boomDiv.style.top);
    // console.log(boomDiv.style.left);

    boomDiv.style.margin = 'auto' ;

    boomDiv.style.top = t+'px';
    boomDiv.style.left = l+'px';
    boomDiv.style.width = s+'px';
    boomDiv.style.height = s+'px';
  //  console.log(t);
    s++;
    t=t-0.5;
    l=l-0.5;
    if (s=='1000'){
      clearInterval(interval);
      return;
    }
  }, 10);
}






// advanced 1
// complétez et appelez cette fonction quand la réponse est correct
// Cette fonction utilise window.setInterval pour afficher un compteur dans la paage 5... 4... 3...
//5... 4 ... 3 ..
/*
function counter() {
  let counterDiv = document.querySelector('#counter');
  let n = 5;
  let interval = setInterval(() => {
    //complete
  }, 1000);
}
*/


// advanced 2
// completez et appelez cette fonction quand le compteur vaut 0
// Utiliser cette fonction pour afficher une div au milieu de l'écran (use innerWidth)
// Ensuite augmenter la largeur et hauteur de la div pour simuler la bombe (use setInterval again)
/*
function boom() {
  let s =10;
  let boomDiv = document.querySelector('#boom');
  boomDiv.style.display = 'block';
  // boomDiv.style.left =
  // boomDiv.style.top =


  let interval = setInterval(() => {
    //increase the with and heigh of boomDiv

  }, 10);
}

 */
