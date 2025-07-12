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








