import PointerTracker, { Pointer } from 'pointer-tracker';
import PinchZoom from 'pinch-zoom-element';

const pz = new PinchZoom(); // Force bunding of pinchzoom by webpack.
const element: HTMLElement = document.getElementById('circle')
const _HEIGHT = 150 // make these not hard-coded.
const _WIDTH = 150

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

// once I enable this, I can't move the circle any more.

// //Uncaught TypeError: document.querySelector(...).setTransform is not a function

// pinchZoom.setTransform({
// 	scale: 19,
// 	x: 279,
// 	y: 279,
// 	// Fire a 'change' event if values are different to current values
// 	allowChangeEvent: false,
//   });

// // Uncaught TypeError: document.querySelector(...).scaleTo is not a function

// pinchZoom.scaleTo(0.5, {
// 	// Transform origin. Can be a number, or string percent, eg "50%"
// 	originX: 50,
// 	originY: 50,
// 	// Should the transform origin be relative to the container, or content?
// 	relativeTo: 'content',
// 	// Fire a 'change' event if values are different to current values
// 	allowChangeEvent: false,
//   });




const pointerTracker = new PointerTracker(element, {
  start: (pointer, event) => {
	event.preventDefault();
	element.classList.remove('transform')
	return true
  },
  move: (previousPointers, changedPointers, event) => {
	  let pointer = changedPointers[0]
	  element.style["top"] = `${offsetCoord(pointer.pageY, (_HEIGHT/2))}`
	  element.style["left"] = `${offsetCoord(pointer.pageX, (_WIDTH/2))}`
  },
  end : () => {
	element.classList.add('transform')
  },
  // Use raw pointer updates? Pointer events are usually synchronised to requestAnimationFrame.
  // However, if you're targeting a desynchronised canvas, then faster 'raw' updates are better.
  // The default is false.
//   rawUpdates: false,
});


//*****//
// // State of the tracked pointers when they were pressed/touched.
// pointerTracker.startPointers;
// // Latest state of the tracked pointers. Contains the same number of pointers, and in the same order
// // as this.startPointers.
// pointerTracker.currentPointers;
// // Remove all listeners. Call this when you're done tracking.
// // pointerTracker.stop();

// **** //
// console.log(pointerTracker.currentPointers)
// const pointer = pointerTracker.currentPointers[0];

// pointer.pageX; // x offset from the top of the document
// pointer.pageY;// y offset from the top of the document
// pointer.clientX;// x offset from the top of the viewport
// pointer.clientY;// y offset from the top of the viewport

// pointer.id;// Unique ID for this pointer
// pointer.nativePointer;// The platform object used to create this Pointer

// const pointers = pointer.getCoalesced(); // Returns an expanded set of Pointers for high-resolution inputs.
// // **** //



