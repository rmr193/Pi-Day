const piDigits = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
let digitCount = 3;

document.getElementById('words').addEventListener('click', function(event) {
    this.textContent = piDigits.slice(0, digitCount);
    setTimeout(() => {
        this.style.display = 'none';
    }, 2000);
});

document.body.addEventListener('click', function(event) {
    if (digitCount < 100) digitCount++;
    let piText = document.createElement('div');
    piText.textContent = piDigits.slice(0, digitCount);
    piText.classList.add('pi-text');
    piText.style.left = `${event.clientX}px`;
    piText.style.top = `${event.clientY}px`;
    document.body.appendChild(piText);
    setTimeout(() => piText.remove(), 2000);
});
