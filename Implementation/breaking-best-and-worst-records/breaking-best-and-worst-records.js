function breakingRecords(score) {
    lowScore = score[0];
    highScore = score[0];
    bestRecordCount = 0;
    worstRecordCount = 0;
    score.map(s => {
        if (s > highScore){
            highScore = s;
            bestRecordCount++;
        }
        else if (s < lowScore){
            lowScore = s;
            worstRecordCount++;
        }
    })
    console.log(bestRecordCount, worstRecordCount);
    
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])