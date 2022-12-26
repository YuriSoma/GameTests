var addNum = 1;
var createDiv = "<div class='col-auto g-0''><div id='member'>"+addNum+"</div></div>";
var sumCreate = "";
for (var i=0; i < 50;i++ ) {
	sumCreate += createDiv;
	document.getElementById("members-land").innerHTML = sumCreate;
}
