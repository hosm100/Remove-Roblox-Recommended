const divSelectorsToRemove = [
  'div.home-interleave-divider',
  'div[data-testid="home-page-game-grid"]',
  'div.wide-game-tile-carousel',
];

function removeDivs() {
  divSelectorsToRemove.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
    });
  });

  const spanElements = document.querySelectorAll('span');
  spanElements.forEach(span => {
    if (span.textContent.includes("Today's Picks") || span.textContent.includes("A curated selection of daily highlights")) {
      span.remove();
    }
  });

// Remove sponsored section heading and carousel
const sponsoredDivs = document.querySelectorAll('div.game-sort-header-container');
sponsoredDivs.forEach(div => {
  const heading = div.querySelector('h2');
  if (heading && heading.textContent.includes('Sponsored')) {
    const carousel = div.nextElementSibling; // Get the next element which should be the carousel
    if (carousel && carousel.classList.contains('game-carousel')) {
      carousel.remove();
    }
    div.remove();
  }
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
