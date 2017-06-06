function create_content(){
var content = document.createElement("Div"); 
content.class = "content";
content.id = "content_id";
content.style.background = "red";
content.style.color = "white";
var textNode = document.createTextNode("this is main content element");
content.appendChild(textNode);
document.body.appendChild(content);
}


function append_book(){

var book3 = document.createElement("Div"); 
book3.id = "book3"; // create new div with id = book3
//book3.style.background = "Orange"
book3.style.color = "yellow"

var name = document.createElement("Div");
name.id = "book2_name"; //create new Div with id = book3_name
var textNode = document.createTextNode("this is book3 name");//add text to name
name.appendChild(textNode);
book3.appendChild(name); // append name Div

var category = document.createElement("Div");
category.id = "book3_category"; //create new Div with id = book3_category
var textNode = document.createTextNode("this is book3 category");//add text to category
category.appendChild(textNode);
book3.appendChild(category); // append category Div

var price = document.createElement("Div");
price.id = "book3_category"; //create new Div with id = book3_price
var textNode = document.createTextNode("price: 23 L.E");//add text to price
category.appendChild(textNode);
book3.appendChild(price);

//add this book to the main content

//document.getElementsByClassName("content").appendChild(book3);
document.getElementById("content_id").appendChild(book3);
//document.body.appendChild(book3);
}

function append_album(){
var album3 = document.createElement("Div"); 
album3.id = "album3_id"; // create new div with id = album3
//album3.style.background = "blue"
album3.style.color = "black";

var name = document.createElement("Div");
name.id = "album3_name"; //create new Div with id = album3_name
var textNode = document.createTextNode("this is Album 3 name");//add text to name
name.appendChild(textNode);
album3.appendChild(name); // append name Div

var category = document.createElement("Div");
category.id = "album3_category"; //create new Div with id = album3_category
var textNode = document.createTextNode("this is Album 3 category");//add text to category
category.appendChild(textNode);
album3.appendChild(category); // append category Div

var price = document.createElement("Div");
price.id = "album3_category"; //create new Div with id = album3_price
var textNode = document.createTextNode(" price: 19 L.E");//add text to price
category.appendChild(textNode);
album3.appendChild(price);

//add this book to the main content

//document.getElementsByClassName("content").appendChild(album3);
document.getElementById("content_id").appendChild(album3);
//document.body.appendChild(album3);

}
function delete_content(){

var element = document.getElementById("content_id");
element.outerHTML = "";
delete element;
  /*
  var elements = document.getElementsByClassName("content");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        
        //elements[0].remove();
    }
    */
}
function show_all(){

}
