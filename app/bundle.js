(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var audioCtx = new window.AudioContext();

var body = document.querySelector('body');
var currentNode;

body.onkeydown = function (e) {
  console.log(e.keyCode, 1);
  var oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  switch (e.keyCode) {
    case 32:
      oscillator.frequency.value = 1174;
      break;
    case 40:
      oscillator.frequency.value = 1396;
      break;
    case 37:
      //left
      oscillator.frequency.value = 1975;
      break;
    case 38:
      //up
      oscillator.frequency.value = 2349;
      break;
    case 39:
      //right
      oscillator.frequency.value = 1760;
      break;
    default:
      oscillator.frequency.value = 0;
      break;
  }

  //oscillator.frequency.value = 1000;
  oscillator.start();
  oscillator.connect(audioCtx.destination);
  currentNode = oscillator;
};

body.onkeyup = function (e) {
  console.log(e.keyCode, 2);
  currentNode.disconnect();
};

//Notes
//(A)  D    36.71   1174
//(CV) F    43.65
//(C>) A    55.00
//(C<) B    61.74
//(C^) D    73.42

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksV0FBVyxJQUFJLE9BQU8sWUFBUCxFQUFmOztBQUVKLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNOLElBQUksV0FBSjs7QUFFQSxLQUFLLFNBQUwsR0FBaUIsVUFBQyxDQUFELEVBQU87QUFDdEIsVUFBUSxHQUFSLENBQVksRUFBRSxPQUFGLEVBQVcsQ0FBdkIsRUFEc0I7QUFFdEIsTUFBSSxhQUFhLFNBQVMsZ0JBQVQsRUFBYixDQUZrQjtBQUd0QixhQUFXLElBQVgsR0FBa0IsTUFBbEIsQ0FIc0I7QUFJdEIsVUFBTyxFQUFFLE9BQUY7QUFDTCxTQUFLLEVBQUw7QUFDRSxpQkFBVyxTQUFYLENBQXFCLEtBQXJCLEdBQTZCLElBQTdCLENBREY7QUFFRSxZQUZGO0FBREYsU0FJTyxFQUFMO0FBQ0UsaUJBQVcsU0FBWCxDQUFxQixLQUFyQixHQUE2QixJQUE3QixDQURGO0FBRUUsWUFGRjtBQUpGLFNBT08sRUFBTDs7QUFDRSxpQkFBVyxTQUFYLENBQXFCLEtBQXJCLEdBQTZCLElBQTdCLENBREY7QUFFRSxZQUZGO0FBUEYsU0FVTyxFQUFMOztBQUNFLGlCQUFXLFNBQVgsQ0FBcUIsS0FBckIsR0FBNkIsSUFBN0IsQ0FERjtBQUVFLFlBRkY7QUFWRixTQWFPLEVBQUw7O0FBQ0UsaUJBQVcsU0FBWCxDQUFxQixLQUFyQixHQUE2QixJQUE3QixDQURGO0FBRUUsWUFGRjtBQWJGO0FBaUJJLGlCQUFXLFNBQVgsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBN0IsQ0FERjtBQUVFLFlBRkY7QUFoQkY7OztBQUpzQixZQTBCdEIsQ0FBVyxLQUFYLEdBMUJzQjtBQTJCdEIsYUFBVyxPQUFYLENBQW1CLFNBQVMsV0FBVCxDQUFuQixDQTNCc0I7QUE0QnRCLGdCQUFjLFVBQWQsQ0E1QnNCO0NBQVA7O0FBK0JqQixLQUFLLE9BQUwsR0FBZSxVQUFDLENBQUQsRUFBTztBQUNwQixVQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQUYsRUFBVyxDQUF2QixFQURvQjtBQUVwQixjQUFZLFVBQVosR0FGb0I7Q0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdWRpb0N0eCA9IG5ldyB3aW5kb3cuQXVkaW9Db250ZXh0KCk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG52YXIgY3VycmVudE5vZGU7XG5cbmJvZHkub25rZXlkb3duID0gKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5rZXlDb2RlLCAxKTtcbiAgdmFyIG9zY2lsbGF0b3IgPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gIG9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJztcbiAgc3dpdGNoKGUua2V5Q29kZSl7XG4gICAgY2FzZSAzMjpcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMTE3NDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA6XG4gICAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IDEzOTY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM3OiAvL2xlZnRcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMTk3NTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzg6IC8vdXBcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMjM0OTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6IC8vcmlnaHRcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gMTc2MDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IDA7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vb3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSAxMDAwO1xuICBvc2NpbGxhdG9yLnN0YXJ0KCk7XG4gIG9zY2lsbGF0b3IuY29ubmVjdChhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4gIGN1cnJlbnROb2RlID0gb3NjaWxsYXRvcjtcbn07XG5cbmJvZHkub25rZXl1cCA9IChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUua2V5Q29kZSwgMik7XG4gIGN1cnJlbnROb2RlLmRpc2Nvbm5lY3QoKTtcbn07XG5cblxuLy9Ob3Rlc1xuLy8oQSkgIEQgICAgMzYuNzEgICAxMTc0XG4vLyhDVikgRiAgICA0My42NVxuLy8oQz4pIEEgICAgNTUuMDBcbi8vKEM8KSBCICAgIDYxLjc0XG4vLyhDXikgRCAgICA3My40MiJdfQ==
