document.addEventListener('scroll', function() {
    const title = document.querySelector('.animated-title');
    const paragraphs = document.querySelectorAll('.text-paragraph');
    const triggerBottom = window.innerHeight / 5 * 4; 
    const titleTop = title.getBoundingClientRect().top;
    if (titleTop < triggerBottom) {
        title.classList.add('visible');
    } else {
        title.classList.remove('visible'); 
    }
    paragraphs.forEach(paragraph => {
        const paragraphTop = paragraph.getBoundingClientRect().top;

        if (paragraphTop < triggerBottom) {
            paragraph.classList.add('visible'); 
        } else {
            paragraph.classList.remove('visible'); 
        }
    });
});