const form = document.getElementById("myForm");
function handleSubmit(event) {
    event.preventDefault();
    console.log(
        "Formulário não enviado devido à prevenção de comportamento padrão"
    );
}

form.addEventListener("submit", handleSubmit);

const input = form.querySelector("input");
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleSubmit(event);
        console.log("Pressionar Enter não enviará o formulário");
    }
});
