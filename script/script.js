const titulo = document.getElementById("titulo");
const lifeP = document.getElementById("life-point");
const lifePAdv = document.getElementById("life-pointAd");
const selectCardAdv = document.getElementById("selectCardAdv");
const selectCard = document.getElementById("selectCard");
const btn_atacar = document.getElementById("btn_atacar");
// const resultado = document.getElementById("resultado");
const salir = document.getElementById("salir");
const container = document.querySelector(".container");
const jugar = document.getElementById("jugar");
const jugarNone = document.querySelector(".jugar-none");

const cardsAd = document.getElementById("card-row-ad");
const cards = document.getElementById("card-row");

//////////L.P///////

let MyLifeP = 5000;
let adversaryLifeP = 5000;
let cardElementsAdv = [];
let chosenCard = null;
let chosenCardAdv = null;
let verificacion = "";
let verificacion2 = "";
let nombre = "";

//////CARTAS////
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
  {
    id: 11,
    name: "Molten Phoenix",
    type: "magic",
    effect: "Incrementa 1000 a tus LP",
    img: "https://m.media-amazon.com/images/I/61Qe9gpgCJL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Venomous Serpent",
    type: "magic",
    effect: "Resta 1000 a los LP de tu adversario",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSO-JQZ1Som0NSPnze7cOUHYU5bnyTdixGA&s",
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
  {
    id: 11,
    name: "Molten Phoenix",
    type: "magic",
    effect: "incrementa 1000 a tus LP ",
    img: "https://m.media-amazon.com/images/I/61Qe9gpgCJL._AC_UF894,1000_QL80_.jpg",
    magic: function () {
      MyLifeP += 1000;
      alert("tus L.P. son" + MyLifeP);
    },
    pos: null,
  },
  {
    id: 12,
    name: "Venomous Serpent",
    type: "magic",
    effect: "Resta 1000 a los LP de tu adversario",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSO-JQZ1Som0NSPnze7cOUHYU5bnyTdixGA&s",
    magic: function () {
      adversaryLifeP -= 1000;
      alert(`los L.p. de tu adversario son ${adversaryLifeP}`);
    },
    pos: null,
  },
];

async function getApiCards() {
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let copyAdv = [];
let copyMy = [];

async function showGame() {
  const cards = await getApiCards();

  cards.forEach((card) => (card.active = null));

  const filteredCards = cards.filter(
    (carta) => carta.type !== "Spell Card" && carta.type !== "Trap Card"
  );
  adversaryCards = await filteredCards.slice(0, 50);
  myCards = await filteredCards.slice(50, 100);

  console.log(myCards);
  console.log(adversaryCards);
  copyAdv = shuffle(adversaryCards).slice(0, 5);
  copyMy = shuffle(myCards).slice(0, 5);

  console.log(copyMy);
  console.log(copyAdv);

  showCardsAdv(copyAdv);
  showCards(copyMy);
}

showGame();
// Limitar a los primeros 10 elementos después de filtrar

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
      cardElementAdv.className = "col-2";
      cardElementAdv.dataset.type = card.type;

      cardElementAdv.innerHTML = ` 
  <div id="${card.id}" class="card mb-4" style="width: 10rem;">
  <div class="aspect-ratio" style="aspect-ratio: 16/9;">
      <img src="${card.card_images[0].image_url_small}" class="card-img-top img" alt="${card.name}">
  </div>
  <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">ATK: ${card.atk}</p>
      <p class="card-text">DEF: ${card.def}</p>
      <div class="col-12">
          <button id="elegir${card.id}" class="btn btn-primary w-100">elegir</button>
      </div>
  </div>
</div>
`;
      cardsAd.append(cardElementAdv);
      console.log(cardElementAdv.dataset);
      cardElementsAdv.push(cardElementAdv);

      let btnChosenAdv = document.getElementById(`elegir${card.id}`);
      btnChosenAdv.addEventListener("click", () => {
        chosenCardAdv = card;
        console.log(chosenCard);
        selectCardAdv.innerHTML = `<h5>${card.name}</h5>`;
      });
    } else if (card.type == "magic" && card.active == true) {
      let cardElementAdv = document.createElement("div");
      cardElementAdv.className = "col-2";
      cardElementAdv.dataset.type = card.type;
      cardElementAdv.innerHTML = ` 
      <div id="${card.id}" class="card mb-4" style="width: 10rem;">
      <div class="aspect-ratio" style="aspect-ratio: 16/9;">
          <img src="${card.card_images[0].image_url_small}" class="card-img-top img" alt="${card.name}">
      </div>
      <h3>${card.type}</h3>
      <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${card.name}</h5>
          <p </p>
          <p </p>
          <div class="col-12">
              <button id="elegir${card.id}" class="btn btn-primary w-100">elegir</button>
          </div>
      </div>
  </div>
  `;
      cardsAd.append(cardElementAdv);
      console.log(cardElementAdv.dataset);
      cardElementsAdv.push(cardElementAdv);

      let btnChosenAdv = document.getElementById(`elegir${card.id}`);
      btnChosenAdv.addEventListener("click", () => {
        chosenCardAdv = card;
        console.log(chosenCard);
        selectCardAdv.innerHTML = `<h5>${card.name}</h5>`;
      });
    }
  });
}

function showCards(copyMy) {
  cards.innerHTML = "";
  copyMy.forEach((card) => {
    if (card.active == true) {
      let cardElement = document.createElement("div");
      cardElement.className = "col-2";
      cardElement.innerHTML = `<div class="card mb-4">
      <img src="${card.card_images[0].image_url_small}" class="card-img-top img-fluid" alt="${card.name}" style="height: 10rem; object-fit: cover;">
      <div class="card-body ">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">ATK: ${card.atk}</p>
          <p class="card-text">DEF: ${card.def}</p>
          <div class="row">
              <div class="col-md-8">
                  <button id="btnAtk${card.id}" class="btn btn-secondary w-100">Atk</button>
              </div> 
              <div class="col-md-8">    
                  <button id="btnDef${card.id}" class="btn btn-secondary w-100">Def</button>
              </div> 
          </div>
          <button id="myCard${card.id}" class="btn btn-primary mt-2">Elegir</button>
      </div>
  </div>
  
`;
      cards.append(cardElement);

      let btnAtk = document.getElementById(`btnAtk${card.id}`);
      btnAtk.addEventListener("click", () => {
        card.pos = "atk";
        btnAtk.classList.add("btn-danger");
        btnDef.classList.remove("btn-success");
        console.log(copyMy);
      });
      let btnDef = document.getElementById(`btnDef${card.id}`);
      btnDef.addEventListener("click", () => {
        card.pos = "def";
        btnAtk.classList.remove("btn-danger");
        btnDef.classList.add("btn-success");
        console.log(copyMy);
      });
      let btnChosen1 = document.getElementById(`myCard${card.id}`);
      console.log(btnChosen1);
      btnChosen1.addEventListener("click", () => {
        chosenCard = card;

        selectCard.innerHTML = `<h5>${card.name}</h5>`;
      });
    } else if (card.type == "magic" && card.active == true) {
      let cardElement = document.createElement("div");
      cardElement.className = "col-2";
      cardElement.innerHTML = `
      <div id="cardblue" class="card mb-4" style="width: 10rem;">
      <img src="${card.img}" class="card-img-top img" alt="${card.name}" style="object-fit: cover; height: 150px;">
      <h3>${card.type}</h3>
      <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <div class="col-12">
              <button id="myCard${card.id}" class="btn btn-primary w-100">elegir</button>
          </div>
      </div>
  </div>
  
  `;
      cards.append(cardElement);
      let btnChosen1 = document.getElementById(`myCard${card.id}`);
      console.log(btnChosen1);
      btnChosen1.addEventListener("click", () => {
        chosenCard = card;

        selectCard.innerHTML = `<h5>${card.name}</h5>`;
      });
    }
  });
}

jugar.addEventListener("click", () => {
  container.classList.toggle("none");
  jugarNone.classList.toggle("none");
  Swal.fire({
    title: "Cuál es tu nombre",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    showLoaderOnConfirm: true,
    preConfirm: async (nombre) => {
      try {
        localStorage.setItem("nombreUsuario", nombre);
      } catch (error) {
        Swal.showValidationMessage(`Error: ${error}`);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
    didOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.classList.add("aceptar");

      confirmButton.addEventListener("click", () => {
        const nombre = localStorage.getItem("nombreUsuario");
        // Verifica si nombre existe en el localStorage
        if (nombre) {
          lifeP.innerHTML = `Los Life Point de ${nombre}:<p>${MyLifeP}</p>`;
        } else {
          // Si no hay nombre en el localStorage, muestra un mensaje
          console.error(
            "El nombre de usuario no se encuentra en el localStorage"
          );
        }
      });
    },
  });
});
let pointAdv = document.createElement("div");
pointAdv.innerHTML = `<p>${adversaryLifeP}</p>`;
lifePAdv.append(pointAdv);

function atacar() {
  if (chosenCard.pos == "atk") {
    if (chosenCard.atk > chosenCardAdv.atk && adversaryLifeP > 0) {
      Toastify({
        text: "tu carta le gano a la carta del adversario",
        duration: 3000,
      }).showToast();
      verificacion = chosenCard.atk - chosenCardAdv.atk;
      adversaryLifeP = adversaryLifeP - verificacion;
      pointAdv.innerHTML = `<p>${adversaryLifeP}</p>`;
      lifePAdv.append(pointAdv);
    } else if (chosenCard.atk < chosenCardAdv.atk && MyLifeP > 0) {
      Toastify({
        text: "tu carta no le gano a la carta del adversario",
        duration: 3000,
      }).showToast();
      verificacion2 = chosenCardAdv.atk - chosenCard.atk;
      MyLifeP = MyLifeP - verificacion2;
      lifeP.innerHTML = `Los Life Point de ${nombre}:<p>${MyLifeP}</p>`;
      console.log(verificacion2);
      console.log(MyLifeP);
    } else if (chosenCard.atk == chosenCardAdv.atk) {
      Toastify({
        text: "empataron",
        duration: 3000,
      }).showToast();
    } else if (chosenCard.atk > chosenCardAdv.atk && adversaryLifeP < 0) {
      Toastify({
        text: `ya se termino el juego gano ${nombre}`,
        duration: 3000,
      }).showToast();
      window.location.href = "final.html";
    } else if (chosenCard.atk < chosenCardAdv.atk && MyLifeP < 0) {
      Toastify({
        text: `ya se termino el juego gano el adversario`,
        duration: 3000,
      }).showToast();
      window.location.href = "final.html";
    } else {
      Toastify({
        text: `tu carta esta en modo defensa`,
        duration: 3000,
      }).showToast();
    }
    chosenCard.active = false;
    chosenCardAdv.active = false;
  } else {
    Toastify({
      text: `tu carta esta en modo defensa`,
      duration: 3000,
    }).showToast();
  }
}

btn_atacar.addEventListener("click", () => {
  atacar();
  showCards(copyMy);
  showCardsAdv(copyAdv);
});

let principal = document.createElement("div");
principal.innerHTML = `<h2> Juego de cartas</h2> <p>Este es un juego de cartas al estilo de YU-GI-OH. Los Life Points (LP) de cada uno son de 5000. Tú tendrás 3 cartas monstruo al igual que tu adversario.</p>`;
titulo.append(principal);

salir.addEventListener("click", () => {
  jugarNone.classList.toggle("none");
  container.classList.toggle("none");
  localStorage.clear();
});
