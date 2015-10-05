if (!sessionStorage.getItem("nombre"))
    location.replace("index.html");


var idActual = undefined;
function drag(evt) {
    idActual= evt.target.id;
}
function allowDrop(evt) {
    evt.preventDefault();
}
function drop(evt) {
    evt.preventDefault();
    //var data = evt.dataTransfer.getData("objeto");
    document.getElementById("destino")
        .appendChild(document.getElementById(idActual));
    idActual = undefined;
}

var imgs = document.querySelectorAll("img");
var destino = document.querySelector("#destino");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart",drag);
}
destino.addEventListener("dragover", allowDrop);
destino.addEventListener("drop", drop);