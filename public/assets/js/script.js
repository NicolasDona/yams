let diceValues = [];
let diceKept = [];

document.getElementById('rollButton').addEventListener('click', rollDice);
document.addEventListener('DOMContentLoaded', createDice);
document.addEventListener('DOMContentLoaded', displayDice);
const rollCount = document.querySelector(".rollCount b")
const rollButton = document.getElementById('rollButton');

const total1 = document.getElementById('total1');



//variables objets
const points = {
    'total1': false,
    'total2': false,
    'total3': false,
    'total4': false,
    'total5': false,
    'total6': false,
    'bonus': false,
    'brelan': false,
    'carre': false,
    'full': false,
    'smallSuit': false,
    'grandSuit': false,
    'yams': false,
    'chance': false,
};
console.log(points)


let total = 0;
let calculTotalScore = () => {
    
    for (let key in points) {
        total += points[key];
    };
    totalScore.innerText = total;
};
console.log(calculTotalScore())





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
        dieElement.className = 'img-fluid col-2 col-lg-4 mb-3';
        
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
let rollRemain = 3;

function rollDice() {
    if (rollRemain > 0) {
        diceValues.forEach((die) => {
            if (!die.selected) {
                die.value = Math.floor(Math.random() * 6) + 1;
            }
        });

        rollRemain--;
        rollCount.innerText = `${rollRemain}`;

        displayDice();

        if (rollRemain === 0) {
            rollButton.disabled = true;
        }
    }
}





////////////////// Fonction pour commencer un nouveau jeu
const newGame = () => {
    // Réinitialise les dés à 0.
    diceValues.forEach((die) => {
        die.value = 0;
        die.selected = false;
    });
    // Efface le tableau des dés conservés.
    diceKept.length = 0;
    displayDice();   

    // Tableau des score à zero
    total1.disabled = false;
    total1.textContent = '';
    total1.classList.add("select");
    total2.disabled = false;
    total2.textContent = '';
    total2.classList.add("select");
    total3.disabled = false;
    total3.textContent = '';
    total3.classList.add("select");
    total4.disabled = false;
    total4.textContent = '';
    total4.classList.add("select");
    total5.disabled = false;
    total5.textContent = '';
    total5.classList.add("select");
    total6.disabled = false;
    total6.textContent = '';
    total6.classList.add("select");
    brelan.disabled = false;
    brelan.textContent = '';
    brelan.classList.add("select");
    carre.disabled = false;
    carre.textContent = '';
    carre.classList.add("select");
    full.disabled = false;
    full.textContent = '';
    full.classList.add("select");
    petiteSuite.disabled = false;
    petiteSuite.textContent = '';
    petiteSuite.classList.add("select");
    grandeSuite.disabled = false;
    grandeSuite.textContent = '';
    grandeSuite.classList.add("select");
    yams.disabled = false;
    yams.textContent = '';
    yams.classList.add("select");
    chance.disabled = false;
    chance.textContent = '';
    chance.classList.add("select");
}

window.addEventListener("load", () => {
    newGame();
});

const selectTab = () => {
    // Réinitialise les dés à 0.
    diceValues.forEach((die) => {
        die.value = 0;
        die.selected = false;
        rollButton.disabled = false;
        rollRemain = 3;
        rollCount.innerText = `${rollRemain}`;
        
        
    }); 
    diceKept = []

    

        

    // Efface le tableau des dés conservés.
    displayDice();

    // Tableau des score à zero

}


const newGameBtn = document.getElementById("newGameBtn");
newGameBtn.addEventListener('click', newGame);







diceKept.sort();// Je mets les chiffres dans l'ordre





// console.log(diceKept);

// Fonction pour calculer la somme des dés.
function totalNumber(des) {
    return des.reduce((acc, valeur) => acc + valeur, 0);
}


const updateTotal = (rule, value) => {
    const totalElement = document.getElementById(rule);
    totalElement.addEventListener('click', function () {
    const total = diceKept.reduce((acc, die) => (die === value ? acc + value : acc), 0);
    totalElement.textContent = `${total}`;
    totalElement.disabled = true;
    totalElement.classList.remove("select");
    points[rule] = total;
    selectTab();
    calculTotalScore()

    });

};

const checkRules = (diceKept, rule) => {
    switch (rule) {
        case 'total1':  sum = diceKept.reduce((total, value) => (value === 1 ? total + 1 : total), 0);
        case 'total2':  sum = diceKept.reduce((total, value) => (value === 2 ? total + 2 : total), 0);
        case 'total3':  sum = diceKept.reduce((total, value) => (value === 3 ? total + 3 : total), 0);
        case 'total4':  sum = diceKept.reduce((total, value) => (value === 4 ? total + 4 : total), 0);
        case 'total5':  sum = diceKept.reduce((total, value) => (value === 5 ? total + 5 : total), 0);
        case 'total6':  sum = diceKept.reduce((total, value) => (value === 6 ? total + 6 : total), 0);
const value = Number(rule.slice(-1)); // Extract the number from the rule name
        updateTotal(rule, value);
        break;
        case 'brelan':
            for (let index = 0; index < diceKept.length - 2; index++) {
                if (diceKept[index] === diceKept[index + 1] && diceKept[index] === diceKept[index + 2]) {
                    total = diceKept[index] * 3;
                } 
            
            }
        break;
        case 'carre':
            for (let index = 0; index < diceKept.length - 3; index++) {
                if (diceKept[index] === diceKept[index + 1] && diceKept[index] === diceKept[index + 2] && diceKept[index] === diceKept[index + 3]) {
                total = diceKept[index] * 4;
                }
                
            } 
        break;
        case 'full':
            const counts = Array(7).fill(0);  // De 0 à 6  pas d'index 0)
            for (const die of diceKept) {
                counts[die]++;
            }
            const threeNumber = counts.includes(3);
            const twoNumber = counts.includes(2);
            if (threeNumber && twoNumber) {
                total = 25;
            }        break;
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

        default:
        console.log("Opération non reconnue");
    }
    return points[rule];
};

// console.log(totalNumber(diceKept));
// // fonction de comparaison/règles
// const checkRules = (diceKept, rule) =>{
//     let total = 0
//     switch (rule) {
//         case 'total1':
//                 total1.addEventListener('click', function () {
//                     const sum = diceKept.reduce((total, value) => (value === 1 ? total + 1 : total), 0);
//                     total1.textContent = `${sum}`;
//                     total1.disabled = true;
//                     total1.classList.remove("select");
//                     points.total1 = sum;
//                     selectTab()
//                 });
                

//             //condition ternaire
//             // diceKept.includes(1) ? total = ones.reduce((total, die) => total + die, 0) :  total = 0;
//             break;
//         case 'total2':
//             const total2 = document.getElementById('total2');
//             total2.addEventListener('click', function () {
//                 const sum = diceKept.reduce((total, value) => (value === 2 ? total + 2 : total), 0);
//                 total2.textContent = `${sum}`;
//                 total2.disabled = true;
//                 total2.classList.remove("select");
//                 points.total2 = sum;
//                 selectTab()
//             });
//             break;
//         case 'total3':
//             const total3 = document.getElementById('total3');
//             total3.addEventListener('click', function () {
//                 const sum = diceKept.reduce((total, value) => (value === 3 ? total + 3 : total), 0);
//                 total3.textContent = `${sum}`;
//                 total3.disabled = true;
//                 total3.classList.remove("select");
//                 points.total3 = sum;
//                 selectTab()
//             });
//             break;
//         case 'total4':
//             const total4 = document.getElementById('total4');
//             total4.addEventListener('click', function () {
//                 const sum = diceKept.reduce((total, value) => (value === 4 ? total + 4 : total), 0);
//                 total4.textContent = `${sum}`;
//                 total4.disabled = true;
//                 total4.classList.remove("select");
//                 points.total4 = sum;
//                 selectTab()
//             });
//             break;
//         case 'total5':
//             const total5 = document.getElementById('total5');
//             total5.addEventListener('click', function () {
//                 const sum = diceKept.reduce((total, value) => (value === 5 ? total + 5 : total), 0);
//                 total5.textContent = `${sum}`;
//                 total5.disabled = true;
//                 total5.classList.remove("select");
//                 points.total5 = sum;
//                 selectTab()
//             });
//             break;
//         case 'total6':
//             const total6 = document.getElementById('total6');
//             total6.addEventListener('click', function () {
//                 const sum = diceKept.reduce((total, value) => (value === 6 ? total + 6 : total), 0);
//                 total6.textContent = `${sum}`;
//                 total6.disabled = true;
//                 total6.classList.remove("select");
//                 points.total6 = sum;
//                 selectTab()
//             });
//             break;
            
//             case 'brelan':
//             const brelan = document.getElementById('brelan');
//             brelan.addEventListener('click', function () {
//                 for (let index = 0; index < diceKept.length - 2; index++) {
//                     if (diceKept[index] === diceKept[index + 1] && diceKept[index] === diceKept[index + 2]) {
//                         total = diceKept[index] * 3;
//                     } 
                
//                 }
//                 brelan.textContent = `${total}`;
//                 brelan.classList.add("active");
//                 brelan.classList.remove("select"); 
//                 brelan.disabled = true;
//                 points.brelan = total;
//                 selectTab()            
//             });
//             break;

//             case 'carre':
//             const carre = document.getElementById('carre');
//             carre.addEventListener('click', function () {
//                     for (let index = 0; index < diceKept.length - 3; index++) {
//                         if (diceKept[index] === diceKept[index + 1] && diceKept[index] === diceKept[index + 2] && diceKept[index] === diceKept[index + 3]) {
//                         total = diceKept[index] * 4;
//                         }
                        
//                     }     
//                         carre.textContent = `${total}`;
//                         carre.classList.add("active");
//                         carre.classList.remove("select");
//                         carre.disabled = true 
//                         points.carre = total;
//                         selectTab()          
//     });

//     break;

//             case 'full':

//                 const full = document.getElementById('full');
//                 full.addEventListener('click', function () {

//                 const counts = Array(7).fill(0);  // De 0 à 6  pas d'index 0)
//                 for (const die of diceKept) {
//                     counts[die]++;
//                 }
//                 const threeNumber = counts.includes(3);
//                 const twoNumber = counts.includes(2);
//                 if (threeNumber && twoNumber) {
//                     total = 25;
//                 }
//                 full.textContent = `${total}`;
//                 full.disabled = true;
//                 full.classList.remove("select");
//                 points.full = total;
//                 selectTab()
//             });
//             break;

//             case 'petiteSuite':
//                 const petiteSuite = document.getElementById('petiteSuite');      
//                 petiteSuite.addEventListener('click', function () {
//                     if (diceKept.join('') === '12345') {       
//                         total= 30;       
//                     } else {
//                         total = 0
//                     }
//                     petiteSuite.textContent = `${total}`;
//                     petiteSuite.disabled = true;
//                     petiteSuite.classList.remove("select");
//                     points.smallSuit = total;
//                     selectTab()
//                 });
    
//                 break;
//             case 'grandeSuite':
//                 const grandeSuite = document.getElementById('grandeSuite');      
//                 grandeSuite.addEventListener('click', function () {
//                     if (diceKept.join('') === '23456') {       
//                         total= 40;       
//                     } else {
//                         total = 0
//                     }
//                     grandeSuite.textContent = `${total}`;
//                     grandeSuite.disabled = true;
//                     grandeSuite.classList.remove("select");
//                     points.grandSuit = total;
//                     selectTab()
//                 });
//                 break;
    
//             case 'yams':
//                 const yams = document.getElementById('yams');      
//                 yams.addEventListener('click', function () {
    
//                 if (diceKept[0] === diceKept[4]) {
//                     total = 50;
//                 } else {
//                     total = 0
//                 }
//                 yams.textContent = `${total}`;
//                 yams.disabled = true;
//                 yams.classList.remove("select");
//                 points.yams = total;
//                 selectTab()
//             });
//                 break;
    
//             case 'chance':
//                 const chance = document.getElementById('chance');      
//                 chance.addEventListener('click', function () {
//                 total= totalNumber(diceKept);
//                 chance.textContent = `${total}`;
//                 chance.disabled = true;
//                 chance.classList.remove("select");
//                 points.chance = total;
//                 selectTab()
//             });
//                 break;
//         default:
//             console.log("opération non reconnue");
//             break;
//         }
//     return total
// }

const ruleOk =  ['total1','total2','total3','total4','total5','total6', 'brelan', 'carre', 'full', 'petiteSuite', 'grandeSuite', 'yams', 'chance'];

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    // console.log(rule, score);
});



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
