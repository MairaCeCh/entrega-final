let cardElementsAdv = []; // Array para almacenar todas las referencias a cardElementAdv

// copyAdv.forEach((card) => {
//   let cardElementAdv = document.createElement("div");
//   cardElementAdv.className = "col-md-4"; // Cada carta ocupa 1/3 del ancho de la fila
//   cardElementAdv.dataset.type = card.type;
//   cardElementAdv.innerHTML = card.type === "monster" ? `
//     <div id="${card.id}" class="card mb-4" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="${card.name}">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//         <p class="card-text">ATK: ${card.atk}</p>
//         <p class="card-text">DEF: ${card.def}</p>
//       </div>
//     </div>
//   ` : `
//     <div id="${card.id}" class="card mb-4" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="${card.name}">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//       </div>
//     </div>
//   `;
//   document.getElementById('cardsAd').append(cardElementAdv);
//   console.log(cardElementAdv.dataset);
//   cardElementsAdv.push(cardElementAdv); // Agregar cardElementAdv al array
// });

// copyMy.forEach((card) => {
//   let cardElement = document.createElement("div");
//   cardElement.className = "col-md-4"; // Cada carta ocupa 1/3 del ancho de la fila
//   cardElement.innerHTML = card.type === "monster" ? `
//     <div id="cardblue" class="card mb-4 blue" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="${card.name}">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//         <p class="card-text">ATK: ${card.atk}</p>
//         <p class="card-text">DEF: ${card.def}</p>
//         <input type="text" id="input${card.id}" placeholder="elegir posición">
//         <button id="button${card.id}" class="btn-c">elegir</button>
//       </div>
//     </div>
//   ` : `
//     <div id="cardblue" class="card mb-4 blue" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="${card.name}">
//       <div class="card-body">
//         <h5 class="card-title">${card.name}</h5>
//         <button id="button${card.id}" class="btn-c">Atacar</button>
//       </div>
//     </div>
//   `;
//   document.getElementById('cards').append(cardElement);

//   document
//     .getElementById(`button${card.id}`)
//     .addEventListener("click", function () {
//       this.classList.toggle("red");

//       let inputPosElement = document.getElementById(`input${card.id}`);
//       let inputPos = inputPosElement ? inputPosElement.value : null;

//       if (inputPos) {
//         localStorage.setItem(`cardPos${card.id}`, inputPos);
//         card.pos = localStorage.getItem(`cardPos${card.id}`);
//       }

//       // Iterar sobre el array y agregar la clase a todos los elementos
//       cardElementsAdv.forEach((element) => {
//         if (element.dataset.type === "monster") {
//           element.classList.toggle("border-blue");
//         }
//       });
//     });
// });
