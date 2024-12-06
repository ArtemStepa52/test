function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}
function handleScroll() {
  const elements = document.querySelectorAll('.box');
  elements.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); 
    }
  });
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);