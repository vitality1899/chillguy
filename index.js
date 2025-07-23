function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// Калькулятор
(function() {
    function setupCalculator() {
        const calcDisplay = document.getElementById('calc-display');
        if (!calcDisplay) return;
        let calcValue = '';
        const buttons = document.querySelectorAll('.calc-buttons button');
        if (!buttons.length) return;
        buttons.forEach(btn => {
            btn.onclick = function() {
                const val = this.textContent;
                if (this.id === 'calc-clear' || val === 'C') {
                    calcValue = '';
                    calcDisplay.value = '';
                } else if (val === '=') {
                    try {
                        calcValue = Function('return ' + calcValue)();
                        calcDisplay.value = calcValue;
                        calcValue = calcDisplay.value;
                    } catch (e) {
                        calcDisplay.value = 'Ошибка';
                        calcValue = '';
                    }
                } else {
                    if (calcDisplay.value === 'Ошибка') calcValue = '';
                    calcValue += val;
                    calcDisplay.value = calcValue;
                }
            };
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupCalculator);
    } else {
        setupCalculator();
    }
})();
