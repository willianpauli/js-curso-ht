function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const discountIcon = document.getElementById("toggle-icon");

  if (discountBody.style.display === "block") {
    discountBody.style.display = "none";
    discountIcon.classList.add("bxs-chevron-up");
    discountIcon.classList.remove("bxs-chevron-down");
  } else {
    discountBody.style.display = "block";
    discountIcon.classList.add("bxs-chevron-down");
    discountIcon.classList.remove("bxs-chevron-up");
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO30: 0.3,
  DESCONTO50: 0.5,
};

function applyDiscount() {
  const discountCode = document
    .getElementById("discount-code")
    .value.trim()
    .toUpperCase();
  const discountMessage = document.getElementById("discount-message");
  const totalPrice = document.getElementById("total-price");

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    let originalPrice = 1200.0;
    const newPrice = originalPrice * (1 - discount);
    totalPrice.innerText = `Novo total de R$ ${newPrice.toFixed(2)}`;
    discountMessage.innerText = `Desconto de ${discount * 100}% aplicado!`;
    discountMessage.style.color = "green";
    localStorage.setItem("discount", discount);
    document.getElementById("discount-code").value = "";
  } else {
    discountMessage.innerText = "Cupom inválido!";
    discountMessage.style.color = "red";
    totalPrice.innerHTML = `Preço total de R$1.200,00`;
    localStorage.removeItem("discount");
  }
}
