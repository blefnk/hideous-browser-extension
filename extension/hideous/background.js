/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-expect-error TODO: fix
browser.webRequest.onCompleted.addListener(
  // @ts-expect-error TODO: fix
  (details) => {
    // @ts-expect-error TODO: fix
    browser.tabs.executeScript(details.tabId, { file: "main.js" });
  },
  { urls: ["*://*.youtube.com/*"] },
);
