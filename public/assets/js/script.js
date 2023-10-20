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

let diceKept = [5,5,5,2,2];
diceKept.sort();// Je mets les chiffres dans l'ordre

console.log(diceKept);

// Fonction pour calculer la somme des dés.
function totalNumber(des) {
    return des.reduce((acc, valeur) => acc + valeur, 0);
}
console.log(totalNumber(diceKept));
// fonction de comparaison/règles
const checkRules = (diceKept, rule) =>{
switch (rule) {
    case 'total1':
        if (diceKept.includes(1)) {
            const ones = diceKept.filter(die => die === 1);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
    case 'total2':
        if (diceKept.includes(2)) {
            const ones = diceKept.filter(die => die === 2);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
    case 'total3':
        if (diceKept.includes(3)) {
            const ones = diceKept.filter(die => die === 3);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
    case 'total4':
        if (diceKept.includes(4)) {
            const ones = diceKept.filter(die => die === 4);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
    case 'total5':
        if (diceKept.includes(5)) {
            const ones = diceKept.filter(die => die === 5);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
    case 'total6':
        if (diceKept.includes(6)) {
            const ones = diceKept.filter(die => die === 6);
            const sum = ones.reduce((total, die) => total + die, 0);
            return sum;
        } else {
            return 0;
        }
        break;
        case 'brelan':
            for (let index = 0; index <= 3; index++) {
                if (diceKept[index] === diceKept[index + 2]) {
                    return diceKept[index] * 3; // multiplier seulement 3
                }
            }
            return 0;
        case 'carre':
            for (let index = 0; index <= 4; index++) {
                if (diceKept[index] === diceKept[index + 3]) {
                    return diceKept[index] * 4; // multiplier seulemnt 4
                }
            }
            return 0;
        case 'full':
            const counts = {};
            for (const die of diceKept) {
                counts[die] = (counts[die] || 0) + 1;
            }
            const hasThreeOfAKind = Object.values(counts).includes(3);
            const hasPair = Object.values(counts).includes(2);
            
            if (hasThreeOfAKind && hasPair) {
                return 25; // Score pour un full
            }
            return 0;
        case 'petiteSuite':
            if (diceKept.join('') === '12345') {       
                return 30;       
            }
            return 0;
        case 'grandeSuite':
            if (diceKept.join('') === '23456') {       
                return 40;       
            }
            return 0;
        case 'yams':
            if (diceKept[0] === diceKept[4]) {
                return 50;
            }
            return 0;
        case 'chance':
            return totalNumber(diceKept);
    default:
        return false; 
        break;
    }
}

const ruleOk =  ['total1','total2','total3','total4','total5','total6', 'brelan', 'carre', 'full', 'petiteSuite', 'grandeSuite', 'yams', 'chance'];

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    console.log(rule, score);
});

//variables objets
const points = {
    total1: false,
    total2: false,
    total3: false,
    total4: false,
    total5: false,
    total6: false,
    bonus: false,
    brelan: false,
    carre: false,
    full: false,
    smallSuit: false,
    grandSuit: false,
    yams: false,
    chance: false,
};

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    if (rule === 'full') {
        points.full = score; // Insérer la valeur du cas 'full' dans l'objet 'points'
    }
});
console.log(points);