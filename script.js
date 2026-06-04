const steps = [
  {
    id: "evaporation",
    title: "Evaporation",
    clue: "Sunlight warms liquid water so it becomes water vapor.",
    fact: "Evaporation moves water from oceans, lakes, and soil into the air as invisible vapor."
  },
  {
    id: "condensation",
    title: "Condensation",
    clue: "Water vapor cools and gathers into cloud droplets.",
    fact: "Condensation forms clouds when water vapor changes back into tiny liquid droplets or ice crystals."
  },
  {
    id: "precipitation",
    title: "Precipitation",
    clue: "Cloud droplets grow heavy and fall from the sky.",
    fact: "Precipitation returns water to Earth as rain, snow, sleet, or hail."
  },
  {
    id: "collection",
    title: "Collection",
    clue: "Water gathers in rivers, lakes, oceans, and puddles.",
    fact: "Collection stores water on Earth&apos;s surface before it evaporates or moves elsewhere."
  },
  {
    id: "infiltration",
    title: "Infiltration",
    clue: "Some water soaks underground and refills groundwater.",
    fact: "Infiltration helps recharge aquifers and supplies water to plants, springs, and wells."
  }
];

const timeline = document.querySelector("#timeline");
const cardDeck = document.querySelector("#cardDeck");
const statusMessage = document.querySelector("#statusMessage");
const solvedCount = document.querySelector("#solvedCount");
const factTitle = document.querySelector("#factTitle");
const factText = document.querySelector("#factText");
const checkButton = document.querySelector("#checkButton");
const hintButton = document.querySelector("#hintButton");
const resetButton = document.querySelector("#resetButton");

let selectedCardId = null;
let placedCards = Array(steps.length).fill(null);
let hintIndex = 0;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status ${type}`.trim();
}

function setFact(step) {
  if (!step) {
    factTitle.textContent = "Why the sequence matters";
    factText.textContent =
      "The water cycle is powered by the Sun and gravity. Each step moves water between the atmosphere, land, living things, and bodies of water.";
    return;
  }

  factTitle.textContent = step.title;
  factText.textContent = step.fact.replace("&apos;", "'");
}

function renderTimeline() {
  timeline.innerHTML = "";

  placedCards.forEach((cardId, index) => {
    const step = steps.find((item) => item.id === cardId);
    const slot = document.createElement("li");
    const slotButton = document.createElement("button");
    slotButton.type = "button";
    slotButton.className = `slot ${step ? "filled" : ""}`;
    slotButton.dataset.index = index;
    slotButton.setAttribute(
      "aria-label",
      step
        ? `Slot ${index + 1}: ${step.title}. Activate to remove this card.`
        : `Empty slot ${index + 1}. Activate to place selected card.`
    );

    slotButton.innerHTML = `
      <span class="slot-number">${index + 1}</span>
      <span>
        <span class="slot-title">${step ? step.title : "Empty step"}</span>
        <span class="slot-copy">${step ? step.clue : "Select a concept card, then place it here."}</span>
      </span>
      <span class="slot-action">${step ? "Remove" : "Place"}</span>
    `;

    slotButton.addEventListener("click", () => handleSlotClick(index));
    slot.appendChild(slotButton);
    timeline.appendChild(slot);
  });

  solvedCount.textContent = placedCards.filter(Boolean).length;
}

function renderDeck() {
  cardDeck.innerHTML = "";

  shuffle(steps).forEach((step) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "concept-card";
    card.dataset.id = step.id;
    card.innerHTML = `<strong>${step.title}</strong><span>${step.clue}</span>`;
    card.addEventListener("click", () => selectCard(step.id));
    cardDeck.appendChild(card);
  });

  updateDeckState();
}

function updateDeckState() {
  document.querySelectorAll(".concept-card").forEach((card) => {
    const isPlaced = placedCards.includes(card.dataset.id);
    const isSelected = selectedCardId === card.dataset.id;
    card.classList.toggle("placed", isPlaced);
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

function selectCard(cardId) {
  selectedCardId = selectedCardId === cardId ? null : cardId;
  const step = steps.find((item) => item.id === cardId);
  setFact(step);
  setStatus(
    selectedCardId
      ? `${step.title} selected. Choose a numbered slot.`
      : "Selection cleared. Pick another card."
  );
  clearSlotFeedback();
  updateDeckState();
}

function handleSlotClick(index) {
  if (placedCards[index]) {
    const removedStep = steps.find((item) => item.id === placedCards[index]);
    placedCards[index] = null;
    selectedCardId = removedStep.id;
    setFact(removedStep);
    setStatus(`${removedStep.title} removed from slot ${index + 1}. Choose a new slot.`);
    renderTimeline();
    updateDeckState();
    return;
  }

  if (!selectedCardId) {
    setStatus("Select a concept card before choosing a slot.", "error");
    return;
  }

  placedCards[index] = selectedCardId;
  const placedStep = steps.find((item) => item.id === selectedCardId);
  selectedCardId = null;
  setFact(placedStep);
  setStatus(`${placedStep.title} placed in slot ${index + 1}.`);
  renderTimeline();
  updateDeckState();
}

function clearSlotFeedback() {
  document.querySelectorAll(".slot").forEach((slot) => {
    slot.classList.remove("correct", "incorrect");
  });
}

function checkSequence() {
  clearSlotFeedback();

  if (placedCards.some((cardId) => !cardId)) {
    setStatus("Place all five cards before checking the sequence.", "error");
    return;
  }

  let correctCount = 0;
  document.querySelectorAll(".slot").forEach((slot, index) => {
    const isCorrect = placedCards[index] === steps[index].id;
    slot.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      correctCount += 1;
    }
  });

  if (correctCount === steps.length) {
    setStatus("Excellent! You built the complete water cycle sequence.", "success");
  } else {
    setStatus(`${correctCount} of 5 steps are correct. Adjust the highlighted slots and try again.`, "error");
  }
}

function giveHint() {
  const nextIndex = placedCards.findIndex((cardId, index) => cardId !== steps[index].id);
  const targetIndex = nextIndex === -1 ? hintIndex % steps.length : nextIndex;
  const step = steps[targetIndex];
  hintIndex += 1;
  setFact(step);
  setStatus(`Hint: slot ${targetIndex + 1} should describe ${step.clue.toLowerCase()}`);
}

function resetPuzzle() {
  selectedCardId = null;
  placedCards = Array(steps.length).fill(null);
  hintIndex = 0;
  setFact(null);
  setStatus("Puzzle reset. Pick a card, then choose a numbered slot.");
  renderTimeline();
  renderDeck();
}

checkButton.addEventListener("click", checkSequence);
hintButton.addEventListener("click", giveHint);
resetButton.addEventListener("click", resetPuzzle);

renderTimeline();
renderDeck();
