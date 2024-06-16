/**
 * Adds a green border to all webpages matching youtube.com domain.
 *
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#borderify.js
 *
 * @module
 */
if (typeof document === "undefined") {
  console.info(
    "This is a browser extension. Install it via about:debugging in Firefox or chrome://extensions in Chrome.",
  );
} else {
  document.body.style.border = "10px solid green";
}
