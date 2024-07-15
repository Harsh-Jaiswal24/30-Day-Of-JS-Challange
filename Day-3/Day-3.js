// ACTIVITY 1

let a=0;
let b=-24;

if (a>0){
    console.log(`${a} is The Positive number`);
}
else if(a==0){
    console.log(`${a} is 0`);
}
else{
    console.log(`${a} is Negative number`);
}

let age=23;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You can-not vote");
}

// ACTIVITY 2

let c=9034;
let d=300;
let f=-2300;

if(c>d && c> f){
    console.log("C is the grestest number");
}
else if(d> f && d> c){
    console.log("d is the greatest number");
}
else{
    console.log("f is the greatest");
}

//ACTIVITY 3

let num;
num=4;

switch(num){
case 1: console.log("Monday"); break;
case 2: console.log("Tuesday"); break;
case 3: console.log("Wednesday"); break;
case 4: console.log("Thursday"); break;
case 5: console.log("Friday"); break;
case 6: console.log("Saturday"); break;
case 7: console.log("Sunday"); break;
default : console.log("Wrong input");
}


let number=70;
switch(true){
    case number>=90 : {
        console.log(`${number} A grade`)
        break;
    }
    case number<=80  && number>70 : {
        console.log(`${number} B grade`)
        break;
    }
    case number<=70 && number >60: {
        console.log(`${number} C grade`)
        break;
    }
    case number<=60 && number >50 : {
        console.log(`${number} D grade`)
        break;
    }
    case number<50 : {
        console.log(`${number} F grade`)
        break;
    }
    default: console.log("invalid marks");

}
/// IN JAVASCRIPT SWITCH CASE CANT DIRECTLY USE FOR COMPARISION OR DIFERENT CONDITIONS USE SWITCH(TRUE) AND THAN DIRECTLY PUT THE COMAPRISION IN "CASE COMAPRE: " TO RUN
//The switch (true) syntax allows us to evaluate each case based on a boolean expression (true in this case), which checks each condition (score >= 90, score >= 80, etc.) sequentially until one matches.


//ACTIVITY 4

let cc=24;
cc %2==0 ? console.log("even") : console.log("odd");

//ACITIVITY 5

let year=2025;

if(year%4==0 || year%400==0 && year%100==0){
    console.log("Leap year");
}
else{
    console.log("not a leap year");
}

