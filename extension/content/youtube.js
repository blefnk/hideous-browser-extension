// src/content/youtube.ts
(() => {
  function handleVideoAd() {
    const video = document.querySelector("video");
    const adElement = document.querySelector(".video-ads.ytp-ad-module");
    if (
      video instanceof HTMLVideoElement &&
      adElement &&
      adElement.children.length > 0
    ) {
      muteAndSpeedUp(video, 16);
    }
    const skipButton = document.querySelector(
      ".ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button",
    );
    if (skipButton instanceof HTMLElement) {
      skipButton.click();
      console.log("\u2705 Used Button to Skip Ad");
    }
  }
  function muteAndSpeedUp(videoElement, playbackRate) {
    videoElement.muted = true;
    videoElement.playbackRate = playbackRate;
  }
  function initializeAdHandling() {
    handleVideoAd();
    const observer = new MutationObserver(handleVideoAd);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  initializeAdHandling();
})();
