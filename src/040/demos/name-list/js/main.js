/*
	TASK: prompt for individual names and add them to 
		a list.  Confirm after each name is entered
		whether the user would like to enter another
		name or not.
*/
const myProgram = function(evt) {
	let outDiv = document.querySelector('div');

	let myHTML = '';

	// Add my names
	do {
		let aName = prompt('Enter name: ');
		myHTML += `<li>${aName}</li>`; // Template String
	} while(confirm('Another name?'));

	myHTML = `<ul>${myHTML}</ul>`; // Template String

	// display the list
	outDiv.innerHTML = myHTML;
}

// By explicitly waiting for the DOMContentLoaded event,
// I can "defer" my program code from running until after
// the DOM (the <body>) is loaded.
document.addEventListener('DOMContentLoaded', myProgram);
