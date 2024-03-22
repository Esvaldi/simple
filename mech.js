const artNovel = document.querySelector("article#novel");
tabList = artNovel.querySelectorAll(`[role="tablist"]`);

for (let idx = 0; idx < tabList.length; idx++) {
  const eltIA = tabList[idx],
    tabButtons = eltIA.querySelectorAll(`[id^="tab${idx + 1}-"]`),
    tabPanels = eltIA.querySelectorAll(`[id^="tabpanel${idx + 1}-"]`);

  // BUTTONS
  if (tabList.length >= 1) {
    for (let idxB = 0; idxB < tabButtons.length; idxB++) {
      const eltIB = tabButtons[idxB];

      eltIB.addEventListener("click", () => {
        const btnActive = eltIA.querySelector(`.active[id^="tab${idx + 1}-"]`),
          pnlShow = eltIA.querySelector(`.show[id^="tabpanel${idx + 1}-"]`);

        btnActive.classList.toggle("active");
        btnActive.setAttribute("aria-selected", "false");

        eltIB.classList.toggle("active");
        eltIB.setAttribute("aria-selected", "true");

        pnlShow.classList.toggle("show");
        tabPanels[idxB].classList.toggle("show");
      });
    }
  }
}

function cycleList() {
  const cyclePanel1 = artNovel.querySelector("#cycle1-1"),
    cyclePanel2 = artNovel.querySelector("#cycle1-2");

  cyclePanel1.classList.toggle("show");
  cyclePanel2.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const accordBtn = artNovel.querySelectorAll(`[aria-controls^="accord-"]`),
    accordPanel = artNovel.querySelectorAll(`[id^="accord-"]`);

  for (let idx = 0; idx < accordBtn.length; idx++) {
    const eltIA = accordBtn[idx],
      context = eltIA.querySelector(".context");

    let count = 0;

    eltIA.addEventListener("click", () => {
      eltIA.classList.toggle("active");
      accordPanel[idx].classList.toggle("show");

      switch (count) {
        case 1:
          count = 0;
          eltIA.setAttribute("aria-expanded", "false");
          context.textContent = "Show";
          break;
        default:
          count = 1;
          eltIA.setAttribute("aria-expanded", "true");
          context.textContent = "Hide";
          break;
      }
    });
  }
});
