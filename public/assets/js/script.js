// Partie Medhi

// Partie Cédric

// Partie Nicolas

let diceKept = [3, 1, 3, 3, 3];
diceKept.sort();
// Fonction de calcul de la somme
function totalNumber(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

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
    default:

        break;
    }
}

const ruleOk = ['total1','total2','total3','total4','total5','total6'];

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    console.log(rule, score);
});