let calendar = () => {

    let firstDay = (year, month) => {
        return new Date(year, month - 1, 1).getDay();
    }

    let lastDay = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    let daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    var calendarHead = document.getElementById('calendar-head');
    let populateCalendarHead = () => {
        for (let i = 0; i < daysOfTheWeek.length; i++) {
            let day = document.createElement('p');
            day.innerHTML = daysOfTheWeek[i];
            calendarHead.appendChild(day);
        }
    }
    populateCalendarHead();

    let calendarBody = document.getElementById('calendar-body');
    let populateCalendarBody = () => {
        let daysInRow = 7;
        let totalRows = 6;
        // var totalDays = daysInRow * totalRows;
        let currentRows = 0;
        let currentDaysInMonth = lastDay(2018, 9);
        let firstDayOfMonth = firstDay(2018, 9);
        let currentDayOfMonthIndex = 1;
        let currentCalendarDayIndex = 0;

        while (currentRows < totalRows) {
            let calendarRow = document.createElement('div');
            for (let i = 0; i < daysInRow; i++) {
                let day = document.createElement('p');
                if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
                    day.innerHTML = currentDayOfMonthIndex;
                    currentDayOfMonthIndex++;
                }
                currentCalendarDayIndex++;
                calendarRow.appendChild(day);
            }
            calendarBody
                .appendChild(calendarRow)
                .className = "calendar-row";
            currentRows++;
        }
    }
    populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
