// Partie Medhi

// Partie Cédric

// Parie Nicolas

let result = [1, 1, 1, 1, 1];
console.log(result);

function totalNumber(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}
console.log(totalNumber(result));
