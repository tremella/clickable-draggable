
This file is bundled with webpack and babel.
To install, run and use:
- clone this repo,
- run npm i && npm start.
- open localhost:8080 on your web browser (I use Chrome)

GOALS
[ DONE ] Drag the element around using a single finger/pointer
[ DONE ] Add a button that smoothly animates the original element back to the centre
[ DONE ] Keep the edges of the target element within a bounded region which is 20px from the edges of the screen (Q: what happens when the screen is resized? My Answer: bounded region's* borders are dynamically recalculated.)

[NOT ACHIEVED] Resize the element using two fingers (ideally this works nicely with 1.)
[NOT ACHIEVED] Prevent the target element from getting resized to more than 4x, nor less than 1/4 of its original size