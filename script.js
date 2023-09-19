const btn = document.querySelector("button");
const authorName = document.querySelector("#author");
const quoteText = document.querySelector("#quote");

const newQuote = () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      //console.log(response.status);
      //console.log(response.ok);

      return response.json();
    })
    .then((data) => {
      //console.log(data);
      //console.log(data.author);
      //console.log(data.quote);
      authorName.innerText = data.author;
      quoteText.innerText = data.quote;
    });
  // .catch((error) => {
  //   console.error("Fehler beim Abrufen der Daten:", error);
  // });
};
newQuote();
btn.addEventListener("click", newQuote);
