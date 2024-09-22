export let removedElements: {
  element: Element;
  parent: Node & ParentNode;
  nextSibling: Node | null;
  removedWords: string[];
}[] = [];

export function removeElements(
  elements: NodeListOf<Element> | Element[],
  specificWords: string[],
  currentHostname: string,
) {
  const wordSet = new Set(
    specificWords.map((word) => word.toLocaleLowerCase().normalize("NFC")),
  );

  function processElements(elementsToProcess: NodeListOf<Element> | Element[]) {
    elementsToProcess.forEach((element) => {
      const textContent =
        element.textContent?.toLocaleLowerCase().normalize("NFC") || "";
      let shouldRemove = true;

      // Special handling for Google search results
      if (/^www\.google\./.test(currentHostname)) {
        const isRuWikipediaLink =
          element instanceof HTMLAnchorElement &&
          element.href.includes("ru.wikipedia.org");
        const isUkWikipediaLinkPresent = !!document.querySelector(
          'a[href*="uk.wikipedia.org"]',
        );

        if (isRuWikipediaLink && !isUkWikipediaLinkPresent) {
          shouldRemove = false;

          // Add the info icon if not already added
          if (!element.dataset.iconAdded) {
            const infoIcon = document.createElement("span");
            infoIcon.textContent = " ℹ️ чому це тут";
            infoIcon.style.cursor = "pointer";
            infoIcon.title =
              "Google не видав на цій сторінці українську 🇺🇦, 🇵🇱, чи 🇬🇧 Вікіпедію, є лише 💩, перейдіть по ній, розширення спробує перенаправити вас до 🇺🇦, 🇵🇱, або 🇬🇧 (кращі методи незабаром).";

            element.dataset.iconAdded = "true";
            element.parentElement?.insertBefore(infoIcon, element.nextSibling);
          }
        }
      }

      if (shouldRemove) {
        const removedWords: string[] = [];
        for (const word of wordSet) {
          if (textContent.includes(word)) {
            removedWords.push(word);
          }
        }
        if (removedWords.length > 0) {
          removedElements.push({
            element,
            parent: element.parentNode!,
            nextSibling: element.nextSibling,
            removedWords,
          });
          element.remove();
        }
      }
    });
  }

  processElements(elements);

  let mutationTimeout: number | undefined;

  const observer = new MutationObserver((mutations) => {
    if (mutationTimeout) {
      clearTimeout(mutationTimeout);
    }
    mutationTimeout = window.setTimeout(() => {
      const nodesToProcess = new Set<Element>();
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            nodesToProcess.add(node);
            node
              .querySelectorAll(
                "p, a, div, span, h1, h2, h3, h4, h5, h6, yt-formatted-string",
              )
              .forEach((el) => nodesToProcess.add(el));
          }
        });
      }
      processElements(Array.from(nodesToProcess));
    }, 100); // Debounce for 100ms
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
