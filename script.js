const assemblyComponents = [
  {
    id: "cap",
    number: 1,
    term: "Cap",
    ipa: "/kæp/",
    ru: "колпачок",
    function: "Covers the upper visible part of the assembly.",
    functionRu: "Закрывает верхнюю видимую часть сборки.",
    fitRelation: "The cap goes into the collet.",
    fitRelationRu: "Колпачок входит в цангу.",
    exampleSentence: "This is a cap.",
    exampleSentenceRu: "Это колпачок.",
    assemblySentence: "Insert the cap into the collet.",
    assemblySentenceRu: "Вставьте колпачок в цангу.",
    sequenceStep: "First",
    sequenceOrder: 1,
    slotLabel: "Cap slot",
    markerSize: "medium",
    marker: { x: 26, y: 64 },
    slot: { x: 22, y: 55, w: 12, h: 14 },
    bottomItem: { x: 10, y: 88, w: 10, h: 8 }
  },
  {
    id: "washer",
    number: 2,
    term: "Washer",
    ipa: "/ˈwɒʃə/",
    ru: "шайба",
    function: "Distributes load and supports the cap or fastener.",
    functionRu: "Распределяет нагрузку и поддерживает колпачок или крепёж.",
    fitRelation: "The washer sits under the cap.",
    fitRelationRu: "Шайба располагается под колпачком.",
    exampleSentence: "This is a washer.",
    exampleSentenceRu: "Это шайба.",
    assemblySentence: "Place the washer under the cap.",
    assemblySentenceRu: "Установите шайбу под колпачок.",
    sequenceStep: "Then",
    sequenceOrder: 2,
    slotLabel: "Washer slot",
    markerSize: "small",
    marker: { x: 34, y: 70 },
    slot: { x: 30, y: 62, w: 12, h: 12 },
    bottomItem: { x: 24, y: 88, w: 10, h: 8 }
  },
  {
    id: "stud-bolt",
    number: 3,
    term: "Stud-bolt",
    ipa: "/stʌd bəʊlt/",
    ru: "болт-шпилька",
    function: "Passes through the panel and locks the assembly.",
    functionRu: "Проходит через панель и фиксирует сборку.",
    fitRelation: "The stud-bolt passes through the panel.",
    fitRelationRu: "Болт-шпилька проходит через панель.",
    exampleSentence: "This is a stud-bolt.",
    exampleSentenceRu: "Это болт-шпилька.",
    assemblySentence: "Insert the stud-bolt through the panel.",
    assemblySentenceRu: "Вставьте болт-шпильку через панель.",
    sequenceStep: "Next",
    sequenceOrder: 3,
    slotLabel: "Stud-bolt slot",
    markerSize: "large",
    marker: { x: 48, y: 54 },
    slot: { x: 44, y: 38, w: 10, h: 30 },
    bottomItem: { x: 38, y: 88, w: 12, h: 8 }
  },
  {
    id: "panel",
    number: 4,
    term: "Panel",
    ipa: "/ˈpænəl/",
    ru: "панель",
    function: "Holds the fastener and provides the mounting surface.",
    functionRu: "Удерживает крепёж и образует монтажную поверхность.",
    fitRelation: "The panel has a hole for the fastener.",
    fitRelationRu: "В панели есть отверстие для крепежа.",
    exampleSentence: "This is a panel.",
    exampleSentenceRu: "Это панель.",
    assemblySentence: "Put the fastener through the panel.",
    assemblySentenceRu: "Проведите крепёж через панель.",
    sequenceStep: "Next",
    sequenceOrder: 4,
    slotLabel: "Panel slot",
    markerSize: "large",
    marker: { x: 62, y: 48 },
    slot: { x: 55, y: 35, w: 28, h: 18 },
    bottomItem: { x: 54, y: 88, w: 12, h: 8 }
  },
  {
    id: "hole",
    number: 5,
    term: "Hole",
    ipa: "/həʊl/",
    ru: "отверстие",
    function: "Receives the fastener.",
    functionRu: "Принимает крепёжный элемент.",
    fitRelation: "The fastener goes into the hole.",
    fitRelationRu: "Крепёж входит в отверстие.",
    exampleSentence: "There is a hole in the panel.",
    exampleSentenceRu: "В панели есть отверстие.",
    assemblySentence: "Align the fastener with the hole.",
    assemblySentenceRu: "Совместите крепёж с отверстием.",
    sequenceStep: "Next",
    sequenceOrder: 5,
    slotLabel: "Hole slot",
    markerSize: "small",
    marker: { x: 64, y: 58 },
    slot: { x: 61, y: 54, w: 8, h: 8 },
    bottomItem: { x: 68, y: 88, w: 9, h: 8 }
  },
  {
    id: "thread",
    number: 6,
    term: "Thread",
    ipa: "/θred/",
    ru: "резьба",
    function: "Provides mechanical engagement for tightening.",
    functionRu: "Обеспечивает механическое зацепление при затяжке.",
    fitRelation: "The thread engages with the mating part.",
    fitRelationRu: "Резьба входит в зацепление с сопряжённой деталью.",
    exampleSentence: "The stud-bolt has a thread.",
    exampleSentenceRu: "У болта-шпильки есть резьба.",
    assemblySentence: "Check the thread before tightening.",
    assemblySentenceRu: "Проверьте резьбу перед затяжкой.",
    sequenceStep: "Check",
    sequenceOrder: 6,
    slotLabel: "Thread area",
    markerSize: "medium",
    marker: { x: 48, y: 48 },
    slot: { x: 46, y: 42, w: 6, h: 18 },
    bottomItem: { x: 80, y: 88, w: 9, h: 8 }
  },
  {
    id: "hex-recess",
    number: 7,
    term: "Hex recess",
    ipa: "/hex rɪˈses/",
    ru: "шестигранное углубление",
    function: "Receives the tool for tightening or removal.",
    functionRu: "Принимает инструмент для затяжки или снятия.",
    fitRelation: "The tool fits into the hex recess.",
    fitRelationRu: "Инструмент входит в шестигранное углубление.",
    exampleSentence: "There is a hex recess.",
    exampleSentenceRu: "Есть шестигранное углубление.",
    assemblySentence: "Insert the tool into the hex recess.",
    assemblySentenceRu: "Вставьте инструмент в шестигранное углубление.",
    sequenceStep: "Then",
    sequenceOrder: 7,
    slotLabel: "Hex recess area",
    markerSize: "small",
    marker: { x: 48, y: 28 },
    slot: { x: 45, y: 24, w: 8, h: 8 },
    bottomItem: { x: 16, y: 88, w: 9, h: 8 }
  },
  {
    id: "retaining-cap",
    number: 8,
    term: "Retaining cap",
    ipa: "/rɪˈteɪnɪŋ kæp/",
    ru: "стопорный колпачок",
    function: "Locks or protects the assembly interface.",
    functionRu: "Фиксирует или защищает зону сопряжения сборки.",
    fitRelation: "The retaining cap closes the assembly.",
    fitRelationRu: "Стопорный колпачок закрывает сборку.",
    exampleSentence: "This is a retaining cap.",
    exampleSentenceRu: "Это стопорный колпачок.",
    assemblySentence: "Insert the retaining cap.",
    assemblySentenceRu: "Вставьте стопорный колпачок.",
    sequenceStep: "Finally",
    sequenceOrder: 8,
    slotLabel: "Retaining cap slot",
    markerSize: "medium",
    marker: { x: 52, y: 72 },
    slot: { x: 48, y: 66, w: 10, h: 12 },
    bottomItem: { x: 44, y: 88, w: 10, h: 8 }
  },
  {
    id: "retaining-washer",
    number: 9,
    term: "Retaining washer",
    ipa: "/rɪˈteɪnɪŋ ˈwɒʃə/",
    ru: "стопорная шайба",
    function: "Holds the cap and supports the fastening interface.",
    functionRu: "Удерживает колпачок и поддерживает зону крепления.",
    fitRelation: "The retaining washer holds the cap.",
    fitRelationRu: "Стопорная шайба удерживает колпачок.",
    exampleSentence: "This is a retaining washer.",
    exampleSentenceRu: "Это стопорная шайба.",
    assemblySentence: "Place the retaining washer.",
    assemblySentenceRu: "Установите стопорную шайбу.",
    sequenceStep: "Then",
    sequenceOrder: 9,
    slotLabel: "Retaining washer slot",
    markerSize: "medium",
    marker: { x: 56, y: 72 },
    slot: { x: 53, y: 66, w: 10, h: 12 },
    bottomItem: { x: 58, y: 88, w: 10, h: 8 }
  },
  {
    id: "section-view",
    number: 10,
    term: "Section view",
    ipa: "/ˈsekʃən vjuː/",
    ru: "вид в разрезе",
    function: "Shows the internal fit of the parts.",
    functionRu: "Показывает внутреннее сопряжение деталей.",
    fitRelation: "The section view shows how the parts fit together.",
    fitRelationRu: "Вид в разрезе показывает, как детали соединяются.",
    exampleSentence: "This is a section view.",
    exampleSentenceRu: "Это вид в разрезе.",
    assemblySentence: "Use the section view to check the fit.",
    assemblySentenceRu: "Используйте вид в разрезе, чтобы проверить сопряжение.",
    sequenceStep: "Check",
    sequenceOrder: 10,
    slotLabel: "Section view area",
    markerSize: "medium",
    marker: { x: 38, y: 44 },
    slot: { x: 34, y: 36, w: 12, h: 16 },
    bottomItem: { x: 90, y: 88, w: 9, h: 8 }
  }
];

const assemblySequence = [
  {
    id: "step-first",
    label: "First",
    ru: "Сначала",
    sentence: "Insert the cap into the collet.",
    sentenceRu: "Вставьте колпачок в цангу.",
    componentIds: ["cap"],
    focusRelation: "cap → collet"
  },
  {
    id: "step-then",
    label: "Then",
    ru: "Затем",
    sentence: "Place the washer under the cap.",
    sentenceRu: "Установите шайбу под колпачок.",
    componentIds: ["washer", "cap"],
    focusRelation: "washer → under cap"
  },
  {
    id: "step-next",
    label: "Next",
    ru: "Далее",
    sentence: "Insert the stud-bolt through the panel.",
    sentenceRu: "Вставьте болт-шпильку через панель.",
    componentIds: ["stud-bolt", "panel", "hole"],
    focusRelation: "stud-bolt → through panel"
  },
  {
    id: "step-tighten",
    label: "Then",
    ru: "Затем",
    sentence: "Tighten the assembly.",
    sentenceRu: "Затяните сборку.",
    componentIds: ["thread", "hex-recess"],
    focusRelation: "tool → hex recess"
  },
  {
    id: "step-final",
    label: "Finally",
    ru: "Наконец",
    sentence: "The assembly is complete.",
    sentenceRu: "Сборка завершена.",
    componentIds: ["cap", "washer", "stud-bolt", "panel", "hole"],
    focusRelation: "completed assembly"
  }
];

const svg = document.querySelector("#assemblySvg");
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

const VIEWBOX = { width: 920, height: 520 };
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
    title: "Component kit overview",
    note: "All bottom cards, labels, pronunciations, and relations are generated from the model."
  },
  build: {
    eyebrow: "Build / puzzle mode",
    title: "Numbered assembly outline",
    note: "Every dashed slot uses the same number and id as its bottom component card."
  },
  final: {
    eyebrow: "Final assembly",
    title: "Completed fastener interface",
    note: "All required components are activated and the filled puzzle is visible."
  }
};

function byId(componentId) {
  return componentsById.get(componentId);
}

function x(value) {
  return (value / 100) * VIEWBOX.width;
}

function y(value) {
  return (value / 100) * VIEWBOX.height;
}

function componentRect(component, source = "slot") {
  const box = component[source];
  return {
    x: x(box.x),
    y: y(box.y),
    w: x(box.w),
    h: y(box.h)
  };
}

function markerPoint(component) {
  return {
    x: x(component.marker.x),
    y: y(component.marker.y)
  };
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

function svgDefs() {
  return `
    <defs>
      <linearGradient id="fuchsiaGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#cfabc5" />
        <stop offset="18%" stop-color="#9d668f" />
        <stop offset="58%" stop-color="#7d496f" />
        <stop offset="100%" stop-color="#4e2b49" />
      </linearGradient>
      <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="20%" stop-color="#eeeae3" />
        <stop offset="42%" stop-color="#aeb6ba" />
        <stop offset="58%" stop-color="#f8f5ee" />
        <stop offset="78%" stop-color="#98a1a6" />
        <stop offset="100%" stop-color="#626a70" />
      </linearGradient>
      <linearGradient id="graphiteGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8f8f96" />
        <stop offset="22%" stop-color="#565963" />
        <stop offset="50%" stop-color="#777982" />
        <stop offset="80%" stop-color="#383b43" />
        <stop offset="100%" stop-color="#252932" />
      </linearGradient>
      <linearGradient id="badgeGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#b989ab" />
        <stop offset="100%" stop-color="#5d3457" />
      </linearGradient>
    </defs>
  `;
}

function numberBadge(component, cx, cy) {
  const radius = markerRadius(component);
  return `
    <g class="svg-number-badge">
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="url(#badgeGradient)" stroke="rgba(255,255,255,.62)" stroke-width="1.2" />
      <circle cx="${cx - radius * 0.28}" cy="${cy - radius * 0.34}" r="${radius * 0.28}" fill="rgba(255,255,255,.34)" />
      <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#fffdf9" font-size="${radius * 0.85}" font-weight="900">${component.number}</text>
    </g>
  `;
}

function slotShape(component, className = "slot-shape") {
  const box = componentRect(component);
  if (component.id.includes("washer") || component.id === "hole") {
    const radius = Math.min(box.w, box.h) / 2;
    return `<ellipse cx="${box.x + box.w / 2}" cy="${box.y + box.h / 2}" rx="${radius}" ry="${radius * 0.72}" class="${className}" />`;
  }

  if (component.id === "hex-recess") {
    const cx = box.x + box.w / 2;
    const cy = box.y + box.h / 2;
    const r = Math.min(box.w, box.h) / 2;
    const points = Array.from({ length: 6 }, (_, index) => {
      const angle = Math.PI / 6 + (Math.PI / 3) * index;
      return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
    }).join(" ");
    return `<polygon points="${points}" class="${className}" />`;
  }

  return `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="${Math.min(box.w, box.h) * 0.22}" class="${className}" />`;
}

function componentVisual(component, source = "slot") {
  const box = componentRect(component, source);
  const centerX = box.x + box.w / 2;
  const centerY = box.y + box.h / 2;
  const shine = `<path d="M${box.x + box.w * 0.18} ${box.y + box.h * 0.24} H${box.x + box.w * 0.78}" stroke="rgba(255,255,255,.42)" stroke-width="2.4" stroke-linecap="round" />`;

  if (component.id.includes("washer")) {
    const radius = Math.min(box.w, box.h) * 0.44;
    return `<g class="assembly-body"><ellipse cx="${centerX}" cy="${centerY}" rx="${radius}" ry="${radius * 0.72}" fill="none" stroke="url(#metalGradient)" stroke-width="${Math.max(7, radius * 0.38)}" /><ellipse cx="${centerX - radius * 0.32}" cy="${centerY - radius * 0.28}" rx="${radius * 0.16}" ry="${radius * 0.1}" fill="rgba(255,255,255,.55)" /></g>`;
  }

  if (component.id === "hole") {
    return `<g><ellipse cx="${centerX}" cy="${centerY}" rx="${box.w * 0.42}" ry="${box.h * 0.42}" fill="#252932" stroke="url(#metalGradient)" stroke-width="4" /></g>`;
  }

  if (component.id === "hex-recess") {
    return `<g>${slotShape(component, "graphite-fill")}<circle cx="${centerX}" cy="${centerY}" r="${Math.min(box.w, box.h) * 0.16}" fill="#171a20" /></g>`;
  }

  if (component.id === "stud-bolt" || component.id === "thread") {
    const lines = Array.from({ length: 7 }, (_, index) => {
      const yy = box.y + box.h * (0.16 + index * 0.1);
      return `<path d="M${box.x + box.w * 0.18} ${yy} H${box.x + box.w * 0.82}" stroke="rgba(93,52,87,.42)" stroke-width="1.6" />`;
    }).join("");
    return `<g class="assembly-body"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="${box.w * 0.34}" class="metal" />${shine}${lines}</g>`;
  }

  if (component.id === "panel" || component.id === "section-view") {
    const fill = component.id === "section-view" ? "rgba(255,253,248,.58)" : "url(#metalGradient)";
    return `<g class="assembly-body"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="10" fill="${fill}" stroke="rgba(36,36,40,.34)" /><ellipse cx="${centerX}" cy="${centerY}" rx="${box.w * 0.13}" ry="${box.h * 0.22}" fill="#252932" opacity=".82" />${shine}<path d="M${box.x + box.w * 0.12} ${box.y + box.h * 0.82} H${box.x + box.w * 0.88}" stroke="rgba(141,85,125,.5)" stroke-width="2.5" /></g>`;
  }

  const fillClass = component.id.includes("cap") ? "fuchsia-fill" : "metal";
  return `<g class="assembly-body"><rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="${Math.min(box.w, box.h) * 0.35}" class="${fillClass}" />${shine}</g>`;
}

function renderSlot(component) {
  const isActive = activeComponentId === component.id;
  const isRelated = relatedComponentIds.has(component.id);
  const isFilled = currentMode === "final" || currentMode === "kit" || activatedComponents.has(component.id);
  const marker = markerPoint(component);
  return `
    <g class="slot-hotspot ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""} ${isFilled ? "is-fitted" : ""}" data-id="${component.id}" tabindex="0" role="button" aria-label="Slot ${component.number}: ${component.slotLabel}">
      <g class="slot-outline">${slotShape(component)}</g>
      <g class="slot-fill ${isFilled ? "is-visible" : ""}">${componentVisual(component)}</g>
      ${numberBadge(component, marker.x, marker.y)}
    </g>
  `;
}

function renderCallout(component) {
  const box = componentRect(component);
  const marker = markerPoint(component);
  return `<path class="callout-line" d="M${marker.x} ${marker.y} L${box.x + box.w / 2} ${box.y + box.h / 2}" />`;
}

function renderAssemblySvg() {
  const label = currentMode === "final" ? "FINAL ASSEMBLY" : "BUILD / PUZZLE MODE";
  const sub = currentMode === "final"
    ? "The completed filled puzzle is generated from the component model."
    : "Dashed zones use each component slot coordinate from the model.";

  return `
    ${svgDefs()}
    <text x="38" y="45" class="svg-label">${label}</text>
    <text x="38" y="66" class="svg-sub">${sub}</text>
    ${assemblyComponents.map(renderCallout).join("")}
    ${assemblyComponents.map(renderSlot).join("")}
  `;
}

function renderKitItem(component) {
  const box = componentRect(component, "bottomItem");
  const visual = componentVisual(component, "bottomItem");
  return `
    <g class="kit-item ${activeComponentId === component.id ? "is-active" : ""} ${relatedComponentIds.has(component.id) ? "is-related" : ""}" data-id="${component.id}" tabindex="0" role="button" aria-label="Component ${component.number}: ${component.term}">
      ${visual}
      ${numberBadge(component, box.x + box.w / 2, box.y - 10)}
      <text x="${box.x + box.w / 2}" y="${box.y + box.h + 18}" text-anchor="middle" class="kit-label">${component.term}</text>
      <text x="${box.x + box.w / 2}" y="${box.y + box.h + 34}" text-anchor="middle" class="kit-sub">${component.ipa}</text>
      <rect x="${box.x - 10}" y="${box.y - 28}" width="${box.w + 20}" height="${box.h + 56}" fill="transparent" />
    </g>
  `;
}

function renderKitSvg() {
  return `
    ${svgDefs()}
    <text x="38" y="45" class="svg-label">FULL KIT / FULL SET</text>
    <text x="38" y="66" class="svg-sub">Isolated components are positioned from each model bottomItem coordinate.</text>
    <path d="M120 398 C240 342, 360 336, 460 286 C570 230, 696 210, 820 242" fill="none" stroke="rgba(93,52,87,.16)" stroke-width="24" stroke-linecap="round" />
    ${assemblyComponents.map(renderKitItem).join("")}
  `;
}

function renderSvg() {
  svg.className = `assembly-svg mode-${currentMode}`;
  svg.innerHTML = currentMode === "kit" ? renderKitSvg() : renderAssemblySvg();
  svg.querySelectorAll("[data-id]").forEach((element) => {
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
          <span class="mini-visual"><svg viewBox="0 0 ${VIEWBOX.width} ${VIEWBOX.height}">${svgDefs()}${componentVisual(component, "bottomItem")}</svg></span>
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
    sequenceSentence.innerHTML = `${activeStep.label} — ${activeStep.sentence}<br><small>${activeStep.ru} — ${activeStep.sentenceRu}</small>`;
  }

  sequenceStepsContainer.innerHTML = assemblySequence
    .map((step) => `
      <button class="sequence-step ${activeStepId === step.id ? "is-active" : ""}" type="button" data-id="${step.id}">
        <span>${step.label} / ${step.ru}</span>
        <strong>${step.focusRelation}</strong>
        <small>${step.sentence}</small>
        <small>${step.sentenceRu}</small>
      </button>
    `)
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
  renderSvg();
  renderStrip();
  renderSequence();
  updateProgress();
}

function maybeComplete() {
  if (!isComplete()) {
    return;
  }
  currentMode = "final";
  setStatus(`The assembly is complete.<br><small>Сборка завершена.</small>`, "success");
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
    speakBritish(component.term);
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
  setStatus(`${step.sentence}<br><small>${step.sentenceRu}</small>`);
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
      setStatus("Full kit view is generated from the component model.");
    } else {
      setStatus("Build mode shows model-generated dashed slots.");
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
