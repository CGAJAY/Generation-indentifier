let generationForm = document.getElementById(
	"generation-form"
);

function getGeneration() {
	let generation = " ";
	let birthdate = document.getElementById("date").value;
	let name = document.getElementById("name").value;
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

function render() {
	let generation = getGeneration();
	let generationPhoto;
	switch (true) {
		case generation === "Generation Alpha":
			generationPhoto = "generation-Alpha.jpg";
			break;
		case generation === "Generation Z":
			generationPhoto = "generation-z.jpg";
			break;
		case generation === "Millennial":
			generationPhoto = "millennial.jpg";
			break;
		case generation === "Generation X":
			generationPhoto = "generation-x.jpg";
			break;
		case generation === "Baby Boomer":
			generationPhoto = "baby-boomer.jpg";
			break;
		case generation === "Silent Generation":
			generationPhoto = "silent-generation.jpg";
			break;
		case (generation = "G.I Generation"):
			generationPhoto = "g-i-eneration";
			break;
		case (generation = "Lost Generation"):
			generationPhoto = "lost-generation";
			break;
		default:
			generation = "Unknown Generation";
			generationPhoto = "unknown-generation.jpg";
			break;
	}
}

generationForm.addEventListener("submit", () => {
	event.preventDefault();
	render();
	console.log(generation);
});
