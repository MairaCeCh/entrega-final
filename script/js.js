//////////L.P///////
let MyLifeP = 5000;
let adversaryLifeP = 5000;
alert(
  "Este es un juego de cartas al estilo de YU-GI-OH.\n Los Life Points (LP) de cada uno son de 5000.\nTú tendrás 3 cartas monstruo al igual que tu adversario."
);
/////////cartas del adversario//////

const adversaryCards = [
  {
    id: 1,
    name: "Thunder Guardian",
    atk: 2000,
    def: 2100,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 2,
    name: "Stone Golem",
    atk: 800,
    def: 1000,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 3,
    name: "Blaze Dragon",
    atk: 2600,
    def: 200,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 4,
    name: "Ironclad Behemoth",
    atk: 1500,
    def: 1800,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 5,
    name: "Celestial Paladin",
    atk: 3000,
    def: 2500,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 6,
    name: "Swift Wind Sprite",
    atk: 700,
    def: 900,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 7,
    name: "Ember Phoenix",
    atk: 1800,
    def: 1600,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 8,
    name: "Crystal Serpent",
    atk: 2400,
    def: 2200,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 9,
    name: "Silverback Sentinel",
    atk: 1000,
    def: 1200,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 10,
    name: "Frost Wyrm",
    atk: 2800,
    def: 300,
    pos: "atk",
    type: "monster",
    effect: null,
  },
  {
    id: 11,
    name: "Molten Phoenix",
    type: "magic",
    effect: "Incrementa 1000 a tus LP",
  },
  {
    id: 12,
    name: "Venomous Serpent",
    type: "magic",
    effect: "Resta 1000 a los LP de tu adversario",
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
  },
  {
    id: 2,
    name: "Dusk Lycan",
    atk: 1000,
    def: 1500,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 3,
    name: "Frostbite Yeti",
    atk: 2800,
    def: 1200,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 4,
    name: "Spectral Wraith",
    atk: 1500,
    def: 1700,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 5,
    name: "Ironbark Treant",
    atk: 3000,
    def: 2500,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 6,
    name: "Shadowclaw Panther",
    atk: 800,
    def: 1000,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 7,
    name: "Ember Drake",
    atk: 2000,
    def: 2100,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 8,
    name: "Crystal Guardian",
    atk: 2400,
    def: 2200,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 9,
    name: "Thunderstrike Eagle",
    atk: 1600,
    def: 1800,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 10,
    name: "Abyssal Leviathan",
    atk: 2600,
    def: 2300,
    pos: null,
    type: "monster",
    effect: null,
  },
  {
    id: 11,
    name: "Molten Phoenix",
    type: "magic",
    effect: "incrementa 1000 a tus LP ",
    magic: function () {
      alert("es mi carta magia");
    },
  },
  {
    id: 12,
    name: "Venomous Serpent",
    type: "magic",
    effect: "Resta 1000 a los LP de tu adversario",
    magic: function () {
      alert("es mi carta magia");
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

console.log("adv", copyAdv);
console.log("my", copyMy);

/////fin mezclar/////

//////mostrar cartas/////
alert(
  "te mostraremos tus cartas y las cartas de tu adversario... deberas colocar primero el numero de tu carta con la que quieras jugar y luego la carta de tu enemigo."
);
let string = "Tus cartas son ";

let stringVacio = "";

function filterCard(array) {
  const show = array.filter((card) => card.active === true);

  // console.log("las cactivas son ", show);

  stringVacio = "";
  for (let i = 0; i < show.length; i++) {
    if (show[i].type != "magic") {
      stringVacio += `\n${i + 1} - (${show[i].type}) su atk es de ${
        show[i].atk
      } y su def es de ${show[i].def}`;
    } else {
      stringVacio += `\n${i + 1} - (${show[i].type}) su efecto es ${
        show[i].effect
      }`;
    }
  }

  return show;
}
filterCard(copyMy);

let verificacion = "";
let verificacion2 = "";

function activeCard(myArray, opcion, arrayAdv, target) {
  let card = filterCard(myArray)[opcion - 1];
  console.log(opcion);
  console.log(card);

  if (card.type == "magic") {
    card.magic();
  } else {
    alert("monstruo");
    let pos = prompt(
      "Elegir la postura si queres que sea de atk o de def. si deseas atk va a atacar al adversario\nDe ser carta magia ignora este mensaje"
    );

    if (card.type == "monster" && myArray == copyMy) {
      card.pos = pos;
    }
    if (
      pos === "atk" &&
      arrayAdv[target - 1].pos === "atk" &&
      myArray[opcion - 1].atk > arrayAdv[target - 1].atk
    ) {
      verificacion = myArray[opcion - 1].atk - arrayAdv[target - 1].atk;

      adversaryLifeP = adversaryLifeP - verificacion;
      alert("ganaste los L.P de tu enemigo ahora es de " + adversaryLifeP);

      console.log(myArray[opcion - 1].atk);
    } else if (arrayAdv[target - 1].pos === "def") {
      alert("la carta del adversario esta en defensa");
    } else if (
      pos === "atk" &&
      arrayAdv[target - 1].pos === "atk" &&
      myArray[opcion - 1].atk < arrayAdv[target - 1].atk
    ) {
      verificacion2 = arrayAdv[target - 1].atk - myArray[opcion - 1].atk;

      MyLifeP = MyLifeP - verificacion2;

      alert("perdiste tus L.P son de " + MyLifeP);
    } else if (pos === "atk" && arrayAdv[target - 1].type === "magic") {
      alert("no podes atacar a cartas magias");
    } else {
      alert("hubo un error, volve a intentarlo");
    }
  }
  // if (card.type == "magic" && array == copyMy && array[e - 1].id == 11) {
  //   alert("es carta magia");
  //   MyLifeP = MyLifeP + 1000;
  //   alert("tus L.P aumentaron 1000 ahora son de " + MyLifeP);
  // } else if (card.type == "magic" && array == copyMy && array[e - 1].id == 12) {
  //   adversaryLifeP = adversaryLifeP - 1000;
  //   alert(
  //     "le bajaste 1000 puntos a los L.P de tu adversario, ahora son de " +
  //       adversaryLifeP
  //   );
  // } ;
  // }

  ////////////
}

// while (adversaryLifeP >= 0 && MyLifeP >= 0) {
//   string += "\nEstas son las de tu adversario";
//   filterCard(copyAdv);

//   let opcion = parseInt(
//     prompt(string + "\n Selecione la opcion con el numero correspondiente ")
//   );
//   let opcionAdv = parseInt(
//     prompt(
//       "\n Selecione la opcion con el numero correspondiente a las cartas del enemigo\nDe ser carta magia ignora este mensaje"
//     )
//   );
//   activeCard(copyMy, opcion, copyAdv, opcionAdv);
// }

while (adversaryLifeP >= 0 && MyLifeP >= 0) {
  filterCard(copyMy);
  let opcion = parseInt(
    prompt(
      stringVacio + "\n Selecione la opcion con el numero correspondiente "
    )
  );

  filterCard(copyAdv);
  let opcionAdv = parseInt(
    prompt("\n Selecione la carta que quiere atacar" + stringVacio)
  );
  activeCard(copyMy, opcion, copyAdv, opcionAdv);
}
