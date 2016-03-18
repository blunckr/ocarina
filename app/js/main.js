'use strict';

var audioCtx = new window.AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 3000;
// oscillator.start();
oscillator.connect(audioCtx.destination);

const body = document.querySelector('body');
body.onkeydown = (e) => {
  console.log(e.keyCode);

};

body.onKeyUp = (e) => {
  console.log(e.keyCode);
};
