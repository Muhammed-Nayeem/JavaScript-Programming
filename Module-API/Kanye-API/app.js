const loadQuotes = () => {
  fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (quotes) => {
  const {quote} = quotes;
  let blockQuote = document.getElementById("quote");
  blockQuote.style.backgroundColor = "#f1f1f1";
  blockQuote.style.padding = "15px";
  blockQuote.style.maxWidth = "800px";
  blockQuote.innerHTML = `
    <h3>${quote}</h3>
    <strong><cite> - Kanye West </cite></strong>
  `;
};

loadQuotes();
