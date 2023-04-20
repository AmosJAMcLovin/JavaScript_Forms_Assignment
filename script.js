'use strict';
/*
	WEB 230 Winter 2022
	Assignment 7
	Amos Johnson
	0692734
	04/21/2022
*/

/*[[[STEP 1]]]
Select the form element and save it in a variable. 
From here we can access all of the form fields. */

// Use the query selector to save the form element in a variable
let form = document.querySelector("form");

/* [[[STEP 2 - PART 1]]]
When the page loads, add the password value "monkey" */

// Create variable for password element
const allPass = form.elements.password;
// Apply default value 'monkey to password
allPass.value = "monkey";

/* [[[STEP 2 - PART 2]]]
select the favourite city "New York" */

// Create variable for city element
const allCity = form.elements.city;
// Apply default value 'New York' to city list
allCity.value = "New York";

/* [[[STEP 2 - PART 3]]]
clear the textarea */

// Create variable for textArea element
const allText = form.elements.comment;
// Apply default value of an empty string to textbox
allText.value = "";

/* [[[STEP 3]]]
// Add an event handler to the "name" field to change the background color 
// of the "name" field to green when the length of the string is at least 5 characters. 
// Make sure the color is removed if thecount goes below 5. (Hint: input event) */

// Create variable for First Name element
const input = form.elements.firstName;

// Event Listener turns background colour green when string is more than 5 characters
input.addEventListener('input', () => {
if (input.value.length > 4) {
	input.style.background = "green";
	}	
else if (input.value.length < 4) {
	input.style.background = "white";
}
});

/* [[[STEP 4]]]
Add an event handler to the "Show" button to display the password. 
(Hint: change the field type to "text") Also, prevent the form from submitting. */

// Create variable for the first button (show)
const show = document.querySelector('button');

// Event Listener that allows the 'show' button to reveal the password
show.addEventListener('click', event => {
	allPass.type = "text";
	event.preventDefault(submit);
});

/* [[[STEP 5]]]
When the checkbox is checked enable the "Send Data" button, when unchecked disable it. */

// Create variables for both the checkbox and submit elements
const checkbox = form.elements.accept;
const submit = form.elements.send;

// Event Listener where submit button is only enabled when clicking the checkbox
checkbox.addEventListener('click', (event) => {
	if (event.target.checked) {
		submit.disabled = false;
	}
	else {
		submit.disabled = true;
	}
});

/* [[[STEP 6 - PART 1]]]
When the form submits:check that the favourite food is "Apple". If not, do not submit the form 
and show an alertbox that tells the user what food they should like. 
(Hint: remember that the value of a formfield is always a string.) */

// Create variable for favourite food element
const favFood = form.elements.food;

// Create event listener where the form won't submit unless user's favourite food is 'Apple'
submit.addEventListener('click', event => {
	if (favFood.value == 2) {
		console.log("Good work");
	}
	else if (favFood.value != "Apple") {
		event.preventDefault();
		alert("Apples are your favourite food! Capeesh?");
	};
});

/* [[[STEP 6 - PART 2]]]
See if any text is selected in the textarea. If it is, do not submit the form
and show an alertbox asking the user why they selected that text. */

const highlightedText = '';

allText.addEventListener('change', event => {
if (event.getSelection()) {
	highlightedText = document.getSelection().toString();
	event.preventDefault();
	alert("Why did you select that text");
}
else {
	console.log("clear");
}
});

/* [[[STEP 7]]]
When the user enters their first name (change event) save the value to localStorage. 
When thepage loads, check to see if there is a value stored. If so, fill in the first name with that value. 

(This is tricky to test since most browsers will keep the form data over page refresh. 
To check if it is working, open a new tab in your browser and copy the URL to the new tab. The first name should be filled in.) */

input.addEventListener('change', () => {
	localStorage.setItem('firstName', '');
	console.log(localStorage.getItem('firstName'));
});

