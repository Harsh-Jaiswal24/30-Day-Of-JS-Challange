//ACTIVITY 1

function oddeven(num){
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("odd");
    }
}

oddeven(889886678); 

function sqr(num){
    return console.log(num*num);
}

sqr(15);

//ACTIVITY 2

function bignum(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greatest`);
    }
    else{
        console.log(`${num2} is greatest`);
    }
}

bignum(13,5)


function concat(str1, str2){
    console.log(str1.concat(str2))
}

concat('helllooo', 'harsh');

//ACTIVITY 3

const sum= ( (n1 , n2 ) =>{ 
  return console.log(n1+n1);
});

sum(25);

const findstr=(strrr , charrr) =>{
    return strrr.includes(charrr); 
     // TON CHECK A CHARACTER EXISTS IN A STRING OR NOT USE "strname.includes("character");
     //WE HAVE TO GIVE A FUNCTION IN CALLING IF ANY INPUT OF IT IS FUNCTION 
} 
let b= findstr( "hello ", "o");
console.log(b);

//ACTIVITY 4
function prdt( a,b=6){
    return console.log(a*b);
}
prdt(87);

function msg(name, age=23 ){
    return console.log(`Mr. ${name}! You are very good man. Nice to meet you Your age is ${age}`);
}msg("harsh");


//ACTIVITY 5

//5 STAR 
const sayhii= (fuct, time)=>{
    for(t=0;t<=time;t++){
        console.log(fuct());
    }
}
function hii(){
    return "hii";
}

sayhii(hii,34);




function f1(a){
    return 10+a;
}
function f2(b){
    return 20+b;
}
const sumofcars = ( f1,f2 ,a)=> {
    return console.log(f2(f1(a)));    //WE HAVE TO GIVE A FUNCTION IN CALLING IF ANY INPUT OF IT IS FUNCTION 
}

sumofcars(f1,f2,15);  