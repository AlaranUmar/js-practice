const randNum = Math.random(0.9) // creates random number between 0 to 0.999999
console.log(randNum)
console.log(Math.abs(-10))


let num = '10'
let numInt = num

console.log(numInt) // 10

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.



let statement =  " The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'"
let end = " by John Holmes teaches us to help one another."
let whole_statement = (statement.concat(end))
console.log(whole_statement);

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let sentence = "\'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\'"
console.log(sentence);

// 3. check if parsefloat
const value = parseFloat('9.8');
if (value !== 10){
    // value = Math.round(value + 0.5);
}
console.log(value);

// 4.check if typeof '10'
console.log(typeof '10');

// 5.
let python = "python"
let jargon = "jargon"
console.log(python.include("on"));
console.log(jargon.include("on"));

// 6.
const sent = "I hope this course is not full of jargon";
const searchTerm = "jargon";
if (sentence.include(searchTerm)){
    console.log(("The world 'jargon' is not found in the sentence "));
}

// 7.
console.log(("import random"));
random_number = random.randint(0, 100)
print(random_number);

// 8.console.log(("import random"));
random_number = random.randint(50, 100)
print(random_number);

// 9.
console.log(("import random"));
random_number = random.randint(0, 225);
print("Random number btw 0 and 225:", random_number );

// 10.
console.log(("import random"));
s = "javascript"
index = random.randint(o, len(s) - 1)
char = s[index]
print(char)

// 11.
const numRows = 5;

for (let i = 1; i <= numRows; i++){
    let row = "";
// inner loop for columns within the row
    for (let j = 1; j <= numRows + 1; j++){
        const value = i === 1 ? j : Math.pow(i, j - 1);
// Append the value to the row string
        row += value+ '';
    }
    
    console.log(row);
}


