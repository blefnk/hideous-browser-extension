// src/content/youtube.ts
(() => {
  /**
   * Checks for ads and manipulates the video or uses skip button if present
   */
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

    // Skip button seems to be accessible at initialization, if its ever present
    const skipButton = document.querySelector(
      ".ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button",
    );

    if (skipButton instanceof HTMLElement) {
      skipButton.click();
      console.log("✅ Used Button to Skip Ad");
    }
  }

  /**
   * Mutes the video and increases playback speed
   * @param {HTMLVideoElement} videoElement - The video element to manipulate
   * @param {number} playbackRate - The rate at which to play the video
   */
  function muteAndSpeedUp(
    videoElement: HTMLVideoElement,
    playbackRate: number,
  ) {
    videoElement.muted = true;
    videoElement.playbackRate = playbackRate;
  }

  /**
   * Initializes ad handling by observing DOM mutations
   */
  function initializeAdHandling() {
    handleVideoAd();

    const observer = new MutationObserver(handleVideoAd);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  initializeAdHandling();
})();
