(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var audioCtx = new window.AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 3000;
// oscillator.start();
oscillator.connect(audioCtx.destination);

var body = document.querySelector('body');
body.onkeydown = function (e) {
  console.log(e.keyCode);
};

body.onKeyUp = function (e) {
  console.log(e.keyCode);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksV0FBVyxJQUFJLE9BQU8sWUFBUCxFQUFmO0FBQ0osSUFBSSxhQUFhLFNBQVMsZ0JBQVQsRUFBYjtBQUNKLFdBQVcsSUFBWCxHQUFrQixNQUFsQjtBQUNBLFdBQVcsU0FBWCxDQUFxQixLQUFyQixHQUE2QixJQUE3Qjs7QUFFQSxXQUFXLE9BQVgsQ0FBbUIsU0FBUyxXQUFULENBQW5COztBQUVBLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNOLEtBQUssU0FBTCxHQUFpQixVQUFDLENBQUQsRUFBTztBQUN0QixVQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQUYsQ0FBWixDQURzQjtDQUFQOztBQUtqQixLQUFLLE9BQUwsR0FBZSxVQUFDLENBQUQsRUFBTztBQUNwQixVQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQUYsQ0FBWixDQURvQjtDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGF1ZGlvQ3R4ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbnZhciBvc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xub3NjaWxsYXRvci50eXBlID0gJ3NpbmUnO1xub3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSAzMDAwO1xuLy8gb3NjaWxsYXRvci5zdGFydCgpO1xub3NjaWxsYXRvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkub25rZXlkb3duID0gKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5rZXlDb2RlKTtcblxufTtcblxuYm9keS5vbktleVVwID0gKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5rZXlDb2RlKTtcbn07XG4iXX0=
