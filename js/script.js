const epicMix = [
  "I'd Rather Go Blind",
  "Die With a Smile",
  "Quietly Yours",
  "The Boy is Mine",
  "Last Dance",
  "Virgo Groove",
  "Sing A Song",
  "Dancing Queen",
  "Water",
  "Espresso",
  "Run the World (Girls)",
  "L-O-V-E"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
});
