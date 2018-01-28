function countApplesAndOranges(s, t, a, b, apples, oranges) {
    larryScore = 0;
    robScore = 0;
    applesPosition = [];
    orangesPosition = [];

    apples.map(apple => {
        if (apple < 0) {
            applesPosition.push(a - Math.abs(apple))
        }
        else {
            applesPosition.push(a + apple)
        }
    });
    oranges.map(orange => {
        if (orange < 0) {
            orangesPosition.push(b - Math.abs(orange))
        }
        else {
            orangesPosition.push(b + orange)
        }
    });
    applesPosition.map(apple => {
        if (apple >= s && apple <= t){
            larryScore++;
        }
    })
    orangesPosition.map(orange => {
        if (orange >= s && orange <= t){
            robScore++;
        }
    })
    console.log(larryScore);
    console.log(robScore);
    

}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])