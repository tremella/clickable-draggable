import PointerTracker, { Pointer } from 'pointer-tracker';
// import PinchZoom from 'pinch-zoom-element';

// const pz = new PinchZoom(); // Forces bundling of pinchzoom by webpack.
const element: HTMLElement = document.getElementById('circle')
const canvas: HTMLElement = document.getElementById('canvas')

const _HEIGHT = 150 // make these not hard-coded.
const _WIDTH = 150
assignPosOnStartup() // this makes bounding it easier by assigning a style.
console.log(canvas.getBoundingClientRect())

function assignPosOnStartup(){
	element.style["top"] = '140px'
	element.style["left"] = '300px'
}


var left_border = canvas.getBoundingClientRect().x
var top_border = canvas.getBoundingClientRect().y
var bottom_border = canvas.getBoundingClientRect().height
var right_border = canvas.getBoundingClientRect().width
// console.log('HERE',left_border,top_border,right_border,bottom_border)
console.log(element.style["top"], top_border)
// if child.style["top"] <= top_border {
// 	console.log('trespass')
// }


// ensures pointer is always in middle of element during dragging
function offsetCoord(coord: number, offset: number) {
	return coord - offset
}

// puts element back in starting pos, when btn clicked
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click',()=>{
	element.style["top"] = '140px'
	element.style["left"] = '300px'
})

const pointerTracker = new PointerTracker(element, {
  start: (pointer, event) => {
	event.preventDefault();
	element.classList.remove('transform')
	return true
  },
  move: (previousPointers, changedPointers, event) => {
	  let pointer = changedPointers[0] // SOURCE
	  element.style["top"] = `${offsetCoord(pointer.pageY, (_HEIGHT/2))}`
	  element.style["left"] = `${offsetCoord(pointer.pageX, (_WIDTH/2))}`
	  if ((pointer.pageY < (top_border + (_HEIGHT/2) ))
	  || (pointer.pageY > (bottom_border - (_HEIGHT/2) ))
	  || (pointer.pageX < (left_border + (_HEIGHT/2) ))
	  || (pointer.pageX > (right_border - (_HEIGHT/2) ))){
		element.style["top"] = '140px'
		element.style["left"] = '300px'
	  }
  },
  end : () => {
	element.classList.add('transform')
  },
//   rawUpdates: false,
});




