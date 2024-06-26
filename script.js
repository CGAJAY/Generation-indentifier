let generationForm = document.getElementById(
	"generation-form"
);

let generationsInfo = [
	{
		startYear: 2013,
		endYear: parseInt(new Date().getFullYear()),
		genName: "Generation Alpha",
	},
	{
		startYear: 1997,
		endYear: 2012,
		genName: "Generation Z",
	},
	{
		startYear: 1981,
		endYear: 1996,
		genName: "Millennial",
	},
	{
		startYear: 1965,
		endYear: 1980,
		genName: "Generation X",
	},
	{
		startYear: 1946,
		endYear: 1964,
		genName: "Baby Boomer",
	},
	{
		startYear: 1928,
		endYear: 1945,
		genName: "Silent Generation",
	},
	{
		startYear: 1901,
		endYear: 1927,
		genName: "G.I Generation",
	},
	{
		startYear: 1883,
		endYear: 1900,
		genName: "Lost Generation",
	},
];

function orderingGensInfo() {}

function getGeneration2(year) {
	let low = 0;
	let high = generationsInfo.length - 1;

	console.time();
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		// console.log(generationsInfo[mid]);
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

// Example usage
const userYear = 1890;
console.log(getGeneration2(userYear)); // Millennial

function getGeneration() {
	let generation = " ";
	let birthdate = document.getElementById("date").value;
	const dateObject = new Date(birthdate);
	const birthYear = parseInt(dateObject.getFullYear());
	const currentYear = new Date().getFullYear();

	if (birthYear >= 2013 && birthYear <= currentYear) {
		generation = "Generation Alpha";
	} else if (birthYear >= 1997 && birthYear <= 2012) {
		generation = "Generation Z";
	} else if (birthYear >= 1981 && birthYear <= 1996) {
		generation = "Millennial";
	} else if (birthYear >= 1965 && birthYear <= 1980) {
		generation = "Generation X";
	} else if (birthYear >= 1946 && birthYear <= 1964) {
		generation = "Baby Boomer";
	} else if (birthYear >= 1928 && birthYear <= 1945) {
		generation = "Silent Generation";
	} else if (birthYear >= 1901 && birthYear <= 1927) {
		generation = "G.I Generation";
	} else if (birthYear >= 1883 && birthYear <= 1900) {
		generation = "Lost Generation";
	} else {
		generation = "Unknown Generation";
	}
	return generation;
}

function getGenerationImage() {
	let generation = getGeneration();
	let generationPhoto;
	switch (generation) {
		case "Generation Alpha":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/generation-Alpha.webp";
			break;
		case "Generation Z":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/generation-z.avif";
			break;
		case "Millennial":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/millennial.jpg";
			break;
		case "Generation X":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/generation-x.jpg";
			break;
		case "Baby Boomer":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/baby-boomer.jpg";
			break;
		case "Silent Generation":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/silent-generation.jpg";
			break;
		case "G.I Generation":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/g-i-generation.jpg";
			break;
		case "Lost Generation":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/lost-generation.jpg";
			break;
		default:
			generation = "Unknown Generation";
			generation = `Ooops that's an ${generation} try again `;
			generationPhoto = "images/unknown-generation.jpg";
			break;
	}

	console.log(generation);
	return { gen: generation, photo: generationPhoto };
}

function render() {
	let generationObj = getGenerationImage();
	let results = document.getElementById("result");
	results.innerHTML = " ";

	let generationImageCont = document.createElement("img");
	let name = document.getElementById("name").value;
	let nameContainer = document.createElement("h2");
	nameContainer.classList.add("greet");
	generationImageCont.classList.add("gen-img");

	generationImageCont.src = "";
	nameContainer.textContent = "";

	nameContainer.textContent = `Hello ${name} ${generationObj.gen}`;
	results.appendChild(nameContainer);
	generationImageCont.src = generationObj.photo;
	results.appendChild(generationImageCont);

	document.getElementById("name").value = "";
	document.getElementById("name").placeholder =
		"Enter your name";
	document.getElementById("date").value = "";
}

generationForm.addEventListener("submit", () => {
	event.preventDefault();
	render();
});
