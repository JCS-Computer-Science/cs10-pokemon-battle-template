var gengarHP = 60;
var nidorinoHP = 61;
var isPlayerTurn = true;

var message = document.getElementById("message");
var opponentHPElement = document.getElementById("opponent-hp");
opponentHPElement.innerHTML = nidorinoHP;

var playerHPElement = document.getElementById("player-hp");
playerHPElement.innerHTML = gengarHP;

function tackle() {
	if (isPlayerTurn == true) {
		nidorinoHP -= 5;
		if (nidorinoHP <= 0) {
			nidorinoHP = 0;
			message.innerHTML = "NIDORINO fainted!";
		}

		opponentHPElement.innerHTML = nidorinoHP;
	} else {
		gengarHP -= 5;
		if (gengarHP <= 0) {
			gengarHP = 0;
			message.innerHTML = "GENGAR fainted!";
		}

		playerHPElement.innerHTML = gengarHP;
	}
	isPlayerTurn = !isPlayerTurn;
}
