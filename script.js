const assemblyComponents = [
  {
    id: "collector-body",
    number: 1,
    term: "Collector Body",
    ipa: "/kəˈlektə ˈbɒdi/",
    ru: "корпус коллектора",
    function: "Forms the main housing and internal flow chamber.",
    functionRu: "Образует основной корпус и внутреннюю камеру потока.",
    fitRelation: "The collector body receives all sleeves, rings, plug, flange, bolts, and washers.",
    fitRelationRu: "Корпус коллектора принимает все втулки, кольца, заглушку, фланец, болты и шайбы.",
    exampleSentence: "This is the collector body.",
    exampleSentenceRu: "Это корпус коллектора.",
    assemblySentence: "Place the collector body as the main assembly reference.",
    assemblySentenceRu: "Используйте корпус коллектора как основной ориентир сборки.",
    sequenceStep: "First",
    slotLabel: "Collector body region",
    markerSize: "large",
    marker: { x: 815, y: 280 },
    slot: { x: 235, y: 135, w: 500, h: 205 },
    bottomItem: { x: 55, y: 560, w: 190, h: 90 }
  },
  {
    id: "inlet-sleeve",
    number: 2,
    term: "Inlet Sleeve",
    ipa: "/ˈɪnlet sliːv/",
    ru: "входная втулка",
    function: "Guides incoming fuel into the collector body.",
    functionRu: "Направляет входящее топливо в корпус коллектора.",
    fitRelation: "The inlet sleeve goes into the upper inlet port.",
    fitRelationRu: "Входная втулка входит в верхний входной патрубок.",
    exampleSentence: "This is an inlet sleeve.",
    exampleSentenceRu: "Это входная втулка.",
    assemblySentence: "Insert the inlet sleeve into the inlet port.",
    assemblySentenceRu: "Вставьте входную втулку во входной патрубок.",
    sequenceStep: "Then",
    slotLabel: "Inlet sleeve slot",
    markerSize: "medium",
    marker: { x: 820, y: 95 },
    slot: { x: 440, y: 78, w: 96, h: 115 },
    bottomItem: { x: 285, y: 525, w: 78, h: 80 }
  },
  {
    id: "outlet-sleeves",
    number: 3,
    term: "Outlet Sleeves (x4)",
    ipa: "/ˈaʊtlet sliːvz/",
    ru: "выходные втулки (x4)",
    function: "Direct fuel out to four outlet lines.",
    functionRu: "Направляют топливо к четырём выходным линиям.",
    fitRelation: "The outlet sleeves fit into the four lower outlet ports.",
    fitRelationRu: "Выходные втулки входят в четыре нижних выходных патрубка.",
    exampleSentence: "These are outlet sleeves.",
    exampleSentenceRu: "Это выходные втулки.",
    assemblySentence: "Fit the outlet sleeves into the four outlet ports.",
    assemblySentenceRu: "Установите выходные втулки в четыре выходных патрубка.",
    sequenceStep: "Next",
    slotLabel: "Outlet sleeves slots",
    markerSize: "large",
    marker: { x: 680, y: 440 },
    slot: { x: 295, y: 250, w: 300, h: 120 },
    bottomItem: { x: 395, y: 525, w: 95, h: 115 }
  },
  {
    id: "mounting-flange",
    number: 4,
    term: "Mounting Flange",
    ipa: "/ˈmaʊntɪŋ flændʒ/",
    ru: "крепёжный фланец",
    function: "Provides the mounting interface for the assembly.",
    functionRu: "Обеспечивает монтажную поверхность сборки.",
    fitRelation: "The mounting flange aligns with the collector body holes.",
    fitRelationRu: "Крепёжный фланец совмещается с отверстиями корпуса коллектора.",
    exampleSentence: "This is a mounting flange.",
    exampleSentenceRu: "Это крепёжный фланец.",
    assemblySentence: "Align the mounting flange with the collector body.",
    assemblySentenceRu: "Совместите крепёжный фланец с корпусом коллектора.",
    sequenceStep: "Next",
    slotLabel: "Mounting flange slot",
    markerSize: "medium",
    marker: { x: 455, y: 560 },
    slot: { x: 535, y: 520, w: 90, h: 115 },
    bottomItem: { x: 520, y: 520, w: 95, h: 118 }
  },
  {
    id: "sealing-rings",
    number: 5,
    term: "Sealing Rings (x2)",
    ipa: "/ˈsiːlɪŋ rɪŋz/",
    ru: "уплотнительные кольца (x2)",
    function: "Seal the interfaces and prevent fuel leakage.",
    functionRu: "Уплотняют соединения и предотвращают утечку топлива.",
    fitRelation: "The sealing rings sit in grooves around the sleeves.",
    fitRelationRu: "Уплотнительные кольца располагаются в канавках вокруг втулок.",
    exampleSentence: "These are sealing rings.",
    exampleSentenceRu: "Это уплотнительные кольца.",
    assemblySentence: "Place the sealing rings into the grooves.",
    assemblySentenceRu: "Установите уплотнительные кольца в канавки.",
    sequenceStep: "Then",
    slotLabel: "Sealing rings slots",
    markerSize: "small",
    marker: { x: 625, y: 565 },
    slot: { x: 620, y: 515, w: 60, h: 95 },
    bottomItem: { x: 625, y: 530, w: 55, h: 80 }
  },
  {
    id: "service-port-plug",
    number: 6,
    term: "Service Port Plug",
    ipa: "/ˈsɜːvɪs pɔːt plʌɡ/",
    ru: "заглушка сервисного порта",
    function: "Closes the service access point.",
    functionRu: "Закрывает сервисное отверстие.",
    fitRelation: "The service port plug threads into the service port.",
    fitRelationRu: "Заглушка сервисного порта вворачивается в сервисный порт.",
    exampleSentence: "This is a service port plug.",
    exampleSentenceRu: "Это заглушка сервисного порта.",
    assemblySentence: "Insert the service port plug into the service port.",
    assemblySentenceRu: "Вставьте заглушку сервисного порта в сервисный порт.",
    sequenceStep: "Then",
    slotLabel: "Service port plug slot",
    markerSize: "medium",
    marker: { x: 120, y: 425 },
    slot: { x: 42, y: 300, w: 130, h: 105 },
    bottomItem: { x: 690, y: 515, w: 100, h: 110 }
  },
  {
    id: "fastening-bolts",
    number: 7,
    term: "Fastening Bolts (x2)",
    ipa: "/ˈfɑːsənɪŋ bəʊlts/",
    ru: "крепёжные болты (x2)",
    function: "Clamp the collector to its mounting interface.",
    functionRu: "Прижимают коллектор к монтажной поверхности.",
    fitRelation: "The fastening bolts pass through the washers and flange holes.",
    fitRelationRu: "Крепёжные болты проходят через шайбы и отверстия фланца.",
    exampleSentence: "These are fastening bolts.",
    exampleSentenceRu: "Это крепёжные болты.",
    assemblySentence: "Insert the fastening bolts through the flange holes.",
    assemblySentenceRu: "Вставьте крепёжные болты через отверстия фланца.",
    sequenceStep: "Finally",
    slotLabel: "Fastening bolts slots",
    markerSize: "medium",
    marker: { x: 715, y: 560 },
    slot: { x: 715, y: 520, w: 55, h: 118 },
    bottomItem: { x: 805, y: 520, w: 70, h: 110 }
  },
  {
    id: "washers",
    number: 8,
    term: "Washers (x2)",
    ipa: "/ˈwɒʃəz/",
    ru: "шайбы (x2)",
    function: "Distribute bolt load and protect the mounting surface.",
    functionRu: "Распределяют нагрузку от болтов и защищают монтажную поверхность.",
    fitRelation: "The washers sit under the bolt heads.",
    fitRelationRu: "Шайбы располагаются под головками болтов.",
    exampleSentence: "These are washers.",
    exampleSentenceRu: "Это шайбы.",
    assemblySentence: "Place the washers under the bolt heads.",
    assemblySentenceRu: "Установите шайбы под головки болтов.",
    sequenceStep: "Finally",
    slotLabel: "Washers slots",
    markerSize: "small",
    marker: { x: 835, y: 560 },
    slot: { x: 870, y: 540, w: 65, h: 80 },
    bottomItem: { x: 890, y: 535, w: 65, h: 70 }
  }
];

const assemblySequence = [
  {
    id: "step-first",
    label: "First",
    ru: "Сначала",
    sentence: "Identify the collector body as the main housing.",
    sentenceRu: "Определите корпус коллектора как основной корпус.",
    componentIds: ["collector-body"],
    focusRelation: "body → reference"
  },
  {
    id: "step-inlet",
    label: "Then",
    ru: "Затем",
    sentence: "Insert the inlet sleeve into the inlet port.",
    sentenceRu: "Вставьте входную втулку во входной патрубок.",
    componentIds: ["inlet-sleeve", "collector-body"],
    focusRelation: "inlet sleeve → inlet port"
  },
  {
    id: "step-outlets",
    label: "Next",
    ru: "Далее",
    sentence: "Fit the outlet sleeves into the four outlet ports.",
    sentenceRu: "Установите выходные втулки в четыре выходных патрубка.",
    componentIds: ["outlet-sleeves", "collector-body"],
    focusRelation: "outlet sleeves → ports"
  },
  {
    id: "step-seal",
    label: "Then",
    ru: "Затем",
    sentence: "Place the sealing rings and close the service port.",
    sentenceRu: "Установите уплотнительные кольца и закройте сервисный порт.",
    componentIds: ["sealing-rings", "service-port-plug"],
    focusRelation: "rings + plug → sealed interface"
  },
  {
    id: "step-final",
    label: "Finally",
    ru: "Наконец",
    sentence: "Insert the fastening bolts and washers.",
    sentenceRu: "Установите крепёжные болты и шайбы.",
    componentIds: ["mounting-flange", "fastening-bolts", "washers"],
    focusRelation: "bolts + washers → mounted assembly"
  }
];

const overlay = document.querySelector("#assemblyOverlay");
const sourceImage = document.querySelector("#assemblyImage");
const missingImage = document.querySelector("#missingImage");
const componentStrip = document.querySelector("#componentStrip");
const progressCount = document.querySelector("#progressCount");
const progressLabel = document.querySelector("#progressLabel");
const statusMessage = document.querySelector("#statusMessage");
const stageEyebrow = document.querySelector("#stageEyebrow");
const stageTitle = document.querySelector("#stageTitle");
const stageNote = document.querySelector("#stageNote");
const activeCard = document.querySelector("#activeCard");
const activeNumber = document.querySelector("#activeNumber");
const activeTerm = document.querySelector("#activeTerm");
const activeIpa = document.querySelector("#activeIpa");
const activeRu = document.querySelector("#activeRu");
const activeFunction = document.querySelector("#activeFunction");
const activeFit = document.querySelector("#activeFit");
const activeSentence = document.querySelector("#activeSentence");
const activeStep = document.querySelector("#activeStep");
const relationPart = document.querySelector("#relationPart");
const relationPosition = document.querySelector("#relationPosition");
const relationAction = document.querySelector("#relationAction");
const relationText = document.querySelector("#relationText");
const sequenceSentence = document.querySelector("#sequenceSentence");
const sequenceStepsContainer = document.querySelector("#sequenceSteps");
const modeButtons = document.querySelectorAll(".mode-button");
const fitButton = document.querySelector("#fitButton");
const hintButton = document.querySelector("#hintButton");
const resetButton = document.querySelector("#resetButton");
const assemblyActions = document.querySelector(".assembly-actions");

const componentsById = new Map(assemblyComponents.map((component) => [component.id, component]));
let activeComponentId = assemblyComponents[0].id;
let activeStepId = assemblySequence[0].id;
let currentMode = "kit";
let activatedComponents = new Set();
let relatedComponentIds = new Set([activeComponentId]);
let pulseComponentId = null;
let speechTurn = 0;

const modeText = {
  kit: {
    eyebrow: "Full kit / full set",
    title: "Original PNG component kit",
    note: "The PNG is the master visual; markers and click zones sit above it."
  },
  build: {
    eyebrow: "Build / puzzle mode",
    title: "Overlay puzzle slots",
    note: "Dashed slots and transparent click zones are layered over the original image."
  },
  final: {
    eyebrow: "Final assembly",
    title: "Completed fuel collector",
    note: "The original full assembly remains visible with every overlay region activated."
  }
};

sourceImage.addEventListener("error", () => {
  missingImage.hidden = false;
});

sourceImage.addEventListener("load", () => {
  missingImage.hidden = sourceImage.naturalWidth > 0;
});

function updateImageGuard() {
  if (sourceImage.complete) {
    missingImage.hidden = sourceImage.naturalWidth > 0;
  }
}

function byId(componentId) {
  return componentsById.get(componentId);
}

function markerRadius(component) {
  return { small: 13, medium: 16, large: 19 }[component.markerSize] || 16;
}

function setStatus(message, type = "") {
  statusMessage.innerHTML = message;
  statusMessage.className = `status ${type}`.trim();
}

function bilingual(en, ru) {
  return `<span>${en}</span><small>${ru}</small>`;
}

function speakBritish(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const britishVoice = voices.find((voice) => voice.lang === "en-GB");
  if (britishVoice) {
    utterance.voice = britishVoice;
  }
  utterance.lang = "en-GB";
  utterance.rate = speechTurn % 2 === 0 ? 1 : 0.85;
  speechTurn += 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function numberBadge(component, cx, cy) {
  const radius = markerRadius(component);
  return `
    <g class="svg-number-badge">
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="rgba(93,52,87,.92)" stroke="rgba(255,255,255,.76)" stroke-width="1.3" />
      <circle cx="${cx - radius * 0.28}" cy="${cy - radius * 0.34}" r="${radius * 0.28}" fill="rgba(255,255,255,.34)" />
      <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#fffdf9" font-size="${radius * 0.82}" font-weight="900">${component.number}</text>
    </g>
  `;
}

function rectMarkup(box, className) {
  return `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="14" class="${className}" />`;
}

function renderOverlayComponent(component) {
  const isActive = activeComponentId === component.id;
  const isRelated = relatedComponentIds.has(component.id);
  const isActivated = currentMode === "final" || activatedComponents.has(component.id);
  const box = currentMode === "kit" ? component.bottomItem : component.slot;
  const marker = currentMode === "kit"
    ? { x: box.x + box.w / 2, y: box.y - 16 }
    : component.marker;
  const shapeClass = currentMode === "kit" ? "kit-shape" : "slot-shape";
  return `
    <g class="${currentMode === "kit" ? "kit-item" : "slot-hotspot"} ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""} ${isActivated ? "is-fitted" : ""}" data-id="${component.id}" tabindex="0" role="button" aria-label="${component.number}: ${component.slotLabel}">
      ${rectMarkup(box, shapeClass)}
      ${numberBadge(component, marker.x, marker.y)}
      <rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="14" fill="transparent" />
    </g>
  `;
}

function renderCallout(component) {
  const box = component.slot;
  const marker = component.marker;
  return `<path class="callout-line" d="M${marker.x} ${marker.y} L${box.x + box.w / 2} ${box.y + box.h / 2}" />`;
}

function renderOverlay() {
  const label = currentMode === "final" ? "FINAL ASSEMBLY" : currentMode === "kit" ? "FULL KIT / FULL SET" : "BUILD / PUZZLE MODE";
  const sub = missingImage.hidden
    ? "Original PNG is the master visual; overlay markers are interactive."
    : "Original PNG asset is missing; overlay support is ready but the source file must be added.";

  overlay.innerHTML = `
    <text x="30" y="34" class="svg-label">${label}</text>
    <text x="30" y="55" class="svg-sub">${sub}</text>
    ${currentMode === "kit" ? "" : assemblyComponents.map(renderCallout).join("")}
    ${assemblyComponents.map(renderOverlayComponent).join("")}
  `;

  overlay.querySelectorAll("[data-id]").forEach((element) => {
    element.addEventListener("click", () => selectComponent(element.dataset.id, { source: currentMode === "kit" ? "bottom" : "slot" }));
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectComponent(element.dataset.id, { source: currentMode === "kit" ? "bottom" : "slot" });
      }
    });
  });
}

function renderStrip() {
  componentStrip.innerHTML = assemblyComponents
    .map((component) => {
      const isActive = activeComponentId === component.id;
      const isRelated = relatedComponentIds.has(component.id);
      const isActivated = activatedComponents.has(component.id) || currentMode === "final";
      const isPulsing = pulseComponentId === component.id;
      return `
        <button class="component-card ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""} ${isActivated ? "is-fitted" : ""} ${isPulsing ? "is-pulsing" : ""}" type="button" data-id="${component.id}" aria-pressed="${isActive}">
          <span class="component-topline">
            <span class="part-number">${component.number}</span>
            <span>${component.slotLabel}</span>
          </span>
          <strong>${component.term}</strong>
          <small>${component.ipa}</small>
          <small class="mini-ru">${component.ru}</small>
        </button>
      `;
    })
    .join("");

  componentStrip.querySelectorAll(".component-card").forEach((card) => {
    card.addEventListener("click", () => selectComponent(card.dataset.id, { source: "bottom" }));
  });
}

function renderActiveCard() {
  const component = byId(activeComponentId);
  activeNumber.textContent = component.number;
  activeTerm.textContent = component.term;
  activeIpa.textContent = component.ipa;
  activeRu.textContent = component.ru;
  activeFunction.innerHTML = bilingual(component.function, component.functionRu);
  activeFit.innerHTML = bilingual(component.fitRelation, component.fitRelationRu);
  activeSentence.innerHTML = bilingual(component.exampleSentence, component.exampleSentenceRu);
  activeStep.innerHTML = bilingual(component.assemblySentence, component.assemblySentenceRu);
  relationPart.textContent = component.term;
  relationPosition.textContent = component.slotLabel;
  relationAction.textContent = component.sequenceStep;
  relationText.textContent = component.fitRelation;
}

function renderSequence() {
  const activeStep = assemblySequence.find((step) => step.id === activeStepId);
  if (activeStep) {
    const componentNames = activeStep.componentIds.map((componentId) => byId(componentId).term).join(", ");
    sequenceSentence.innerHTML = `${activeStep.label} — ${activeStep.sentence}<br><small>${activeStep.ru} — ${activeStep.sentenceRu}</small><small>Parts: ${componentNames}</small>`;
  }

  sequenceStepsContainer.innerHTML = assemblySequence
    .map((step) => {
      const componentNames = step.componentIds.map((componentId) => byId(componentId).term).join(", ");
      return `
        <button class="sequence-step ${activeStepId === step.id ? "is-active" : ""}" type="button" data-id="${step.id}">
          <span>${step.label} / ${step.ru}</span>
          <strong>${step.focusRelation}</strong>
          <small>${step.sentence}</small>
          <small>${step.sentenceRu}</small>
          <small>Parts: ${componentNames}</small>
        </button>
      `;
    })
    .join("");

  sequenceStepsContainer.querySelectorAll(".sequence-step").forEach((button) => {
    button.addEventListener("click", () => selectSequenceStep(button.dataset.id));
  });
}

function updateModeText() {
  document.body.dataset.mode = currentMode;
  assemblyActions.hidden = currentMode !== "build";
  stageEyebrow.textContent = modeText[currentMode].eyebrow;
  stageTitle.textContent = modeText[currentMode].title;
  stageNote.textContent = modeText[currentMode].note;
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === currentMode);
  });
}

function isComplete() {
  return activatedComponents.size === assemblyComponents.length;
}

function updateProgress() {
  const total = assemblyComponents.length;
  const count = currentMode === "final" || isComplete() ? total : activatedComponents.size;
  progressCount.textContent = count;
  progressLabel.textContent = count === total ? `of ${total} complete` : `of ${total} activated`;
}

function render() {
  updateModeText();
  renderActiveCard();
  renderOverlay();
  renderStrip();
  renderSequence();
  updateProgress();
}

function maybeComplete() {
  if (!isComplete()) {
    return;
  }
  currentMode = "final";
  setStatus("The assembly is complete.<br><small>Сборка завершена.</small>", "success");
}

function pulseActiveCard() {
  activeCard.classList.remove("is-card-pulse");
  void activeCard.offsetWidth;
  activeCard.classList.add("is-card-pulse");
  window.setTimeout(() => activeCard.classList.remove("is-card-pulse"), 430);
}

function setPulse(componentId) {
  pulseComponentId = componentId;
  window.setTimeout(() => {
    if (pulseComponentId === componentId) {
      pulseComponentId = null;
      renderStrip();
    }
  }, 430);
}

function selectComponent(componentId, options = {}) {
  const { source = "bottom", speak = true, pulse = true } = options;
  const component = byId(componentId);
  activeComponentId = componentId;
  activeStepId = "";
  activatedComponents.add(componentId);
  relatedComponentIds = new Set([componentId]);

  if (pulse) {
    setPulse(componentId);
  }

  const sourceText = source === "slot" ? "Slot" : source === "card" ? "Right card" : "Bottom component";
  setStatus(`${sourceText} ${component.number}: ${component.term}<br><small>${component.fitRelationRu}</small>`);
  maybeComplete();
  render();

  if (speak) {
    speakBritish(component.term.replace(/\s*\(x\d+\)/, ""));
  }
  pulseActiveCard();
}

function fitComponent() {
  selectComponent(activeComponentId, { source: "slot", speak: false });
}

function showHint() {
  const component = byId(activeComponentId);
  relatedComponentIds = new Set([component.id]);
  setStatus(`${component.fitRelation}<br><small>${component.fitRelationRu}</small>`);
  render();
  speakBritish(component.fitRelation);
}

function resetBuild() {
  activatedComponents = new Set();
  currentMode = "build";
  activeComponentId = assemblyComponents[0].id;
  activeStepId = assemblySequence[0].id;
  relatedComponentIds = new Set([activeComponentId]);
  setStatus("Build reset. Select a component, slot, or right card.<br><small>Сборка сброшена.</small>");
  render();
}

function selectSequenceStep(stepId) {
  const step = assemblySequence.find((item) => item.id === stepId);
  activeStepId = step.id;
  currentMode = isComplete() ? "final" : "build";
  activeComponentId = step.componentIds[0];
  relatedComponentIds = new Set(step.componentIds);
  step.componentIds.forEach((componentId) => activatedComponents.add(componentId));
  setPulse(step.componentIds[0]);
  const componentNames = step.componentIds.map((componentId) => byId(componentId).term).join(", ");
  setStatus(`${step.sentence}<br><small>${step.sentenceRu}</small><small>Highlighted: ${componentNames}</small>`);
  maybeComplete();
  render();
  speakBritish(step.sentence);
  pulseActiveCard();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    if (currentMode === "final") {
      assemblyComponents.forEach((component) => activatedComponents.add(component.id));
      setStatus("The assembly is complete.<br><small>Сборка завершена.</small>", "success");
    } else if (currentMode === "kit") {
      setStatus("Full kit view keeps the original PNG as the master layer.");
    } else {
      setStatus("Build mode adds transparent click zones and dashed slots above the PNG.");
    }
    render();
  });
});

fitButton.addEventListener("click", fitComponent);
hintButton.addEventListener("click", showHint);
resetButton.addEventListener("click", resetBuild);
activeCard.addEventListener("click", () => selectComponent(activeComponentId, { source: "card" }));
activeCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectComponent(activeComponentId, { source: "card" });
  }
});

render();
window.setTimeout(updateImageGuard, 250);
