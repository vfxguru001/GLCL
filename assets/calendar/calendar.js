let calendar = () => { 
let lastDay = (year, month) => { 
return new Date(year, month, 0).getDate(); 
} 
let firstDay = (year, month) => { 
return new Date(year, month - 1, 1).getDay(); 
} 

let daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
var calendarHead = document.getElementById('calendar-head'); 
let populateCalendarHead = () => { 
for(let i = 0; i<daysOfTheWeek.length; i++){ 
let day = document.createElement('p'); 
day.innerHTML = daysOfTheWeek[i]; 
calendarHead.appendChild(day); 
} 
} 
populateCalendarHead(); 

let calendarBody = document.getElementById('calendar-body'); 
let populateCalendarBody = () => { 
var daysInRow = 7; 
var totalRows = 5; 
// var totalDays = daysInRow * totalRows; 
var currentRows = 0; 

while(currentRows < totalRows){ 
let calendarRow = document.createElement('div'); 
for(let i = 0; i<daysInRow; i++){ 
console.log('within for loop'); 
let day = document.createElement('p'); 
day.innerHTML = i; 
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
// let calendar = () => {
// 	let lastDay = () => {
// 		return new Date(year, month, 0).getDate();
// 	}

// 	let firstDay = (year, month) => {
// 		return new Date(year, month, -1, 1).getDay();
// 	}


// 	let daysOfTheWeek=['SUN', 'MON', 'TUES', 'WEDS', 'THU', 'FRI', 'SAT'];
// 	var calendarHead = document.getElementById('calendar-head');

// 	let populateCalendarHead() => {

// 		for (let i = 0; i<daysOfTheWeek.length; i++){
// 		let day = document.createElement('p');
// 		day.innerHTML = daysOfTheWeek[i];
// 		calendarHead.appendChild(day);
// 		}

// 	}

// 	populateCalendarHead();

// 	let calendarBody = document.getElementById('calendar-body');
// 	let populateCalendarBody = () => {
// 		var daysInRow = 7;
// 		var totalRows = 5;
// 		// var totalDays = daysInRow * totalRows;
// 		var currentRows = 0;

// 		while (currentRows < totalRows){
// 			let calendarRow = document.createElement('div');
// 			for (let i =0; i<daysInRow; i++){
// 				console.log('within for loop');
// 				let day = document.createElement('p');
// 				day.innerHTML = i;
// 				calendarRow.appendChild(day);
// 			}

// 			calendarBody
// 			.appendChild(calendarRow)
// 			.className = "calendar-row";

// 			currentRows++;
// 		}
// 	}
// 	populateCalendarBody();

// };

// document.addEventListener('DOMContentLoaded', calendar, false);