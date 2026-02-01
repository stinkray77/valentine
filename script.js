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

noBtn.addEventListener("mouseenter", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const padding = 20; // Keep button away from edges
    
    const randomX = padding + Math.floor(Math.random() * (window.innerWidth - noBtnRect.width - padding * 2));
    const randomY = padding + Math.floor(Math.random() * (window.innerHeight - noBtnRect.height - padding * 2));

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})