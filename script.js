const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")
let clickCount = 0; // track how many times yes is clicked
let scale = 1; // inital scale of yes button

yesBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount >= 5) {
        // Redirect to a new page after 5 clicks
        window.location.href = "success.html";
    } else {
        scale += 0.5;
        yesBtn.style.transform = `scale(${scale})`;
    }
});

// Elements we want to avoid hitting
const avoidElements = [question, gif, yesBtn];

function isOverlapping(newRect, avoidRect) {
    return !(
        newRect.right < avoidRect.left ||
        newRect.left > avoidRect.right ||
        newRect.bottom < avoidRect.top ||
        newRect.top > avoidRect.bottom
    );
}

noBtn.addEventListener("mouseenter", () => {
    const padding = 20;
    const noBtnRect = noBtn.getBoundingClientRect();
    
    let randomX, randomY;
    let attempts = 0;
    let isSafe = false;

    // Try finding a spot that doesn't overlap (limit to 50 attempts to avoid infinite loops)
    while (!isSafe && attempts < 50) {
        randomX = padding + Math.floor(Math.random() * (window.innerWidth - noBtnRect.width - padding * 2));
        randomY = padding + Math.floor(Math.random() * (window.innerHeight - noBtnRect.height - padding * 2));

        // Create a temporary rectangle for the new potential position
        const potentialRect = {
            left: randomX,
            top: randomY,
            right: randomX + noBtnRect.width,
            bottom: randomY + noBtnRect.height
        };

        // Check if this new spot hits any avoidElements
        isSafe = avoidElements.every(el => {
            const avoidRect = el.getBoundingClientRect();
            return !isOverlapping(potentialRect, avoidRect);
        });

        attempts++;
    }

    noBtn.style.position = "fixed"; // Using fixed to stay relative to viewport
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});