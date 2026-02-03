// ============================================
// ACTIVITY 3: THE SOLAR SYSTEM QUIZ
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------

const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

// --------------------------------------------
// STEP 2: CREATE VARIABLES TO TRACK GAME STATE
// --------------------------------------------

let score = 0;
let pluto = false;

// --------------------------------------------
// STEP 3: CREATE THE ANSWER-CHECKING FUNCTION
// --------------------------------------------

const checkAnswer = () => {
  // Get the current value from the text input
  let currentAnswer = textBox.value.trim();

  if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<h3>Mercury</h3><p>The closest planet to the Sun!</p>`;
    score++;

  } else if (currentAnswer === "Venus") {
    outputBox.innerHTML += `<h3>Venus</h3><p>The hottest planet in our solar system.</p>`;
    score++;

  } else if (currentAnswer === "Earth") {
    outputBox.innerHTML += `<h3>Earth</h3><p>The only known planet with life.</p>`;
    score++;

  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<h3>Mars</h3><p>Known as the Red Planet.</p>`;
    score++;

  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<h3>Jupiter</h3><p>The largest planet in the solar system.</p>`;
    score++;

  } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<h3>Saturn</h3><p>Famous for its giant rings.</p>`;
    score++;

  } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<h3>Uranus</h3><p>This planet rotates on its side!</p>`;
    score++;

  } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<h3>Neptune</h3><p>The farthest planet from the Sun.</p>`;
    score++;

  } else if (currentAnswer === "Pluto") {
    outputBox.innerHTML += `<h3>Pluto</h3><p>Bonus! Pluto is now classified as a dwarf planet.</p>`;
    pluto = true;

  } else {
    statusBox.innerHTML = "❌ That is not a planet. Try again!";
  }

  // Check score after each answer
  checkScore();

  // Reset input
  textBox.value = "";
};

// --------------------------------------------
// STEP 4: CREATE THE SCORE-CHECKING FUNCTION
// --------------------------------------------

const checkScore = () => {
  if (score === 8 && pluto) {
    statusBox.innerHTML = "🌟 PERFECT! You found all planets AND the secret Pluto bonus!";
    textBox.disabled = true;

  } else if (score === 8) {
    statusBox.innerHTML = "🎉 Congratulations! You found all 8 planets!";
  }
};

// --------------------------------------------
// STEP 5: ADD AN EVENT LISTENER
// --------------------------------------------

textBox.addEventListener("change", checkAnswer);
