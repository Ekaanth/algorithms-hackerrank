function timeConversion(s) {
    time = s.slice(0, -2).split('');
    type = s.substr(-2);
    hours = parseInt((s[0] + s[1]));
    amArray = (hours) => {
        if (hours === 12) {
            return 0;
        } else {
            return hours;
        }
    }
    pmArray = (hours) => {
        if (hours === 12) {
            return hours;
        } else {
            return hours + 12;
        }
    }
    if (type === 'AM') {
        hours = amArray(hours);
    } else if (type === 'PM') {
        hours = pmArray(hours);
    }
    formattedHours = ("0" + hours).slice(-2);
    if (formattedHours === '00') {
        arrayConversion = [0, 0];
    } else {
        arrayConversion = formattedHours.toString().split('');
    }
    time[0] = arrayConversion[0].toString();
    time[1] = arrayConversion[1].toString();
    console.log(time.join('').toString());
    return time.join('').toString()
}
timeConversion('12:45:54PM');