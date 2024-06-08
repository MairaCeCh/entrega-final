let adversaryCards = [];
let myCards = [];

function getApiCards() {
  const results = fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");

  results
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const filteredData = data.data.filter(
        (carta) => carta.type !== "Spell Card" && carta.type !== "Trap Card"
      );

      // Limitar a los primeros 10 elementos después de filtrar
      adversaryCards = filteredData.slice(0, 50);
      myCards = filteredData.slice(50, 100);

      console.log(myCards);
      console.log(adversaryCards);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

getApiCards();
