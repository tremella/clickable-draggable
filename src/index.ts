import PointerTracker, { Pointer } from 'pointer-tracker';

const element: HTMLElement = document.getElementById('circle')
const _HEIGHT = 150 // make these not hard-coded.
const _WIDTH = 150

function offsetCoord(coord: number, offset: number) {
	return coord - offset
}
const pointerTracker = new PointerTracker(element, {
  start: (pointer, event) => {

	  event.preventDefault();
	  console.log(pointer, 'pointer')
	  return true
  },
  move: (previousPointers, changedPointers, event) => {
	  let pointer = changedPointers[0]
	  console.log(event, 'move event')
	  element.style["top"] = `${offsetCoord(pointer.pageY, (_HEIGHT/2))}`
	  element.style["left"] = `${offsetCoord(pointer.pageX, (_WIDTH/2))}`
  },
  end : () => {
	  console.log('inside end')
  },
  // Use raw pointer updates? Pointer events are usually synchronised to requestAnimationFrame.
  // However, if you're targeting a desynchronised canvas, then faster 'raw' updates are better.
  // The default is false.
//   rawUpdates: false,
});

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

// console.log("I'm inside pointer.js")

// pointer.pageX; // x offset from the top of the document
// pointer.pageY;// y offset from the top of the document
// pointer.clientX;// x offset from the top of the viewport
// pointer.clientY;// y offset from the top of the viewport

// pointer.id;// Unique ID for this pointer
// pointer.nativePointer;// The platform object used to create this Pointer

// const pointers = pointer.getCoalesced(); // Returns an expanded set of Pointers for high-resolution inputs.
// // **** //



