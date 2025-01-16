const elemento = document.getElementById("changeColor");
function handleMouseOver() {
    elemento.style.backgroundColor = "yellow";
}
function handleMouseOut() {
    elemento.style.backgroundColor = "#ccc";
}
elemento.addEventListener("mouseover", handleMouseOver);
elemento.addEventListener("mouseout", handleMouseOut);
