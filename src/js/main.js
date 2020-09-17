'use strict';

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

  // finish animation
  setTimeout(() => {
    key.classList.remove('piano-tone-down');
  }, 500);
}

//add event listerners, for mouseover,click, and keydown
window.addEventListener('keydown', playNote);
window.addEventListener('mouseover', playNote);

const scale = document.querySelectorAll('div[data-key]');
for (let i = 0, note; (note = scale[i]); i++) {
  note.addEventListener('click', playNote);
}
