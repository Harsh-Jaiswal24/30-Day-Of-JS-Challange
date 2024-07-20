//ACTIVITY 1 Template Literals

let  a= {
    name:"aditya",
    age: 27
}

console.log(`Mr. ${a.name} is ${a.age} years old`);

let cp={
    name:"hello",
    age: 23,
    class: 78,
    gender: "Male" 
   }

   console.log( `${cp.name} is ${cp.age} in ${cp.class} is ${cp.gender}`)

   //ACTIVITY 2  Destructuring 
   //Destructuring in JavaScript allows you to easily extract values from arrays or Objects and assign them to variables in a concise way. 

   let ab= [23,"dfvfedvfv",67,45,34,6,5]  
   let [first,second]= ab;
   console.log(first)
   console.log(second);

   let bc={
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
   };

   let {name,author}=bc;
   console.log(name);
   console.log(author);

   //ACTIVITY 3 Spread and Rest Operators

   let arr1= [1,2,3,4,5];
   let arr2= [...arr1, 6,7,8,];
   console.log(arr2);  // //Here Spread operator used to concatenate arrays

   function sum(...nums){
    let total=0;
    console.log(total)
    for(let num of nums)
    total=total+num;
console.log(total)
   }

   let nums=[1,2,3,4,5,6,7,8,9,,5,4,5,4,4,6];
sum(5,7,99,6,6,8);  //The rest parameter syntax (...) allows functions to accept an indefinite number of arguments as an array. It collects all remaining arguments into an array.


//ACTIVITY 4 Default Parameters

function defpara( a,b=1){
    console.log( a*b);
}
defpara(23);

//ACTIVITY 5 Enhanced Object Literals

let djdj={
    name: "Harsh",
    age: 20,

    type: "student",

    getname: function(){
        console.log(this.djdj.name)
    },
    getfull: function(){
        console.log(`${this.name} is ${this.age} years old and is ${this.type}`)
    }
}

console.log(djdj.getfull());
//Computed property names in JavaScript allow you to dynamically define object properties using variables or expressions inside square brackets ([]) within an object literal.

let key1= "personname"
let key2= "status"

let details={
    [key1]: "Ajit",
    [key2] : "Married", 
    age: 34
}

console.log(details);