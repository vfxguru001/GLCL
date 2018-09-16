let dashboard = () => {
    let daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var calendarHead = document.getElementById('calendar-head');

    for (let i = 0; i < daysOfTheWeek.length; i++) {
        let day = document.createElement('p');
        day.innerHTML = daysOfTheWeek[i];
        calendarHead.appendChild(day);
    }
};

document.addEventListener('DOMContentLoaded', dashboard, false);
