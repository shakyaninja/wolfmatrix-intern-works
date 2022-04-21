var entryTime = ''; //HH:MM format
var leaveTime = ''; //HH:MM format

var cost = 0;

const addEntranceFee = () => {
    cost = cost + 2;
    console.log("Entrance Fee: +2");
}

const addPartialHrFee = () => {
    cost = cost + 3;
    // console.log("First Partial or Full Hour Fee: +3");
} 

const addFullHrFee = (hr) => {
    cost = cost + (hr * 4);
    // console.log("Secondary Partial or Full Hour Fee: +4");
}

// for live timestamp
const calculateCost = (time) => {
    addEntranceFee();
    addPartialHrFee();
    time = time -1; //for first hour
    addFullHrFee(time);
    // while(time != 0){
    //     if(time <= 1){
    //         addPartialHrFee();
    //     }
    //     else{
    //         addFullHrFee();
    //     }
    //     time = time - 1;
    // }

    console.log("Total cost for parking is: ",cost);
    document.getElementById('cost').innerText = '$' + cost;
    cost = 0;   //reset cost for next calculation
}



// for manual entry time
function calculateTime(e,l){
    var hours = Number(l.split(':')[0]) - Number(e.split(':')[0]);
    var minutes = Number(l.split(':')[1]) - Number(e.split(':')[1]);
    // condition for - ve hours
    // if(hours < 0){
    //     hours = 24 - Number(l.split(':')[0]);
    //     hours = hours + Number(e.split(':')[0]);
    // }
    // if(minutes < 0){
    //     minutes = 60 - Number(l.split(':')[1]);
    //     minutes = minutes + Number(e.split(':')[1]);
    // }
    // // condition for - ve minutes
    if(minutes > 30){
        // count partial hour
        hours = hours + 1;
    }
    var time = hours;
    console.log("time:", time);
    calculateCost(time);
}

document.getElementById('calculate').addEventListener('click',() =>{
    var entry = document.getElementById('entrytime').value;
    var leave = document.getElementById('leavetime').value;
    console.log(entry,leave);
    if(Number(leave.split(':')[0]) < Number(entry.split(":")[0])){
        // show invalid time
        window.alert("Sorry ! Invalid entry or leave time.");
    }
    else{
        calculateTime(entry,leave);
    }
})

const init = () => {
    // var time = leaveTime - entryTime; //calculate no. of hours
    var hours = Number(leaveTime.split(':')[0]) - Number(entryTime.split(':')[0]);
    var minutes = Number(leaveTime.split(':')[1]) - Number(entryTime.split(':')[1]);
    // condition for - ve hours
    if(hours < 0){
        hours = 24 - Number(leaveTime.split(':')[0]);
        hours = hours + Number(entryTime.split(':')[0]);
    }
    if(minutes < 0){
        minutes = 60 - Number(leaveTime.split(':')[1]);
        minutes = minutes + Number(entryTime.split(':')[1]);
    }
    // condition for - ve minutes
    if(minutes > 30){
        // count partial hour
        hours = hours + 1;
    }
    var time = hours;
    calculateCost(time);
}   

function enter(){
    var hr = new Date().getHours();
    var min = new Date().getMinutes();
    console.log("Entry time now: " + hr + ':' + min);
    entryTime = hr + ":" + min;
    document.getElementById('entryTime').innerText = "Entry timestamp (HH:MM): " + entryTime;
}

function leave(){
    var hr = new Date().getHours() ;
    var min = new Date().getMinutes() ;
    console.log("Leave time now: " + hr + ':' + min);
    leaveTime = hr + ":" + min;
    document.getElementById('leaveTime').innerText = "Leave timestamp (HH:MM): " +  leaveTime;
    init();
}
