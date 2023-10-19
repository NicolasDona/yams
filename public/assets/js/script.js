// Partie Medhi

// Partie Cédric

// Partie Nicolas

let diceKept = [1, 1, 1, 2, 2];
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
            return diceKept.reduce((total, die) => (die === 1 ? total + 1 : total), 0);
        } else {
            return 0;
        }   
        break;
    case 'total2':
        if (diceKept.includes(2)) {
            return diceKept.reduce((total, die) => (die === 2 ? total + 1 : total), 0);
        } else {
            return 0;
        }   
        break;
    case 'total3':
        if (diceKept.includes(3)) {
            return diceKept.reduce((total, die) => (die === 3 ? total + 1 : total), 0);
        } else {
            return 0;
        } 
        break;
    case 'total4':
        if (diceKept.includes(4)) {
            return diceKept.reduce((total, die) => (die === 4 ? total + 1 : total), 0);
        } else {
            return 0;
        } 
        break;
    case 'total5':
        if (diceKept.includes(5)) {
            return diceKept.reduce((total, die) => (die === 5 ? total + 1 : total), 0);
        } else {
            return 0;
        } 
        break;
    case 'total6':
        if (diceKept.includes(6)) {
            return diceKept.reduce((total, die) => (die === 6 ? total + 1 : total), 0);
        } else {
            return 0;
        } 
        break;
    default:

        break;
    }
}

const ruleOk = ['total2'];

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    console.log(rule, score);
});