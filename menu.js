const dishImages = document.querySelectorAll('.dish-img');

dishImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        let scale = 1;
        function grow() {
            if (scale < 1.2) { // збільшення до 120%
                scale += 0.02;
                img.style.transform = `scale(${scale})`;
                requestAnimationFrame(grow);
            }
        }
        grow();
    });

    img.addEventListener('mouseleave', () => {
        let computed = window.getComputedStyle(img).transform;
        let matrix = computed === 'none' ? [1,0,0,1,0,0] : computed.match(/matrix.*\((.+)\)/)[1].split(', ').map(Number);
        let scale = matrix[0];
        function shrink() {
            if (scale > 1) {
                scale -= 0.02;
                img.style.transform = `scale(${scale})`;
                requestAnimationFrame(shrink);
            }
        }
        shrink();
    });
});
