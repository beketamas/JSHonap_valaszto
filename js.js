"use strict"

let honapok = document.getElementById("idHonapok");
let tarolo = document.getElementById("tarolo");

honapok.addEventListener("change", (x) => {
    tarolo.innerHTML = "";
    let i = parseInt(x.target.value);
    for (let index = 1; index < i+1; index++) {
        let ujDiv = document.createElement("div");
        let ujLabel = document.createElement("label");
        let szovegMezo = document.createElement("input")
        szovegMezo.type = "text"
        ujLabel.innerHTML = index;
        ujDiv.appendChild(ujLabel);
        ujDiv.appendChild(szovegMezo)
        tarolo.appendChild(ujDiv)
    }
})