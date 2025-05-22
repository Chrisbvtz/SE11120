//window.onload = function(){
    //console.log(window)

    //var p = document.querySelectorP('p');

    //var textNode = document.createTextNode("Wouldn't you like to be a pepper too??")

   // p.append(textNode);

  //  p.innerHTML = textNode.textContent;
//}

document.addEventListener("DOMContentLoaded", function(){
    loadCode();
});

function loadCode(){
 console.log(window)

    var p = document.querySelectorP('p');

    var textNode = document.createTextNode("Wouldn't you like to be a pepper too??")

    p.append(textNode);

    p.innerHTML = textNode.textContent;

}