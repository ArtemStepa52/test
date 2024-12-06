window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    const scrollTop = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    scrollIndicator.style.width = `${scrollPercent}%`;

    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < window.innerHeight && boxTop > 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});