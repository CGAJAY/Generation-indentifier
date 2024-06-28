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

// Function to select the right generation according to input
function showGeneration() {
	// Grabbed the date input
	const dateInput = document.getElementById("date");
	// creating a new Date object in JavaScript using the value from dateInput
	const birthdate = new Date(dateInput.value);
	// extracting the year component from a Date object
	const year = birthdate.getFullYear();
	// finding the specific generation object within an array of generationsInfo based on the provided year
	const generation = generationsInfo.find(
		(gen) => year >= gen.startYear && year <= gen.endYear
	);
	// Outputting the specific generation
	return generation;
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
// Add an event listener for the 'submit' event on the form
generationForm.addEventListener("submit", () => {
	// Prevent the default form submission behavior
	event.preventDefault();
	// Call the render function to handle the form submission logic
	render();
});
