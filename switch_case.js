// const a=require("readline-sync")
// const day=a.question("enter the day:  ")

// if (day==="monday"){
//     console.log("7am");
// }
// else if (day==="tuesday" || day==="wednesday" || day==="thursday"){
//     console.log("4am");
// }
// else if(day==="friday"){
//     console.log("9am");
// }
// else if(day==="saturday" || day==="sunday"){
//     console.log("8am");
// }





const a=require("readline-sync")
const day=a.question(" enter your day:  ")
switch(day){
    case "monday":
        console.log("7am");
        break
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("4am");
        break
    case "friday":
        console.log("9am");
        break
    case "saturday":
    case "sunday":
        console.log("8am");
        break
    default:
        console.log("enter only a valid day");
}
