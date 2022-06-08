const timerH1 = document.getElementById('srv1');
const timerH2 = document.getElementById('srv2');
const timerH3 = document.getElementById('srv3');
const INTstart_btnH1 = document.getElementById('startINT1');
const MEDstart_btnH1 = document.getElementById('startMED1');
const URGstart_btnH1 = document.getElementById('startURG1');
const pause_btnH1 = document.getElementById('stop1');
const reset_btnH1 = document.getElementById('reset1');
const INTstart_btnH2 = document.getElementById('startINT2');
const MEDstart_btnH2 = document.getElementById('startMED2');
const URGstart_btnH2 = document.getElementById('startURG2');
const pause_btnH2 = document.getElementById('stop2');
const reset_btnH2 = document.getElementById('reset2');
const INTstart_btnH3 = document.getElementById('startINT3');
const MEDstart_btnH3 = document.getElementById('startMED3');
const URGstart_btnH3 = document.getElementById('startURG3');
const pause_btnH3 = document.getElementById('stop3');
const reset_btnH3 = document.getElementById('reset3');
const timerC1 = document.getElementById('srvC1');
const INTstart_btnC1 = document.getElementById('startINTC1');
const MEDstart_btnC1 = document.getElementById('startMEDC1');
const URGstart_btnC1 = document.getElementById('startURGC1');
const pause_btnC1 = document.getElementById('stopC1');
const reset_btnC1 = document.getElementById('resetC1');
const timerC2 = document.getElementById('srvC2');
const INTstart_btnC2 = document.getElementById('startINTC2');
const MEDstart_btnC2 = document.getElementById('startMEDC2');
const URGstart_btnC2 = document.getElementById('startURGC2');
const pause_btnC2 = document.getElementById('stopC2');
const reset_btnC2 = document.getElementById('resetC2');
const timerC3 = document.getElementById('srvC3');
const INTstart_btnC3 = document.getElementById('startINTC3');
const MEDstart_btnC3 = document.getElementById('startMEDC3');
const URGstart_btnC3 = document.getElementById('startURGC3');
const pause_btnC3 = document.getElementById('stopC3');
const reset_btnC3 = document.getElementById('resetC3');
const timerG1 = document.getElementById('srvG1');
const INTstart_btnG1 = document.getElementById('startINTG1');
const MEDstart_btnG1 = document.getElementById('startMEDG1');
const URGstart_btnG1 = document.getElementById('startURGG1');
const pause_btnG1 = document.getElementById('stopG1');
const reset_btnG1 = document.getElementById('resetG1');
const timerG2 = document.getElementById('srvG2');
const INTstart_btnG2 = document.getElementById('startINTG2');
const MEDstart_btnG2 = document.getElementById('startMEDG2');
const URGstart_btnG2 = document.getElementById('startURGG2');
const pause_btnG2 = document.getElementById('stopG2');
const reset_btnG2 = document.getElementById('resetG2');
const timerG3 = document.getElementById('srvG3');
const INTstart_btnG3 = document.getElementById('startINTG3');
const MEDstart_btnG3 = document.getElementById('startMEDG3');
const URGstart_btnG3 = document.getElementById('startURGG3');
const pause_btnG3 = document.getElementById('stopG3');
const reset_btnG3 = document.getElementById('resetG3');
const timerN1 = document.getElementById('srvN1');
const INTstart_btnN1 = document.getElementById('startINTN1');
const MEDstart_btnN1 = document.getElementById('startMEDN1');
const URGstart_btnN1 = document.getElementById('startURGN1');
const pause_btnN1 = document.getElementById('stopN1');
const reset_btnN1 = document.getElementById('resetN1');
const timerN2 = document.getElementById('srvN2');
const INTstart_btnN2 = document.getElementById('startINTN2');
const MEDstart_btnN2 = document.getElementById('startMEDN2');
const URGstart_btnN2 = document.getElementById('startURGN2');
const pause_btnN2 = document.getElementById('stopN2');
const reset_btnN2 = document.getElementById('resetN2');
const timerN3 = document.getElementById('srvN3');
const INTstart_btnN3 = document.getElementById('startINTN3');
const MEDstart_btnN3 = document.getElementById('startMEDN3');
const URGstart_btnN3 = document.getElementById('startURGN3');
const pause_btnN3 = document.getElementById('stopN3');
const reset_btnN3 = document.getElementById('resetN3');
const timerO1 = document.getElementById('srvO1');
const INTstart_btnO1 = document.getElementById('startINTO1');
const MEDstart_btnO1 = document.getElementById('startMEDO1');
const URGstart_btnO1 = document.getElementById('startURGO1');
const reset_btnO1 = document.getElementById('resetO1');
const timerO2 = document.getElementById('srvO2');
const INTstart_btnO2 = document.getElementById('startINTO2');
const MEDstart_btnO2 = document.getElementById('startMEDO2');
const URGstart_btnO2 = document.getElementById('startURGO2');
const pause_btnO2 = document.getElementById('stopO2');
const reset_btnO2 = document.getElementById('resetO2');
const timerO3 = document.getElementById('srvO3');
const INTstart_btnO3 = document.getElementById('startINTO3');
const MEDstart_btnO3 = document.getElementById('startMEDO3');
const URGstart_btnO3 = document.getElementById('startURGO3');
const pause_btnO3 = document.getElementById('stopO3');
const reset_btnO3 = document.getElementById('resetO3');
const timerP1 = document.getElementById('srvP1');
const INTstart_btnP1 = document.getElementById('startINTP1');
const MEDstart_btnP1 = document.getElementById('startMEDP1');
const URGstart_btnP1 = document.getElementById('startURGP1');
const pause_btnP1 = document.getElementById('stopP1');
const reset_btnP1 = document.getElementById('resetP1');
const timerP2 = document.getElementById('srvP2');
const INTstart_btnP2 = document.getElementById('startINTP2');
const MEDstart_btnP2 = document.getElementById('startMEDP2');
const URGstart_btnP2 = document.getElementById('startURGP2');
const pause_btnP2 = document.getElementById('stopP2');
const reset_btnP2 = document.getElementById('resetP2');
const timerP3 = document.getElementById('srvP3');
const INTstart_btnP3 = document.getElementById('startINTP3');
const MEDstart_btnP3 = document.getElementById('startMEDP3');
const URGstart_btnP3 = document.getElementById('startURGP3');
const pause_btnP3 = document.getElementById('stopP3');
const reset_btnP3 = document.getElementById('resetP3');

var socket = io();

function aH() {
socket.emit('IntH1');
	}
function bH() {
socket.emit ('MedH1');
	}
function cH() {
socket.emit('UrgH1');
	}
function dH() {
socket.emit('StopH1'); 
	}
function eH() {
socket.emit('ResetH1');
	}
function fH() {
socket.emit('IntH2');
}
function gH() {
socket.emit('MedH2');   
}
function hH() {
socket.emit('UrgH2');   
}
function iH() {
socket.emit('StopH2');
}
function jH() {
socket.emit('ResetH2');
}
function kH() {
socket.emit('IntH3');
}  
function lH() {
socket.emit('MedH3');
}
function mH() {
socket.emit('UrgH3');
}
function nH() {
socket.emit('StopH3');
}
function oH() {
socket.emit('ResetH3');
	   }

function toHHMMSSH1(timeH1) {
var hoursH1 = Math.floor(timeH1 / 3600);
var minutesH1 = Math.floor((timeH1 - hoursH1 * 3600) / 60);
var secondsH1 = timeH1 - hoursH1 * 3600 - minutesH1 * 60;
		
hoursH1 = `${hoursH1}`.padStart(2, '0');
minutesH1 = `${minutesH1}`.padStart(2, '0');
secondsH1 = `${secondsH1}`.padStart(2, '0');
		
return hoursH1 + ':' + minutesH1 + ':' + secondsH1;
};

function toHHMMSSH2(timeH2) {
var hoursH2 = Math.floor(timeH2 / 3600);
var minutesH2 = Math.floor((timeH2 - hoursH2 * 3600) / 60);
var secondsH2 = timeH2 - hoursH2 * 3600 - minutesH2 * 60;
	  
hoursH2 = `${hoursH2}`.padStart(2, '0');
minutesH2 = `${minutesH2}`.padStart(2, '0');
secondsH2 = `${secondsH2}`.padStart(2, '0');
	  
return hoursH2 + ':' + minutesH2 + ':' + secondsH2;
 }

 function toHHMMSSH3(timeH3) {
var hoursH3 = Math.floor(timeH3 / 3600);
var minutesH3 = Math.floor((timeH3 - hoursH3 * 3600) / 60);
var secondsH3 = timeH3 - hoursH3 * 3600 - minutesH3 * 60;
		  
hoursH3 = `${hoursH3}`.padStart(2, '0');
minutesH3 = `${minutesH3}`.padStart(2, '0');
secondsH3 = `${secondsH3}`.padStart(2, '0');
		  
return hoursH3 + ':' + minutesH3 + ':' + secondsH3;
}


//Hays Room 1 Block
socket.on('h1update', function(timeH1){
timerH1.innerHTML = toHHMMSSH1(timeH1);
hideBtn([INTstart_btnH1, MEDstart_btnH1, URGstart_btnH1]);
showBtn([ reset_btnH1]);
}
)
socket.on('h1end', function(timeH1){
timerH1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnH1, MEDstart_btnH1, URGstart_btnH1]);
hideBtn([ reset_btnH1]);
}
)
socket.on('h1resume', function(){
pause_btnH1.innerHTML = 'Pause Service';
}
)
socket.on('h1pause', function(){
pause_btnH1.innerHTML = 'Resume Service';
}
)
//Hays Room 2 Block
socket.on('h2update', function(timeH2){
timerH2.innerHTML = toHHMMSSH2(timeH2);
hideBtn([INTstart_btnH2, MEDstart_btnH2, URGstart_btnH2]);
showBtn([reset_btnH2]);
}
)
socket.on('h2end', function(){
timerH2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnH2, MEDstart_btnH2, URGstart_btnH2]);
hideBtn([reset_btnH2]);
}
)
socket.on('h2resume', function(){
pause_btnH2.innerHTML = 'Pause Service';
}
)
socket.on('h2pause', function(){
pause_btnH2.innerHTML = 'Resume Service';
}
)
//Hays Room 3 Block
socket.on('h3update', function(timeH3){
timerH3.innerHTML = toHHMMSSH3(timeH3);
hideBtn([INTstart_btnH3, MEDstart_btnH3, URGstart_btnH3]);
showBtn([reset_btnH3]);
}
)
socket.on('h3end', function(){
timerH3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnH3, MEDstart_btnH3, URGstart_btnH3]);
hideBtn([ reset_btnH3]);
}
)
socket.on('h3resume', function(){
pause_btnH3.innerHTML = 'Pause Service';
}
)
socket.on('h3pause', function(){
pause_btnH3.innerHTML = 'Resume Service';
}
)

function aC() {
socket.emit('IntC1');
	}
function bC() {
socket.emit ('MedC1');
	}
function cC() {
socket.emit('UrgC1');
	}
function dC() {
socket.emit('StopC1'); 
	}
function eC() {
socket.emit('ResetC1');
	}
function fC() {
socket.emit('IntC2');
}
function gC() {
socket.emit('MedC2');   
}
function hC() {
socket.emit('UrgC2');   
}
function iC() {
socket.emit('StopC2');
}
function jC() {
socket.emit('ResetC2');
}
function kC() {
socket.emit('IntC3');
}  
function lC() {
socket.emit('MedC3');
}
function mC() {
socket.emit('UrgC3');
}
function nC() {
socket.emit('StopC3');
}
function oC() {
socket.emit('ResetC3');
	   }

function toHHMMSSC1(timeC1) {
var hoursC1 = Math.floor(timeC1 / 3600);
var minutesC1 = Math.floor((timeC1 - hoursC1 * 3600) / 60);
var secondsC1 = timeC1 - hoursC1 * 3600 - minutesC1 * 60;
		
hoursC1 = `${hoursC1}`.padStart(2, '0');
minutesC1 = `${minutesC1}`.padStart(2, '0');
secondsC1 = `${secondsC1}`.padStart(2, '0');
		
return hoursC1 + ':' + minutesC1 + ':' + secondsC1;
};

function toHHMMSSC2(timeC2) {
var hoursC2 = Math.floor(timeC2 / 3600);
var minutesC2 = Math.floor((timeC2 - hoursC2 * 3600) / 60);
var secondsC2 = timeC2 - hoursC2 * 3600 - minutesC2 * 60;
	  
hoursC2 = `${hoursC2}`.padStart(2, '0');
minutesC2 = `${minutesC2}`.padStart(2, '0');
secondsC2 = `${secondsC2}`.padStart(2, '0');
	  
return hoursC2 + ':' + minutesC2 + ':' + secondsC2;
 }

function toHHMMSSC3(timeC3) {
var hoursC3 = Math.floor(timeC3 / 3600);
var minutesC3 = Math.floor((timeC3 - hoursC3 * 3600) / 60);
var secondsC3 = timeC3 - hoursC3 * 3600 - minutesC3 * 60;
		  
hoursC3 = `${hoursC3}`.padStart(2, '0');
minutesC3 = `${minutesC3}`.padStart(2, '0');
secondsC3 = `${secondsC3}`.padStart(2, '0');
		  
return hoursC3 + ':' + minutesC3 + ':' + secondsC3;
}


//Hays Room 1 Block
socket.on('c1update', function(timeC1){
timerC1.innerHTML = toHHMMSSC1(timeC1);
hideBtn([INTstart_btnC1, MEDstart_btnC1, URGstart_btnC1]);
showBtn([ reset_btnC1]);
}
)
socket.on('c1end', function(){
timerC1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnC1, MEDstart_btnC1, URGstart_btnC1]);
hideBtn([ reset_btnC1]);
}
)
socket.on('c1resume', function(){
pause_btnC1.innerHTML = 'Pause Service';
}
)
socket.on('c1pause', function(){
pause_btnC1.innerHTML = 'Resume Service';
}
)
//Hays Room 2 Block
socket.on('c2update', function(timeC2){
timerC2.innerHTML = toHHMMSSC2(timeC2);
hideBtn([INTstart_btnC2, MEDstart_btnC2, URGstart_btnC2]);
showBtn([ reset_btnC2]);
}
)
socket.on('c2end', function(){
timerC2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnC2, MEDstart_btnC2, URGstart_btnC2]);
hideBtn([ reset_btnC2]);
}
)
socket.on('c2resume', function(){
pause_btnC2.innerHTML = 'Pause Service';
}
)
socket.on('c2pause', function(){
pause_btnC2.innerHTML = 'Resume Service';
}
)
//Hays Room 3 Block
socket.on('c3update', function(timeC3){
timerC3.innerHTML = toHHMMSSC3(timeC3);
hideBtn([INTstart_btnC3, MEDstart_btnC3, URGstart_btnC3]);
showBtn([ reset_btnC3]);
}
)
socket.on('c3end', function(){
timerC3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnC3, MEDstart_btnC3, URGstart_btnC3]);
hideBtn([ reset_btnC3]);
}
)
socket.on('c3resume', function(){
pause_btnC3.innerHTML = 'Pause Service';
}
)
socket.on('c3pause', function(){
pause_btnC3.innerHTML = 'Resume Service';
}
)

function aG() {
socket.emit('IntG1');
	}
function bG() {
socket.emit ('MedG1');
	}
function cG() {
socket.emit('UrgG1');
	}
function dG() {
socket.emit('StopG1'); 
	}
function eG() {
socket.emit('ResetG1');
	}
function fG() {
socket.emit('IntG2');
}
function gG() {
socket.emit('MedG2');   
}
function hG() {
socket.emit('UrgG2');   
}
function iG() {
socket.emit('StopG2');
}
function jG() {
socket.emit('ResetG2');
}
function kG() {
socket.emit('IntG3');
}  
function lG() {
socket.emit('MedG3');
}
function mG() {
socket.emit('UrgG3');
}
function nG() {
socket.emit('StopG3');
}
function oG() {
socket.emit('ResetG3');
	   }

function toHHMMSSG1(timeG1) {
var hoursG1 = Math.floor(timeG1 / 3600);
var minutesG1 = Math.floor((timeG1 - hoursG1 * 3600) / 60);
var secondsG1 = timeG1 - hoursG1 * 3600 - minutesG1 * 60;
		
hoursG1 = `${hoursG1}`.padStart(2, '0');
minutesG1 = `${minutesG1}`.padStart(2, '0');
secondsG1 = `${secondsG1}`.padStart(2, '0');
		
return hoursG1 + ':' + minutesG1 + ':' + secondsG1;
};

function toHHMMSSG2(timeG2) {
var hoursG2 = Math.floor(timeG2 / 3600);
var minutesG2 = Math.floor((timeG2 - hoursG2 * 3600) / 60);
var secondsG2 = timeG2 - hoursG2 * 3600 - minutesG2 * 60;
	  
hoursG2 = `${hoursG2}`.padStart(2, '0');
minutesG2 = `${minutesG2}`.padStart(2, '0');
secondsG2 = `${secondsG2}`.padStart(2, '0');
	  
return hoursG2 + ':' + minutesG2 + ':' + secondsG2;
 }

 function toHHMMSSG3(timeG3) {
var hoursG3 = Math.floor(timeG3 / 3600);
var minutesG3 = Math.floor((timeG3 - hoursG3 * 3600) / 60);
var secondsG3 = timeG3 - hoursG3 * 3600 - minutesG3 * 60;
		  
hoursG3 = `${hoursG3}`.padStart(2, '0');
minutesG3 = `${minutesG3}`.padStart(2, '0');
secondsG3 = `${secondsG3}`.padStart(2, '0');
		  
return hoursG3 + ':' + minutesG3 + ':' + secondsG3;
}


//Hays Room 1 Block
socket.on('g1update', function(timeG1){
timerG1.innerHTML = toHHMMSSG1(timeG1);
hideBtn([INTstart_btnG1, MEDstart_btnG1, URGstart_btnG1]);
showBtn([ reset_btnG1]);
}
)
socket.on('g1end', function(){
timerG1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnG1, MEDstart_btnG1, URGstart_btnG1]);
hideBtn([ reset_btnG1]);
}
)
socket.on('g1resume', function(){
pause_btnG1.innerHTML = 'Pause Service';
}
)
socket.on('g1pause', function(){
pause_btnG1.innerHTML = 'Resume Service';
}
)
//Hays Room 2 Block
socket.on('g2update', function(timeG2){
timerG2.innerHTML = toHHMMSSG2(timeG2);
hideBtn([INTstart_btnG2, MEDstart_btnG2, URGstart_btnG2]);
showBtn([ reset_btnG2]);
}
)
socket.on('g2end', function(){
timerG2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnG2, MEDstart_btnG2, URGstart_btnG2]);
hideBtn([ reset_btnG2]);
}
)
socket.on('g2resume', function(){
pause_btnG2.innerHTML = 'Pause Service';
}
)
socket.on('g2pause', function(){
pause_btnG2.innerHTML = 'Resume Service';
}
)
//Hays Room 3 Block
socket.on('g3update', function(timeG3){
timerG3.innerHTML = toHHMMSSG3(timeG3);
hideBtn([INTstart_btnG3, MEDstart_btnG3, URGstart_btnG3]);
showBtn([ reset_btnG3]);
}
)
socket.on('g3end', function(){
timerG3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnG3, MEDstart_btnG3, URGstart_btnG3]);
hideBtn([ reset_btnG3]);
}
)
socket.on('g3resume', function(){
pause_btnG3.innerHTML = 'Pause Service';
}
)
socket.on('g3pause', function(){
pause_btnG3.innerHTML = 'Resume Service';
}
)

function aN() {
socket.emit('IntN1');
	}
function bN() {
socket.emit ('MedN1');
	}
function cN() {
socket.emit('UrgN1');
	}
function dN() {
socket.emit('StopN1'); 
	}
function eN() {
socket.emit('ResetN1');
	}
function fN() {
socket.emit('IntN2');
}
function gN() {
socket.emit('MedN2');   
}
function hN() {
socket.emit('UrgN2');   
}
function iN() {
socket.emit('StopN2');
}
function jN() {
socket.emit('ResetN2');
}
function kN() {
socket.emit('IntN3');
}  
function lN() {
socket.emit('MedN3');
}
function mN() {
socket.emit('UrgN3');
}
function nN() {
socket.emit('StopN3');
}
function oN() {
socket.emit('ResetN3');
	   }

function toHHMMSSN1(timeN1) {
var hoursN1 = Math.floor(timeN1 / 3600);
var minutesN1 = Math.floor((timeN1 - hoursN1 * 3600) / 60);
var secondsN1 = timeN1 - hoursN1 * 3600 - minutesN1 * 60;
		
hoursN1 = `${hoursN1}`.padStart(2, '0');
minutesN1 = `${minutesN1}`.padStart(2, '0');
secondsN1 = `${secondsN1}`.padStart(2, '0');
		
return hoursN1 + ':' + minutesN1 + ':' + secondsN1;
};

function toHHMMSSN2(timeN2) {
var hoursN2 = Math.floor(timeN2 / 3600);
var minutesN2 = Math.floor((timeN2 - hoursN2 * 3600) / 60);
var secondsN2 = timeN2 - hoursN2 * 3600 - minutesN2 * 60;
	  
hoursN2 = `${hoursN2}`.padStart(2, '0');
minutesN2 = `${minutesN2}`.padStart(2, '0');
secondsN2 = `${secondsN2}`.padStart(2, '0');
	  
return hoursN2 + ':' + minutesN2 + ':' + secondsN2;
 }

 function toHHMMSSN3(timeN3) {
var hoursN3 = Math.floor(timeN3 / 3600);
var minutesN3 = Math.floor((timeN3 - hoursN3 * 3600) / 60);
var secondsN3 = timeN3 - hoursN3 * 3600 - minutesN3 * 60;
		  
hoursN3 = `${hoursN3}`.padStart(2, '0');
minutesN3 = `${minutesN3}`.padStart(2, '0');
secondsN3 = `${secondsN3}`.padStart(2, '0');
		  
return hoursN3 + ':' + minutesN3 + ':' + secondsN3;
}


//Hays Room 1 Block
socket.on('n1update', function(timeN1){
timerN1.innerHTML = toHHMMSSN1(timeN1);
hideBtn([INTstart_btnN1, MEDstart_btnN1, URGstart_btnN1]);
showBtn([ reset_btnN1]);
}
)
socket.on('n1end', function(){
timerN1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnN1, MEDstart_btnN1, URGstart_btnN1]);
hideBtn([ reset_btnN1]);
}
)
socket.on('n1resume', function(){
pause_btnN1.innerHTML = 'Pause Service';
}
)
socket.on('n1pause', function(){
pause_btnN1.innerHTML = 'Resume Service';
}
)
//Hays Room 2 Block
socket.on('n2update', function(timeN2){
timerN2.innerHTML = toHHMMSSN2(timeN2);
hideBtn([INTstart_btnN2, MEDstart_btnN2, URGstart_btnN2]);
showBtn([ reset_btnN2]);
}
)
socket.on('n2end', function(){
timerN2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnN2, MEDstart_btnN2, URGstart_btnN2]);
hideBtn([ reset_btnN2]);
}
)
socket.on('n2resume', function(){
pause_btnN2.innerHTML = 'Pause Service';
}
)
socket.on('n2pause', function(){
pause_btnN2.innerHTML = 'Resume Service';
}
)
//Hays Room 3 Block
socket.on('n3update', function(timeN3){
timerN3.innerHTML = toHHMMSSN3(timeN3);
hideBtn([INTstart_btnN3, MEDstart_btnN3, URGstart_btnN3]);
showBtn([ reset_btnN3]);
}
)
socket.on('n3end', function(){
timerN3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnN3, MEDstart_btnN3, URGstart_btnN3]);
hideBtn([ reset_btnN3]);
}
)
socket.on('n3resume', function(){
pause_btnN3.innerHTML = 'Pause Service';
}
)
socket.on('n3pause', function(){
pause_btnN3.innerHTML = 'Resume Service';
}
)
function aO() {
socket.emit('IntO1');
	}
function bO() {
socket.emit ('MedO1');
	}
function cO() {
socket.emit('UrgO1');
	}
function dO() {
socket.emit('StopO1'); 
	}
function eO() {
socket.emit('ResetO1');
	}
function fO() {
socket.emit('IntO2');
}
function gO() {
socket.emit('MedO2');   
}
function hO() {
socket.emit('UrgO2');   
}
function iO() {
socket.emit('StopO2');
}
function jO() {
socket.emit('ResetO2');
}
function kO() {
socket.emit('IntO3');
}  
function lO() {
socket.emit('MedO3');
}
function mO() {
socket.emit('UrgO3');
}
function nO() {
socket.emit('StopO3');
}
function oO() {
socket.emit('ResetO3');
	   }

function toHHMMSSO1(timeO1) {
var hoursO1 = Math.floor(timeO1 / 3600);
var minutesO1 = Math.floor((timeO1 - hoursO1 * 3600) / 60);
var secondsO1 = timeO1 - hoursO1 * 3600 - minutesO1 * 60;
		
hoursO1 = `${hoursO1}`.padStart(2, '0');
minutesO1 = `${minutesO1}`.padStart(2, '0');
secondsO1 = `${secondsO1}`.padStart(2, '0');
		
return hoursO1 + ':' + minutesO1 + ':' + secondsO1;
};

function toHHMMSSO2(timeO2) {
var hoursO2 = Math.floor(timeO2 / 3600);
var minutesO2 = Math.floor((timeO2 - hoursO2 * 3600) / 60);
var secondsO2 = timeO2 - hoursO2 * 3600 - minutesO2 * 60;
	  
hoursO2 = `${hoursO2}`.padStart(2, '0');
minutesO2 = `${minutesO2}`.padStart(2, '0');
secondsO2 = `${secondsO2}`.padStart(2, '0');
	  
return hoursO2 + ':' + minutesO2 + ':' + secondsO2;
 }

 function toHHMMSSO3(timeO3) {
var hoursO3 = Math.floor(timeO3 / 3600);
var minutesO3 = Math.floor((timeO3 - hoursO3 * 3600) / 60);
var secondsO3 = timeO3 - hoursO3 * 3600 - minutesO3 * 60;
		  
hoursO3 = `${hoursO3}`.padStart(2, '0');
minutesO3 = `${minutesO3}`.padStart(2, '0');
secondsO3 = `${secondsO3}`.padStart(2, '0');
		  
return hoursO3 + ':' + minutesO3 + ':' + secondsO3;
}


//Osborne Room 1 Block
socket.on('o1update', function(timeO1){
timerO1.innerHTML = toHHMMSSO1(timeO1);
hideBtn([INTstart_btnO1, MEDstart_btnO1, URGstart_btnO1]);
showBtn([ reset_btnO1]);
}
)
socket.on('o1end', function(){
timerO1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnO1, MEDstart_btnO1, URGstart_btnO1]);
hideBtn([ reset_btnO1]);
}
)
socket.on('o1resume', function(){
pause_btnO1.innerHTML = 'Pause Service';
}
)
socket.on('o1pause', function(){
pause_btnO1.innerHTML = 'Resume Service';
}
)
//Osborne Room 2 Block
socket.on('o2update', function(timeO2){
timerO2.innerHTML = toHHMMSSO2(timeO2);
hideBtn([INTstart_btnO2, MEDstart_btnO2, URGstart_btnO2]);
showBtn([ reset_btnO2]);
}
)
socket.on('o2end', function(){
timerO2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnO2, MEDstart_btnO2, URGstart_btnO2]);
hideBtn([ reset_btnO2]);
}
)
socket.on('o2resume', function(){
pause_btnO2.innerHTML = 'Pause Service';
}
)
socket.on('o2pause', function(){
pause_btnO2.innerHTML = 'Resume Service';
}
)
//Osborne Room 3 Block
socket.on('o3update', function(timeO3){
timerO3.innerHTML = toHHMMSSO3(timeO3);
hideBtn([INTstart_btnO3, MEDstart_btnO3, URGstart_btnO3]);
showBtn([ reset_btnO3]);
}
)
socket.on('o3end', function(){
timerO3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnO3, MEDstart_btnO3, URGstart_btnO3]);
hideBtn([ reset_btnO3]);
}
)
socket.on('o3resume', function(){
pause_btnO3.innerHTML = 'Pause Service';
}
)
socket.on('o3pause', function(){
pause_btnO3.innerHTML = 'Resume Service';
}
)

	function aP() {
socket.emit('IntP1');
	}
function bP() {
socket.emit ('MedP1');
	}
function cP() {
socket.emit('UrgP1');
	}
function dP() {
socket.emit('StopP1'); 
	}
function eP() {
socket.emit('ResetP1');
	}
function fP() {
socket.emit('IntP2');
}
function gP() {
socket.emit('MedP2');   
}
function hP() {
socket.emit('UrgP2');   
}
function iP() {
socket.emit('StopP2');
}
function jP() {
socket.emit('ResetP2');
}
function kP() {
socket.emit('IntP3');
}  
function lP() {
socket.emit('MedP3');
}
function mP() {
socket.emit('UrgP3');
}
function nP() {
socket.emit('StopP3');
}
function oP() {
socket.emit('ResetP3');
	   }

function toHHMMSSP1(timeP1) {
var hoursP1 = Math.floor(timeP1 / 3600);
var minutesP1 = Math.floor((timeP1 - hoursP1 * 3600) / 60);
var secondsP1 = timeP1 - hoursP1 * 3600 - minutesP1 * 60;
		
hoursP1 = `${hoursP1}`.padStart(2, '0');
minutesP1 = `${minutesP1}`.padStart(2, '0');
secondsP1 = `${secondsP1}`.padStart(2, '0');
		
return hoursP1 + ':' + minutesP1 + ':' + secondsP1;
};

function toHHMMSSP2(timeP2) {
var hoursP2 = Math.floor(timeP2 / 3600);
var minutesP2 = Math.floor((timeP2 - hoursP2 * 3600) / 60);
var secondsP2 = timeP2 - hoursP2 * 3600 - minutesP2 * 60;
	  
hoursP2 = `${hoursP2}`.padStart(2, '0');
minutesP2 = `${minutesP2}`.padStart(2, '0');
secondsP2 = `${secondsP2}`.padStart(2, '0');
	  
return hoursP2 + ':' + minutesP2 + ':' + secondsP2;
 }

 function toHHMMSSP3(timeP3) {
var hoursP3 = Math.floor(timeP3 / 3600);
var minutesP3 = Math.floor((timeP3 - hoursP3 * 3600) / 60);
var secondsP3 = timeP3 - hoursP3 * 3600 - minutesP3 * 60;
		  
hoursP3 = `${hoursP3}`.padStart(2, '0');
minutesP3 = `${minutesP3}`.padStart(2, '0');
secondsP3 = `${secondsP3}`.padStart(2, '0');
		  
return hoursP3 + ':' + minutesP3 + ':' + secondsP3;
}


//Phillipsburg Room 1 Block
socket.on('p1update', function(timeP1){
timerP1.innerHTML = toHHMMSSP1(timeP1);
hideBtn([INTstart_btnP1, MEDstart_btnP1, URGstart_btnP1]);
showBtn([ reset_btnP1]);
}
)
socket.on('p1end', function(){
timerP1.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnP1, MEDstart_btnP1, URGstart_btnP1]);
hideBtn([ reset_btnP1]);
}
)
socket.on('p1resume', function(){
pause_btnP1.innerHTML = 'Pause Service';
}
)
socket.on('p1pause', function(){
pause_btnP1.innerHTML = 'Resume Service';
}
)
//Phillipsburg Room 2 Block
socket.on('p2update', function(timeP2){
timerP2.innerHTML = toHHMMSSP2(timeP2);
hideBtn([INTstart_btnP2, MEDstart_btnP2, URGstart_btnP2]);
showBtn([ reset_btnP2]);
}
)
socket.on('p2end', function(){
timerP2.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnP2, MEDstart_btnP2, URGstart_btnP2]);
hideBtn([ reset_btnP2]);
}
)
socket.on('p2resume', function(){
pause_btnP2.innerHTML = 'Pause Service';
}
)
socket.on('p2pause', function(){
pause_btnP2.innerHTML = 'Resume Service';
}
)
//Phillipsburg Room 3 Block
socket.on('p3update', function(timeP3){
timerP3.innerHTML = toHHMMSSP3(timeP3);
hideBtn([INTstart_btnP3, MEDstart_btnP3, URGstart_btnP3]);
showBtn([ reset_btnP3]);
}
)
socket.on('p3end', function(){
timerP3.innerHTML = "Ths text will change on selecting a timer.";
showBtn([INTstart_btnP3, MEDstart_btnP3, URGstart_btnP3]);
hideBtn([ reset_btnP3]);
}
)
socket.on('p3resume', function(){
pause_btnP3.innerHTML = 'Pause Service';
}
)
socket.on('p3pause', function(){
pause_btnP3.innerHTML = 'Resume Service';
}
)

