// Partie Medhi

const diceValues = [];
const selectedDice = [];

document.getElementById('rollButton').addEventListener('click', rollDice);
document.addEventListener('DOMContentLoaded', createDice);
document.addEventListener('DOMContentLoaded', displayDice);

function createDice() {
    for (let i = 0; i < 5; i++) {
        diceValues.push({ value: 0, selected: false });
    }
}

function displayDice() {
    const diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = '';

    diceValues.forEach((die, index) => {
        const dieElement = document.createElement('img');
        dieElement.className = 'die';
        
        dieElement.src = `./public/assets/img/${die.value}.png`;
        
        if (die.selected) {
            dieElement.classList.add('selected');
            dieElement.addEventListener('click', () => toggleSelectDie(index));
        } else {
            dieElement.addEventListener('click', () => toggleSelectDie(index));
        }

        diceContainer.appendChild(dieElement);
    });
}

function rollDice() {
    diceValues.forEach((die) => {
        if (!die.selected) {
            die.value = Math.floor(Math.random() * 6) + 1;
        }
    });
    
    displayDice();
    console.log('diceValues:', diceValues);
    console.log('selectedDice:', selectedDice);
}

function toggleSelectDie(index) {
    const die = diceValues[index];
    
    if (die.selected) {
        die.selected = false;
        const selectedIndex = selectedDice.indexOf(die.value);
        if (selectedIndex !== -1) {
            selectedDice.splice(selectedIndex, 1);
        }
    } else {
        const selectedCount = diceValues.filter((d) => d.selected).length;
        if (selectedCount < 5) {
            die.selected = true;
            selectedDice.push(die.value);
        }
    }

    displayDice();
}


// Partie Cédric

// Parie Nicolas
