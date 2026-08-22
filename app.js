const copyRight = document.getElementById("copyright");
const aaplPrice = document.getElementById("aapl-price");
const tslaPrice = document.getElementById("tsla-price");
const nvdaPrice = document.getElementById("nvda-price");
const btcPrice = document.getElementById("btc-price");
const msftPrice = document.getElementById("msft-price");

function getStock(symbol, element){
  fetch(`/.netlify/functions/stock?symbol=${symbol}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log("Updating:", symbol, data.c);
    element.textContent = `${symbol}: $${data.c}`;
    console.log("ELEMENT:", element);
    console.log("TEXT:", element.textContent);
  })
}
getStock("AAPL", aaplPrice);
getStock("TSLA", tslaPrice);
getStock("NVDA", nvdaPrice);
getStock("BINANCE:BTCUSDT", btcPrice);
getStock("MSFT", msftPrice);

const refreshMarketButton = document.getElementById("refresh-market")

refreshMarketButton.addEventListener("click", function() {
  getStock("AAPL", aaplPrice);
  getStock("TSLA", tslaPrice);
  getStock("NVDA", nvdaPrice);
  getStock("BINANCE:BTCUSDT", btcPrice);
  getStock("MSFT", msftPrice);
});

copyRight.textContent = "©  2024 copyright Mason Heintz. All Rights Reserved.";
console.log(copyRight);

const image = document.querySelector("img");
image.style.cssText = "border: 3px solid gold; border-radius: 10px; background-color: black";
image.setAttribute("alt", "Stock Market Dashboard");

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



