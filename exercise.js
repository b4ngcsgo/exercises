function maxNumber(num1, num2){
    return (num1 > num2) ? num1 : num2;
}

console.log(maxNumber(5, 5));

function isLandscape(width, height) {
    return(width > height);
}
console.log(isLandscape(150, 100))


// divisible by 3 => Fizz
// divisable by 5 => Buzz
// Divisable by 3 and 5 (like 15) => FizzBuzz
// If its not divisable by 3 or 5 we get => input
// if input not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if (input % 3 === 0)
    return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    if ((input % 5 === 0) && (input % 3 === 0))
        return 'FizzBuzz';
    if ((input % 5 !== 0) || (input % 3 !== 0))
        return input; 
}

console.log(fizzBuzz(5));

//objektet ska säga alla 
//objekt som är strings

const object = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}


function showProperties(obj) {
    for (let key in obj){
        let objectKey = obj[key];
        if (typeof (objectKey) === 'string') 
            console.log(key, objectKey);
    }
}
showProperties(object);

// let objectKey = obj[key];
// if (typeof(objectKey) === 'string');
//    return(objectKey) 

(showStars(5));

function showStars(rows) {
    let stars = '';
    for(let i = 1; i <= rows; i++){
        stars += '*';
    console.log(stars);
    }
}
