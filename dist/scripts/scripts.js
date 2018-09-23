'use strict';

var fn = function fn() {
    // adding p tag for minus
    var minus = document.getElementsByClassName('minus');

    for (var i = 0; i < minus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '-';
        minus[i].appendChild(e);
    }

    //adding p tag for plus
    var plus = document.getElementsByClassName('plus');
    for (var i = 0; i < plus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '+';
        plus[i].appendChild(e);
    }
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

var calendar = function calendar() {

    var firstDay = function firstDay(year, month) {
        return new Date(year, month - 1, 1).getDay();
    };

    var lastDay = function lastDay(year, month) {
        return new Date(year, month, 0).getDate();
    };

    var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    var calendarHead = document.getElementById('calendar-head');
    var populateCalendarHead = function populateCalendarHead() {
        for (var i = 0; i < daysOfTheWeek.length; i++) {
            var day = document.createElement('p');
            day.innerHTML = daysOfTheWeek[i];
            calendarHead.appendChild(day);
        }
    };
    populateCalendarHead();

    var calendarBody = document.getElementById('calendar-body');
    var populateCalendarBody = function populateCalendarBody() {
        var daysInRow = 7;
        var totalRows = 6;
        // var totalDays = daysInRow * totalRows;
        var currentRows = 0;
        var currentDaysInMonth = lastDay(2018, 9);
        var firstDayOfMonth = firstDay(2018, 9);
        var currentDayOfMonthIndex = 1;
        var currentCalendarDayIndex = 0;

        while (currentRows < totalRows) {
            var calendarRow = document.createElement('div');
            for (var i = 0; i < daysInRow; i++) {
                var day = document.createElement('p');
                if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
                    day.innerHTML = currentDayOfMonthIndex;
                    currentDayOfMonthIndex++;
                }
                currentCalendarDayIndex++;
                calendarRow.appendChild(day);
            }
            calendarBody.appendChild(calendarRow).className = "calendar-row";
            currentRows++;
        }
    };
    populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
    var titleCarousel = document.getElementById('title-carousel');

    var elementBuilder = function elementBuilder(elementType, elementID, appendTo, classes) {
        var el = document.createElement(elementType);
        if (classes) {
            var _el$classList;

            (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
        }
        el.id = elementID;
        appendTo.appendChild(el);
    };

    elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
    elementBuilder('p', 'title', titleCarousel);
    elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

    var title = document.getElementById('title');
    var titleSetter = function titleSetter(newtitle) {
        title.innerHTML = newtitle;
    };

    var titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');
    var titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));

    titleSetter(titleArr[titleIndex]);

    leftArrow.addEventListener('click', function () {
        if (titleIndex > 0) {
            titleIndex--;
            titleSetter(titleArr[titleIndex]);
        }
    });
    rightArrow.addEventListener('click', function () {
        if (titleIndex < titleArr.length - 1) {
            titleIndex++;
            titleSetter(titleArr[titleIndex]);
        }
    });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);