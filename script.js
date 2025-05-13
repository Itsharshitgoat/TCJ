function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animation');
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  });

  // Observe articles and order form
  document.querySelectorAll('#menu article, #order-form').forEach(element => {
    observer.observe(element);
  });
});