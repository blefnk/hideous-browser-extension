// src/utils/background.ts
if (typeof browser === "undefined") {
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "https://www.youtube.com/" });
});
