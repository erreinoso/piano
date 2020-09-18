'use strict';
const nohelp = document.querySelector('.help1');
console.log(nohelp);
const alphabetical = document.querySelector('.help2');
const syllabic = document.querySelector('.help3');
const btnSwitch = document.querySelector('.switch');
//function that add animation and sound
function playNote(ev) {
  let code = '';
  if (ev.keyCode) {
    code = ev.keyCode;
  } else {
    code = ev.toElement.dataset.key;
  }

  const key = document.querySelector(`.piano-tone[data-key="${code}"]`);
  const audio = document.querySelector(`audio[data-key="${code}"]`);

  //play sound
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  //start animation
  key.classList.add('piano-tone-down');
  // console.log('key', key);

  // finish animation
  setTimeout(() => {
    key.classList.remove('piano-tone-down');
  }, 500);
}

//function to write notes

function removeHelp(ev) {
  const keyboard = document.querySelectorAll('.piano-tone');

  for (let i = 0, key; (key = keyboard[i]); i++) {
    key.innerHTML = '';
  }
}

function addHelpAlphabetical(ev) {
  document.querySelector('.piano-keyC').innerHTML = 'C';
  document.querySelector('.piano-keyD').innerHTML = 'D';
  document.querySelector('.piano-keyE').innerHTML = 'E';
  document.querySelector('.piano-keyF').innerHTML = 'F';
  document.querySelector('.piano-keyG').innerHTML = 'G';
  document.querySelector('.piano-keyA').innerHTML = 'A';
  document.querySelector('.piano-keyB').innerHTML = 'B';
}

function addHelpSyllabical(ev) {
  document.querySelector('.piano-keyC').innerHTML = 'DO';
  document.querySelector('.piano-keyD').innerHTML = 'RE';
  document.querySelector('.piano-keyE').innerHTML = 'MI';
  document.querySelector('.piano-keyF').innerHTML = 'FA';
  document.querySelector('.piano-keyG').innerHTML = 'SOL';
  document.querySelector('.piano-keyA').innerHTML = 'LA';
  document.querySelector('.piano-keyB').innerHTML = 'SI';
}

//eventListerners, for mouseover, click, and keydown
window.addEventListener('keydown', playNote);
window.addEventListener('mouseover', playNote);

const scale = document.querySelectorAll('div[data-key]');
for (let i = 0, note; (note = scale[i]); i++) {
  note.addEventListener('click', playNote);
}
//eventListerners, for help
nohelp.addEventListener('change', removeHelp);
alphabetical.addEventListener('change', addHelpAlphabetical);
syllabic.addEventListener('change', addHelpSyllabical);

//switch day night
btnSwitch.addEventListener('click', changeMode);

function changeMode() {
  const html = document.querySelector('html');
  html.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
}
