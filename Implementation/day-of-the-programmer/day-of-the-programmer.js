function solve(year){
    programmerConst = 256;
    sumOfFirstEightMonths = 244;
    sumOfFirstEightMonthsLeapYear = 243;
    let day = 0;
    if (year % 4 ){
        day =  programmerConst - sumOfFirstEightMonthsLeapYear;
    }else {
        day = programmerConst - sumOfFirstEightMonths;
    }
    return `${day}.09.${year}`
}
console.log(solve(2100));
