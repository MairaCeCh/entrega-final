const titulo = document.getElementById("titulo");
const lifeP = document.getElementById("life-point");
const lifePAdv = document.getElementById("life-pointAd");
const ataquesAdv = document.getElementById("ataquesAdv");
const ataques = document.getElementById("ataques");

const cardsAd = document.getElementById("card-row-ad");
const cards = document.getElementById("card-row");

//////////L.P///////

let MyLifeP = 5000;
let adversaryLifeP = 5000;
const adversaryCards = [
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

//////TUS CARTAS////

const myCards = [
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
  },
];

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

const copyAdv = shuffle(adversaryCards).slice(0, 5);
let copyMy = shuffle(myCards).slice(0, 5);

/////fin mezclar/////

//////mostrar cartas/////
// alert(
//   "te mostraremos tus cartas y las cartas de tu adversario... deberas colocar primero el numero de tu carta con la que quieras jugar y luego la carta de tu enemigo."
// );
// let string = "Tus cartas son ";

// let stringVacio = "";

function filterCard(array) {
  const show = array.filter((card) => card.active === true);

  // console.log("las cactivas son ", show);

  stringVacio = "";
  for (let i = 0; i < show.length; i++) {
    if (show[i].type != "magic") {
      stringVacio += `\n${i + 1} - (${show[i].type}) ${show[i].name} atk ${
        show[i].atk
      } y su def es de ${show[i].def}`;
    } else {
      stringVacio += `\n${i + 1} - (${show[i].type}) ${
        show[i].name
      } su efecto es ${show[i].effect}`;
    }
  }

  return show;
}
filterCard(copyMy);

let verificacion = "";
let verificacion2 = "";

function activeCard(myArray, opcion, arrayAdv) {
  let card = filterCard(myArray)[opcion - 1];
  console.log(opcion);
  console.log(card);

  if (card.type == "magic") {
    card.magic();
    card.active = false;
    console.log(card);
  } else {
    console.log(card);
    filterCard(copyAdv);

    let target =
      filterCard(arrayAdv)[
        parseInt(
          prompt("Selecione la carta que quiere atacar \n" + stringVacio)
        ) - 1
      ];

    // console.log(target);
    let pos = prompt(
      "Elegir la postura si queres que sea de atk o de def. si deseas atk va a atacar al adversario\nDe ser carta magia ignora este mensaje"
    );

    card.pos = pos;

    if (pos === "atk" && target.pos === "atk" && card.atk > target.atk) {
      verificacion = card.atk - target.atk;
      console.log(verificacion);
      console.log(target);

      adversaryLifeP = adversaryLifeP - verificacion;
      target.active = false;
      alert("ganaste los L.P de tu enemigo ahora es de " + adversaryLifeP);

      console.log(card.atk);
    } else if (target.pos === "def") {
      alert("la carta del adversario esta en defensa");
      target.active = false;
    } else if (pos === "atk" && target.pos === "atk" && card.atk < target.atk) {
      verificacion2 = target.atk - card.atk;

      MyLifeP = MyLifeP - verificacion2;
      target.active = false;
      alert("perdiste tus L.P son de " + MyLifeP);
    } else if (pos === "atk" && target.type === "magic") {
      alert("no podes atacar a cartas magias");
    } else if (pos === "atk" && target.pos === "atk") {
      card.atk === target.atk;
      target.active = false;
      alert("empataron");
    }
    card.active = false;
  }
}

// do {
//   if (adversaryLifeP < 1 || MyLifeP < 1 || filterCard(copyMy).length === 0) {
//     console.log("alert");
//     alert(
//       `termino la partida los LP de cada uno son ${MyLifeP} ${adversaryLifeP}`
//     );
//     break;
//   } else {
//     filterCard(copyMy);
//     let opcion = parseInt(prompt("Seleciona tu carta \n" + stringVacio));
//     activeCard(copyMy, opcion, copyAdv);
//   }
// } while (adversaryLifeP > 1 && MyLifeP > 1 && copyMy.length > 0);

let principal = document.createElement("div");
principal.innerHTML = `<h2> Juego de cartas</h2> <p>Este es un juego de cartas al estilo de YU-GI-OH. Los Life Points (LP) de cada uno son de 5000. Tú tendrás 3 cartas monstruo al igual que tu adversario.</p>`;
titulo.append(principal);

let point = document.createElement("div");
point.innerHTML = `<p>${MyLifeP}</p>`;
lifeP.append(point);

let pointAdv = document.createElement("div");
pointAdv.innerHTML = `<p>${adversaryLifeP}</p>`;
lifePAdv.append(pointAdv);

// let cardElementAdv = "";
// copyAdv.forEach((card) => {
//   cardElementAdv = document.createElement("div");
//   cardElementAdv.className = "col-md-4";
//   cardElementAdv.innerHTML = `
//       <div id="${card.id}" class="card mb-4" style="width: 18rem;">
//         <img src="${card.image}" class="card-img-top" alt="${card.name}">
//         <div class="card-body">
//           <h5 class="card-title">${card.name}</h5>
//           <p class="card-text">ATK: ${card.atk}</p>
//           <p class="card-text">DEF: ${card.def}</p>

//         </div>
//       </div>
//     `;
//   cardsAd.append(cardElementAdv);
// });

// copyMy.forEach((card) => {
//   let cardElement = document.createElement("div");
//   cardElement.className = "col-md-4";
//   cardElement.innerHTML = `
//     <div id="cardblue" class="card mb-4 blue" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="${card.name}">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//         <p class="card-text">ATK: ${card.atk}</p>
//         <p class="card-text">DEF: ${card.def}</p>
//         <input type="text" id="input${card.id}" placeholder="elegir posición">
//         <button id="button${card.id}" class="btn-c">Atacar</button>
//       </div>
//     </div>
//   `;
//   cards.append(cardElement);

//   document
//     .getElementById(`button${card.id}`)
//     .addEventListener("click", function () {
//       this.classList.toggle("red");
//       let inputPos = document.getElementById(`input${card.id}`).value;

//       localStorage.setItem(`cardPos${card.id}`, inputPos);

//       card.pos = localStorage.getItem(`cardPos${card.id}`);

//       cardElementAdv.classList.toggle("border-blue");
//     });
// });

let cardElementsAdv = []; // Array para almacenar todas las referencias a cardElementAdv

copyAdv.forEach((card) => {
  let cardElementAdv = document.createElement("div");
  cardElementAdv.className = "col-4";
  cardElementAdv.dataset.type = card.type;
  cardElementAdv.innerHTML =
    card.type === "monster"
      ? ` 
    <div id="${card.id}" class="card mb-4" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top img" alt="${card.name}">
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">ATK: ${card.atk}</p>
        <p class="card-text">DEF: ${card.def}</p>
      </div>
    </div>
  `
      : ` 
    <div id="${card.id}" class="card mb-4" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top img" alt="${card.name}">
      <h3>${card.type}</h3>
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
      </div>
    </div>
  `;
  cardsAd.append(cardElementAdv);
  console.log(cardElementAdv.dataset);
  cardElementsAdv.push(cardElementAdv); // Agregar cardElementAdv al array
});

copyMy.forEach((card) => {
  let cardElement = document.createElement("div");
  cardElement.className = "col-4";
  cardElement.innerHTML =
    card.type === "monster"
      ? `
    <div id="cardblue" class="card mb-4 blue" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top img" alt="${card.name}">
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">ATK: ${card.atk}</p>
        <p class="card-text">DEF: ${card.def}</p>
        <input type="text" id="input${card.id}" placeholder="elegir posición">
        <button id="button${card.id}" class="btn-c">elegir</button>
      </div>
    </div>
  `
      : `
    <div id="cardblue" class="card mb-4 blue" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top img" alt="${card.name}">
      <h3>${card.type}</h3>
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <button id="button${card.id}" class="btn-c">Atacar</button>
      </div>
    </div>
  `;
  cards.append(cardElement);

  document
    .getElementById(`button${card.id}`)
    .addEventListener("click", function () {
      this.classList.toggle("red");

      let inputPosElement = document.getElementById(`input${card.id}`);
      let inputPos = inputPosElement ? inputPosElement.value : null;

      if (inputPos) {
        localStorage.setItem(`cardPos${card.id}`, inputPos);
        card.pos = localStorage.getItem(`cardPos${card.id}`);
      }

      // Iterar sobre el array y agregar la clase a todos los elementos
      cardElementsAdv.forEach((element) => {
        if (element.dataset.type === "monster") {
          element.classList.toggle("border-blue");
        }
      });
    });
});

//
