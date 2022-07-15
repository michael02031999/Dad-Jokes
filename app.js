let jokes = [
  "Why did the cell phone get glasses? Because she lost all her contacts.",
  "How did the mobile phone propose to his girlfriend? He gave her a ring",
  "What’s the most popular video game at the bread bakery? Knead for Speed.",
  "Why is Santa good at karate? He has a black belt.",
  "Where do werewolves buy Christmas gifts? Beast Buy.",
  "What did the snowflake say to the road? Let’s stick together.",
  "Why did the turkey join a band? So he could use his drumsticks.",
  "What’s a math teacher’s favorite winter sport? Figure skating.",
  "What’s a firefly’s favorite dance? The glitterbug.",
  "Why are eyeshadow, lipstick, and mascara never mad at each other? Because they always make-up",
];

let joke = document.getElementById("joke");
let button = document.getElementById("anotherJoke");

button.addEventListener("click", textChange);

let previousRandomNumber = 0;

function textChange() {
  do {
    randomNum = Math.floor(Math.random() * 10 + 1);
  } while (randomNum == previousRandomNumber);

  previousRandomNumber = randomNum;

  joke.innerHTML = jokes[randomNum - 1];
}

window.addEventListener("load", (e) => {
  let randomNum = Math.floor(Math.random() * 10 + 1);

  joke.innerHTML = jokes[randomNum - 1];
});
