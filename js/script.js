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
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
