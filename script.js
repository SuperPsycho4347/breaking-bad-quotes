const url = "https://api.breakingbadquotes.xyz/v1/quotes"
const authorDiv = document.querySelector('.author')
const quoteDiv = document.querySelector('.quote')


fetchQuote(url)


async function fetchQuote(url) {
    const response = await fetch(url);
    const responseJSON = await response.json();
    const quote = (responseJSON[0].quote)
    const author = (responseJSON[0].author)

    displayQuote(author, quote)
}

function displayQuote(author, quote) {
    const quotesText = document.createElement('h1');

    quotesText.textContent = quote;
    quoteDiv.appendChild(quotesText)

    const authorText = document.createElement('h1');
    // console.log(author)
    authorText.textContent = author;
    authorDiv.appendChild(authorText)
}