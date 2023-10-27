function printMessage(msg, style = []){
	let div = document.createElement('div');
	div.innerHTML = msg;
	div.classList.add(...style);
	document.getElementById('messages').appendChild(div);

}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearResults(){
	document.getElementById('result').innerHTML = '';
}

function printResult(computerCounter, playerCounter) {
	let rateWin = Math.floor(100.0 * playerCounter/(computerCounter + playerCounter));
	document.getElementById('result').innerHTML = computerCounter + '-' + playerCounter + ' <br> ' + rateWin + ' % player win rate';
	
}