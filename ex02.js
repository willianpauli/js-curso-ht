const btn = document.getElementById("btn");
let count = 0;
function handleClick() {
    count++;
    console.log(count);
    if (count >= 3) {
        console.log("Função desabilitada após 3 cliques!");
        btn.removeEventListener("click", handleClick);
    }
}
btn.addEventListener("click", handleClick);
