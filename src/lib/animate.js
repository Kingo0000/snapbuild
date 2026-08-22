export function fadeUp(node, options = {}) {
  const { delay = 0 } = options;
  node.classList.add('fade-up');
  if (delay) {
    node.style.transitionDelay = `${delay}ms`;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  observer.observe(node);
  
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
