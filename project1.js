let a=require("readline-sync");
var name=a.question("please enter your name:-  ")
console.log("WELCOME ",(name.toLocaleUpperCase()), "to the game:- stone,paper,sissor");
var count=(a.questionInt("how many time you want to play:- "));
console.log("------LET'S START YOUR GAME-----");
var i=1;
while (i<=count){
    var you=a.question("choose anyone:- stone,paper,sissor >>> ");
    var list = ['stone', 'paper', 'sissor'];
    var computer=list[Math.floor(Math.random()*list.length)];
    if(you=="stone"){
        if (computer=="sissor"){
            console.log("computer>>> ",computer);
            console.log("***you win***");
        }
    else if(computer=="stone"){
        console.log("computer>>> ",computer);
        console.log("***match draw***");
        }
        else if(computer=="paper"){
            console.log("computer>>> ",computer);
            console.log("***computer win***");
        }
    }
    else if (you=="sissor"){
        if (computer=="sissor"){
            console.log("computer>>> ",computer);
            console.log("***match draw***");
        }
    else if(computer=="stone"){
        console.log("computer>>> ",computer);
        console.log("***computer win***");
        }
        else if(computer=="paper"){
            console.log("computer>>> ",computer);
            console.log("***you win***");
        }
    }
    else if (you=="paper"){
        if (computer=="sissor"){
            console.log("computer>>> ",computer);
            console.log("***computer win***");
        }
    else if(computer=="stone"){
        console.log("computer>>> ",computer);
        console.log("***you win***");
        }
        else if(computer=="paper"){
            console.log("computer>>> ",computer);
            console.log("***match draw***");
        }
    }
    else{
        console.log("***something went wrong***");
    }
    i+=1
}
console.log("----GAME FINISH----",(name.toLocaleUpperCase()),"you played awesome----try again baby----");