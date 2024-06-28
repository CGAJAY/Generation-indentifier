// Grabbed the form element
let generationForm = document.getElementById(
	"generation-form"
);

// Object with generation info
let generationsInfo = [
	{
		startYear: 2013,
		endYear: parseInt(new Date().getFullYear()),
		genName: "Generation Alpha",
		image: "images/generation-Alpha.webp",
	},
	{
		startYear: 1997,
		endYear: 2012,
		genName: "Generation Z",
		image: "images/generation-z.avif",
	},
	{
		startYear: 1981,
		endYear: 1996,
		genName: "Millennial",
		image: "images/millennial.jpg",
	},
	{
		startYear: 1965,
		endYear: 1980,
		genName: "Generation X",
		image: "images/generation-x.jpg",
	},
	{
		startYear: 1946,
		endYear: 1964,
		genName: "Baby Boomer",
		image: "images/baby-boomer.jpg",
	},
	{
		startYear: 1928,
		endYear: 1945,
		genName: "Silent Generation",
		image: "images/silent-generation.jpg",
	},
	{
		startYear: 1901,
		endYear: 1927,
		genName: "G.I Generation",
		image: "images/g-i-generation.jpg",
	},
	{
		startYear: 1883,
		endYear: 1900,
		genName: "Lost Generation",
		image: "images/lost-generation.jpg",
	},
];

// Bubble Sort function to sort the array in descending order
function bubbleSort(arr) {
	// Get the length of the array
	let n = arr.length;
	// Variable to track if any elements were swapped during the iteration
	let swapped;

	// Perform Bubble Sort
	do {
		// Initialize swapped to false at the start of each iteration
		swapped = false;
		// Loop through the array from the second element to the end
		for (let i = 1; i < n; i++) {
			// Compare the startYear of the current element with the previous element
			// Swap elements if they are in the wrong order
			if (arr[i - 1].startYear < arr[i].startYear) {
				// Swap elements
				let temp = arr[i - 1]; // Temporary variable to hold the previous element
				arr[i - 1] = arr[i]; // Move the current element to the previous position
				arr[i] = temp; // Move the previous element to the current position
				swapped = true; // Set swapped to true to indicate that a swap occurred
			}
		}
		n--; // Reduce the range of comparison as the largest element is bubbled to the end
	} while (swapped); // Continue looping until no swaps are made during an iteration
}

function showGeneration() {
	// Grabbed the date input
	const dateInput = document.getElementById("date");
	// creating a new Date object in JavaScript using the value from dateInput
	const birthdate = new Date(dateInput.value);
	// extracting the year component from a Date object
	const year = birthdate.getFullYear();

	let low = 0;
	let high = generationsInfo.length - 1;

	// Sort the generationsInfo array
	bubbleSort(generationsInfo);

	console.time();
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		console.log(generationsInfo[mid]);
		if (
			year >= generationsInfo[mid].startYear &&
			year <= generationsInfo[mid].endYear
		) {
			console.timeEnd();
			return generationsInfo[mid];
		} else if (year > generationsInfo[mid].startYear) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return "Unknown Generation";
}

function render() {
	// calling showGeneration() and assigning its return value to the variable generation
	const generation = showGeneration();
	// Grabbed the results container element
	const resultCont = document.getElementById("result");
	// setting the resultCont to hold an empty string
	resultCont.innerHTML = "";
	// Grabbed the name input
	const nameInput = document.getElementById("name");
	// Setting the name to be what the user has entered in nameInput cont & changing 1st char toUpperCase
	const name =
		nameInput.value.charAt(0).toUpperCase() +
		nameInput.value.slice(1);
	// Creating a h2 element to hold the text output
	let textOutput = document.createElement("h2");
	// Creating a img element to hold the image output
	let imgOutput = document.createElement("img");
	// Adding a class to style textOutput
	textOutput.classList.add("greet");
	// Adding a class to style imgOutput
	imgOutput.classList.add("gen-img");
	// Check if generation is not null or undefined
	if (generation) {
		// If generation exists, set the text of textOutput to a message with the user's name and the generation name
		textOutput.innerText = `${name} you belong to ${generation.genName}`;
		// Set the source of imgOutput to the URL of the generation's image
		imgOutput.src = `${generation.image}`;
		// If generation is null or undefined
	} else {
		// Set the text of textOutput to an error message with the user's name indicating the generation is unknown
		textOutput.innerText = ` Sorry ${name} thats is Unknown generation, try again`;
		// set the source of imgOutput to empty
		imgOutput.src = "";
	}
	//  nest textOutput and imgOutput to the resultCont
	resultCont.appendChild(textOutput);
	resultCont.appendChild(imgOutput);

	// Clear the value of the input field with the ID or reference nameInput
	nameInput.value = "";
	// Get the input element with the ID 'date'
	const dateInput = document.getElementById("date");
	// Clear the value of the date input field
	dateInput.value = "";
}

generationForm.addEventListener("submit", () => {
	event.preventDefault();
	render();
});
