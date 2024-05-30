const DEBUG_MODE = false;
const SEQUENTIAL_MODE = false;

function displayRandomQuote(quotes) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  displayQuote(quote);
}

function loopThroughQuotes(quotes) {
  let i = 0;
  const quotesLength = quotes.length;
  const interval = setInterval(() => {
    console.log(`Looping through quotes: ${i} of ${quotesLength}`);
    displayQuote(quotes[i]);
    i = (i + 1) % quotesLength;
    if (i === 0 && !DEBUG_MODE) {
      clearInterval(interval);
    }
  }, 3000);
}

function sequentialQuotes(quotes) {
  let i = 0;
  displayQuote(quotes[i]);
  document.addEventListener("click", () => {
    i = (i + 1) % quotes.length;
    console.log(`Sequencial looping. Index: ${i}`);
    displayQuote(quotes[i]);
  });
}

function displayQuote(quote) {
  document.getElementById("quote").innerHTML = `
                      <p class="headline">${quote.headline}</p>
                      <img src="${quote.pic}" class="newsPicContainer">
                      <p class="text">${quote.text}</p>
                      <p class="source"> - ${quote.source}</p>
                  `;
}

(function () {
  console.table({SEQUENTIAL_MODE, DEBUG_MODE});
  fetch("./list.json")
    .then((response) => response.json())
    .then((quotes) => {
      if (DEBUG_MODE) {
        loopThroughQuotes(quotes);
      } else if (SEQUENTIAL_MODE) {
        sequentialQuotes(quotes);
      } else {
        displayRandomQuote(quotes);
      }
    })
    .catch((error) => console.error("Error loading JSON:", error));
})();