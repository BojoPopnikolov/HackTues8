const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close");
const constellation = document.getElementsByClassName("constellation");

window.onload = function() {
	for(let i = 0; i < constellation.length; i++){
		var nodes = constellation[i].childNodes[1].title;
		constellationName(nodes, i);
	}
}

function modalShow(element){
	modal.style.display = "block";
	wikiContent(element);
}
function modalClose(){
	modal.style.display = "none";
}

function constellationName(element, index){
	console.log(element);
	var title = document.getElementsByClassName("info");
	title[index].innerHTML = element;
}