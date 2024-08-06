//match javascript

const basicRegex= /javascript/g
const str="i love javascript and the reason is javascript feels eASY"

console.log(str.match(basicRegex));

//match all digits in string

const str2='THE 1 cake i love is not just 1 it is 0-19';
const numregex= /\d+/g
console.log(str2.match(numregex));

//match all words that start with capital letter
const str3="The Main REASON of Learning Js is To becomed Good Dev"
const chRegex=/[A-Z][a-zA-Z]+/g
console.log(str3.match(chRegex));

//match all sequence of one or more digits in a string
const str4="He is number 1 student in top 100 students. Where student around 1234567 appeared to the exam"
const numSeqregex=/\d+/g
console.log(str4.match(numSeqregex));

//match us phone number
const phneNo="(205) 396-0000"
const phnRegex= /\(?((?<area>)\d{3})\)?[ -]((?<office>)\d{3}-((?<line>)\d{4}))/g
const no=phneNo.match(phnRegex)
// const[$area,$office,$line]=no
console.log(no);


