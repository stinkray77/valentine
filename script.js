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
    const padding = 20; 

    // Calculate max available space
    // Using Math.max(0, ...) ensures we don't get negative values on tiny screens
    const maxX = window.innerWidth - noBtnRect.width - padding;
    const maxY = window.innerHeight - noBtnRect.height - padding;

    // Generate random coordinates between padding and max
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});