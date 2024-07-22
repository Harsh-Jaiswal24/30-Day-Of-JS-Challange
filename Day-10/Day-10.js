//ACTIVITY 1 Basic Event Handling

const btn=document.querySelector(".btn");
const para= document.querySelector(".text");

btn.addEventListener("click", ()=>{
    para.textContent="this is don this is don this is don this is don this is don";
})


const range=document.querySelector(".oprange");
const pic= window.document.querySelector(".photo");
pic.addEventListener("click" , ()=>{
    console.log("hello")
})
range.addEventListener("click", ()=>{
    let value=range.value;
    console.log(value);
    pic.style.opacity= `${value}%`;
   
})


//ACTIVITY 2 Mouse Event 

const box= document.querySelector(".box")

box.addEventListener("mouseover" , ()=>{
    box.style.backgroundColor="blue";
 
})
box.addEventListener("mouseout" , ()=>{
    box.style.backgroundColor="red";
})

//ACTIVITY 3

const input= document.querySelector(".input")
input.addEventListener("keydown", (e)=>{
    console.log(`${e.code}`);
})
//The keydown event is fired when a key is pressed. The keydown and keyup events provide a code indicating which key is pressed. That can be accessed by ${__.code}.

input.addEventListener('keyup' , (p)=>{
  
    let newpara= document.createElement("span")
    newpara.textContent=input.value;

    document.body.appendChild(newpara);
   
})

///The keyup event is fired when a key is releaed. The keydown and keyup events provide a code indicating which key is pressed. That can be accessed by ${__.code}.

//ACTIVITY 4

const formname= document.querySelector(".formname");
const formcontact= document.querySelector(".formcontact");
const submitbtn= document.querySelector(".formsubmit");

submitbtn.addEventListener("click", ()=>{
    event.preventDefault();   //Prevent default is and event that is event.preventDefault() which  stops the form from being submitted to the server.
    console.log("clicked");
    console.log(`${formname.value}`);
    console.log(`${formcontact.value}`);

})


const dropdown= document.querySelector(".dropdown");

dropdown.addEventListener('change', ()=>{
    console.log("drop")                                          // It Adds an event listener for the 'change' event on the <select> element.
    let para2= document.createElement("p");
    para2.textContent= dropdown.value;
    document.body.appendChild(para2);
})

//ACTIVITY 5 Event Delegation  
//Event delegation allows you to handle events on child elements without explicitly attaching event listeners to each child element individually. 

const list= document.querySelector(".list");
const option = document.querySelector("#li1")


list.addEventListener("click", (event)=>{  
    // Use  "event.target.textContent"  to Get text content of clicked <li>
    let stext= event.target.textContent;  
    console.log(stext);
})


document.addEventListener("DOMContentLoaded" , ()=>{   //Function in avaScript to dynamically add child elements and handle events
    
    const main= document.querySelector(".main"); 

    let c2= document.createElement("span");
c2.textContent= "hii Bro! how are you";
main.appendChild(c2);
main.addEventListener("click" , (event)=>{
    console.log(event.target.tagname=== 'SPAN')
        var text= event.target.textContent;
        console.log(text);
    })

    function newitem(){
        let c3= document.createElement("span");
        c3.textContent= "hii Bro! how are you what are you doing ";
        main.appendChild(c3);
    }

    newitem();
     // Add another span dynamically after a delay (simulating asynchronous addition);
    setTimeout( function(){
        newitem()
    }, 2000);
})


