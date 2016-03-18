(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var audioCtx = new window.AudioContext();

var body = document.querySelector('body');
var currentNode;

body.onkeydown = function (e) {
  console.log(e.keyCode, 1);
  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = 3000;
  oscillator.start();
  oscillator.connect(audioCtx.destination);
  currentNode = oscillator;
};

body.onkeyup = function (e) {
  console.log(e.keyCode, 2);
  currentNode.disconnect();
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksV0FBVyxJQUFJLE9BQU8sWUFBUCxFQUFmOztBQUVKLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNOLElBQUksV0FBSjs7QUFFQSxLQUFLLFNBQUwsR0FBaUIsVUFBQyxDQUFELEVBQU87QUFDdEIsVUFBUSxHQUFSLENBQVksRUFBRSxPQUFGLEVBQVcsQ0FBdkIsRUFEc0I7QUFFdEIsTUFBSSxhQUFhLFNBQVMsZ0JBQVQsRUFBYixDQUZrQjtBQUd0QixhQUFXLElBQVgsR0FBa0IsTUFBbEIsQ0FIc0I7QUFJdEIsYUFBVyxTQUFYLENBQXFCLEtBQXJCLEdBQTZCLElBQTdCLENBSnNCO0FBS3RCLGFBQVcsS0FBWCxHQUxzQjtBQU10QixhQUFXLE9BQVgsQ0FBbUIsU0FBUyxXQUFULENBQW5CLENBTnNCO0FBT3RCLGdCQUFjLFVBQWQsQ0FQc0I7Q0FBUDs7QUFVakIsS0FBSyxPQUFMLEdBQWUsVUFBQyxDQUFELEVBQU87QUFDcEIsVUFBUSxHQUFSLENBQVksRUFBRSxPQUFGLEVBQVcsQ0FBdkIsRUFEb0I7QUFFcEIsY0FBWSxVQUFaLEdBRm9CO0NBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXVkaW9DdHggPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xudmFyIGN1cnJlbnROb2RlO1xuXG5ib2R5Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUua2V5Q29kZSwgMSk7XG4gIHZhciBvc2NpbGxhdG9yID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICBvc2NpbGxhdG9yLnR5cGUgPSAnc2luZSc7XG4gIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMzAwMDtcbiAgb3NjaWxsYXRvci5zdGFydCgpO1xuICBvc2NpbGxhdG9yLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuICBjdXJyZW50Tm9kZSA9IG9zY2lsbGF0b3I7XG59O1xuXG5ib2R5Lm9ua2V5dXAgPSAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmtleUNvZGUsIDIpO1xuICBjdXJyZW50Tm9kZS5kaXNjb25uZWN0KCk7XG59O1xuIl19
