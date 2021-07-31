
let buttonSub = document.getElementById('setDate');
let inputTag = document.getElementById('dateFinal');
let actualDate;
let minDate; 
let maxDate;

let setYear;
let setMonth;
let setDay;
let setHour;
let setMinutes;
let setSeconds;

	actualDate = new Date();
	if((actualDate.getUTCMonth() + 1) < 10){
			minDate = `${actualDate.getUTCFullYear()}-0${actualDate.getUTCMonth() + 1}-${actualDate.getUTCDate()}T23:59:59`
			if((actualDate.getUTCMonth() + 1) < 6){
				maxDate = `${actualDate.getUTCFullYear()}-0${actualDate.getUTCMonth() + 4}-${actualDate.getUTCDate()}T23:59:59`	
			} else {
				if((actualDate.getUTCMonth() + 1) == 9){
				maxDate = `${actualDate.getUTCFullYear()}-00-${actualDate.getUTCDate()}T23:59:59`
				}
				maxDate = `${actualDate.getUTCFullYear()}-${actualDate.getUTCMonth() + 4}-${actualDate.getUTCDate()}T23:59:59`
			}
	} else {
		minDate = `${actualDate.getUTCFullYear()}-${actualDate.getUTCMonth() + 1}-${actualDate.getUTCDate()}T23:59:59`
		switch ((actualDate.getUTCMonth() + 1)) {
			case 10:
				maxDate = `${actualDate.getUTCFullYear()}-01-${actualDate.getUTCDate()}T23:59:59`
				break;
			case 11:
				maxDate = `${actualDate.getUTCFullYear()}-02-${actualDate.getUTCDate()}T00:00:00`
				break;
		}
	}
	console.log(minDate);
	console.log(maxDate);
	inputTag.min = minDate;
	inputTag.max = maxDate;


function catchDate() {
	buttonSub.disabled = false;
	buttonSub.classList.add('active');
	inputTag.disabled = true;
	inputTag.classList.add('desactive');
	document.getElementById('counter__subtitle').innerHTML = "WAIT...";
	// document.getElementById("demo").innerHTML = x;

	inputTag = document.getElementById('dateFinal').value;
	console.log(inputTag);
	getValue = new Date(inputTag);
	setYear = getValue.getUTCFullYear();
	console.log("Año " + setYear);
	setMonth = getValue.getUTCMonth() + 1;
	console.log("Mes " + setMonth);
	setDay = getValue.getUTCDate();
	console.log("Dia " + setDay);
	setHour = getValue.getUTCHours();
	console.log("Hora " + setHour);
	setMinutes = getValue.getUTCMinutes();
	console.log("Minutos " + setMinutes);
	setSeconds = getValue.getUTCSeconds();
	console.log("Segundos " + setSeconds);

	simplyCountdown('#test', {
					year: setYear, // required
					month: setMonth, // required
					day: setDay, // required
					hours: setHour, // Default is 0 [0-23] integer
					minutes: setMinutes, // Default is 0 [0-59] integer
					seconds: setSeconds, // Default is 0 [0-59] integer
					words: { //words displayed into the countdown
							days: { singular: 'day', plural: 'days' },
							hours: { singular: 'hour', plural: 'hours' },
							minutes: { singular: 'minute', plural: 'minutes' },
							seconds: { singular: 'second', plural: 'seconds' }
					},
					plural: true, //use plurals
					inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
					inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
					// in case of inline set to false
					enableUtc: true, //Use UTC or not - default : false
					onEnd: function() { 
						stopCountown()
						return; }, //Callback on countdown end, put your own function here
					refresh: 1000, // default refresh every 1s
					sectionClass: 'counter__numbers-box', //section css class
					amountClass: 'numbers', // amount css class
					wordClass: 'numbers__title', // word css class
					zeroPad: true,
					countUp: false
	});
}

function stopCountown(){
	location.reload();
}

// simplyCountdown('#test', {
// 					year: 0, // required
// 					month: 0, // required
// 					day: 0, // required
// 					hours: 0, // Default is 0 [0-23] integer
// 					minutes: 0, // Default is 0 [0-59] integer
// 					seconds: 0, // Default is 0 [0-59] integer
// 					words: { //words displayed into the countdown
// 							days: { singular: 'day', plural: 'days' },
// 							hours: { singular: 'hour', plural: 'hours' },
// 							minutes: { singular: 'minute', plural: 'minutes' },
// 							seconds: { singular: 'second', plural: 'seconds' }
// 					},
// 					plural: true, //use plurals
// 					inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
// 					inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
// 					// in case of inline set to false
// 					enableUtc: true, //Use UTC or not - default : false
// 					onEnd: function() { return; }, //Callback on countdown end, put your own function here
// 					refresh: 1000, // default refresh every 1s
// 					sectionClass: 'counter__numbers-box', //section css class
// 					amountClass: 'numbers', // amount css class
// 					wordClass: 'numbers__title', // word css class
// 					zeroPad: true,
// 					countUp: false
// 	});