class father{
    showFmoney(){
        return "father's money"
    }
}
class son extends father{
    showSmoney(){
        return "son's money"
    }
}
class grandson extends son{
    showGmoney(){
        return "grand son's money"
    }
}

let g=new grandson();
console.log(g.showFmoney());
console.log(g.showSmoney());
console.log(g.showGmoney());
