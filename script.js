// Set the target date for New Year
const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Helper function to update numbers with scrolling effect
function updateNumber(element, newValue) {
  const currentValue = parseInt(element.textContent);
  if (currentValue !== newValue) {
    element.classList.add("scrolling");
    setTimeout(() => {
      element.textContent = newValue;
      element.classList.remove("scrolling");
    }, 300); // Animation duration
  }
}

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Get elements for each time unit
  const daysElem = document.querySelector("#days");
  const hoursElem = document.querySelector("#hours");
  const minutesElem = document.querySelector("#minutes");
  const secondsElem = document.querySelector("#seconds");

  // Update the elements with scrolling effect
  updateNumber(daysElem, days);
  updateNumber(hoursElem, hours);
  updateNumber(minutesElem, minutes);
  updateNumber(secondsElem, seconds);

  // Stop the timer when the countdown is over
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = `
      <div class="time-box">🎉<span>Happy New Year!</span>🎉</div>
    `;
  }
}, 1000);

// Add functionality for Preview button
const previewButton = document.querySelector("#preview-button");
previewButton.addEventListener("click", () => {
  const creativeSpace = document.querySelector("#creative-space");

  // Replace the content of creative-space with an image
  creativeSpace.innerHTML = `
    <img src="Images/6748e2f29ea1cafaff9d9456d221bcdc.jpg" alt="Happy New Year!" style="max-width: 100%; height: auto; border-radius: 10px;">
  `;
});
