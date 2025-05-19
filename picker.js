const nutritionInfoContainer = document.getElementById("nutrition-info");
const analyzeButton = document.getElementById("analyze-nutrition");
const inputField = document.getElementById("coffee-description");

const getCoffeeButton = document.getElementById("get-coffee");
const coffeeImageContainer = document.getElementById("coffee-image");

getCoffeeButton.addEventListener("click", () => {
  const imageUrl = "https://coffee.alexflipnote.dev/random";

  coffeeImageContainer.innerHTML = `
    <img src="${imageUrl}" alt="Random coffee image" style="max-width: 300px; border-radius: 8px; margin-top: 1em;">
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const coffeeImg = document.getElementById("coffee-img");
  const refreshBtn = document.getElementById("refresh");
  const likeBtn = document.getElementById("like");
  let currentImageUrl = "";

  async function loadCoffee() {
    const res = await fetch("https://coffee.alexflipnote.dev/random.json");
    const data = await res.json();
    currentImageUrl = data.file;
    coffeeImg.src = currentImageUrl;
  }

  refreshBtn.addEventListener("click", loadCoffee);

  loadCoffee();
});
