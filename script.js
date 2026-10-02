const clock = document.getElementById("clock");

// Update clock immediately on page load
function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);