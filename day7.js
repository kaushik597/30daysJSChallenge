//object creation
const book={
    "title":"Namaste book",
    "author":"Namaste author",
    "year":2024
}
console.log(book);

console.log(book.title, book.author);

book.printTitleAndAuthor=function(){
    return `${this.title} is written by ${this.author}`
}

console.log(book);
console.log(book.printTitleAndAuthor());

book.updateYear=function(newYear){
    this.year=newYear
}

console.log(book.updateYear(20));
console.log(book);



//nested objects
const library={
    name:"Panchayat library",
    books:[{
        "title":"Namaste book",
        "author":"Namaste author",
        "year":2024
    },
    {
        "title":"Namaste book1",
        "author":"Namaste author1",
        "year":2024
    }]
}
console.log(library["name"]);
for (let index = 0; index < library.books.length; index++) {
console.log(library.books[index].title);    
}

book.printTitleAndYear = function(){
    return `${this.title} is published in ${this.year}`
}

console.log(book.printTitleAndYear());


//object iteration
for(const prop in book){
    console.log(prop,book[prop]);
} 

console.log(Object.keys(book));
console.log(Object.values(book));