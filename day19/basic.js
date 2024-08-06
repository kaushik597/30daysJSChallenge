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
const phnRegex= /\(?(\d{3})\)?\s(\d{3})-(\d{4})/
const no=phneNo.match(phnRegex)
// const [area,office,line]= phneNo.match(/\((\d{3})\)\s(\d{3})-(\d{4})/)
const[,area,office,line]=no
console.log("-------",area,"****",office,"^^^^",line);
// console.log(no);

//capture username and domain from email
const email="ThuglakSultan@tusstuss.com"
const mailRegex=/(\w+)@(\w+).com/
const [,user,domain]=email.match(mailRegex)
console.log(user,domain);


//assertions
//Match a word only if it is at the beginning of a string

const asserTstring ="Kaushik is great he will achieve everything he needs in life"
const assertRegex= /^Kaushik/
const result=asserTstring.match(assertRegex)
console.log(result);
console.log(("test").match(assertRegex));

const assertRegex2=/lifes$/

const result1= asserTstring.match(assertRegex2)
console.log(result1);


//password validator
const pwdRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/
const pwd="tT1."
const pwdResult= pwd.match(pwdRegex);
console.log(pwdResult,",,,,");

pwd?console.log("valid password"):console.log("invalid password");

const url="https://www.linkedin.com/in/kaushikjallam/"
const urlRegex= /^(http?s\:\/\/)(www)?.([a-zA-Z0-9\W]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:\/?#\[\]@!$&'()*+,;=%]*)?$/
console.log(url.match(urlRegex));
console.log("ABC".match(urlRegex));







