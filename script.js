let generationForm = document.getElementById(
	"generation-form"
);

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

function showGeneration() {
	const dateInput = document.getElementById("date");
	const birthdate = new Date(dateInput.value);
	const year = birthdate.getFullYear();
	const generation = generationsInfo.find(
		(gen) => year >= gen.startYear && year <= gen.endYear
	);
	return generation;
}

function render() {
	const generation = showGeneration();
	const resultCont = document.getElementById("result");
	resultCont.innerHTML = "";
	const nameInput = document.getElementById("name");
	const name =
		nameInput.value.charAt(0).toUpperCase() +
		nameInput.value.slice(1);
	let textOutput = document.createElement("h2");
	let imgOutput = document.createElement("img");
	textOutput.classList.add("greet");
	imgOutput.classList.add("gen-img");
	if (generation) {
		textOutput.innerText = `${name} you belong to ${generation.genName}`;
		imgOutput.src = `${generation.image}`;
	} else {
		textOutput.innerText = ` Sorry ${name} thats is Unknown generation, try again`;
		imgOutput.src = "";
	}
	resultCont.appendChild(textOutput);
	resultCont.appendChild(imgOutput);

	nameInput.value = "";
	const dateInput = document.getElementById("date");
	dateInput.value = "";
}

generationForm.addEventListener("submit", () => {
	event.preventDefault();
	render();
});
