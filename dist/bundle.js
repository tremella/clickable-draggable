(()=>{"use strict";class t{constructor(t){this.id=-1,this.nativePointer=t,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,self.Touch&&t instanceof Touch?this.id=t.identifier:e(t)&&(this.id=t.pointerId)}getCoalesced(){return"getCoalescedEvents"in this.nativePointer?this.nativePointer.getCoalescedEvents().map((e=>new t(e))):[this]}}const e=t=>self.PointerEvent&&t instanceof PointerEvent,n=()=>{};var i=document.getElementById("circle");function s(t,e){return t-e}new class{constructor(t,e){this._element=t,this.startPointers=[],this.currentPointers=[];const{start:i=(()=>!0),move:s=n,end:r=n}=e;this._startCallback=i,this._moveCallback=s,this._endCallback=r,this._pointerStart=this._pointerStart.bind(this),this._touchStart=this._touchStart.bind(this),this._move=this._move.bind(this),this._triggerPointerEnd=this._triggerPointerEnd.bind(this),this._pointerEnd=this._pointerEnd.bind(this),this._touchEnd=this._touchEnd.bind(this),self.PointerEvent?this._element.addEventListener("pointerdown",this._pointerStart):(this._element.addEventListener("mousedown",this._pointerStart),this._element.addEventListener("touchstart",this._touchStart),this._element.addEventListener("touchmove",this._move),this._element.addEventListener("touchend",this._touchEnd))}_triggerPointerStart(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}_pointerStart(n){0===n.button&&this._triggerPointerStart(new t(n),n)&&(e(n)?(this._element.setPointerCapture(n.pointerId),this._element.addEventListener("pointermove",this._move),this._element.addEventListener("pointerup",this._pointerEnd)):(window.addEventListener("mousemove",this._move),window.addEventListener("mouseup",this._pointerEnd)))}_touchStart(e){for(const n of Array.from(e.changedTouches))this._triggerPointerStart(new t(n),e)}_move(e){const n=this.currentPointers.slice(),i="changedTouches"in e?Array.from(e.changedTouches).map((e=>new t(e))):[new t(e)],s=[];for(const t of i){const e=this.currentPointers.findIndex((e=>e.id===t.id));-1!==e&&(s.push(t),this.currentPointers[e]=t)}0!==s.length&&this._moveCallback(n,s,e)}_triggerPointerEnd(t,e){const n=this.currentPointers.findIndex((e=>e.id===t.id));return-1!==n&&(this.currentPointers.splice(n,1),this.startPointers.splice(n,1),this._endCallback(t,e),!0)}_pointerEnd(n){if(this._triggerPointerEnd(new t(n),n))if(e(n)){if(this.currentPointers.length)return;this._element.removeEventListener("pointermove",this._move),this._element.removeEventListener("pointerup",this._pointerEnd)}else window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}_touchEnd(e){for(const n of Array.from(e.changedTouches))this._triggerPointerEnd(new t(n),e)}}(i,{start:function(t,e){return e.preventDefault(),!0},move:function(t,e,n){var r=e[0];i.style.top=""+s(r.pageY,75),i.style.left=""+s(r.pageX,75)},end:function(){}}),document.getElementById("reset").addEventListener("click",(function(){console.log("clicked")}))})();