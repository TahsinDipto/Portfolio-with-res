document.addEventListener("DOMContentLoaded", () => {
    let isMoving = false;
    let stopTimeout;
    const trails = [];

    function createTrail(x, y, angle) {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        document.body.appendChild(trail);
        
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.transform = `rotate(${angle}deg)`;
        trails.push(trail);
        
        setTimeout(() => {
            trail.style.transform += " scale(2)";
            trail.style.opacity = "0";
            setTimeout(() => {
                trail.remove();
                trails.shift();
            }, 300);
        }, 50);
    }

    function updateTrail(x, y) {
        if (!isMoving) return;
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * 360;
            setTimeout(() => createTrail(x, y, angle), i * 20);
        }
    }

    document.addEventListener("mousemove", (e) => {
        isMoving = true;
        updateTrail(e.clientX, e.clientY);
        
        clearTimeout(stopTimeout);
        stopTimeout = setTimeout(() => {
            isMoving = false;
            trails.forEach(trail => trail.style.opacity = "0");
        }, 100);
    });
});