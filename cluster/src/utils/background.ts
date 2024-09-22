/* eslint-disable @typescript-eslint/no-unsafe-call */
if (typeof browser === "undefined") {
  // Chrome does not support the browser namespace
  // @ts-expect-error TODO: fix
  globalThis.browser = chrome;
}
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "https://www.youtube.com/" });
  // console.info("Hideous extension installed 🎉");
});
