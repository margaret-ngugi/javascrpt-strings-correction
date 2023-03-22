//Q5.
//Using JavaScript, find the following words from the following strings:
const string1 = "The lady went to the market with her sister";
//"market"

console.log(string1.includes("market"));
const string2 = "My favorite season is spring"
//"season"
console.log(string2.includes("season"));




//Q1.
//Extract the first four characters from the string below;
"beautiful"
let x = "beautiful"
let y = x.substring(0,4);
console.log(y);



//Q2.
//Insert the following string at the tenth index of the below variable:
"eat"
const food = "I did not have appetite today"
console.log(`I did not ${food[10]}eat appetite today`);




//Q3.
//Count how many times the following string appears in the string variable:
//1. "the"
//2."s"

const story= "She sells sea shells at the sea shore"
const story1 = (story.match(/the/g)).length;
console.log(story1);
const story3 = (story.match(/s/g)).length;
console.log(story3);





//Q4.
//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
const v = "CONfidant"
const w = v.toUpperCase();
console.log(w);
//2. LowerCase: "amazing", "beautiFUL"
const m = "beautiFUL"
const n = m.toLowerCase();
console.log(n);
//3. Title case "A busy office"
// const z = "A busy office"
// const p = z.toTitleCase();
// console.log(p)



