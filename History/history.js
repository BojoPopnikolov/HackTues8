const expeditions = document.querySelectorAll(".expeditions");

var nodes = expeditions[0].childNodes;

var nodeClass;
var nodeId;

var xhr = new XMLHttpRequest;
var searchURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&exintro&exsentences=5&origin=*&format=json&titles=";

var url = searchURL + ter;
  
var p_title;
var p_content;
  
xhr.open('GET', url, true);
  
xhr.onload = function(){
    var data = JSON.parse(this.response);
    var pageId = Object.keys(data.query.pages)
        
    p_title = data.query.pages[pageId].title;
    p_content = data.query.pages[pageId].extract;

    console.log(p_title, p_content);

    console.log(element, url, data.query.pages[pageId]);
    
    document.getElementsByClassName(".heading").innerHTML = p_title;
    document.getElementsByClassName(".content").innerHTML = p_content;
}
  
xhr.send();


window.onload = () => {
    console.log(nodes);

    for(let i = 1; i < nodes.length; i+=2){
        nodeClass = nodes[i].attributes[0].value;
        nodeId = nodes[i].attributes[1].value;
        var term = `${nodeClass}_${nodeId}`;

        console.log(term);
        xhr.open('GET', url, true);
  
xhr.onload = function(){
    var data = JSON.parse(this.response);
    var pageId = Object.keys(data.query.pages)
        
    p_title = data.query.pages[pageId].title;
    p_content = data.query.pages[pageId].extract;

    console.log(p_title, p_content);

    console.log(element, url, data.query.pages[pageId]);
    
    document.getElementsByClassName(".heading").innerHTML = p_title;
    document.getElementsByClassName(".content").innerHTML = p_content;
}
  
xhr.send();


    }
}
