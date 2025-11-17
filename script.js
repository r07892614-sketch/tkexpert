let time = 60;

// redirect link
const redirectURL = "https://t.me/+5EABDhHFu2k5NTQ1";

// Add click event to all join buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".join-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = redirectURL;
        });
    });

    countdown();
});

// Timer function
function countdown() {
    const timer = document.getElementById("timer");
    timer.textContent = time;

    if (time > 0) {
        time--;
        setTimeout(countdown, 1000);
    }
}
