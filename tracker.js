let tracker = () => {
	// plus 5
	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
  let totalTime = 0;
  const timeInADay = 1440;
	plus5.addEventListener('click', ()=>{
    if(totalTime < timeInADay){
      totalTime += 5;
		counter.innerHTML = totalTime;
    }
	});
// minus 5
let minus5 = document.getElementById('minus-5')
	minus5.addEventListener('click', ()=>{
    if(totalTime > 0){
      totalTime -= 5;
		counter.innerHTML = totalTime;
    }	
	});
// plus 15
let plus15 = document.getElementById('plus-15');
plus15.addEventListener('click', () => {
	if(totalTime < timeInADay){
		totalTime += 15;
		counter.innerHTML = totalTime;
	}
})
// minus 15
let minus15 = document.getElementById('minus-15');
minus15.addEventListener('click', () => {
	if (totalTime > 0){
		totalTime -=15;
		counter.innerHTML = totalTime;
	}
}

)	
};

document.addEventListener('DOMContentLoaded', tracker, false);
