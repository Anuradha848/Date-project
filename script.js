// const p=document.querySelector("#p1");
// p.innerText=new Date().toLocaleTimeString();

// const now=new Date().toLocaleTimeString();
// p.innerText=now;
// console.log(now);



// function updateTime(){
//     const p=document.querySelector("#p1");
//     const now=new Date().toLocaleTimeString();
//     p.innerText=now;
//     console.log(now);
// }
// setInterval(updateTime,1000);


// function updateDate(){
// const p=document.querySelector("#p2");
// const now=new Date().toLocaleDateString();
// p.innerText=now;
// console.log(now);
// }
// updateDate();

// const button=document.querySelector("#b1");
// button.addEventListener("click",()=>{
//     console.log("Hello");
//     is12hours=true;
//     is12hours?
//     button.innerText="switch to 24-hour format":button.innerText="switch to 12-hour format"
//     updateTime();
// });

// let is12hours=false;
// if(is12hours) {
//     p1.innerText=new Date().toLocaleTimeString();
//     hour24:true;
// }else{
//      p1.innerText=new Date().toLocaleTimeString();
// }



let is12hours = false; 

const pTime = document.querySelector("#p1");
const pDate = document.querySelector("#p2");
const button = document.querySelector("#b1");

function updateTime() {
    const now=new Date().toLocaleTimeString(is12hours?"en-US":"en-GB",{
        hour12:is12hours
    });
    pTime.innerText=now;
    console.log(now);
}

 function updateDate(){
     const now=new Date().toLocaleDateString();
     pDate.innerText=now;
     console.log(now);
 }

button.addEventListener("click", () => {
    is12hours = !is12hours;
    button.innerText = is12hours
        ? "Switch to 12-hour format"
        : "Switch to 24-hour format";

    updateTime();
});

updateDate();
setInterval(updateTime, 1000);








