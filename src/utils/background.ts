/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-expect-error TODO: fix
if (typeof browser === "undefined") {
  // Chrome does not support the browser namespace
  // @ts-expect-error TODO: fix
  globalThis.browser = chrome;
}
// @ts-expect-error TODO: fix
browser.runtime.onInstalled.addListener(() => {
  // @ts-expect-error TODO: fix
  browser.tabs.create({ url: "https://www.youtube.com/" });
  // console.info("Hideous extension installed 🎉");
});
