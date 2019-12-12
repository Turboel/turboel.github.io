var Jpoints, Lpoints, Mpoints, Vpoints;
var pageNumber, optionSelected, creatorFlower;

Jpoints = 0, Lpoints = 0, Mpoints = 0, Vpoints = 0;
pageNumber = 1;

// Passa uma página pra frente
function changePage(){
	pageNumber = pageNumber + 1;
}

// Mostra a página atual
function showPage(){

	/*// Debug log
	if(pageNumber == 9+1 || pageNumber == 12+1 || pageNumber == 16+1 || pageNumber == 19+1 || pageNumber == 21+1){
		console.log(pageNumber + optionSelected);
	} else console.log(pageNumber);

	console.log("J: " + Jpoints + " - L: " + Lpoints + " - M: " + Mpoints + " - V: " + Vpoints);
	*/

	// Telas com escolha
	if(pageNumber == 9 || pageNumber == 12 || pageNumber == 16 || pageNumber == 19 || pageNumber == 22){
		
		// Oculta o botão de passar a página normalmente
		document.getElementById("nextPageButton").style.visibility = 'hidden';

		// É aberta a página da escolha selecionada pelo usuário
		document.getElementById("storyPage").src = 'resources/img/page' + pageNumber +'.jpg';

		switch (pageNumber) {
			case 9:
				document.getElementById("optionA").innerText = "loja do Urso";
				document.getElementById("optionB").innerText = "loja do Tamanduá";
				break;

			case 12:
				document.getElementById("optionA").innerText = "galera da Zumba";
				document.getElementById("optionB").innerText = "galera do Ludo";
				break;

			case 16:
				document.getElementById("optionA").innerText = "1002: uma Odisséia na Toca";
				document.getElementById("optionB").innerText = "Isso, a Coisa Verde";
				break;

			case 19:
				document.getElementById("optionA").innerText = "o Hotel Pianíssimo";
				document.getElementById("optionB").innerText = "o Recanto do Violão";
				break;

			case 22:
				document.getElementById("optionA").innerText = "a primeira trilha";
				document.getElementById("optionB").innerText = "a segunda trilha";
				document.getElementById("optionC").innerText = "a terceira trilha";
				document.getElementById("optionD").innerText = "a quarta trilha";
				break;
		}

		// Aparecem dois dos botões de escolha
		document.getElementById("optionA").style.visibility = 'visible';
		document.getElementById("optionB").style.visibility = 'visible';

		// Aparecem todos os botões de escolha
		if(pageNumber == 22){
			document.getElementById("optionC").style.visibility = 'visible';
			document.getElementById("optionD").style.visibility = 'visible';
		}
	}

	else if(pageNumber == 10 || pageNumber == 13 || pageNumber == 17 || pageNumber == 20){ 
		
		document.getElementById("storyPage").src = 'resources/img/page' + pageNumber + optionSelected +'.jpg';

		// Oculta o botão de passar a página normalmente
		document.getElementById("nextPageButton").style.visibility = 'visible';

		// Aparecem dois dos botões de escolha
		document.getElementById("optionA").style.visibility = 'hidden';
		document.getElementById("optionB").style.visibility = 'hidden';
	}
	else if(pageNumber == 28){
		document.getElementById("storyPage").src = 'resources/img/page' + pageNumber + optionSelected +'.jpg';
	}

	// Tela do resultado
	else if(pageNumber == 30){
		switch (optionSelected) {
			case a:
				window.location.href = "creator.html/joao";
				
				break;
			default:
		}																					
	}

	// Telas normais
	else {																										
		// Esconde os botões de alternativas
		document.getElementById('optionA').style.visibility = 'hidden';
		document.getElementById('optionB').style.visibility = 'hidden';
		document.getElementById('optionC').style.visibility = 'hidden';
		document.getElementById('optionD').style.visibility = 'hidden';

		document.getElementById('storyPage').src = 'resources/img/page' + pageNumber + '.jpg';

		if(pageNumber == 10 || pageNumber == 13 || pageNumber == 17 || pageNumber == 20 || pageNumber == 23){
			document.getElementById('nextPageButton').style.visibility = 'visible';
		}
	}

	// Calcula o resultado se o usuário tiver passado pela última escolha
	if (pageNumber == 22) {
		//createResultsCookie();
	}
}


// Quando uma página normal é passada
function normalButtonPressed(){
	changePage();
	showPage();
}

// Quando uma escolha é feita
function choiceButtonPressed(clickedId){
	if(clickedId == 'optionA')		optionSelected = 'a';
	else if(clickedId == 'optionB')	optionSelected = 'b';
	else if(clickedId == 'optionC')	optionSelected = 'c';
	else if(clickedId == 'optionD')	optionSelected = 'd';

	switch(pageNumber){
		case 9:
			if(clickedId == 'optionA'){			// Pizza de Quatro Queijos
					Mpoints = Mpoints + 1;	
					Vpoints = Vpoints + 1;
				} else{								// Petit Gateau de Formigueiro
					Lpoints = Lpoints + 1;
					Jpoints = Jpoints + 1;
				}
			break;
		case 12:
			if(clickedId == 'optionA'){		// Zumba
					Mpoints = Mpoints + 1;
					Vpoints = Vpoints + 1;
				} else{								// Ludo
					Lpoints = Lpoints + 1;
					Jpoints = Jpoints + 1;
				}
			break;
		case 16:
			if(clickedId == 'optionA'){		// 1002: uma Odisséia na Toca
					Jpoints = Jpoints + 1;
					Vpoints = Vpoints + 1;
				} else{								// A Coisa Verde
					Lpoints = Lpoints + 1;
					Mpoints = Mpoints + 1;
				}
			break;
		case 19:
			if(clickedId == 'optionA'){		// Hotel Pianíssimo
					Lpoints = Lpoints + 1;
					Vpoints = Vpoints + 1;
				} else{								// Recanto do Violão
					Mpoints = Mpoints + 1;
					Jpoints = Jpoints + 1;
				}
			break;
		case 22:
			if(clickedId == 'optionA'){ 		// Caminho do João 
					Jpoints = Jpoints + 1;
				} else if(clickedId == 'optionB'){	// Caminho da Maria Alice
					Mpoints = Mpoints + 1;
				} else if(clickedId == 'optionC'){	// Caminho da Vitória
					Vpoints = Vpoints + 1;
				} else {							// Caminho do Lucas
					Lpoints = Lpoints + 1;
				} 
			break;
	}
	changePage();
	showPage();
}


// Cria um cookie contendo todos os perfis resultantes (WIP)
/*
function createResultsCookie(){
	var totalPoints = [Jpoints, Lpoints, Mpoints, Vpoints];
	var finalResults;
	var biggestValue = Jpoints;
	var i;

	// Checa qual é o número de pontos mais alto
	for (i = 1; i < totalPoints.length; i++){
		if(biggestValue < totalPoints[i]){
			biggestValue = totalPoints[i];
		}
	}
	// Checa quais pessoas tem o número de pontos mais alto
	for (i = 0; i < totalPoints.length; i++){
		if(biggestValue == totalPoints[i]){
			switch (totalPoints[i]) {
				case 0: finalResults = finalResults + "J";
					break;
				case 1: finalResults = finalResults + "L";
					break;
				case 2: finalResults = finalResults + "M";
					break;
				case 3: finalResults = finalResults + "V";
					break;
			}
		}
	}

	let cookie = "storyResults =" + finalResults + ";";
    document.cookie = cookie;
}
*/