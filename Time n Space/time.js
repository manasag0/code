let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		let utime = this.upTime.split(":");
        let dtime = this.downTime.split(":");
        let uptime = parseInt(utime[0]);
        let dntime = parseInt(dtime[0]);
		let upmnt= parseInt(utime[1]);
		let dnmnt= parseInt(dtime[1]);
		let updn = dnmnt- upmnt;
         let uphrs = dntime -uptime;
		let hrs = uphrs*60;
		return hrs + updn;
	  
         
	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());