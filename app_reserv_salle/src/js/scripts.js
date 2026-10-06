const btn = document.getElementById("reserve-btn");
const confirmation = document.getElementById("confirmation");

btn.addEventListener("click", () => {
    confirmation.classList.remove("hidden");
});
