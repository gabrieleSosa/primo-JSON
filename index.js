let form = document.querySelector("#form");
let outputNome = document.querySelector(".outputNome");
let outputCognome = document.querySelector(".outputCognome");
let outputEta = document.querySelector(".outputEta");
let outputSesso = document.querySelector(".outputSesso");

let users = []; //lista di utenti che sono stati aggiunti

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let nome = document.querySelector("#firstName").value;
	let cognome = document.querySelector("#lastName").value;
	let eta = document.querySelector("#age").value;
	let sesso = document.querySelector("#sex").value;

	let user = {
		nome,
		cognome,
		eta,
		sesso,
	};

	users.push(user);

	form.reset();
	printing();
});

function printing() {
	users.forEach((user) => {
		console.log(`nome --> ${user.nome}`);
		console.log(`cognome --> ${user.cognome}`);
		console.log(`eta --> ${user.eta}`);
		console.log(`sesso --> ${user.sesso}`);

		outputNome.innerHTML = `nome --> ${user.nome}`;
		outputCognome.innerHTML = `cognome --> ${user.cognome}`;
		outputEta.innerHTML = `eta --> ${user.eta}`;
		outputSesso.innerHTML = `sesso --> ${user.sesso}`;
	});
}