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

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})

// Falling pig jellycats animation
function createFallingPig() {
    const pig = document.createElement('img');
    pig.src = 'pig.png'; // Local image file
    pig.className = 'falling-pig';
    pig.style.left = Math.random() * 100 + 'vw';
    pig.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3-6 seconds
    pig.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(pig);
    
    // Remove pig after animation completes
    setTimeout(() => {
        pig.remove();
    }, 8000);
}

// Create pigs periodically
setInterval(createFallingPig, 500);
