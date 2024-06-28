document.addEventListener('DOMContentLoaded', (event) => {
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel");

    // Lade den gespeicherten Wert aus dem localStorage
    let count = parseInt(localStorage.getItem('deathCounter')) || 0;
    countLabel.textContent = count;

    // Funktion zum Speichern des Werts im localStorage
    function saveCounter() {
        localStorage.setItem('deathCounter', count);
    }

    increaseBtn.onclick = function() {
        count++;
        countLabel.textContent = count;
        saveCounter();
    };

    decreaseBtn.onclick = function() {
        count--;
        countLabel.textContent = count;
        saveCounter();
    };

    resetBtn.onclick = function() {
        count = 0;
        countLabel.textContent = count;
        saveCounter();
    };
});
