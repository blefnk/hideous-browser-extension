import { removedElements } from "./removeElements";

export function restoreRemovedContent() {
  if (!removedElements || removedElements.length === 0) {
    console.log("No elements to restore.");
    return;
  }

  removedElements.forEach((item) => {
    const { element, parent, nextSibling, removedWords } = item;
    parent.insertBefore(element, nextSibling);
    (element as HTMLElement).style.border =
      `2px solid ${getBorderColorForTag(element.tagName.toLowerCase())}`;
    underlineWords(element, removedWords);
  });

  removedElements.length = 0; // Clear the removed elements array
}

function getBorderColorForTag(tagName: string): string {
  const colorMap: { [key: string]: string } = {
    p: "blue",
    a: "green",
    div: "red",
    span: "purple",
    h1: "orange",
    h2: "orange",
    h3: "orange",
    h4: "orange",
    h5: "orange",
    h6: "orange",
    "yt-formatted-string": "brown",
  };
  return colorMap[tagName] || "black";
}

function underlineWords(element: Element, words: string[]) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);

  let node: Node | null;

  while ((node = walker.nextNode())) {
    if (node instanceof Text) {
      const parent = node.parentElement;
      if (!parent) continue;

      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      const textContent = node.textContent || "";

      const matches: { start: number; end: number }[] = [];

      words.forEach((word) => {
        const regex = new RegExp(word, "gi");
        let match;
        while ((match = regex.exec(textContent))) {
          matches.push({ start: match.index, end: regex.lastIndex });
        }
      });

      matches.sort((a, b) => a.start - b.start);

      matches.forEach(({ start, end }) => {
        if (start > lastIndex) {
          fragment.appendChild(
            document.createTextNode(textContent.slice(lastIndex, start)),
          );
        }

        const underlineSpan = document.createElement("span");
        underlineSpan.style.textDecoration = "underline";
        underlineSpan.textContent = textContent.slice(start, end);
        fragment.appendChild(underlineSpan);

        lastIndex = end;
      });

      if (lastIndex < textContent.length) {
        fragment.appendChild(
          document.createTextNode(textContent.slice(lastIndex)),
        );
      }

      if (fragment.childNodes.length > 0) {
        parent.replaceChild(fragment, node);
      }
    }
  }
}
