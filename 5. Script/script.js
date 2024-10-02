function mudarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "red";
	
}
function voltaCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "grey";
	
}
function ola(){
    var nome =  prompt("Digite seu nome");

    if(nome !== null && nome !== ""){
        alert("Olá, " + nome + " Bem vinda(o)!");
    }
}