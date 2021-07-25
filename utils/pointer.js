const pointer = pointerTracker.currentPointers[0];

console.log("I'm inside pointer.js")

// x offset from the top of the document
pointer.pageX;
// y offset from the top of the document
pointer.pageY;
// x offset from the top of the viewport
pointer.clientX;
// y offset from the top of the viewport
pointer.clientY;
// Unique ID for this pointer
pointer.id;
// The platform object used to create this Pointer
pointer.nativePointer;
// Returns an expanded set of Pointers for high-resolution inputs.
const pointers = pointer.getCoalesced();