function bulidGameLand (){
	var addNum = 0;
	var sumCreate = "";

	/*let clanColor = "";
	document.getElementById("members-land").innerHTML = "<h1>Please choose your CLAN color</h1>";*/
	
	function callCreate(addNum) {
		var memberID = "member-butt" + addNum;
		var createDiv = `<div class='col-auto g-0'
		><div id='member'><button id='${memberID}' value='${addNum}
		' onclick='playWindow(${addNum})
		'>${addNum}</button></div></div>`;
		sumCreate += createDiv;
		return document.getElementById("members-land").innerHTML = sumCreate;
		}
	
		const testMD = {};
		function createObj(counter) {
		let memberID = "member" + counter;
		/* let memberDetails = {
			id:"",
			memberName:"",
			health:100,
			Shield:100,
			Power:0
		};*/

		testMD[memberID] = {};

		testMD[memberID].id = counter;
		testMD[memberID].memberName = counter;
		testMD[memberID].health = Math.floor(Math.random() * 101);
		testMD[memberID].Shield = Math.floor(Math.random() * 101);
		testMD[memberID].Power = Math.floor(Math.random() * 101);

	}

	 for (var i=0; i < 250;i++ ) {
		counter = i + 1;
		callCreate(counter);
		createObj(counter);
	} 

	console.log(testMD);

	

}
	
	/* function playFinish(buttIdNUM,windowColor) {
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
	} */

	function playWindow(buttIdNUM) {
		
		///// Makes IDs for every button to be handled later
		let IdNUM = buttIdNUM;
		buttIdNUM = "member-butt"+IdNUM;
		
		document.getElementById("play-div").innerHTML = 
		`<h1 id='challenge'>Challenge On ${IdNUM}</h1>
		<div class='container text-center
		'><div class='row' id='play-row'>
		
		<div class='col' id='member-gears
		'><h2 id='mg-title'>Member Gears</h2><button>${IdNUM}
		</button></div>
		
		<div class='col' id='guess-col'><h2 id='gc-title'>Guess...</h2>
		<form>
		<label>Health: </label>
		<input type='number'></input><br>
		<label>Shield: </label>
		<input type='number'></input><br>
		<label>Power: </label>
		<input type='number'></input><br>
		<input type='submit'></input>
		</form>
		</div>
		
		<div class='col' id='member-profile'>
		<h2 id='mp-title'>Member Profile</h2>
		</div></div></div>`;

		

		//document.getElementById("play-div").focus();

		
		for (let i = 0; i < 10; i++) {
			
		}

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
