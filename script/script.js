const lifeP = document.getElementById("life-point");
const lifePAdv = document.getElementById("life-pointAd");
const selectCardAdv = document.getElementById("selectCardAdv");
const selectCard = document.getElementById("selectCard");
const btn_atacar = document.getElementById("btn_atacar");
const salir = document.getElementById("salir");
const container = document.querySelector(".container-fluid");
const jugar = document.getElementById("jugar");
const jugarNone = document.querySelector(".jugar-none");
const cardsAd = document.getElementById("card-row-ad");
const cards = document.getElementById("card-row");
const final = document.getElementById("final");
const gano = document.getElementById("gano");

let MyLifeP = 5000;
let adversaryLifeP = 5000;
let cardElementsAdv = [];
let chosenCard = null;
let chosenCardAdv = null;
let verificacion = "";
let verificacion2 = "";
let nombre = "";

let adversaryCards = [
  {
    id: 1,
    name: "Thunder Guardian",
    atk: 2000,
    def: 2100,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1cyaxhIdj9oD9vKXONqq_0RCKpNhWtL8UA&s",
  },
  {
    id: 2,
    name: "Stone Golem",
    atk: 800,
    def: 1000,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDedqSvP11RXBjAgLUqnCjoch51PseV51Tw&s",
  },
  {
    id: 3,
    name: "Blaze Dragon",
    atk: 2600,
    def: 200,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://play-lh.googleusercontent.com/MBr7HyqN08m8d7gPwlvMJ3x34JBdZ7jxwi7YCc4KltFnsHvHVNs2fXCKHiwkwgECZSM",
  },
  {
    id: 4,
    name: "Ironclad Behemoth",
    atk: 1500,
    def: 1800,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkCxNtQ0YmYWFYt6eSxZG-TtU0aJ_nUAJHA&s",
  },
  {
    id: 5,
    name: "Celestial Paladin",
    atk: 3000,
    def: 2500,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iXD-sfMAxsiRJ8QpcAbzlCLNLzu9X1g92g&s",
  },
  {
    id: 6,
    name: "Swift Wind Sprite",
    atk: 700,
    def: 900,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://i.pinimg.com/736x/60/ec/50/60ec507293fab5fa3a483baf0858f75e.jpg",
  },
  {
    id: 7,
    name: "Ember Phoenix",
    atk: 1800,
    def: 1600,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://ih1.redbubble.net/image.5142491808.9243/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.jpg",
  },
  {
    id: 8,
    name: "Crystal Serpent",
    atk: 2400,
    def: 2200,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://thumbs.dreamstime.com/z/graciosa-imagen-de-meme-animal-meerkat-fotog%C3%A9nico-sonriendo-para-c%C3%A1mara-narcisista-la-cara-amigable-una-linda-pose-vanidoso-172568468.jpg",
  },
  {
    id: 9,
    name: "Silverback Sentinel",
    atk: 1000,
    def: 1200,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJX4icmBwoRBHOJdC_UGKjUOaDtS20nRLIfA&s",
  },
  {
    id: 10,
    name: "Frost Wyrm",
    atk: 2800,
    def: 300,
    pos: "atk",
    type: "monster",
    effect: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIIajwbxhEnZcY5XlRF32sq4IDLmQN9bvHg&s",
  },
];
let myCards = [
  {
    id: 1,
    name: "Arcane Spellcaster",
    atk: 2200,
    def: 1900,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://i.pinimg.com/550x/e6/9b/b7/e69bb7c92e53bae36814a6fd49ba450f.jpg",
  },
  {
    id: 2,
    name: "Dusk Lycan",
    atk: 1000,
    def: 1500,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://favim.com/pd/s11/orig/7/783/7834/78342/baby-wholesome-memes-Favim.com-7834206.jpg",
  },
  {
    id: 3,
    name: "Frostbite Yeti",
    atk: 2800,
    def: 1200,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://images7.memedroid.com/images/UPLOADED212/600ddd58dc304.jpeg",
  },
  {
    id: 4,
    name: "Spectral Wraith",
    atk: 1500,
    def: 1700,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://i.pinimg.com/736x/86/ae/73/86ae735997e7e50ce0925a947439622d.jpg",
  },
  {
    id: 5,
    name: "Ironbark Treant",
    atk: 3000,
    def: 2500,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://pbs.twimg.com/profile_images/1526434699777671168/d_jgFjDi_400x400.jpg",
  },
  {
    id: 6,
    name: "Shadowclaw Panther",
    atk: 800,
    def: 1000,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://rvideos1.memedroid.com/videos/UPLOADED319/60fc7d9180cec.jpeg",
  },
  {
    id: 7,
    name: "Ember Drake",
    atk: 2000,
    def: 2100,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://pbs.twimg.com/tweet_video_thumb/FyxI4odWIAc5l52.jpg",
  },
  {
    id: 8,
    name: "Crystal Guardian",
    atk: 2400,
    def: 2200,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://pbs.twimg.com/profile_images/1082832482477752320/xXvIqD73_400x400.jpg",
  },
  {
    id: 9,
    name: "Thunderstrike Eagle",
    atk: 1600,
    def: 1800,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://pbs.twimg.com/profile_images/2559620458/tkrdcknuvzxvareqtbbp_400x400.jpeg",
  },
  {
    id: 10,
    name: "Abyssal Leviathan",
    atk: 2600,
    def: 2300,
    pos: null,
    type: "monster",
    effect: null,
    img: "https://i.pinimg.com/736x/62/c2/4e/62c24ebd2de6f923faa920fc8697575a.jpg",
  },
];

async function getApiCards() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let copyAdv = [];
let copyMy = [];

async function showGame() {
  const cards = await getApiCards();

  cards.forEach(
    (card) => (
      (card.active = null),
      (card.position = null),
      (card.id +=
        "p" + cards.findIndex((otherCard) => otherCard.id === card.id))
    )
  );

  const filteredCards = cards.filter(
    (carta) => carta.type !== "Spell Card" && carta.type !== "Trap Card"
  );
  adversaryCards = await filteredCards.slice(0, 50);
  myCards = await filteredCards.slice(50, 100);

  copyAdv = shuffle(adversaryCards).slice(0, 5);
  copyMy = shuffle(myCards).slice(0, 5);

  showCardsAdv(copyAdv);
  showCards(copyMy);
}

showGame();

/////mezclar/////
function shuffle(array) {
  let shuffledCards = [...array];
  for (let i = 0; i < shuffledCards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));

    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    shuffledCards.forEach((card) => {
      card.active = true;
    });
  }
  return shuffledCards;
}

function filterCard(array) {
  const show = array.filter((card) => card.active === true);
  return show;
}

function cardPosition(pos, card) {
  card.pos = pos;
}
function showCardsAdv(copyAdv) {
  cardsAd.innerHTML = "";
  copyAdv.forEach((card) => {
    if (card.active == true) {
      let cardElementAdv = document.createElement("div");
      cardElementAdv.className = "col-2 ";
      cardElementAdv.dataset.type = card.type;

      cardElementAdv.innerHTML = `<div id="elegir${card.id}" class ="row "> <img src="images/back-card.jpg" class="image img-fluid p-0 " alt=""> </div>`;

      cardsAd.append(cardElementAdv);

      cardElementsAdv.push(cardElementAdv);

      let btnChosenAdv = document.getElementById(`elegir${card.id}`);
      btnChosenAdv.addEventListener("click", () => {
        chosenCardAdv = card;

        selectCardAdv.innerHTML = `<img src="${"../images/back-card.jpg"}" class="card-img-top img" alt="incognito">`;
      });
    }
  });
}

function showCards(copyMy) {
  cards.innerHTML = "";
  copyMy.forEach((card) => {
    if (card.active == true) {
      let cardElement = document.createElement("div");

      let border =
        card.position == null
          ? "col-2 grayFilter border border-4 cada_card"
          : card.position == "atk"
          ? "col-2 border border-4 border-danger cada_card"
          : card.position == "def"
          ? "col-2 border border-4 border-success cada_card"
          : "";

      cardElement.className = border;

      cardElement.innerHTML = `<div id="myCard${card.id}" class="row">   <img
              class="image img-fluid p-0"
              src="${card.card_images[0].image_url}"
              alt=""/> 
      </div>

  `;
      cards.append(cardElement);
      const cada_card = document.querySelector(`#myCard${card.id}`);

      const positionCard = () => {
        cada_card.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          if (card.position == null) {
            card.position = "atk";
            cardElement.classList.remove("grayFilter");
            cardElement.classList.add("border-danger");
          } else if (card.position == "atk") {
            card.position = "def";
            cardElement.classList.remove("grayFilter");
            cardElement.classList.remove("border-danger");
            cardElement.classList.add("border-success");
          } else if (card.position == "def") {
            card.position = "atk";
            cardElement.classList.remove("grayFilter");
            cardElement.classList.add("border-danger");
            cardElement.classList.remove("border-success");
          }
        });
      };
      positionCard();

      cada_card.addEventListener("click", () => {
        card.position == null
          ? Swal.fire("elegir la posicion de la carta!")
          : ((chosenCard = card),
            (selectCard.innerHTML = `<img src="${card.card_images[0].image_url}" class="card-img-top img" alt="incognito"><h6 class="fw-semibold m-0 text-center mt-3">${card.position}</h6>`));
      });
    }
  });
}
const user = () => {
  Swal.fire({
    title: "Cuál es tu nombre",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: false,
    confirmButtonText: "Aceptar",
    showLoaderOnConfirm: true,
    allowOutsideClick: false,
    preConfirm: async (nombre) => {
      if (!nombre) {
        Swal.showValidationMessage("El nombre no puede estar vacío");
        return false;
      }
      try {
        localStorage.setItem("nombreUsuario", nombre);
      } catch (error) {
        Swal.showValidationMessage(`Error: ${error}`);
      }
    },
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.classList.add("aceptar");

      confirmButton.addEventListener("click", () => {
        const nombre = localStorage.getItem("nombreUsuario");

        if (nombre) {
          lifeP.innerHTML = `Los Life Point de ${nombre}:<p>${MyLifeP}</p>`;
        } else {
          console.error(
            "El nombre de usuario no se encuentra en el localStorage"
          );
        }
      });
    },
  });
};
jugar.addEventListener("click", () => {
  container.classList.toggle("d-none");
  jugarNone.classList.add("d-none");
  jugarNone.classList.remove("d-flex");
  user();
});

let pointAdv = document.createElement("div");
// pointAdv.innerHTML = `
// <p>${adversaryLifeP}</p>
// `;
lifePAdv.append(pointAdv);

function atacar() {
  nombre = localStorage.getItem("nombreUsuario");
  if (chosenCard.position == "atk") {
    if (chosenCard.atk > chosenCardAdv.atk) {
      Toastify({
        text: "Tu carta le ganó a la carta del adversario",
        duration: 3000,
        position: "right",
        style: {
          background:
            "linear-gradient(109.6deg, rgba(249,21,215,1) 1.1%, rgba(22,0,98,1) 99%)",
        },
      }).showToast();
      verificacion = chosenCard.atk - chosenCardAdv.atk;
      adversaryLifeP -= verificacion;
      pointAdv.innerHTML = `<p>${adversaryLifeP}</p>`;
      lifePAdv.innerHTML = `Los Life Point del adversario: <p>${adversaryLifeP}</p>`;
      // lifePAdv.append(pointAdv);
    } else if (chosenCard.atk < chosenCardAdv.atk) {
      Toastify({
        text: "Tu carta no le ganó a la carta del adversario",
        duration: 3000,
        position: "right",
        style: {
          background:
            "linear-gradient(109.6deg, rgba(249,21,215,1) 1.1%, rgba(22,0,98,1) 99%)",
        },
      }).showToast();
      verificacion2 = chosenCardAdv.atk - chosenCard.atk;
      MyLifeP -= verificacion2;
      lifeP.innerHTML = `Los Life Points de ${nombre}:<p>${MyLifeP}</p>`;
    } else {
      Toastify({
        text: "Empataron",
        duration: 3000,
        position: "right",
        style: {
          background:
            "linear-gradient(109.6deg, rgba(249,21,215,1) 1.1%, rgba(22,0,98,1) 99%)",
        },
      }).showToast();
    }

    chosenCard.active = false;
    chosenCardAdv.active = false;

    chosenCard = null;
    chosenCardAdv = null;

    selectCard.innerHTML = `<p class="fw-semibold m-0 text-center mt-3">seleccione una carta</p>`;
    selectCardAdv.innerHTML = `<p class="fw-semibold m-0 text-center mt-3">seleccione una carta</p>`;

    if (
      copyAdv.filter((card) => card.active == true).length == 0 ||
      copyMy.filter((card) => card.active == true).length == 0
    ) {
      Swal.fire(
        `Fin del juego.\n Los LP de tu adversario fueron de ${adversaryLifeP}. \n Y los LP de ${nombre}: ${MyLifeP}`
      );
      end();
    } else if (adversaryLifeP <= 0) {
      Swal.fire(
        `Fin del juego. \n Los LP de tu adversario fueron de ${adversaryLifeP}. \n Y los LP de ${nombre}: ${MyLifeP}.\nGano el adversario`
      );
      end();
    } else if (MyLifeP <= 0) {
      Swal.fire(
        `Fin del juego. \n Los LP de tu adversario fueron de ${adversaryLifeP}. \n Y los LP de ${nombre}: ${MyLifeP}.\nGano ${nombre}`
      );
      end();
    }
  } else {
    Toastify({
      text: "Tu carta está en modo defensa",
      duration: 3000,
      position: "right",
    }).showToast();
  }
}

btn_atacar.addEventListener("click", () => {
  atacar();
  showCards(copyMy);
  showCardsAdv(copyAdv);
});
const end = () => {
  MyLifeP = 5000;
  adversaryLifeP = 5000;
  lifeP.innerHTML = `Los Life Point de ${nombre}: <p>${MyLifeP}</p>`;
  lifePAdv.innerHTML = `Los Life Point del adversario: <p>${adversaryLifeP}</p>`;
  jugarNone.classList.toggle("d-none");
  container.classList.toggle("d-none");
  localStorage.clear();
  showGame();
};
salir.addEventListener("click", () => {
  end();
});
