function superbowlWin(record){
 const wins = record.find(footballGame => footballGame.result === "W");
console.log(wins);
    if (wins === undefined){
        return undefined;
    } else {
        return wins.year;
    }
    // if (wins.result === "W"){
    //     return wins.year;
    // }
}







