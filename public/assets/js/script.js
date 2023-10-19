let diceKept = [5,5,5,1,5];
diceKept.sort();// Je mets les chiffres dans l'ordre

console.log(diceKept);

// Fonction pour calculer la somme des dés.
function totalNumber(des) {
    return des.reduce((acc, valeur) => acc + valeur, 0);
}
console.log(totalNumber(diceKept));


// Fonction combinaisons
const checkRules = (diceKept, rule) => {
    switch (rule) {
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
    }
}

const ruleOk =  ['brelan', 'carre', 'full', 'petiteSuite', 'grandeSuite', 'yams', 'chance'];

ruleOk.forEach(rule => {
    const score = checkRules(diceKept, rule);
    console.log(rule + score);
});
