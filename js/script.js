function bulidGameLand (){
	var addNum = 0;
	var sumCreate = "";
	function callCreate(addNum) {
		/* var createDiv = "<div class='col-auto g-0'><div id='member'><button id='member-butt' onclick='playWindow()'></button></div></div>";
		sumCreate += createDiv;
		return document.getElementById("members-land").innerHTML = sumCreate;

		function playWindow() {
		let playBoard;
		playBoard = window.open("playBoard.html", "", "width=400,height=900,left=500")
		} */
	}

	for (var i=0; i < 504;i++ ) {
		counter = i + 1;
		callCreate(counter);
	} 

}

function playWindow() {
	let playBoard;
	playBoard = window.open("playBoard.html", "", "width=400,height=900,left=500")
}

function playFinish() {
	window.close();
	changeMemberSkin();
}

function changeMemberSkin() {
	changeSkin = document.getElementById("member-butt").innerHTML = "<button id='member-butt' onclick='playWindow()' style='background-color: red;'></button>";
}