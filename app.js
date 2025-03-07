document.addEventListener("DOMContentLoaded", () => {
    // scroll animation
    const AnimationElements = document.querySelectorAll(".defaultState");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("defaultAnimation");
            }
        });
    }, { threshold: 0.2 });

    AnimationElements.forEach(element => {
        observer.observe(element);
    });

    // custom mouse cursor

    const cursorIndicator = document.createElement('div');
    cursorIndicator.classList.add('cursorIndicator');

    const mainCursor = document.createElement('div');
    mainCursor.classList.add('mainCursor');

    document.body.append(cursorIndicator);
    document.body.append(mainCursor);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        mainCursor.style.top = `${e.clientY}px`;
        mainCursor.style.left = `${e.clientX}px`;
    };

    function cursorIndicatorLoop() {
        currentX += (mouseX - currentX) * 0.3;
        currentY += (mouseY - currentY) * 0.3;
        
        cursorIndicator.style.left = `${currentX}px`;
        cursorIndicator.style.top = `${currentY}px`;

        requestAnimationFrame(cursorIndicatorLoop);
    }

    cursorIndicatorLoop()

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            cursorIndicator.style.width = '50px';
            cursorIndicator.style.height = '50px';
            cursorIndicator.style.backgroundColor = 'rgb(255, 214, 156)';
        });

        img.addEventListener('mouseleave', () => {
            cursorIndicator.style.width = '25px';
            cursorIndicator.style.height = '25px';
            cursorIndicator.style.backgroundColor = 'white';
        });
    });
});
