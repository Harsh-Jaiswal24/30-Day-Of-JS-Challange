//ACTIVITY 1

let a=[1,2,3,4,5];
console.log(a);
console.log(typeof[a]);
console.log(a[0]);
console.log(a[a.length-1]);  //FOR PRINTING LAST OF ELEMENT IN ARRAY USE "arraylength" -1

//ACTIVITY 2

a.push(20);
console.log(a);  //PUSH METHOD INSERT THE ELEMENT AT LAST  
a.pop();
console.log(a);

a.unshift(100);  //Unshift use for add a number at first position in Array
console.log(a);  
a.shift();
console.log(a); //Shift use for remore a element from array from first place

//ACTIVITY 3

let b=a.map(sqr)    //Map is for Create a new array from a existed array by changing in value of previous array
function sqr(num){
    return num*num;
}
console.log(b);


let c= a.filter(ev)  // Filter is use for creating a new array from an existing array  which consists only some satisfied elements.
console.log(c);
function ev(numb){
    return numb%2==0;
}

let sum= a.reduce((num0, num1)=>{
    return num0+num1;
})
console.log(sum);
//the reduce method in JavaScript is used to "reduce" an array to a single value. It executes a provided function for each element of the array and accumulates a result

//ACTIVITY 4

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

a.forEach((n)=>{
    console.log(n+2);  
//forEach is used for access all the elements of the array and we can manupulate is also is requied 
});

//ACTIVITY 5

const matrix= [[2,3,4],[5,6,7],[7,3,5]];
console.log(matrix);

console.log(matrix[1][2]);