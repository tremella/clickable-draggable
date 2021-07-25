import PointerTracker from 'pointer-tracker';

console.log("I'm inside pointerTracker.js")

const pointerTracker = new PointerTracker(element, {
  start(pointer, event) {
      console.log('start')
    // Called when a pointer is pressed/touched within the element.
    // pointer - The new pointer. This pointer isn't included in this.currentPointers or
    //    this.startPointers yet.
    // event - The event related to this pointer.
  },
  move(previousPointers, changedPointers, event) {
      console.log('move')
    // Called when pointers have moved.
    // previousPointers - The state of the pointers before this event. This contains the same number
    //   of pointers, in the same order, as this.currentPointers and this.startPointers.
    // changedPointers - The pointers that have changed since the last move callback.
    // event - The event related to the pointer changes.
  },
  end(pointer, event, cancelled) {
      console.log('end')
    // Called when a pointer is released.
    // pointer - The final state of the pointer that ended. This pointer is now absent from
    //   this.currentPointers and this.startPointers.
    // event - The event related to this pointer.
    // cancelled - True if the event was cancelled.  Actions are cancelled when the OS takes over
    //   pointer events, for actions such as scrolling.
  },
  // Use raw pointer updates? Pointer events are usually synchronised to requestAnimationFrame.
  // However, if you're targeting a desynchronised canvas, then faster 'raw' updates are better.
  // The default is false.
  rawUpdates: false,
});

// State of the tracked pointers when they were pressed/touched.
pointerTracker.startPointers;
// Latest state of the tracked pointers. Contains the same number of pointers, and in the same order
// as this.startPointers.
pointerTracker.currentPointers;
// Remove all listeners. Call this when you're done tracking.
pointerTracker.stop();