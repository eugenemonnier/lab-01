/* eslint-disable no-undef */
'use strict';
const colorArray = ['wheat', 'teal', 'blue', 'red', 'green', 'yellow', 'slategray', 'slateblue', 'tomato'];

window.onresize = changeColors;

function changeColors () {
  // if (window.innerWidth < 481) {
  colorArray.forEach(function(element, index) {
    $('#box' + index).css({'background-color' : element});
  });
  // } else if (window.innerWidth >= 481 && window.innerWidth < 769) {
  //   colorArray.forEach(function(element, index) {
  //     let elemId = '#box' + index;
  //     console.log(elemId);
  //     $(elemId).css({'background-color' : element});
  //   });
  // } else {
  //   colorArray.forEach(function(element, index) {
  //     let elemId = '#box' + index;
  //     console.log(elemId);
  //     $(elemId).css({'background-color' : element});
  //   });
  // }
}
// changeColors();
