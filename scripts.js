function getDate(){
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let d = new Date();
 document.getElementById("currentDate").innerHTML= dayNames[d.getDay()] + " " + [d.getDate()]
  + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
}















window.onload = () =>{
    getDate();
}