const categories = [
  {
    name: "Om meg",
    card: { paragraphs: ["Jeg heter Thor Benjamin og bor på hybel i Hamar", "Jeg liker og Programmere, spesielt web dev med next.js/react", "Jeg spiller mye dataspill som Rocketleague, Minecraft, Metalstorm, Factorio og mye annet",  "Henger også mye med venner når jeg har tid "], img:"portrett.jpg" }

  },
  {
    name: "Forventninger",
    card: { paragraphs: ["Jeg vil lære mer om mer om next.js og programmere mer fullstack nettsider med det", "lære meg mer om diverse verktøy innenfor app dev","Sette opp mer komplekse backends og annet" ] }
  },
  {
    name: "Planer",
    card: { paragraphs: ["Jeg har ikke helt bestemt meg enda men så langt tenker jeg å bli lærling også gå påbygg og studere videre","Jeg tenker å fortsette jobb hos codeo i yff i intilvidere men kan hende jeg ser på alternativer etterhvert"] }
  }
];

const buttonContainer = document.getElementById("buttonContainer");
const card=document.getElementById("card")



let selected 

window.ChangeCard = (i) => {
  selected = i
  const cat = categories[i]
  console.log("Valgt kort:", cat); 
  card.innerHTML = `<h2>${cat.name}</h2> ${cat.card.paragraphs.map((par,i)=>{
    return `<p>- ${par}</p>`
  }).join("")} ${cat.card.img ? `<img src=${"./images/" + cat.card.img} width="512"/>` : ""}`;
  
  renderButtons()

};


function renderButtons() {
  buttonContainer.innerHTML = categories.map((cat, i) => {
    return `<button
      id="${i}"
      onclick="ChangeCard(${i})"
      class="${i === selected ? "selected" : ""}"
    >${cat.name}</button>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("hei", card && "ja")
  window.ChangeCard(0);
});