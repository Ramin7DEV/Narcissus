/**
 * Narcissus Flower Animation
 * Initializes the blooming animation after page load
 */

window.onload = function () {
  const timeout = setTimeout(function () {
    document.body.classList.remove("not-loaded");
    clearTimeout(timeout);
  }, 1000);
};
