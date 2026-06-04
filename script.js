const components = [
  {
    number: 1,
    id: "collector-body",
    term: "Collector Body",
    ipa: "/kəˈlektə ˈbɒdi/",
    ru: "корпус коллектора",
    function: "Forms the main fuel distribution chamber.",
    fit: "Receives the inlet sleeve, outlet sleeves, sealing rings, service port plug, flange, bolts, and washers.",
    sentence: "The collector body distributes fuel to each outlet port.",
    step: "Place the collector body into slot 1 as the base of the assembly.",
    relation: {
      part: "collector body",
      position: "central base",
      action: "receives",
      relation: "all interface parts"
    }
  },
  {
    number: 2,
    id: "inlet-sleeve",
    term: "Inlet Sleeve",
    ipa: "/ˈɪnlet sliːv/",
    ru: "входная втулка",
    function: "Guides incoming fuel into the internal flow chamber.",
    fit: "Goes into the upper inlet port of the collector body.",
    sentence: "The inlet sleeve aligns the fuel supply with the manifold.",
    step: "Insert the inlet sleeve into the top opening of the collector body.",
    relation: {
      part: "inlet sleeve",
      position: "upper inlet port",
      action: "goes into",
      relation: "collector body"
    }
  },
  {
    number: 3,
    id: "outlet-sleeves",
    term: "Outlet Sleeves (x4)",
    ipa: "/ˈaʊtlet sliːvz/",
    ru: "выходные втулки (x4)",
    function: "Direct fuel from the collector to four outlet lines.",
    fit: "Fit into the four lower outlet ports on the collector body.",
    sentence: "The outlet sleeves connect the manifold to downstream fuel lines.",
    step: "Fit the four outlet sleeves into the four lower ports.",
    relation: {
      part: "outlet sleeves",
      position: "four lower ports",
      action: "fit into",
      relation: "collector body"
    }
  },
  {
    number: 4,
    id: "mounting-flange",
    term: "Mounting Flange",
    ipa: "/ˈmaʊntɪŋ flændʒ/",
    ru: "крепёжный фланец",
    function: "Provides a flat mounting surface for the final unit.",
    fit: "Sits behind the collector body and aligns with the bolt positions.",
    sentence: "The mounting flange supports the collector on the assembly frame.",
    step: "Align the mounting flange behind the collector body.",
    relation: {
      part: "mounting flange",
      position: "behind the body",
      action: "aligns with",
      relation: "bolt holes"
    }
  },
  {
    number: 5,
    id: "sealing-rings",
    term: "Sealing Rings (x2)",
    ipa: "/ˈsiːlɪŋ rɪŋz/",
    ru: "уплотнительные кольца (x2)",
    function: "Prevent leakage around the inlet and service interfaces.",
    fit: "Sit in circular grooves on the inlet sleeve and service port plug.",
    sentence: "The sealing rings keep the fuel path pressure-tight.",
    step: "Place the sealing rings into the grooves before closing the ports.",
    relation: {
      part: "sealing rings",
      position: "circular grooves",
      action: "sit in",
      relation: "sleeve and plug interfaces"
    }
  },
  {
    number: 6,
    id: "service-port-plug",
    term: "Service Port Plug",
    ipa: "/ˈsɜːvɪs pɔːt plʌɡ/",
    ru: "заглушка сервисного порта",
    function: "Closes the service access point when inspection is complete.",
    fit: "Threads into the left service port of the collector body.",
    sentence: "The service port plug closes the inspection opening.",
    step: "Insert the service port plug into the left service port.",
    relation: {
      part: "service port plug",
      position: "left service port",
      action: "threads into",
      relation: "collector body"
    }
  },
  {
    number: 7,
    id: "fastening-bolts",
    term: "Fastening Bolts (x2)",
    ipa: "/ˈfɑːsənɪŋ bəʊlts/",
    ru: "крепёжные болты (x2)",
    function: "Clamp the flange and collector body together.",
    fit: "Pass through the washers and flange holes.",
    sentence: "The fastening bolts secure the collector to the flange.",
    step: "Insert the fastening bolts through the washer and flange positions.",
    relation: {
      part: "fastening bolts",
      position: "flange holes",
      action: "pass through",
      relation: "washers and flange"
    }
  },
  {
    number: 8,
    id: "washers",
    term: "Washers (x2)",
    ipa: "/ˈwɒʃəz/",
    ru: "шайбы (x2)",
    function: "Spread bolt load and protect the flange surface.",
    fit: "Sit under the fastening bolt heads.",
    sentence: "The washers distribute the clamping force evenly.",
    step: "Place the washers under the bolt heads before tightening.",
    relation: {
      part: "washers",
      position: "under bolt heads",
      action: "sit under",
      relation: "fastening bolts"
    }
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

let activeId = components[0].id;
let currentMode = "kit";
let fitted = new Set();
let activated = new Set();
let relatedIds = new Set([activeId]);
let pulseId = null;
let activeSequenceId = "first";
let speechTurn = 0;

const modeText = {
  kit: {
    eyebrow: "Full kit / full set",
    title: "Component kit overview",
    note: "Review the isolated numbered parts before building the collector."
  },
  build: {
    eyebrow: "Build / puzzle mode",
    title: "Numbered assembly outline",
    note: "Select a bottom component, then fit it into the matching dashed slot."
  },
  final: {
    eyebrow: "Final assembly",
    title: "Completed fuel collector",
    note: "All numbered regions are filled to show the completed unit."
  }
};

const sequenceSteps = [
  {
    id: "first",
    label: "First",
    title: "Create the base",
    componentIds: ["collector-body", "mounting-flange"],
    sentence: "First, place the collector body on the mounting flange.",
    logic: "The flange supports the body and prepares the bolt positions."
  },
  {
    id: "then",
    label: "Then",
    title: "Insert the sleeves",
    componentIds: ["inlet-sleeve", "outlet-sleeves"],
    sentence: "Then, insert the inlet sleeve and fit the outlet sleeves into the collector body.",
    logic: "The inlet brings fuel in; the four outlets distribute fuel out."
  },
  {
    id: "next",
    label: "Next",
    title: "Seal the service points",
    componentIds: ["sealing-rings", "service-port-plug"],
    sentence: "Next, place the sealing rings and insert the service port plug into the left port.",
    logic: "The rings seal the interfaces before the service port is closed."
  },
  {
    id: "finally",
    label: "Finally",
    title: "Clamp the assembly",
    componentIds: ["washers", "fastening-bolts"],
    sentence: "Finally, place the washers under the bolt heads and tighten the fastening bolts.",
    logic: "The washers spread the load while the bolts clamp the collector to the flange."
  }
];

function byId(id) {
  return components.find((component) => component.id === id);
}

function isComplete() {
  const touched = new Set([...activated, ...fitted]);
  return touched.size === components.length;
}

function setStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status ${type}`.trim();
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

function pulseActiveCard() {
  activeCard.classList.remove("is-card-pulse");
  void activeCard.offsetWidth;
  activeCard.classList.add("is-card-pulse");
  window.setTimeout(() => activeCard.classList.remove("is-card-pulse"), 430);
}

function setPulse(componentId) {
  pulseId = componentId;
  window.setTimeout(() => {
    if (pulseId === componentId) {
      pulseId = null;
      renderStrip();
    }
  }, 430);
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
        <stop offset="16%" stop-color="#ecebe7" />
        <stop offset="34%" stop-color="#aeb6ba" />
        <stop offset="52%" stop-color="#f7f5ee" />
        <stop offset="72%" stop-color="#9aa3a8" />
        <stop offset="100%" stop-color="#5e666b" />
      </linearGradient>
      <linearGradient id="graphiteGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8f8f96" />
        <stop offset="18%" stop-color="#5a5b62" />
        <stop offset="46%" stop-color="#75767d" />
        <stop offset="75%" stop-color="#3d3f46" />
        <stop offset="100%" stop-color="#2a2d34" />
      </linearGradient>
      <linearGradient id="innerDark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4b5358" />
        <stop offset="100%" stop-color="#14171a" />
      </linearGradient>
      <linearGradient id="badgeGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#b989ab" />
        <stop offset="100%" stop-color="#5d3457" />
      </linearGradient>
    </defs>
  `;
}

function numberBadge(component, x, y) {
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="17" fill="url(#badgeGradient)" stroke="rgba(255,255,255,.58)" stroke-width="1.2" />
      <circle cx="${x - 5}" cy="${y - 6}" r="5" fill="rgba(255,255,255,.35)" />
      <text x="${x}" y="${y + 5}" text-anchor="middle" fill="#fffdf9" font-size="15" font-weight="900">${component.number}</text>
    </g>
  `;
}

function bodyShape(className = "graphite-fill") {
  return `
    <g class="assembly-body">
      <rect x="210" y="230" width="500" height="94" rx="42" class="${className}" />
      <ellipse cx="210" cy="277" rx="44" ry="47" class="${className}" />
      <ellipse cx="710" cy="277" rx="44" ry="47" class="${className}" />
      <ellipse cx="210" cy="277" rx="23" ry="26" fill="url(#innerDark)" />
      <ellipse cx="710" cy="277" rx="23" ry="26" fill="url(#innerDark)" />
      <path d="M250 252 H672" stroke="rgba(255,255,255,.42)" stroke-width="5" stroke-linecap="round" />
      <path d="M244 270 H680" stroke="rgba(255,255,255,.22)" stroke-width="7" stroke-linecap="round" />
      <path d="M248 306 H674" stroke="rgba(141,85,125,.72)" stroke-width="4" stroke-linecap="round" />
    </g>
  `;
}

function inletShape(className = "metal") {
  return `
    <g>
      <rect x="420" y="98" width="82" height="164" rx="20" class="${className}" />
      <ellipse cx="461" cy="98" rx="41" ry="16" class="${className}" />
      <ellipse cx="461" cy="98" rx="23" ry="9" fill="url(#innerDark)" />
      <rect x="435" y="132" width="52" height="92" rx="13" fill="#536c45" opacity=".95" />
      <path d="M432 126 C454 138, 473 138, 493 126" stroke="rgba(255,255,255,.42)" stroke-width="3" fill="none" />
      <path d="M436 178 H486" stroke="rgba(255,255,255,.4)" stroke-width="5" />
      <path d="M489 126 V222" stroke="rgba(255,255,255,.28)" stroke-width="4" stroke-linecap="round" />
    </g>
  `;
}

function outletShape(className = "metal") {
  const ports = [276, 374, 472, 570]
    .map(
      (x) => `
        <g>
          <rect x="${x - 30}" y="304" width="60" height="76" rx="24" class="${className}" />
          <ellipse cx="${x}" cy="380" rx="30" ry="15" class="${className}" />
          <ellipse cx="${x}" cy="380" rx="18" ry="8" fill="url(#innerDark)" />
          <rect x="${x - 21}" y="316" width="42" height="34" rx="10" fill="#536c45" opacity=".9" />
          <path d="M${x - 20} 318 V362" stroke="rgba(255,255,255,.34)" stroke-width="3" stroke-linecap="round" />
        </g>
      `
    )
    .join("");
  return `<g>${ports}</g>`;
}

function flangeShape(className = "metal") {
  return `
    <g>
      <rect x="124" y="328" width="628" height="54" rx="18" class="${className}" opacity=".94" />
      <circle cx="186" cy="354" r="17" fill="url(#innerDark)" opacity=".75" />
      <circle cx="690" cy="354" r="17" fill="url(#innerDark)" opacity=".75" />
      <rect x="374" y="340" width="168" height="30" rx="15" fill="rgba(255,255,255,.28)" />
      <path d="M154 338 H724" stroke="rgba(255,255,255,.5)" stroke-width="3" stroke-linecap="round" />
    </g>
  `;
}

function sealingShape(className = "green-fill") {
  if (className === "slot-shape") {
    return `
      <g>
        <circle cx="461" cy="128" r="33" fill="none" stroke="rgba(93,52,87,.46)" stroke-width="2.5" stroke-dasharray="10 8" />
        <circle cx="168" cy="278" r="28" fill="none" stroke="rgba(93,52,87,.46)" stroke-width="2.5" stroke-dasharray="10 8" />
      </g>
    `;
  }

  return `
    <g>
      <circle cx="461" cy="128" r="33" fill="none" stroke="#536c45" stroke-width="12" />
      <circle cx="168" cy="278" r="28" fill="none" stroke="#536c45" stroke-width="10" />
      <circle cx="452" cy="119" r="4" fill="rgba(255,255,255,.62)" />
      <circle cx="161" cy="270" r="3" fill="rgba(255,255,255,.58)" />
    </g>
  `;
}

function plugShape(className = "fuchsia-fill") {
  return `
    <g>
      <rect x="104" y="248" width="68" height="58" rx="24" class="${className}" />
      <ellipse cx="104" cy="277" rx="16" ry="29" class="${className}" />
      <circle cx="94" cy="277" r="16" fill="url(#metalGradient)" />
      <circle cx="94" cy="277" r="6" fill="url(#innerDark)" />
      <path d="M116 258 H158" stroke="rgba(255,255,255,.35)" stroke-width="3" stroke-linecap="round" />
      <path d="M77 294 C62 326, 95 342, 124 320" fill="none" stroke="#8f9699" stroke-width="5" stroke-dasharray="2 7" stroke-linecap="round" />
    </g>
  `;
}

function boltsShape(className = "metal") {
  return `
    <g>
      <rect x="172" y="294" width="26" height="82" rx="8" class="${className}" />
      <polygon points="169,294 201,294 209,282 161,282" class="${className}" />
      <rect x="676" y="294" width="26" height="82" rx="8" class="${className}" />
      <polygon points="673,294 705,294 713,282 665,282" class="${className}" />
      <path d="M181 300 V366 M685 300 V366" stroke="rgba(255,255,255,.38)" stroke-width="2.5" stroke-linecap="round" />
    </g>
  `;
}

function washersShape(className = "washer-fill") {
  if (className === "slot-shape") {
    return `
      <g>
        <circle cx="185" cy="289" r="20" fill="none" stroke="rgba(93,52,87,.46)" stroke-width="2.5" stroke-dasharray="10 8" />
        <circle cx="689" cy="289" r="20" fill="none" stroke="rgba(93,52,87,.46)" stroke-width="2.5" stroke-dasharray="10 8" />
      </g>
    `;
  }

  return `
    <g>
      <circle cx="185" cy="289" r="20" class="${className}" />
      <circle cx="689" cy="289" r="20" class="${className}" />
    </g>
  `;
}

function slotMarkup(component, shapeMarkup, labelX, labelY, hotspotBox) {
  const isFitted = currentMode === "final" || currentMode === "kit" || fitted.has(component.id);
  const isActive = activeId === component.id;
  const isRelated = relatedIds.has(component.id);
  const [x, y, width, height] = hotspotBox;
  return `
    <g class="slot-hotspot ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""} ${isFitted ? "is-fitted" : ""}" data-id="${component.id}" tabindex="0" role="button" aria-label="Slot ${component.number}, ${component.term}">
      <g class="slot-outline">${shapeMarkup("slot-shape")}</g>
      <g class="slot-fill ${isFitted ? "is-visible" : ""}">${shapeMarkup()}</g>
      ${numberBadge(component, labelX, labelY)}
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="14" fill="transparent" />
    </g>
  `;
}

function buildAssemblySvg() {
  const label = currentMode === "final" ? "FINAL ASSEMBLY" : "BUILD / PUZZLE MODE";
  const sub =
    currentMode === "final"
      ? "Completed fuel collector with every numbered component fitted into the final unit."
      : "Match each dashed numbered region with the same-number bottom component.";

  return `
    ${svgDefs()}
    <text x="38" y="45" class="svg-label">${label}</text>
    <text x="38" y="66" class="svg-sub">${sub}</text>
    ${slotMarkup(components[3], flangeShape, 116, 362, [100, 318, 680, 78])}
    ${slotMarkup(components[0], bodyShape, 190, 224, [86, 216, 690, 130])}
    ${slotMarkup(components[1], inletShape, 518, 103, [405, 80, 116, 196])}
    ${slotMarkup(components[2], outletShape, 622, 404, [228, 292, 390, 108])}
    ${slotMarkup(components[4], sealingShape, 535, 152, [136, 102, 370, 205])}
    ${slotMarkup(components[5], plugShape, 82, 246, [64, 228, 132, 116])}
    ${slotMarkup(components[6], boltsShape, 735, 280, [150, 260, 586, 132])}
    ${slotMarkup(components[7], washersShape, 744, 326, [154, 260, 580, 96])}
    <path class="callout-line" d="M190 224 L136 168" />
    <path class="callout-line" d="M518 103 L600 62" />
    <path class="callout-line" d="M622 404 L702 454" />
  `;
}

function kitItem(component, visual, x, y, label, sub) {
  const activeClass = activeId === component.id ? "is-active" : "";
  const relatedClass = relatedIds.has(component.id) ? "is-related" : "";
  return `
    <g class="kit-item ${activeClass} ${relatedClass}" data-id="${component.id}" tabindex="0" role="button" aria-label="Component ${component.number}, ${component.term}">
      <g transform="translate(${x} ${y}) scale(.72)">
        <g class="kit-shape">${visual}</g>
      </g>
      ${numberBadge(component, x + 8, y + 4)}
      <text x="${x + 48}" y="${y + 10}" class="kit-label">${label}</text>
      <text x="${x + 48}" y="${y + 30}" class="kit-sub">${sub}</text>
      <rect x="${x - 18}" y="${y - 22}" width="210" height="132" rx="18" fill="transparent" />
    </g>
  `;
}

function buildKitSvg() {
  return `
    ${svgDefs()}
    <text x="38" y="45" class="svg-label">FULL KIT / FULL SET</text>
    <text x="38" y="66" class="svg-sub">All parts are isolated, numbered, and ready for the assembly puzzle.</text>
    ${kitItem(components[0], bodyShape(), 78, 142, "Collector Body", "/kəˈlektə ˈbɒdi/")}
    ${kitItem(components[1], inletShape(), 514, 78, "Inlet Sleeve", "/ˈɪnlet sliːv/")}
    ${kitItem(components[2], outletShape(), 494, 280, "Outlet Sleeves", "/ˈaʊtlet sliːvz/")}
    ${kitItem(components[3], flangeShape(), 78, 350, "Mounting Flange", "/ˈmaʊntɪŋ flændʒ/")}
    ${kitItem(components[4], sealingShape(), 688, 104, "Sealing Rings", "/ˈsiːlɪŋ rɪŋz/")}
    ${kitItem(components[5], plugShape(), 688, 236, "Service Port Plug", "/ˈsɜːvɪs pɔːt plʌɡ/")}
    ${kitItem(components[6], boltsShape(), 308, 362, "Fastening Bolts", "/ˈfɑːsənɪŋ bəʊlts/")}
    ${kitItem(components[7], washersShape(), 620, 390, "Washers", "/ˈwɒʃəz/")}
  `;
}

function renderSvg() {
  svg.className = `assembly-svg mode-${currentMode}`;
  svg.innerHTML = currentMode === "kit" ? buildKitSvg() : buildAssemblySvg();
  svg.querySelectorAll("[data-id]").forEach((element) => {
    element.addEventListener("click", () => handleDiagramClick(element.dataset.id));
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleDiagramClick(element.dataset.id);
      }
    });
  });
}

function miniVisual(component) {
  const map = {
    "collector-body": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m1" x1="0" x2="1"><stop stop-color="#8f8f96"/><stop offset=".45" stop-color="#5a5b62"/><stop offset="1" stop-color="#2a2d34"/></linearGradient></defs><rect x="16" y="25" width="88" height="25" rx="12" fill="url(#m1)" stroke="#6d7076"/><circle cx="17" cy="38" r="13" fill="url(#m1)" stroke="#6d7076"/><circle cx="103" cy="38" r="13" fill="url(#m1)" stroke="#6d7076"/><path d="M26 31 H94" stroke="rgba(255,255,255,.45)" stroke-width="2"/><path d="M28 48 H92" stroke="#8a557d" stroke-width="2"/></svg>',
    "inlet-sleeve": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m2" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".42" stop-color="#aeb6ba"/><stop offset=".62" stop-color="#f4f1ea"/><stop offset="1" stop-color="#666e73"/></linearGradient></defs><rect x="46" y="12" width="28" height="46" rx="9" fill="url(#m2)" stroke="#4b4b52"/><ellipse cx="60" cy="12" rx="14" ry="6" fill="#f4f1ea" stroke="#4b4b52"/><rect x="51" y="24" width="18" height="24" rx="4" fill="#536c45"/><path d="M69 18 V54" stroke="rgba(255,255,255,.5)" stroke-width="2"/></svg>',
    "outlet-sleeves": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m3" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".45" stop-color="#aeb6ba"/><stop offset="1" stop-color="#666e73"/></linearGradient></defs><g transform="translate(15 14)"><rect x="0" y="16" width="18" height="38" rx="8" fill="url(#m3)" stroke="#4b4b52"/><rect x="28" y="16" width="18" height="38" rx="8" fill="url(#m3)" stroke="#4b4b52"/><rect x="56" y="16" width="18" height="38" rx="8" fill="url(#m3)" stroke="#4b4b52"/><rect x="84" y="16" width="18" height="38" rx="8" fill="url(#m3)" stroke="#4b4b52"/></g></svg>',
    "mounting-flange": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m4" x1="0" x2="1"><stop stop-color="#f9f8f2"/><stop offset=".5" stop-color="#b9c0c3"/><stop offset="1" stop-color="#737b80"/></linearGradient></defs><rect x="18" y="26" width="84" height="22" rx="8" fill="url(#m4)" stroke="#4b4b52"/><circle cx="35" cy="37" r="7" fill="#242428"/><circle cx="85" cy="37" r="7" fill="#242428"/><path d="M28 31 H92" stroke="rgba(255,255,255,.6)" stroke-width="2"/></svg>',
    "sealing-rings": '<svg viewBox="0 0 120 70"><circle cx="45" cy="35" r="16" fill="none" stroke="#536c45" stroke-width="7"/><circle cx="78" cy="35" r="16" fill="none" stroke="#536c45" stroke-width="7"/><circle cx="40" cy="29" r="3" fill="rgba(255,255,255,.65)"/></svg>',
    "service-port-plug": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m5" x1="0" x2="1"><stop stop-color="#cda8c4"/><stop offset=".6" stop-color="#7d496f"/><stop offset="1" stop-color="#4e2b49"/></linearGradient><linearGradient id="s5" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".5" stop-color="#bbc1c4"/><stop offset="1" stop-color="#686f74"/></linearGradient></defs><rect x="44" y="24" width="42" height="24" rx="10" fill="url(#m5)" stroke="#4b4b52"/><circle cx="39" cy="36" r="12" fill="url(#s5)" stroke="#4b4b52"/><path d="M52 29 H80" stroke="rgba(255,255,255,.4)" stroke-width="2"/></svg>',
    "fastening-bolts": '<svg viewBox="0 0 120 70"><defs><linearGradient id="m6" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".42" stop-color="#aeb6ba"/><stop offset="1" stop-color="#666e73"/></linearGradient></defs><rect x="42" y="22" width="11" height="36" rx="4" fill="url(#m6)" stroke="#4b4b52"/><polygon points="38,22 57,22 62,15 34,15" fill="url(#m6)" stroke="#4b4b52"/><rect x="70" y="22" width="11" height="36" rx="4" fill="url(#m6)" stroke="#4b4b52"/><polygon points="66,22 85,22 90,15 62,15" fill="url(#m6)" stroke="#4b4b52"/></svg>',
    washers: '<svg viewBox="0 0 120 70"><defs><linearGradient id="m7" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".5" stop-color="#b9c0c3"/><stop offset="1" stop-color="#737b80"/></linearGradient></defs><circle cx="45" cy="35" r="15" fill="none" stroke="url(#m7)" stroke-width="9"/><circle cx="77" cy="35" r="15" fill="none" stroke="url(#m7)" stroke-width="9"/></svg>'
  };

  return map[component.id];
}

function renderStrip() {
  componentStrip.innerHTML = components
    .map((component) => {
      const isActive = activeId === component.id;
      const isRelated = relatedIds.has(component.id);
      const isFitted = currentMode === "final" || fitted.has(component.id);
      const isPulsing = pulseId === component.id;
      return `
        <button class="component-card ${isActive ? "is-active" : ""} ${isRelated ? "is-related" : ""} ${isFitted ? "is-fitted" : ""} ${isPulsing ? "is-pulsing" : ""}" type="button" data-id="${component.id}" aria-pressed="${isActive}">
          <span class="component-topline">
            <span class="part-number">${component.number}</span>
            <span>${isFitted ? "fitted" : "slot " + component.number}</span>
          </span>
          <span class="mini-visual">${miniVisual(component)}</span>
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
  const component = byId(activeId);
  activeNumber.textContent = component.number;
  activeTerm.textContent = component.term;
  activeIpa.textContent = component.ipa;
  activeRu.textContent = component.ru;
  activeFunction.textContent = component.function;
  activeFit.textContent = component.fit;
  activeSentence.textContent = component.sentence;
  activeStep.textContent = component.step;
  relationPart.textContent = component.relation.part;
  relationPosition.textContent = component.relation.position;
  relationAction.textContent = component.relation.action;
  relationText.textContent = component.relation.relation;
}

function renderSequence() {
  const activeStep = sequenceSteps.find((step) => step.id === activeSequenceId);
  if (activeStep) {
    sequenceSentence.textContent = `${activeStep.label} — ${activeStep.sentence} ${activeStep.logic}`;
  }

  sequenceStepsContainer.innerHTML = sequenceSteps
    .map(
      (step) => `
        <button class="sequence-step ${activeSequenceId === step.id ? "is-active" : ""}" type="button" data-id="${step.id}">
          <span>${step.label}</span>
          <strong>${step.title}</strong>
          <small>${step.sentence}</small>
        </button>
      `
    )
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

function updateProgress() {
  const touched = new Set([...activated, ...fitted]);
  const count = currentMode === "final" || isComplete() ? components.length : Math.max(fitted.size, touched.size);
  progressCount.textContent = count;
  progressLabel.textContent = count === components.length ? "of 8 complete" : "of 8 placed";
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
    return false;
  }

  currentMode = "final";
  setStatus("The assembly is complete.", "success");
  return true;
}

function selectComponent(componentId, options = {}) {
  const { source = "bottom", speak = true, ensureBuild = true, pulse = true } = options;
  const component = byId(componentId);
  if (ensureBuild && currentMode !== "build" && !isComplete()) {
    currentMode = "build";
  }
  activeId = componentId;
  activated.add(componentId);
  relatedIds = new Set([componentId]);
  activeSequenceId = "";
  if (pulse) {
    setPulse(componentId);
  }
  const sourceText = source === "slot" ? "Slot" : source === "card" ? "Right card" : "Bottom component";
  setStatus(`${sourceText} ${component.number} selected: ${component.term}. Part ${component.number}, slot ${component.number}, and card ${component.number} are linked.`);
  maybeComplete();
  render();
  if (speak) {
    speakBritish(component.term.replace(/\s*\(x\d+\)/, ""));
  }
  pulseActiveCard();
}

function fitComponent(componentId = activeId) {
  if (currentMode !== "build") {
    currentMode = "build";
  }

  fitted.add(componentId);
  activated.add(componentId);
  activeId = componentId;
  relatedIds = new Set([componentId]);
  activeSequenceId = "";
  const component = byId(componentId);
  const complete = fitted.size === components.length;
  setStatus(
    complete
      ? "The assembly is complete."
      : `Component ${component.number} fitted into slot ${component.number}: ${component.term}.`,
    complete ? "success" : ""
  );
  if (complete) {
    currentMode = "final";
  }
  setPulse(componentId);
  render();
}

function handleDiagramClick(componentId) {
  selectComponent(componentId, { source: "slot", ensureBuild: false });
}

function showHint() {
  const component = byId(activeId);
  if (currentMode !== "build") {
    currentMode = "build";
  }
  relatedIds = new Set([component.id]);
  setStatus(`Fit relation for ${component.number}: ${component.relation.part} ${component.relation.action} ${component.relation.relation} at the ${component.relation.position}.`);
  render();
  speakBritish(`${component.relation.part} ${component.relation.action} ${component.relation.relation}.`);
}

function resetBuild() {
  fitted = new Set();
  activated = new Set();
  currentMode = "build";
  activeId = components[0].id;
  relatedIds = new Set([activeId]);
  activeSequenceId = "first";
  setStatus("Build reset. Select a bottom component and fit it into the same-number dashed slot.");
  render();
}

function selectSequenceStep(stepId) {
  const step = sequenceSteps.find((item) => item.id === stepId);
  if (!isComplete()) {
    currentMode = "build";
  }
  activeSequenceId = step.id;
  activeId = step.componentIds[0];
  relatedIds = new Set(step.componentIds);
  step.componentIds.forEach((componentId) => activated.add(componentId));
  sequenceSentence.textContent = `${step.label} — ${step.sentence} ${step.logic}`;
  setPulse(step.componentIds[0]);
  setStatus(`${step.label} — ${step.logic}`);
  maybeComplete();
  render();
  speakBritish(step.sentence);
  pulseActiveCard();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;
    if (currentMode === "final") {
      setStatus("Final assembly view shows every numbered component fitted.", "success");
    } else if (currentMode === "kit") {
      setStatus("Full kit view shows the complete numbered component set.");
    } else {
      setStatus("Build mode shows dashed numbered slots that match the bottom strip.");
    }
    render();
  });
});

fitButton.addEventListener("click", () => fitComponent());
hintButton.addEventListener("click", showHint);
resetButton.addEventListener("click", resetBuild);
activeCard.addEventListener("click", () => selectComponent(activeId, { source: "card" }));
activeCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    selectComponent(activeId, { source: "card" });
  }
});

render();
