// Example 1
const phrase ="Hi Karthikeyan"
const phraseLength= phrase.split(" ");
console.log(phraseLength)

const lastWordLenght = phraseLength[phraseLength.length - 1].length;
console.log("The lenght of the last word is:"+lastWordLenght+" "+typeof(lastWordLenght));

// Example 2
const nextPhrase= "   fly me   to   the moon  " 
const trimmedPhrase=nextPhrase.trim()
const nextPhraseLength= trimmedPhrase.split(" ");
console.log(nextPhraseLength)

const nextPhaseLastWordLenght = nextPhraseLength[nextPhraseLength.length - 1].length;
console.log("The lenght of the last word is:"+nextPhaseLastWordLenght+" "+typeof(nextPhaseLastWordLenght));
//Example 3

let s1 = "Listen"
let s2 = "Silent"

let s3 = s1.toLowerCase().split("").sort().join("");
let s4 = s2.toLowerCase().split("").sort().join("");
console.log(s3);

if (s3===s4){
    console.log("The given strings are Anagram")
} else {
    console.log("The given strings are Non-Anagram")
}