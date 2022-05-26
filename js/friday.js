/*
Name of day 'Sunday' text to display 'Time to chillax!';
Name of day 'Monday' text to display'Monday morning blues!';
Name of day 'Tuesday' text to display 'Taco Time!';
Name of day 'Wednesday' text to display 'Two more days to the weekend.';
Name of day 'Thursday' text to display 'The weekend is almost here...';
Name of day 'Friday' text to display 'Weekend is here!';
Name of day 'Saturday' text to display 'Time to party!';
*/

let day = document.getElementById('day');
let message = document.getElementById('message');

let date = new Date();
console.log(date);
let todayIsWeekday = date.getDay();
console.log(todayIsWeekday);

switch (todayIsWeekday) {
    case 0:
        day.innerHTML = 'Sunday';
        message.innerHTML = 'Time to chillax!';
        break;
    case 1:
        day.innerHTML = 'Monday';
        message.innerHTML = 'Monday morning blues!';
        break;
    case 2:
        day.innerHTML = 'Tuesday';
        message.innerHTML = 'Taco Time!';
        break;
    case 3:
        day.innerHTML = 'Wednesday';
        message.innerHTML = 'Two more days to the weekend.';
        break;
    case 4:
        day.innerHTML = 'Thursday';
        message.innerHTML = 'The weekend is almost here...';
    case 5:
        day.innerHTML = 'Friday';
        message.innerHTML = 'Weekend is here!';
        break;
    case 6:
        day.innerHTML = 'Saturday';
        message.innerHTML = 'Time to party!';
        break;
    case 7:
        day.innerHTML = 'NO such weekday';
        message.innerHTML = 'Week has 7 days only!';
        break;
}
