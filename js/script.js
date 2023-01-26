function bulidGameLand (){
	var addNum = 0;
	var sumCreate = "";
	function callCreate(addNum) {
		var memberID = "member-butt" + addNum;
		var createDiv = "<div class='col-auto g-0'><div id='member'><button id='"+memberID+"' onclick='playWindow("+addNum+")'>"+addNum+"</button></div></div>";
		sumCreate += createDiv;
		return document.getElementById("members-land").innerHTML = sumCreate;
		}

	 for (var i=0; i < 200;i++ ) {
		counter = i + 1;
		callCreate(counter);
	} 

}
	
	function playFinish(buttIdNUM,windowColor) {
		let IdNUM = buttIdNUM;
		buttIdNUM = "member-butt"+IdNUM;
		if (windowColor==1){
		document.getElementById(buttIdNUM).style = "background-color: lightyellow;";
		}
		else {
		document.getElementById(buttIdNUM).style = "background-color: pink;";
		}
		document.getElementById("play-butt1").remove();
		document.getElementById("play-butt2").remove();
	}

	function playWindow(buttIdNUM) {
		let IdNUM = buttIdNUM;
		buttIdNUM = "member-butt"+IdNUM;
		

		
		/* document.getElementById("play-div").innerHTML = "<button id='play-butt1' onclick='playFinish("+IdNUM+",1)' style='background-color: lightyellow;'>Test</button><button id='play-butt2' onclick='playFinish("+IdNUM+",2)' style='background-color: pink;'>Test</button>";*/
		/*document.getElementById("play-div").innerHTML = ;*/
	}






/////////////////////////////////////******
	/******  REFERENCES ********/////
	/********************************/////


	// Test waiting timer //
	/*const colorWait = async (milliseconds) => {
	await new Promise(resolve => {
	    return setTimeout(resolve, milliseconds)
	});
	};

	const chColor = async () => {
    document.getElementById("members-land").innerHTML = "<button id='member-butt' onclick='playWindow()' style='background-color: grey;'>Test</button>"
	await colorWait(5000);
    document.getElementById("member-butt").style = "background-color: red;";
	}
	chColor();*/

	// Window DOM
	//window.open("playBoard.html", "", "width=400,height=900,left=500");
	//window.close();
