'use strict';

var audioCtx = new window.AudioContext();

const body = document.querySelector('body');
var currentNode;

body.onkeydown = (e) => {
  console.log(e.keyCode, 1);
  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = 3000;
  oscillator.start();
  oscillator.connect(audioCtx.destination);
  currentNode = oscillator;
};

body.onkeyup = (e) => {
  console.log(e.keyCode, 2);
  currentNode.disconnect();
};
