const chantButton = document.querySelector('[data-action="random-chant"]');
const chantStatus = document.querySelector("[data-chant-status]");
const tutorButton = document.querySelector('[data-action="pick-tutor"]');
const tutorStatus = document.querySelector("[data-story-status]");
const romanceButton = document.querySelector('[data-action="romance-mode"]');
const romanceStatus = document.querySelector("[data-romance-status]");
const bcButton = document.querySelector('[data-action="bc-check"]');
const bcStatus = document.querySelector("[data-bc-status]");
const bcAnswer = document.querySelector("[data-bc-answer]");
const frqButtons = document.querySelectorAll("[data-frq-toggle]");

const chantOptions = [
  "ISMAEL: HUH. OM: YEA. The room has been restored.",
  "HUH detected. YEA confirmed. Vibes converging.",
  "The chant fires off with elite hallway timing.",
  "YEA lands immediately after HUH. Lore remains stable."
];

const tutorOptions = [
  "Today's study champion: Mr. Cronin, by veteran theorem authority.",
  "Today's study champion: Preetham, by calm last-minute mastery.",
  "Today's study champion: Soham, by chaos-powered motivation.",
  "Today's study champion: Kamran, by midnight side-plot intensity.",
  "Four-way tie. The true winner is passing the retest."
];

if (chantButton && chantStatus) {
  chantButton.addEventListener("click", () => {
    const choice = chantOptions[Math.floor(Math.random() * chantOptions.length)];
    chantStatus.textContent = choice;
  });
}

if (tutorButton && tutorStatus) {
  tutorButton.addEventListener("click", () => {
    const choice = tutorOptions[Math.floor(Math.random() * tutorOptions.length)];
    tutorStatus.textContent = choice;
  });
}

if (romanceButton && romanceStatus) {
  romanceButton.addEventListener("click", () => {
    document.body.classList.toggle("romance-mode");
    const enabled = document.body.classList.contains("romance-mode");
    romanceStatus.textContent = enabled
      ? "Romance mode activated. Hearts and glow boosted."
      : "Soft focus engaged.";
    romanceButton.textContent = enabled ? "Reduce Romance" : "Intensify Romance";
  });
}

if (bcButton && bcStatus && bcAnswer) {
  bcButton.addEventListener("click", () => {
    const isHidden = bcAnswer.hasAttribute("hidden");
    if (isHidden) {
      bcAnswer.removeAttribute("hidden");
      bcStatus.textContent =
        "Answer revealed: geometric series, ratio 3/4, sum = 3.";
      bcButton.textContent = "Hide Practice Answer";
    } else {
      bcAnswer.setAttribute("hidden", "");
      bcStatus.textContent =
        "Try the practice prompt below, then reveal the answer.";
      bcButton.textContent = "Check Practice Answer";
    }
  });
}

frqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-frq-toggle");
    const answer = document.querySelector(`[data-frq-answer="${id}"]`);

    if (!answer) {
      return;
    }

    const isHidden = answer.hasAttribute("hidden");

    if (isHidden) {
      answer.removeAttribute("hidden");
      button.textContent = `Hide FRQ ${id} Strategy`;
    } else {
      answer.setAttribute("hidden", "");
      button.textContent = `Reveal FRQ ${id} Strategy`;
    }
  });
});
