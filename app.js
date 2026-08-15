const copyRight = document.getElementById("copyright");
copyRight.textContent = "©  2024 copyright Mason Heintz. All Rights Reserved.";
console.log(copyRight);

const firstHero = document.querySelector(".hero");
console.log(firstHero);

const heroes = document.querySelectorAll(".hero");
console.log(heroes);

heroes.forEach(function(hero) {
  console.log(hero.textContent);
});

const image = document.querySelector("img");
image.src = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300";
image.style.cssText = "border: 3px solid gold; border-radius: 10px; background-color: black";
image.setAttribute("alt", "Stock Market Dashboard");
console.log(image);

const buyStockButton = document.getElementById("buy-stocks")
function buyStock(event) {
  buyStockButton.textContent = "Buy Stocks Clicked!"
}
buyStockButton.addEventListener("click", buyStock)

const sellStocksButton = document.getElementById("sell-stocks");
sellStocksButton.addEventListener("click", function() {
  console.log("Sell Stocks button clicked!");
});

const tradeStocksButton = document.getElementById("trade-stocks");
tradeStocksButton.addEventListener("click", function() {
  console.log("Trade Stocks button clicked!")
});

const stockSearchInput = document.getElementById("stockSearch")
function handleSearch(event) {
  if (event.key === "Enter"){
    document.getElementById("searchResult").textContent = "Searching for: " + stockSearchInput.value
  }
}
stockSearchInput.addEventListener("keydown", handleSearch);

const refreshMarketButton = document.getElementById("refresh-market")
function refreshMarket(event){
  const aaplPrice = document.getElementById("aapl-price")
  aaplPrice.textContent = "AAPL: 197.81"
  refreshMarketButton.textContent = "Markets Refreshed"
}
refreshMarketButton.addEventListener("click", refreshMarket)

