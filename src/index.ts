console.log("I'm from index.TS");

function extra_div() {
	const element = document.createElement('div');
	element.innerHTML = "I'm an appended div!";
	return element;
}

document.body.appendChild(extra_div());
