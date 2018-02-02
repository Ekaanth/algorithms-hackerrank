function solve(year){
    programmerConst = 256;
    sumOfFirstEightMonths = 243;
    sumOfFirstEightMonthsLeapYear = 244;
    let day = 0;
    if (year === 1918){
        return `26.09.${year}`
    }
    if (year <= 1917 && year % 4 === 0  || year % 100!= 0 && year % 4 === 0 || year > 1918 && year % 400 === 0){
        day =  programmerConst - sumOfFirstEightMonthsLeapYear;
        return `${day}.09.${year}`
    }else {
        day = programmerConst - sumOfFirstEightMonths;
        return `${day}.09.${year}`
    }
}

console.log(solve(1900)); //12.09.2000
console.log(solve(2000)); //12.09.2000
console.log(solve(2017)); //13.09.2017
console.log(solve(2016)); //12.09.2016
console.log(solve(2300)); //13.09.2300
console.log(solve(2600)); //13.09.2600
console.log(solve(1918)); //26.09.1918
