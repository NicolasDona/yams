<<<<<<< HEAD
// // Partie Medhi

const diceValues = [];
const diceKept = [];

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
    console.log('diceKept:', diceKept);
}

function toggleSelectDie(index) {
    const die = diceValues[index];
    
    if (die.selected) {
        die.selected = false;
        const selectedIndex = diceKept.indexOf(die.value);
        if (selectedIndex !== -1) {
            diceKept.splice(selectedIndex, 1);
        }
    } else {
        const selectedCount = diceValues.filter((d) => d.selected).length;
        if (selectedCount < 5) {
            die.selected = true;
            diceKept.push(die.value);
        }
    }

    displayDice();
}


// Partie Cédric

// Parie Nicolas


diceKept.sort();// Je mets les chiffres dans l'ordre

console.log(diceKept);

// Fonction pour calculer la somme des dés.
function totalNumber(des) {
    return des.reduce((acc, valeur) => acc + valeur, 0);
}
console.log(totalNumber(diceKept));
// fonction de comparaison/règles
const checkRules = (diceKept, rule) =>{
    let total = 0
switch (rule) {
    case 'total1':
        const ones = diceKept.filter(die => die === 1);
        if (diceKept.includes(1)) {
            total = ones.reduce((total, die) => total + die, 0);
        } else {
            total = 0;
        }
        //condition ternaire
        // diceKept.includes(1) ? total = ones.reduce((total, die) => total + die, 0) :  total = 0;
        break;
    case 'total2':
        if (diceKept.includes(2)) {
            const ones = diceKept.filter(die => die === 2);
            total = ones.reduce((total, die) => total + die, 0);
            
        } else {
            total = 0;
        }
        break;
    case 'total3':
        if (diceKept.includes(3)) {
            const ones = diceKept.filter(die => die === 3);
            total = ones.reduce((total, die) => total + die, 0);
        } else {
            total = 0;
        }
        break;
    case 'total4':
        if (diceKept.includes(4)) {
            const ones = diceKept.filter(die => die === 4);
            total = ones.reduce((total, die) => total + die, 0);

        } else {
            total = 0;
        }
        break;
    case 'total5':
        if (diceKept.includes(5)) {
            const ones = diceKept.filter(die => die === 5);
            total = ones.reduce((total, die) => total + die, 0);
        } else {
            total = 0;
        }
        break;
    case 'total6':
        if (diceKept.includes(6)) {
            const ones = diceKept.filter(die => die === 6);
            total = ones.reduce((total, die) => total + die, 0);
        } else {
            total = 0
        }
        break;
        case 'brelan':
            for (let index = 0; index <= 3; index++) {
                if (diceKept[index] === diceKept[index + 2]) {
                    total= diceKept[index] * 3; // multiplier seulement 3
                }
                else{
                    total = 0
                }
            }
            break;
        case 'carre':
            for (let index = 0; index <= 4; index++) {
                if (diceKept[index] === diceKept[index + 3]) {
                    total = diceKept[index] * 4; // multiplier seulemnt 4
                } else {
                    total = 0
                }
            }
        break;
        case 'full':
            let threeNumbers = [];
            let twoNumbers = [];
            console.log(threeNumbers, twoNumbers);
            for (let index = 0; index <= 3; index++) {
                if (diceKept[index] === diceKept[index + 2]) {
                    threeNumbers.push(diceKept[index]);
                }
            }
            for (let index = 0; index <= 2; index++) {
                if (diceKept[index] === diceKept[index + 1]) {
                    twoNumbers.push(diceKept[index]);
                }
            }
            if (threeNumbers.length === 3 && twoNumbers.length === 2) {
                total = 25;
            }
            break;
        case 'petiteSuite':
            if (diceKept.join('') === '12345') {       
                total= 30;       
            } else {
                total = 0
            }
            break;
        case 'grandeSuite':
            if (diceKept.join('') === '23456') {       
                total= 40;       
            } else {
                total = 0
            }
            break;
        case 'yams':
            if (diceKept[0] === diceKept[4]) {
                total = 50;
            } else {
                total = 0
            }
            break;
        case 'chance':
            total= totalNumber(diceKept);
            break;
    default:
        console.log("opération non reconnue");
        break;
    }
return total
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
=======
>>>>>>> origin/html_css
