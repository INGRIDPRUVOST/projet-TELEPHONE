const message ="Merci pour ce message, au plaisir pour un live !";

document
    .getElementById("unmessagepournous")
    .addEventListener("submit", function (event) {

    event.preventDefault();
    alert(message);   
    });