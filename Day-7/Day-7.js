//ACTIVITY 1 OBJECT CREATION AND ACCESS 

const library={
     book1 :  { BookName : "Time", Authur : "James Watson", Year : 1998},
     book2 :  { BookName : "Travels", Authur : "James Robort", Year : 1978}
    }

console.log(library.book1.BookName)
console.log(library.book1.Authur)


//ACTIVITY 2 OBJECTS METHOD

let hii= Object.entries(library)
console.log(hii[1][1].Authur);  //entries method in JS create a copy of all elements of object into elements of array and return in the form of array.

console.log("///")
let  nt= Object.entries(library)
console.log(nt[0][1].BookName);
console.log(nt[0][1].Authur);
 
let updatedlib= Object.assign({}, library); //Assign is used to copy all the object into new and if update the existed objcet will be updated and original will also be updated
updatedlib.book1.Year=2004;
console.log(updatedlib);
console.log(library)

Object.assign(library,{Year:2000});
console.log(library)

//ACTIVITY 3 Nested Objects

const library2={
    name: 'GYAN 2',
    book:  {
    1: 'hello',2: 'hii',3:'new',
    }
}
console.log(library2);

console.log(library2.name);
console.log(library2.book[1])

//ACTIVITY 4

const library22={
   name: 'hii',
   books: {title:"good", year: 2000, authur: "James "},
   greet : function(){
    console.log(`${this.books.title} is written  by ${this.books.authur}`)  //In JavaScript, the 'this' keyword is a special identifier that refers to the current execution context. Its value is determined by how a function is called, and it allows functions to dynamically access and interact with objects at runtime.
   }
   }
library22.greet();


//ACTIVITY 5 Object Iteration

for(let books in library22.books){
    console.log(`${books} = ${library22.books[books]}`)   //In JavaScript, the for...in loop is used to iterate over the enumerable properties of an object. It allows you to loop through the keys (property names) of an object, including inherited properties from its prototype chain.
}

let bb=Object.keys(library22);  //The Object.keys() method returns an array of a given object's own enumerable property keys.
console.log(bb);

let ccc=Object.values(library22) //The Object.values() method returns an array of a given object's own enumerable property values.
console.log(ccc);
