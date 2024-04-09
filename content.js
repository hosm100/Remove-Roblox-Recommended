const divSelectorsToRemove = [
  'div.home-interleave-divider',
  'div[data-testid="home-page-game-grid"]'
];

function removeDivs() {
  divSelectorsToRemove.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
    });
  });
}

// Mutation observer to handle dynamically added content
const observer = new MutationObserver(removeDivs);
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Execute once immediately
removeDivs();
