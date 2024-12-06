window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    const scrollTop = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    scrollIndicator.style.width = `${scrollPercent}%`;

    const headings = document.querySelectorAll('h1');
    const paragraphs = document.querySelectorAll('p');

    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });

    paragraphs.forEach(paragraph => {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible');
        }
    });
});