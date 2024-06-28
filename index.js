document.addEventListener('DOMContentLoaded', (event) => {
    // Initialisierung der Counter
    const counters = [
        { id: 1, labelId: 'countLabel1', initialValue: 0 },
        { id: 2, labelId: 'countLabel2', initialValue: 0 },
        { id: 3, labelId: 'countLabel3', initialValue: 0 },
        { id: 4, labelId: 'countLabel4', initialValue: 0 },
        { id: 5, labelId: 'countLabel5', initialValue: 0 }
    ];

    counters.forEach(counter => {
        let count = parseInt(localStorage.getItem(`deathCounter_${counter.id}`)) || counter.initialValue;
        document.getElementById(counter.labelId).textContent = count;

        // Funktionen zum Erhöhen, Verringern und Zurücksetzen des Zählers
        window[`increaseCounter${counter.id}`] = function() {
            count++;
            document.getElementById(counter.labelId).textContent = count;
            saveCounter(counter.id, count);
        };

        window[`decreaseCounter${counter.id}`] = function() {
            count--;
            document.getElementById(counter.labelId).textContent = count;
            saveCounter(counter.id, count);
        };

        window[`resetCounter${counter.id}`] = function() {
            count = counter.initialValue;
            document.getElementById(counter.labelId).textContent = count;
            saveCounter(counter.id, count);
        };

        // Funktion zum Speichern des Zählers im localStorage
        function saveCounter(id, count) {
            localStorage.setItem(`deathCounter_${id}`, count);
        }
    });
});

// Globale Funktionen zum Erhöhen, Verringern und Zurücksetzen des Zählers
function increaseCounter(id) {
    let count = parseInt(localStorage.getItem(`deathCounter_${id}`)) || 0;
    count++;
    document.getElementById(`countLabel${id}`).textContent = count;
    localStorage.setItem(`deathCounter_${id}`, count);
}

function decreaseCounter(id) {
    let count = parseInt(localStorage.getItem(`deathCounter_${id}`)) || 0;
    count--;
    document.getElementById(`countLabel${id}`).textContent = count;
    localStorage.setItem(`deathCounter_${id}`, count);
}

function resetCounter(id) {
    let count = 0;
    document.getElementById(`countLabel${id}`).textContent = count;
    localStorage.setItem(`deathCounter_${id}`, count);
}
