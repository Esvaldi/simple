const articleStory = document.querySelector(`article#story`);

if (articleStory !== undefined && articleStory !== null) {
  function packAccordion() {
    const accordionButtons = articleStory.querySelectorAll(`[id^="accordion"]`);
    const accordionItem = articleStory.querySelectorAll(
      `[aria-labelledby^="accordion"]`
    );
    for (let i = 0; i < accordionButtons.length; i++) {
      const element = accordionButtons[i];

      element.addEventListener("click", () => {
        element.classList.toggle(`active`);
        accordionItem[i].classList.toggle("show");

        if (element.classList.contains("active")) {
          element.querySelector(`:scope > .context`).textContent = "Hide";
        } else {
          element.querySelector(`:scope > .context`).textContent = "Show";
        }
      });
    }
  }
  function packTabs() {
    const tabsButtons = articleStory.querySelectorAll(`.tabs-buttons`);
    const tabsItems = articleStory.querySelectorAll(`.tabs-items`);

    for (let iA = 0; iA < tabsButtons.length; iA++) {
      const elementA = tabsButtons[iA];

      const tabsButton = elementA.querySelectorAll(`:scope > button`);
      const tabsItem = tabsItems[iA].querySelectorAll(`:scope > .item`);

      for (let iB = 0; iB < tabsButton.length; iB++) {
        const elementB = tabsButton[iB];

        elementB.addEventListener("click", () => {
          const active = tabsButtons[iA].querySelector(`:scope > .active`);

          active.classList.toggle(`active`);
          active.setAttribute("aria-selected", "false");

          elementB.classList.toggle("active");
          elementB.setAttribute("aria-selected", "true");

          tabsItems[iA]
            .querySelector(`:scope > .show`)
            .classList.toggle(`show`);
          tabsItem[iB].classList.toggle(`show`);
        });
      }
    }
  }
  function packCycle() {
    const cycleHead = articleStory.querySelector(`#story-synopsis-status`),
      cycleContext = cycleHead.querySelector(`:scope > .context`),
      cycleButton = articleStory.querySelector(`button.cycle`),
      cycleItems = articleStory.querySelector(`.cycle-items`),
      cycleItem = cycleItems.querySelectorAll(`:scope > .item`);
    let countCycle = 1;

    cycleButton.addEventListener(`click`, () => {
      cycleItems.querySelector(`:scope > .show`).classList.toggle("show");
      cycleItem[countCycle].classList.toggle("show");

      switch (countCycle) {
        case 0:
          countCycle++;
          cycleContext.textContent = "Synopsis";
          break;
        case 1:
          countCycle = 0;
          cycleContext.textContent = "Status";
          break;
      }
    });
  }

  packAccordion();
  packTabs();
  packCycle();
}
