import PointerTracker, { Pointer } from 'pointer-tracker';

const element: HTMLElement = document.getElementById('circle')
const canvas: HTMLElement = document.getElementById('canvas')
const resetButton = document.getElementById('reset')

const _HEIGHT = (parseInt(((element.style["height"]).split("px"))[0])) // make these not hard-coded.
const _WIDTH = (parseInt(((element.style["width"]).split("px"))[0]))
assignPosOnStartup()

 // this makes bounding easier by assigning a style.
function assignPosOnStartup(){
	element.style["top"] = '140px'
	element.style["left"] = '300px'
}

// ensures pointer is always in middle of element during dragging
function offsetCoord(coord: number, offset: number) {
	return coord - offset
}

// puts element back in  starting pos, when btn clicked
resetButton.addEventListener('click',()=>{
	element.style["top"] = '140px'
	element.style["left"] = '300px'
})

function borderGuard(child: Pointer, parent: HTMLElement) {
	var left_border = canvas.getBoundingClientRect().x
	var top_border = canvas.getBoundingClientRect().y
	var bottom_border = canvas.getBoundingClientRect().height
	var right_border = canvas.getBoundingClientRect().width

	if ((child.pageY < (top_border + (_HEIGHT/2) )) //fine
	|| (child.pageY > (bottom_border - (_HEIGHT/2) ))
	|| (child.pageX < (left_border + (_HEIGHT/2) )) // fine
	|| (child.pageX > (right_border - (_HEIGHT/2) ))){
	  element.classList.add('transform')
	  element.style["top"] = '140px'
	  element.style["left"] = '300px'
	}
}

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
	  borderGuard(pointer, canvas)
  },
  end : () => {
	element.classList.add('transform')
  },
//   rawUpdates: false,
});




