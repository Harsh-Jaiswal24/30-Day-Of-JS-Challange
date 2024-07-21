//ACTIVITY 1 

let change= window.document.getElementById("cto");
change.innerText="Hello";

const clrc= document.getElementsByClassName("bgc");


//ACTIVITY 2  Creating new elements and appending
   

    const body= document.querySelector('body');
    let bc = document.createElement('div');               //For creating elememts use document.createElements('___ ');
    bc.textContent='this is new div created';
    bc.style.height='20px';
    bc.style.width='506px';
    bc.style.backgroundColor='blue';
    document.body.appendChild(bc)                       //For appending in body use documet.body.appendChild(___);

   //Creating a li element
    let ulelement= document.getElementById("numberlist");
    let n1= document.createElement('li');
    n1.textContent=5;

    ulelement.appendChild(n1);                              //For appending li element in Ul use   ulelement.appendChild(n1).

    //ACTIVITY 3 Removing Element

    let remo= document.querySelector(".rem");
          ;

    ulelement.removeChild(ulelement.lastElementChild); //To remove removeChild(ulelement.lastElementChild) It will remove only some child elements ;

//ACTIVITY 4

let srcchange=  document.querySelector(".img1")
// srcchange.src='#';


let addrem= document.querySelector(".addorremoveclass");
addrem.classList.remove('c1');                              


//ACTIVITY 5
let chnageparagraph= document.querySelector(".changepara")

chnageparagraph.addEventListener( 'onClick', function(){
    let para=document.querySelector(".ch");
    para.textContent= "loremjhjvnb nn ";
})

chnageparagraph.addEventListener('mouseover');{
    para.textContent="chmaged by paea";
}