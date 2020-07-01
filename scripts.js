const API_URL =  "https://type.fit/api/quotes"

async function generateQuote() {
    const response = await fetch(API_URL);
    const quoteList = await response.json();
    let quote = quoteList[Math.floor(Math.random()*quoteList.length)];
    document.getElementById("quote").innerHTML = "\"" + quote.text + "\"";
    document.getElementById("author").innerHTML = "- " + quote.author
}

