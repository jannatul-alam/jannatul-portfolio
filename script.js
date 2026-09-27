const btn=document.getElementById("themeBtn");
btn.onclick=()=>document.body.classList.toggle("light");

const text="Building innovative digital experiences...";
let i=0;
const el=document.querySelector(".typing");
setInterval(()=>{
 i=(i+1)%text.length;
},500);

document.getElementById("form").onsubmit=e=>{
 e.preventDefault();
 alert("Message submitted successfully!");
};
