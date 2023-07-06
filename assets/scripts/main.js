/* Elements in view
############################################################################ */

const observeElements = () => {

  const elementsToBeObserved = document.querySelectorAll('main > *');
  elementsToBeObserved.forEach((element) => element.dataset.jsObserve = '');

  const observerOptions = {
    root: null,
    rootMargin: '-200px',
    threshold: 0.2,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.dataset.jsObserve = 'in-view';
      } else {
        target.dataset.jsObserve = '';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observedElements = document.querySelectorAll('[data-js-observe]');
  observedElements.forEach((el) => observer.observe(el));
};

/* ########################################################################## */
/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
});