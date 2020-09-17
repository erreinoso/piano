'use strict';

function playNote(ev) {
  const key = document.querySelector(`.piano-tone[data-key="${ev.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('piano-tone-down');
  console.log('playnote key', key);
  // const keyAfter = document.querySelector(
  //   `.piano-tone[data-key="${ev.keyCode}"]`
  // );
  // console.log('keyAfter', keyAfter);
  setTimeout(() => {
    key.classList.remove('piano-tone-down');
  }, 500);
}

window.addEventListener('keydown', playNote);
