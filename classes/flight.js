let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		let [upHour, upMinutes] =this.upTime.split(":");
		let [downHour, downMinutes] = this.downTime.split(":");
		let upTimeInMinutes = parseInt(upHour)*60+ parseInt(upMinutes);
		let downTimeInMinutes = parseInt(downHour)*60 + parseInt(downMinutes);
		return downTimeInMinutes- upTimeInMinutes;

	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());