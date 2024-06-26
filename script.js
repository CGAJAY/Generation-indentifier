let generationForm = document.getElementById(
	"generation-form"
);

function getGeneration() {
	let generation = " ";
	let birthdate = document.getElementById("date").value;
	const dateObject = new Date(birthdate);
	const birthYear = parseInt(dateObject.getFullYear());
	const currentYear = new Date().getFullYear();

	switch (true) {
		case birthYear >= 2013 && birthYear <= currentYear:
			generation = "Generation Alpha";
			break;
		case birthYear >= 1997 && birthYear <= 2012:
			generation = "Generation Z";
			break;
		case birthYear >= 1981 && birthYear <= 1996:
			generation = "Millennial";
			break;
		case birthYear >= 1965 && birthYear <= 1980:
			generation = "Generation X";
			break;
		case birthYear >= 1946 && birthYear <= 1964:
			generation = "Baby Boomer";
			break;
		case birthYear >= 1928 && birthYear <= 1945:
			generation = "Silent Generation";
			break;
		case birthYear >= 1901 && birthYear <= 1927:
			generation = "G.I Generation";
			break;
		case birthYear >= 1883 && birthYear <= 1900:
			generation = "Lost Generation";
			break;
		default:
			generation = "Unknown Generation";
			console.log(birthYear);
			break;
	}
	return generation;
}

function getGenerationImage() {
	let generation = getGeneration();
	let generationPhoto;
	switch (true) {
		case generation === "Generation Alpha":
			generation = `You belong to ${generation}`;
			generationPhoto = "images/generation-Alpha.webp";
			break;
		case generation === "Generation Z":
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/generation-z.avif";
			break;
		case generation === "Millennial":
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/millennial.jpg";
			break;
		case generation === "Generation X":
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/generation-x.jpg";
			break;
		case generation === "Baby Boomer":
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/baby-boomer.jpg";
			break;
		case generation === "Silent Generation":
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/silent-generation.jpg";
			break;
		case (generation = "G.I Generation"):
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/g-i-generation.jpg";
			break;
		case (generation = "Lost Generation"):
			generation = `You belong to ${generation}`;
			generationPhoto = ".images/lost-generation.jpg";
			break;
		default:
			generation = "Unknown Generation";
			generation = `Ooops that's an ${generation} try again `;
			generationPhoto = ".images/unknown-generation.jpg";
			break;
	}

	console.log(generation);
	return { gen: generation, photo: generationPhoto };
}

function render() {
	let generationObj = getGenerationImage();
	let container = document.querySelector(".container");
	let results = document.createElement("div");
	results.innerHTML = "";

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
	container.appendChild(results);
	// results.innerHTML = "";

	document.getElementById("name").value = "";
	document.getElementById("name").placeholder =
		"Enter your name";
	document.getElementById("date").value = "";
}

generationForm.addEventListener("submit", () => {
	event.preventDefault();
	render();
});
