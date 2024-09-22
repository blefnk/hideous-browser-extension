import { uploadedWords } from "./utils/storage";

export default defineBackground(async () => {
  console.log("Background script running.");

  // Fetch URL from storage or use default
  const defaultUrl =
    "https://raw.githubusercontent.com/blefnk/hideous-browser-extension/main/words.txt";
  const userProvidedUrl = await browser.storage.local.get("wordsUrl");
  const WORDS_URL = userProvidedUrl.wordsUrl || defaultUrl;

  async function fetchWordsFromUrl() {
    try {
      console.log(`Fetching words from ${WORDS_URL}`);
      const response = await fetch(WORDS_URL);
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      const text = await response.text();

      const words = text
        .split(/\r?\n/)
        .map((word) => word.trim())
        .filter(Boolean);

      await uploadedWords.setValue(words);

      console.log("Words successfully fetched and stored.");
    } catch (error) {
      console.error("Error fetching words from URL:", error);
    }
  }

  // Fetch words on startup and set the alarm for periodic fetch
  await fetchWordsFromUrl();

  browser.alarms.create("fetchWordsAlarm", { periodInMinutes: 1440 }); // 24 hours
  browser.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "fetchWordsAlarm") {
      fetchWordsFromUrl();
    }
  });

  // Notify all tabs after fetching words
  const tabs = await browser.tabs.query({ url: "<all_urls>" });
  for (const tab of tabs) {
    if (tab.id) {
      browser.tabs.sendMessage(tab.id, { type: "WORDS_UPDATED" });
    }
  }
});
