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
    step: "Place the collector body into slot 1 as the base of the assembly."
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
    step: "Insert the inlet sleeve into the top opening of the collector body."
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
    step: "Fit the four outlet sleeves into the four lower ports."
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
    step: "Align the mounting flange behind the collector body."
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
    step: "Place the sealing rings into the grooves before closing the ports."
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
    step: "Insert the service port plug into the left service port."
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
    step: "Insert the fastening bolts through the washer and flange positions."
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
    step: "Place the washers under the bolt heads before tightening."
  }
];

const svg = document.querySelector("#assemblySvg");
const componentStrip = document.querySelector("#componentStrip");
const progressCount = document.querySelector("#progressCount");
const statusMessage = document.querySelector("#statusMessage");
const stageEyebrow = document.querySelector("#stageEyebrow");
const stageTitle = document.querySelector("#stageTitle");
const stageNote = document.querySelector("#stageNote");
const activeNumber = document.querySelector("#activeNumber");
const activeTerm = document.querySelector("#activeTerm");
const activeIpa = document.querySelector("#activeIpa");
const activeRu = document.querySelector("#activeRu");
const activeFunction = document.querySelector("#activeFunction");
const activeFit = document.querySelector("#activeFit");
const activeSentence = document.querySelector("#activeSentence");
const activeStep = document.querySelector("#activeStep");
const modeButtons = document.querySelectorAll(".mode-button");
const fitButton = document.querySelector("#fitButton");
const hintButton = document.querySelector("#hintButton");
const resetButton = document.querySelector("#resetButton");

let activeId = components[0].id;
let currentMode = "kit";
let fitted = new Set();

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

function byId(id) {
  return components.find((component) => component.id === id);
}

function setStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status ${type}`.trim();
}

function svgDefs() {
  return `
    <defs>
      <linearGradient id="fuchsiaGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#b06aa4" />
        <stop offset="55%" stop-color="#8d4f82" />
        <stop offset="100%" stop-color="#5d3157" />
      </linearGradient>
      <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f8f7f3" />
        <stop offset="44%" stop-color="#c6c8c8" />
        <stop offset="100%" stop-color="#8f9699" />
      </linearGradient>
      <linearGradient id="innerDark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#50575b" />
        <stop offset="100%" stop-color="#1e2225" />
      </linearGradient>
    </defs>
  `;
}

function numberBadge(component, x, y) {
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="17" fill="#67345e" />
      <text x="${x}" y="${y + 5}" text-anchor="middle" fill="#fffdf9" font-size="15" font-weight="900">${component.number}</text>
    </g>
  `;
}

function bodyShape(className = "fuchsia-fill") {
  return `
    <g class="assembly-body">
      <rect x="210" y="230" width="500" height="94" rx="42" class="${className}" />
      <ellipse cx="210" cy="277" rx="44" ry="47" class="${className}" />
      <ellipse cx="710" cy="277" rx="44" ry="47" class="${className}" />
      <ellipse cx="210" cy="277" rx="23" ry="26" fill="url(#innerDark)" />
      <ellipse cx="710" cy="277" rx="23" ry="26" fill="url(#innerDark)" />
      <path d="M244 270 H680" stroke="rgba(255,255,255,.32)" stroke-width="7" stroke-linecap="round" />
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
      <path d="M436 178 H486" stroke="rgba(255,255,255,.4)" stroke-width="5" />
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
        </g>
      `
    )
    .join("");
  return `<g>${ports}</g>`;
}

function flangeShape(className = "metal") {
  return `
    <g>
      <rect x="124" y="328" width="628" height="54" rx="18" class="${className}" opacity=".88" />
      <circle cx="186" cy="354" r="17" fill="url(#innerDark)" opacity=".75" />
      <circle cx="690" cy="354" r="17" fill="url(#innerDark)" opacity=".75" />
      <rect x="374" y="340" width="168" height="30" rx="15" fill="rgba(255,255,255,.28)" />
    </g>
  `;
}

function sealingShape(className = "green-fill") {
  if (className === "slot-shape") {
    return `
      <g>
        <circle cx="461" cy="128" r="33" fill="none" stroke="rgba(36,36,40,.48)" stroke-width="2.5" stroke-dasharray="11 8" />
        <circle cx="168" cy="278" r="28" fill="none" stroke="rgba(36,36,40,.48)" stroke-width="2.5" stroke-dasharray="11 8" />
      </g>
    `;
  }

  return `
    <g>
      <circle cx="461" cy="128" r="33" fill="none" stroke="#536c45" stroke-width="12" />
      <circle cx="168" cy="278" r="28" fill="none" stroke="#536c45" stroke-width="10" />
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
    </g>
  `;
}

function washersShape(className = "washer-fill") {
  if (className === "slot-shape") {
    return `
      <g>
        <circle cx="185" cy="289" r="20" fill="none" stroke="rgba(36,36,40,.48)" stroke-width="2.5" stroke-dasharray="11 8" />
        <circle cx="689" cy="289" r="20" fill="none" stroke="rgba(36,36,40,.48)" stroke-width="2.5" stroke-dasharray="11 8" />
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
  const [x, y, width, height] = hotspotBox;
  return `
    <g class="slot-hotspot ${isActive ? "is-active" : ""} ${isFitted ? "is-fitted" : ""}" data-id="${component.id}" tabindex="0" role="button" aria-label="Slot ${component.number}, ${component.term}">
      <g class="slot-outline">${shapeMarkup("slot-shape")}</g>
      <g class="slot-fill ${isFitted ? "is-visible" : ""}">${shapeMarkup()}</g>
      ${numberBadge(component, labelX, labelY)}
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="14" fill="transparent" />
    </g>
  `;
}

function buildAssemblySvg() {
  return `
    ${svgDefs()}
    <text x="38" y="45" class="svg-label">BUILD / PUZZLE MODE</text>
    <text x="38" y="66" class="svg-sub">Match each dashed numbered region with the same-number bottom component.</text>
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
  return `
    <g class="kit-item ${activeClass}" data-id="${component.id}" tabindex="0" role="button" aria-label="Component ${component.number}, ${component.term}">
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
    "collector-body": '<svg viewBox="0 0 120 70"><rect x="16" y="25" width="88" height="25" rx="12" fill="#8d4f82" stroke="#4b4b52"/><circle cx="17" cy="38" r="13" fill="#8d4f82" stroke="#4b4b52"/><circle cx="103" cy="38" r="13" fill="#8d4f82" stroke="#4b4b52"/></svg>',
    "inlet-sleeve": '<svg viewBox="0 0 120 70"><rect x="46" y="12" width="28" height="46" rx="9" fill="#c6c8c8" stroke="#4b4b52"/><ellipse cx="60" cy="12" rx="14" ry="6" fill="#e8e7e3" stroke="#4b4b52"/><rect x="51" y="24" width="18" height="24" rx="4" fill="#536c45"/></svg>',
    "outlet-sleeves": '<svg viewBox="0 0 120 70"><g transform="translate(15 14)"><rect x="0" y="16" width="18" height="38" rx="8" fill="#c6c8c8" stroke="#4b4b52"/><rect x="28" y="16" width="18" height="38" rx="8" fill="#c6c8c8" stroke="#4b4b52"/><rect x="56" y="16" width="18" height="38" rx="8" fill="#c6c8c8" stroke="#4b4b52"/><rect x="84" y="16" width="18" height="38" rx="8" fill="#c6c8c8" stroke="#4b4b52"/></g></svg>',
    "mounting-flange": '<svg viewBox="0 0 120 70"><rect x="18" y="26" width="84" height="22" rx="8" fill="#c6c8c8" stroke="#4b4b52"/><circle cx="35" cy="37" r="7" fill="#242428"/><circle cx="85" cy="37" r="7" fill="#242428"/></svg>',
    "sealing-rings": '<svg viewBox="0 0 120 70"><circle cx="45" cy="35" r="16" fill="none" stroke="#536c45" stroke-width="7"/><circle cx="78" cy="35" r="16" fill="none" stroke="#536c45" stroke-width="7"/></svg>',
    "service-port-plug": '<svg viewBox="0 0 120 70"><rect x="44" y="24" width="42" height="24" rx="10" fill="#8d4f82" stroke="#4b4b52"/><circle cx="39" cy="36" r="12" fill="#c6c8c8" stroke="#4b4b52"/></svg>',
    "fastening-bolts": '<svg viewBox="0 0 120 70"><rect x="42" y="22" width="11" height="36" rx="4" fill="#c6c8c8" stroke="#4b4b52"/><polygon points="38,22 57,22 62,15 34,15" fill="#c6c8c8" stroke="#4b4b52"/><rect x="70" y="22" width="11" height="36" rx="4" fill="#c6c8c8" stroke="#4b4b52"/><polygon points="66,22 85,22 90,15 62,15" fill="#c6c8c8" stroke="#4b4b52"/></svg>',
    washers: '<svg viewBox="0 0 120 70"><circle cx="45" cy="35" r="15" fill="none" stroke="#c6c8c8" stroke-width="9"/><circle cx="77" cy="35" r="15" fill="none" stroke="#c6c8c8" stroke-width="9"/></svg>'
  };

  return map[component.id];
}

function renderStrip() {
  componentStrip.innerHTML = components
    .map((component) => {
      const isActive = activeId === component.id;
      const isFitted = fitted.has(component.id);
      return `
        <button class="component-card ${isActive ? "is-active" : ""} ${isFitted ? "is-fitted" : ""}" type="button" data-id="${component.id}" aria-pressed="${isActive}">
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
    card.addEventListener("click", () => selectComponent(card.dataset.id));
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
}

function updateModeText() {
  stageEyebrow.textContent = modeText[currentMode].eyebrow;
  stageTitle.textContent = modeText[currentMode].title;
  stageNote.textContent = modeText[currentMode].note;
  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === currentMode);
  });
}

function updateProgress() {
  progressCount.textContent = currentMode === "final" ? components.length : fitted.size;
}

function render() {
  updateModeText();
  renderActiveCard();
  renderSvg();
  renderStrip();
  updateProgress();
}

function selectComponent(componentId) {
  activeId = componentId;
  const component = byId(componentId);
  setStatus(`Component ${component.number} selected: ${component.term}. Slot ${component.number} is the matching assembly region.`);
  render();
}

function fitComponent(componentId = activeId) {
  if (currentMode !== "build") {
    currentMode = "build";
  }

  fitted.add(componentId);
  activeId = componentId;
  const component = byId(componentId);
  const complete = fitted.size === components.length;
  setStatus(
    complete
      ? "Assembly complete. All bottom components match their numbered slots."
      : `Component ${component.number} fitted into slot ${component.number}: ${component.term}.`,
    complete ? "success" : ""
  );
  render();
}

function handleDiagramClick(componentId) {
  if (currentMode === "build" && activeId === componentId && !fitted.has(componentId)) {
    fitComponent(componentId);
    return;
  }

  selectComponent(componentId);
}

function showHint() {
  const component = byId(activeId);
  if (currentMode !== "build") {
    currentMode = "build";
  }
  setStatus(`Fit relation for ${component.number}: ${component.fit}`);
  render();
}

function resetBuild() {
  fitted = new Set();
  currentMode = "build";
  activeId = components[0].id;
  setStatus("Build reset. Select a bottom component and fit it into the same-number dashed slot.");
  render();
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

render();
