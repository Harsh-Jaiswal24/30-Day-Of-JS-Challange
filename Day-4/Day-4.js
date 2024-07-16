//ACTIVITY 1

for(let i=1; i<=10; i++){
    console.log(i);
}

for(let p=1; p<=10;p++){
    console.log(p*5);
}
//ACTIVITY 2

let n=1;
let sum=0;
while(n<100000000){
    sum=sum+n;
    n++;
    
};
console.log(sum);

let t=10;
while(t>=1){
    console.log(t)
    t--;
}

//ACTIVITY 3

let tt=1;
do{
    console.log(tt)
    tt++;
}
while(tt<=5);

let numb=10;
let fact=1;
do{
    fact=fact*numb;
    numb--;
}while(numb>0);
console.log(fact);

//ACTIVITY 4;

for(i=0;i<5;i++){
    let j=0;
    for(j=0;j<=i;j++){
        process.stdout.write("*");   
    }
    console.log();
}

//ACTIVITY 5

let nn=1;
for(nn=1;nn<=5;nn++){
   if(nn==5){
    continue;  

   }
   console.log(nn)
    
   }

   let np=1;
   for(np=0;np<=10;np++){
    if(np==7){
        break;  
       
    }
    console.log(np);
   }
