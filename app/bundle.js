(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var audioCtx = new window.AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'square';
oscillator.frequency.value = 3000;
oscillator.start();
oscillator.connect(audioCtx.destination);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksV0FBVyxJQUFJLE9BQU8sWUFBUCxFQUFmO0FBQ0osSUFBSSxhQUFhLFNBQVMsZ0JBQVQsRUFBYjtBQUNKLFdBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBLFdBQVcsU0FBWCxDQUFxQixLQUFyQixHQUE2QixJQUE3QjtBQUNBLFdBQVcsS0FBWDtBQUNBLFdBQVcsT0FBWCxDQUFtQixTQUFTLFdBQVQsQ0FBbkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXVkaW9DdHggPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpO1xudmFyIG9zY2lsbGF0b3IgPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5vc2NpbGxhdG9yLnR5cGUgPSAnc3F1YXJlJztcbm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMzAwMDtcbm9zY2lsbGF0b3Iuc3RhcnQoKTtcbm9zY2lsbGF0b3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4iXX0=
