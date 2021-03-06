/* eslint-disable no-undef */
'use strict';
const colorArray = ['wheat', 'teal', 'blue', 'red', 'green', 'yellow', 'slategray', 'slateblue', 'tomato'];

window.onresize = changeColors;
function changeColors () {
  let colorIndex = 0;
  if (window.innerWidth < 481) {
    colorArray.forEach(function(element, index) {
      $('#box' + index).css({'background-color' : element});
    });
  } else if (window.innerWidth >= 481 && window.innerWidth < 961) {
    colorArray.forEach(function(element, index) {
      if (colorIndex + 1 === colorArray.length) {
        colorIndex = -1;
      }
      colorIndex += 1;
      let elemId = '#box' + index;
      console.log(elemId);
      $(elemId).css({'background-color' : colorArray[colorIndex]});
    });
  } else {
    colorIndex = 1;
    colorArray.forEach(function(element, index) {
      let elemId = '#box' + index;
      console.log(elemId);
      if (colorIndex + 1 === colorArray.length) {
        colorIndex = -1;
      }
      colorIndex += 1;
      $(elemId).css({'background-color' : colorArray[colorIndex]});
    });
  }
}
changeColors();
