import PointerTracker, { Pointer } from 'pointer-tracker';

const element: HTMLElement = document.getElementById('circle')
const _HEIGHT = 150
const _WIDTH = 150

function offsetCoord(coord: number, offset: number) {
	return coord - offset
}
const pointerTracker = new PointerTracker(element, {
  start: (pointer, event) => {
	//   if (pointerTracker.currentPointers.length !== 0) {
	// 	  return false
	//   }
	  event.preventDefault(); // event - The event related to this pointer.
	//   console.log('inside start')
	  console.log(pointer, 'pointer')
	  console.log(event, 'start event')
	  return true
    // pointer - The new pointer. This pointer isn't included in this.currentPointers or
    //    this.startPointers yet.
  },
  move: (previousPointers, changedPointers, event) => {
	  let pointer = changedPointers[0]
	  console.log(event, 'move event')
	  console.log(previousPointers, 'previous')
	  console.log(changedPointers, 'changed')
	  element.style["top"] = `${offsetCoord(pointer.pageY, (_HEIGHT/2))}`
	  element.style["left"] = `${offsetCoord(pointer.pageX, (_WIDTH/2))}`
    // previousPointers - The state of the pointers before this event. This contains the same number
    //   of pointers, in the same order, as this.currentPointers and this.startPointers.
    // changedPointers - The pointers that have changed since the last move callback.
    // event - The event related to the pointer changes.
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



