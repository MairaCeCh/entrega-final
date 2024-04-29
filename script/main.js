//////////L.P///////
let MyLifeP = 5000;
let adversaryLifeP = 5000;
alert(
  "Este es un juego de cartas al estilo de YU-GI-OH.\n Los Life Points (LP) de cada uno son de 5000.\nTú tendrás 3 cartas monstruo al igual que tu adversario."
);
/////////cartas del adversario//////
let card_Ad1_Atk = 2000;
let card_Ad1_Def = 2100;
let card_Ad1_Pos = "ATK";

let card_Ad2_Atk = 800;
let card_Ad2_Def = 1000;
let card_Ad2_Pos = "DEF";

let card_Ad3_Atk = 2600;
let card_Ad3_Def = 200;
let card_Ad3_Pos = "ATK";

/////////tus cartas//////
////CARTA 1 /////
let card1Atk = 1800;
let card1Def = 1500;

let card1Pos;

do {
  card1Pos = prompt(
    "Tu carta 1 tiene un ATK de 1800 y una DEF de 1500, ¿elige la posición ATK o DEF?"
  ).toUpperCase();
} while (card1Pos != "ATK" && card1Pos != "DEF");

////CARTA 2 /////
let card2Atk = 300;
let card2Def = 2000;
let card2Pos;
do {
  card2Pos = prompt(
    "Tu carta 2 tiene un ATK de 300 y una DEF de 2000, ¿elijes la posición ATK o DEF?"
  ).toUpperCase();
} while (card2Pos != "ATK" && card2Pos != "DEF");

////CARTA 3////

let card3Atk = 2500;
let card3Def = 300;
let card3Pos;
do {
  card3Pos = prompt(
    "Tu carta 3 tiene un ATK de 2500 y una DEF de 300, ¿elijes la posición ATK o DEF?"
  ).toUpperCase();
} while (card3Pos != "ATK" && card3Pos != "DEF");

///////FIN DE TUS CARTAS
////funciones////

function applyCardMagic(a, b, c, d) {
  alert(
    "¡¡¡¡¡¡Carta magia!!!!\nCon esta podes atacar 3 veces los L.P de tu adversario"
  );
  let Magic = prompt(
    "Podes aplicarla a cualquiera de tus cartas que este en el campo o del cementerio. Elige a cual:\nCarta 1 con ATK de " +
      a +
      " escribe 1 \nCarta 2 con ATK de " +
      b +
      " escribe 2 \nCarta 3 con ATK de " +
      c +
      " escribe 3"
  );

  switch (Magic) {
    case "1":
      for (let i = 1; i < 4; i++) {
        alert(" Ataque numero " + i);
        d = d - a;
        if (d > 0) {
          alert("Los L.P de tu adversario ahora son " + d);
        } else {
          alert("Los L.P de tu adversario llegaron a 0");
          break;
        }
      }
      if (d <= 0) {
        alert("Ganaste los L.P de tu adversario llegaron a 0");
      } else {
        alert("Los L.P de tu adversario ahora son " + d);
      }
      break;
    case "2":
      for (let i = 1; i < 4; i++) {
        alert(" Ataque numero " + i);
        d = d - b;
        if (d > 0) {
          alert("Los L.P de tu adversario ahora son " + d);
        } else {
          alert("Los L.P de tu adversario llegaron a 0");
          break;
        }
      }
      break;

    case "3":
      for (let i = 1; i < 4; i++) {
        alert(" Ataque numero " + i);
        d = d - c;
        if (d > 0) {
          alert("Los L.P de tu adversario ahora son " + d);
        } else {
          alert("Los L.P de tu adversario llegaron a 0");
          break;
        }
      }
      break;

    default:
      alert("Opcion no correcta");
  }
  if (d <= 0) {
    alert("Ganaste los L.P de tu adversario es de 0 y los tuyos " + MyLifeP);
  } else if (d < MyLifeP) {
    alert(
      "Los L.P de tu adversarios no llegaron a 0 pero ganaste por diferencia de puntos.\nL.P de tu adversario: " +
        d +
        " \nTus L.P: " +
        MyLifeP
    );
  } else if (d == MyLifeP) {
    alert("empataron");
  } else {
    alert(
      "Perdiste tus L.P de tu adversarios son mayores que los tuyos.\nL.P de tu adversario: " +
        d +
        " \nTus L.P: " +
        MyLifeP
    );
  }
}
////fin de funciones////
alert(
  "Tus cartas son 3. \n Carta 1: ATK=" +
    card1Atk +
    ", DEF= " +
    card1Def +
    ", POS=" +
    card1Pos +
    ".\n Carta 2:ATK=" +
    card2Atk +
    ", DEF= " +
    card2Def +
    ", POS=" +
    card2Pos +
    ".\n Carta 3: ATK=" +
    card3Atk +
    ", DEF= " +
    card3Def +
    ", POS=" +
    card3Pos
);

let sacrifice = prompt(
  "¡¡¡Carta mágica!!! \n¿Quieres sacrificar tu carta 2 para que tu carta 1 obtenga 350 puntos más en su ATK y DEF? Coloca \nSÍ para confirmar \nNO para cancelar."
).toUpperCase();

if (sacrifice == "SI") {
  card1Atk = card1Atk + 350;
  card1Def = card1Def + 350;
  card2Atk = 0;
  card2Def = 0;
  alert(
    "Nuevo valor de ATK tu carta 1 es " +
      card1Atk +
      " y el nuevo valor de DEF es " +
      card1Def +
      ".\n Y los nuevos valores de tu carta 2 son: ATK " +
      card2Atk +
      " y de DEF " +
      card2Def
  );
} else {
  alert("Tus carta sigue con el mismo ATK y DEF");
}

///////1 ATK////////

let confirmacion = prompt(
  "Quieres que tu carta 1 ataque a la carta 1 a tu adversario ( su atk es de " +
    card_Ad1_Atk +
    "). ¿si o no?"
).toUpperCase();

while (confirmacion != "SI" || confirmacion != "NO") {
  if (confirmacion == "SI") {
    if (card1Pos == "ATK" && card_Ad1_Pos == "ATK" && card1Atk > card_Ad1_Atk) {
      let result_1 = card1Atk - card_Ad1_Atk;
      adversaryLifeP = adversaryLifeP - result_1;

      alert("Ganaste");
      alert("Los L.P de tu adversario ahora son " + adversaryLifeP);
    } else if (
      card1Pos == "ATK" &&
      card_Ad1_Pos == "ATK" &&
      card1Atk < card_Ad1_Atk
    ) {
      let result_1a = card_Ad1_Atk - card1Atk;
      MyLifeP = MyLifeP - result_1a;

      alert("Gano el adversario");
      alert("Tus L.P  ahora son " + MyLifeP);
    } else if (
      card1Pos == "ATK" &&
      card_Ad1_Pos == "ATK" &&
      card1Atk == card_Ad1_Atk
    ) {
      alert("Empataron");
    } else {
      alert("Esta carta esta en modo def, no puede atacar");
    }
    break;
  } else if (confirmacion == "NO") {
    alert("Decidiste no atacar");
    break;
  } else {
    alert("debes elegir si atacar o no");

    confirmacion = prompt(
      "Quieres que tu carta 1 ataque a la carta  a tu adversario ( su atk es de " +
        card_Ad1_Atk +
        "). ¿si o no?"
    ).toUpperCase();
  }
}
// ///////2 ATK////////

let confirmacion_2 = prompt(
  "Quieres que tu carta 2 ataque a la carta 2 a tu adversario ( su def es de " +
    card_Ad2_Def +
    "). ¿si o no?"
).toUpperCase();
while (confirmacion != "SI" || confirmacion != "NO") {
  if (confirmacion_2 == "SI") {
    if (card2Pos == "ATK" && card_Ad2_Pos != "ATK" && card2Atk > card_Ad2_Def) {
      alert("Le hiciste daño a la def de tu adversario");
    } else if (
      card2Pos == "ATK" &&
      card_Ad2_Pos != "ATK" &&
      card2Atk <= card_Ad2_Def
    ) {
      alert(
        "No le hiciste daño a tu adversario, porque la carta del adversario esta en DEF"
      );
    } else {
      alert("Esta carta esta en modo def, no puede atacar");
    }
    break;
  } else if (confirmacion_2 == "NO") {
    alert("Decidiste no atacar");
    break;
  } else {
    alert("debes elegir si atacar o no");
    confirmacion_2 = prompt(
      "Quieres que tu carta 2 ataque a la carta  a tu adversario ( su atk es de " +
        card_Ad2_Atk +
        "). ¿si o no?"
    ).toUpperCase();
  }
}
// ///////3 ATK////////

let confirmacion_3 = prompt(
  "Quieres que tu carta 3 ataque a la carta  a tu adversario ( su atk es de " +
    card_Ad3_Atk +
    "). ¿si o no?"
).toUpperCase();
while (confirmacion != "SI" || confirmacion != "NO") {
  if (confirmacion_3 == "SI") {
    if (card3Pos == "ATK" && card_Ad3_Pos == "ATK" && card3Atk > card_Ad3_Atk) {
      let result_3 = card3Atk - card_Ad3_Atk;
      adversaryLifeP = adversaryLifeP - result_3;

      alert("Ganaste");
      alert("Los L.P de tu adversario ahora son " + adversaryLifeP);
    } else if (
      card3Pos == "ATK" &&
      card_Ad3_Pos == "ATK" &&
      card3Atk < card_Ad3_Atk
    ) {
      let result_3a = card_Ad3_Atk - card3Atk;
      MyLifeP = MyLifeP - result_3a;

      alert("Gano el adversario");
      alert("Tus L.P  ahora son " + MyLifeP);
    } else if (
      card3Pos == "ATK" &&
      card_Ad3_Pos == "ATK" &&
      card3Atk == card_Ad3_Atk
    ) {
      alert("Empataron");
    } else {
      alert("Esta carta esta en modo def, no puede atacar");
    }
    break;
  } else if (confirmacion_3 == "NO") {
    alert("Decidiste no atacar");
    break;
  } else {
    alert("debes elegir si atacar o no");
    confirmacion_3 = prompt(
      "Quieres que tu carta 3 ataque a la carta  a tu adversario ( su atk es de " +
        card_Ad3_Atk +
        "). ¿si o no?"
    ).toUpperCase();
  }
}
alert(
  "Los L.P de tu adversario ahora son de: " +
    adversaryLifeP +
    ".\n Y los tuyos son de: " +
    MyLifeP +
    "."
);

applyCardMagic(card1Atk, card2Atk, card3Atk, adversaryLifeP);
