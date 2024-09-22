import { defaultWords } from "@/defaultWords";
import { uploadedWords, extensionMode } from "./utils/storage";
import { isVerifiedWebsite } from "./modules/verifiedWebsites";
import { removeElements } from "./modules/removeElements";
import { restoreRemovedContent } from "./modules/restoreContent";

export default defineContentScript({
  matches: ["<all_urls>"],
  async main() {
    console.log("Content script running.");

    const mode = (await extensionMode.getValue()) || "verified";
    const currentHostname = window.location.hostname;

    if (mode === "verified" && !isVerifiedWebsite(currentHostname)) {
      console.log("Extension is disabled on this website in 'verified' mode.");
      return;
    }

    if (currentHostname.endsWith(".ru") || currentHostname.endsWith(".рф")) {
      if (
        confirm(
          "Цей ресурс було створено гнояками з боліт. Його було видалено. Do you want to proceed to https://war.ukraine.ua domain?",
        )
      ) {
        window.location.href = "https://war.ukraine.ua";
      }
      return;
    }

    async function updateAndRemoveElements() {
      const uploadedWordsList = (await uploadedWords.getValue()) || [];
      const specificWords = defaultWords.concat(uploadedWordsList);

      // Log words to ensure they are combined correctly
      console.log("Default words:", defaultWords);
      console.log("Uploaded words:", uploadedWordsList);
      console.log("All words to use:", specificWords);

      const elements = document.querySelectorAll(
        "p, a, div, span, h1, h2, h3, h4, h5, h6, yt-formatted-string",
      );
      removeElements(elements, specificWords, currentHostname);
    }

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      await updateAndRemoveElements();
    } else {
      window.addEventListener("DOMContentLoaded", updateAndRemoveElements);
    }

    const unwatch = uploadedWords.watch((newValue) => {
      if (newValue && newValue.length > 0) {
        const updatedWords = defaultWords.concat(newValue);
        const elements = document.querySelectorAll(
          "p, a, div, span, h1, h2, h3, h4, h5, h6, yt-formatted-string",
        );
        removeElements(elements, updatedWords, currentHostname);
      }
    });

    window.addEventListener("unload", () => {
      unwatch();
    });

    browser.runtime.onMessage.addListener((message) => {
      if (message.action === "restoreContent") {
        restoreRemovedContent();
      }
    });
  },
});
