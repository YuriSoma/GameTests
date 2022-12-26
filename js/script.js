var addNum = 0;
var sumCreate = "";
function callCreate(addNum) {
	var createDiv = "<div class='col-auto g-0''><div id='member'>"+addNum+"</div></div>";
	sumCreate += createDiv;
	return document.getElementById("members-land").innerHTML = sumCreate;
}

for (var i=0; i < 500;i++ ) {
	counter = i + 1;
	callCreate(counter);
}
