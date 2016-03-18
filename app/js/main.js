'use strict';

var audioCtx = new window.AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'square';
oscillator.frequency.value = 3000;
oscillator.start();
oscillator.connect(audioCtx.destination);
