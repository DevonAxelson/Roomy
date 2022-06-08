const express = require('express');  
const app = express();  
const server = require('http').createServer(app); 
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const EventEmitter = require('events');
var pem = require('pem')


var timeH1 = 0,
iH1;
var timeH2 = 0,
iH2;
var timeH3 = 0,
iH3;
var timeC1 = 0,
iC1;
var timeC2 = 0,
iC2;
var timeC3 = 0,
iC3;

app.use(express.static(__dirname + '/Content/')); 
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/Content/index.html');

  });

//PLACEHOLDER ROOM 1
function STH1() { 
timeH1 += 1;
io.emit('h1update', timeH1);
}
function SH1() { 
iH1 = setInterval(STH1, 1000);
}
function PH1() { 
if (iH1) {
clearInterval(iH1);
iH1 = null;
io.emit('h1pause');
} else {
iH1 = setInterval(STH1, 1000);
io.emit('h1resume');
}
}   
function RSH1() { 
clearInterval(iH1);
iH1 = null;
timeH1 = 0;
io.emit('h1end', timeH1);
}


//PLACEHOLDER ROOM 2 
function STH2() { 
timeH2 += 1;
io.emit('h2update', timeH2);
}
function SH2() { 
iH2 = setInterval(STH2, 1000);
}
function PH2() { 
if (iH2) {
clearInterval(iH2);
iH2 = null;
io.emit('h2pause');
} else {
iH2 = setInterval(STH2, 1000);
io.emit('h2resume');
}
}   
function RSH2() {
clearInterval(iH2);
iH2 = null;
timeH2 = 0;
io.emit('h2end', timeH2);
}

//PLACEHOLDER ROOM 3
function STH3() {
timeH3 += 1;
io.emit('h3update', timeH3);
}
function SH3() { 
iH3 = setInterval(STH3, 1000);
}
function PH3() { 
if (iH3) {
clearInterval(iH3);
iH3 = null;
io.emit('h3pause');
} else {
iH3 = setInterval(STH3, 1000);
io.emit('h3resume');
}
}   
function RSH3() { 
clearInterval(iH3);
iH3 = null;
timeH3 = 0;
io.emit('h3end', timeH3);
}


  
io.on('connection', function(client) { 
console.log('User has connected'); 

client.on('IntH1', function() {
console.log('An Intake Service in PLACEHOLDER Room 1 has been Started');
SH1();
});
 client.on('MedH1', function() {
console.log('A Med Service in PLACEHOLDER Room 1 has been started Started');
SH1();
});
client.on('UrgH1', function() {
console.log('An Urgent Service in PLACEHOLDER Room 1 has been started');
SH1();
});
client.on('StopH1', function() {
console.log('The Service in PLACEHOLDER Room 1 has been paused.');
PH1();
});
client.on('ResetH1', function() {
console.log('The Service in PLACEHOLDER Room 1 has ended.');
RSH1();
});

client.on('IntH2', function() {
console.log('An Intake Service in PLACEHOLDER Room 2 has been Started');
SH2();
});
client.on('MedH2', function() {
console.log('A Med Service in PLACEHOLDER Room 2 has been started Started');
SH2();
});
client.on('UrgH2', function() {
console.log('An Urgent Service in PLACEHOLDER Room 2 has been started ');
SH2();
 });
client.on('StopH2', function() {
console.log('The Service in PLACEHOLDER Room 2 has been paused.');
PH2();
  });
client.on('ResetH2', function() {
console.log('The Service in PLACEHOLDER Room 2 has ended.');
RSH2();
});
//PLACEHOLDER Room 3
client.on('IntH3', function() {
console.log('An Intake Service in PLACEHOLDER Room 3 has been Started.');
SH3();
});
client.on('MedH3', function() {
console.log('A Med Service in PLACEHOLDER Room 3 has been started Started.');
SH3();
});
client.on('UrgH3', function() {
console.log('An Urgent Service in PLACEHOLDER Room 3 has been started.');
SH3();
});
client.on('StopH3', function() {
console.log('The Service in PLACEHOLDER Room 3 has been paused.');
PH3();
});
client.on('ResetH3', function() {
console.log('The Service in PLACEHOLDER Room 3 has ended.');
RSH3();
});



//PLACEHOLDER ROOM 1
function STC1() { 
timeC1 += 1;
io.emit('c1update', timeC1);
}
function SC1() { 
iC1 = setInterval(STC1, 1000);
}
function PC1() { 
if (iC1) {
clearInterval(iC1);
iC1 = null;
io.emit('c1pause');
} else {
iC1 = setInterval(STC1, 1000);
io.emit('c1resume');
}
}   
function RSC1() { 
clearInterval(iC1);
iC1 = null;
timeC1 = 0;
io.emit('c1end', timeC1);
}


//PLACEHOLDER ROOM 2 
function STC2() { 
timeC2 += 1;
io.emit('c2update', timeC2);
}
function SC2() { 
iC2 = setInterval(STC2, 1000);
}
function PC2() { 
if (iC2) {
clearInterval(iC2);
iC2 = null;
io.emit('c2pause');
} else {
iC2 = setInterval(STC2, 1000);
io.emit('c2resume');
}
}   
function RSC2() {
clearInterval(iC2);
iC2 = null;
timeC2 = 0;
io.emit('c2end', timeC2);
}

//PLACEHOLDER ROOM 3
function STC3() {
timeC3 += 1;
io.emit('c3update', timeC3);
}
function SC3() { 
iC3 = setInterval(STC3, 1000);
}
function PC3() { 
if (iC3) {
clearInterval(iC3);
iC3 = null;
io.emit('c3pause');
} else {
iC3 = setInterval(STC3, 1000);
io.emit('c3resume');
}
}   
function RSC3() { 
clearInterval(iC3);
iC3 = null;
timeC3 = 0;
io.emit('c3end', timeC3);
}

client.on('IntC1', function() {
console.log('An Intake Service in PLACEHOLDER Room 1 has been Started');
SC1();
});
 client.on('MedC1', function() {
console.log('A Med Service in PLACEHOLDER Room 1 has been started Started');
SC1();
});
client.on('UrgC1', function() {
console.log('An Urgent Service in PLACEHOLDER Room 1 has been started');
SC1();
});
client.on('StopC1', function() {
console.log('The Service in PLACEHOLDER Room 1 has been paused.');
PC1();
});
client.on('ResetC1', function() {
console.log('The Service in PLACEHOLDER Room 1 has ended.');
RSC1();
});

client.on('IntC2', function() {
console.log('An Intake Service in PLACEHOLDER Room 2 has been Started');
SC2();
});
client.on('MedC2', function() {
console.log('A Med Service in PLACEHOLDER Room 2 has been started Started');
SC2();
});
client.on('UrgC2', function() {
console.log('An Urgent Service in PLACEHOLDER Room 2 has been started ');
SC2();
 });
client.on('StopC2', function() {
console.log('The Service in PLACEHOLDER Room 2 has been paused.');
PC2();
  });
client.on('ResetC2', function() {
console.log('The Service in PLACEHOLDER Room 2 has ended.');
RSC2();
});
//PLACEHOLDER Room 3
client.on('IntC3', function() {
console.log('An Intake Service in PLACEHOLDER Room 3 has been Started.');
SC3();
});
client.on('MedC3', function() {
console.log('A Med Service in PLACEHOLDER Room 3 has been started Started.');
SC3();
});
client.on('UrgC3', function() {
console.log('An Urgent Service in PLACEHOLDER Room 3 has been started.');
SC3();
});
client.on('StopC3', function() {
console.log('The Service in PLACEHOLDER Room 3 has been paused.');
PC3();
});
client.on('ResetC3', function() {
console.log('The Service in PLACEHOLDER Room 3 has ended.');
RSC3();
});

var timeG1 = 0,
iG1;
var timeG2 = 0,
iG2;
var timeG3 = 0,
iG3;

//PLACEHOLDER ROOM 1
function STG1() { 
timeG1 += 1;
io.emit('g1update', timeG1);
}
function SG1() { 
iG1 = setInterval(STG1, 1000);
}
function PG1() { 
if (iG1) {
clearInterval(iG1);
iG1 = null;
io.emit('g1pause');
} else {
iG1 = setInterval(STG1, 1000);
io.emit('g1resume');
}
}   
function RSG1() { 
clearInterval(iG1);
iG1 = null;
timeG1 = 0;
io.emit('g1end', timeG1);
}


//PLACEHOLDER ROOM 2 
function STG2() { 
timeG2 += 1;
io.emit('g2update', timeG2);
}
function SG2() { 
iG2 = setInterval(STG2, 1000);
}
function PG2() { 
if (iG2) {
clearInterval(iG2);
iG2 = null;
io.emit('g2pause');
} else {
iG2 = setInterval(STG2, 1000);
io.emit('g2resume');
}
}   
function RSG2() {
clearInterval(iG2);
iG2 = null;
timeG2 = 0;
io.emit('g2end', timeG2);
}

//PLACEHOLDER ROOM 3
function STG3() {
timeG3 += 1;
io.emit('g3update', timeG3);
}
function SG3() { 
iG3 = setInterval(STG3, 1000);
}
function PG3() { 
if (iG3) {
clearInterval(iG3);
iG3 = null;
io.emit('g3pause');
} else {
iG3 = setInterval(STG3, 1000);
io.emit('g3resume');
}
}   
function RSG3() { 
clearInterval(iG3);
iG3 = null;
timeG3 = 0;
io.emit('g3end', timeG3);
}

client.on('IntG1', function() {
console.log('An Intake Service in PLACEHOLDER Room 1 has been Started');
SG1();
});
 client.on('MedG1', function() {
console.log('A Med Service in PLACEHOLDER Room 1 has been started Started');
SG1();
});
client.on('UrgG1', function() {
console.log('An Urgent Service in PLACEHOLDER Room 1 has been started');
SG1();
});
client.on('StopG1', function() {
console.log('The Service in PLACEHOLDER Room 1 has been paused.');
PG1();
});
client.on('ResetG1', function() {
console.log('The Service in PLACEHOLDER Room 1 has ended.');
RSG1();
});

client.on('IntG2', function() {
console.log('An Intake Service in PLACEHOLDER Room 2 has been Started');
SG2();
});
client.on('MedG2', function() {
console.log('A Med Service in PLACEHOLDER Room 2 has been started Started');
SG2();
});
client.on('UrgG2', function() {
console.log('An Urgent Service in PLACEHOLDER Room 2 has been started ');
SG2();
 });
client.on('StopG2', function() {
console.log('The Service in PLACEHOLDER Room 2 has been paused.');
PG2();
  });
client.on('ResetG2', function() {
console.log('The Service in PLACEHOLDER Room 2 has ended.');
RSG2();
});
//PLACEHOLDER Room 3
client.on('IntG3', function() {
console.log('An Intake Service in PLACEHOLDER Room 3 has been Started.');
SG3();
});
client.on('MedG3', function() {
console.log('A Med Service in PLACEHOLDER Room 3 has been started Started.');
SG3();
});
client.on('UrgG3', function() {
console.log('An Urgent Service in PLACEHOLDER Room 3 has been started.');
SG3();
});
client.on('StopG3', function() {
console.log('The Service in PLACEHOLDER Room 3 has been paused.');
PG3();
});
client.on('ResetG3', function() {
console.log('The Service in PLACEHOLDER Room 3 has ended.');
RSG3();
});

var timeN1 = 0,
iN1;
var timeN2 = 0,
iN2;
var timeN3 = 0,
iN3;

//PLACEHOLDER ROOM 1
function STN1() { 
timeN1 += 1;
io.emit('n1update', timeN1);
}
function SN1() { 
iN1 = setInterval(STN1, 1000);
}
function PN1() { 
if (iN1) {
clearInterval(iN1);
iN1 = null;
io.emit('n1pause');
} else {
iN1 = setInterval(STN1, 1000);
io.emit('n1resume');
}
}   
function RSN1() { 
clearInterval(iN1);
iN1 = null;
timeN1 = 0;
io.emit('n1end', timeN1);
}


//PLACEHOLDER ROOM 2 
function STN2() { 
timeN2 += 1;
io.emit('n2update', timeN2);
}
function SN2() { 
iN2 = setInterval(STN2, 1000);
}
function PN2() { 
if (iN2) {
clearInterval(iN2);
iN2 = null;
io.emit('n2pause');
} else {
iN2 = setInterval(STN2, 1000);
io.emit('n2resume');
}
}   
function RSN2() {
clearInterval(iN2);
iN2 = null;
timeN2 = 0;
io.emit('n2end', timeN2);
}

//PLACEHOLDER ROOM 3
function STN3() {
timeN3 += 1;
io.emit('n3update', timeN3);
}
function SN3() { 
iN3 = setInterval(STN3, 1000);
}
function PN3() { 
if (iN3) {
clearInterval(iN3);
iN3 = null;
io.emit('n3pause');
} else {
iN3 = setInterval(STN3, 1000);
io.emit('n3resume');
}
}   
function RSN3() { 
clearInterval(iN3);
iN3 = null;
timeN3 = 0;
io.emit('n3end', timeN3);
}

client.on('IntN1', function() {
console.log('An Intake Service in Norton Room 1 has been Started');
SN1();
});
 client.on('MedN1', function() {
console.log('A Med Service in Norton Room 1 has been started Started');
SN1();
});
client.on('UrgN1', function() {
console.log('An Urgent Service in Norton Room 1 has been started');
SN1();
});
client.on('StopN1', function() {
console.log('The Service in Norton Room 1 has been paused.');
PN1();
});
client.on('ResetN1', function() {
console.log('The Service in Norton Room 1 has ended.');
RSN1();
});

client.on('IntN2', function() {
console.log('An Intake Service in Norton Room 2 has been Started');
SN2();
});
client.on('MedN2', function() {
console.log('A Med Service in Norton Room 2 has been started Started');
SN2();
});
client.on('UrgN2', function() {
console.log('An Urgent Service in Norton Room 2 has been started ');
SN2();
 });
client.on('StopN2', function() {
console.log('The Service in Norton Room 2 has been paused.');
PN2();
  });
client.on('ResetN2', function() {
console.log('The Service in Norton Room 2 has ended.');
RSN2();
});
//Norton Room 3
client.on('IntN3', function() {
console.log('An Intake Service in Norton Room 3 has been Started.');
SN3();
});
client.on('MedN3', function() {
console.log('A Med Service in Norton Room 3 has been started Started.');
SN3();
});
client.on('UrgN3', function() {
console.log('An Urgent Service in Norton Room 3 has been started.');
SN3();
});
client.on('StopN3', function() {
console.log('The Service in Norton Room 3 has been paused.');
PN3();
});
client.on('ResetN3', function() {
console.log('The Service in Norton Room 3 has ended.');
RSN3();
});
var timeO1 = 0,
iO1;
var timeO2 = 0,
iO2;
var timeO3 = 0,
iO3;

//PLACEHOLDER ROOM 1
function STO1() { 
timeO1 += 1;
io.emit('o1update', timeO1);
}
function SO1() { 
iO1 = setInterval(STO1, 1000);
}
function PO1() { 
if (iO1) {
clearInterval(iO1);
iO1 = null;
io.emit('o1pause');
} else {
iO1 = setInterval(STO1, 1000);
io.emit('o1resume');
}
}   
function RSO1() { 
clearInterval(iO1);
iO1 = null;
timeO1 = 0;
io.emit('o1end', timeO1);
}
//PLACEHOLDER ROOM 2 
function STO2() { 
timeO2 += 1;
io.emit('o2update', timeO2);
}
function SO2() { 
iO2 = setInterval(STO2, 1000);
}
function PO2() { 
if (iO2) {
clearInterval(iO2);
iO2 = null;
io.emit('o2pause');
} else {
iO2 = setInterval(STO2, 1000);
io.emit('o2resume');
}
}   
function RSO2() {
clearInterval(iO2);
iO2 = null;
timeO2 = 0;
io.emit('o2end', timeO2);
}

//PLACEHOLDER ROOM 3
function STO3() {
timeO3 += 1;
io.emit('o3update', timeO3);
}
function SO3() { 
iO3 = setInterval(STO3, 1000);
}
function PO3() { 
if (iO3) {
clearInterval(iO3);
iO3 = null;
io.emit('o3pause');
} else {
iO3 = setInterval(STO3, 1000);
io.emit('o3resume');
}
}   
function RSO3() { 
clearInterval(iO3);
iO3 = null;
timeO3 = 0;
io.emit('o3end', timeO3);
}

client.on('IntO1', function() {
console.log('An Intake Service in Norton Room 1 has been Started');
SO1();
});
 client.on('MedO1', function() {
console.log('A Med Service in Norton Room 1 has been started Started');
SO1();
});
client.on('UrgO1', function() {
console.log('An Urgent Service in Norton Room 1 has been started');
SO1();
});
client.on('StopO1', function() {
console.log('The Service in Norton Room 1 has been paused.');
PO1();
});
client.on('ResetO1', function() {
console.log('The Service in Norton Room 1 has ended.');
RSO1();
});

client.on('IntO2', function() {
console.log('An Intake Service in Norton Room 2 has been Started');
SO2();
});
client.on('MedO2', function() {
console.log('A Med Service in Norton Room 2 has been started Started');
SO2();
});
client.on('UrgO2', function() {
console.log('An Urgent Service in Norton Room 2 has been started ');
SO2();
 });
client.on('StopO2', function() {
console.log('The Service in Norton Room 2 has been paused.');
PO2();
  });
client.on('ResetO2', function() {
console.log('The Service in Norton Room 2 has ended.');
RSO2();
});
//Norton Room 3
client.on('IntO3', function() {
console.log('An Intake Service in Norton Room 3 has been Started.');
SO3();
});
client.on('MedO3', function() {
console.log('A Med Service in Norton Room 3 has been started Started.');
SO3();
});
client.on('UrgO3', function() {
console.log('An Urgent Service in Norton Room 3 has been started.');
SO3();
});
client.on('StopO3', function() {
console.log('The Service in Norton Room 3 has been paused.');
PO3();
});
client.on('ResetO3', function() {
console.log('The Service in Norton Room 3 has ended.');
RSO3();
});

var timeP1 = 0,
iP1;
var timeP2 = 0,
iP2;
var timeP3 = 0,
iP3;

//PHILLIPSBURG ROOM 1
function STP1() { 
timeP1 += 1;
io.emit('p1update', timeP1);
}
function SP1() { 
iP1 = setInterval(STP1, 1000);
}
function PP1() { 
if (iP1) {
clearInterval(iP1);
iP1 = null;
io.emit('p1pause');
} else {
iP1 = setInterval(STP1, 1000);
io.emit('p1resume');
}
}   
function RSP1() { 
clearInterval(iP1);
iP1 = null;
timeP1 = 0;
io.emit('p1end', timeP1);
}


//PHILLIPSBURG ROOM 2 
function STP2() { 
timeP2 += 1;
io.emit('p2update', timeP2);
}
function SP2() { 
iP2 = setInterval(STP2, 1000);
}
function PP2() { 
if (iP2) {
clearInterval(iP2);
iP2 = null;
io.emit('p2pause');
} else {
iP2 = setInterval(STP2, 1000);
io.emit('p2resume');
}
}   
function RSP2() {
clearInterval(iP2);
iP2 = null;
timeP2 = 0;
io.emit('p2end', timeP2);
}

//PHILLIPSBURG ROOM 3
function STP3() {
timeP3 += 1;
io.emit('p3update', timeP3);
}
function SP3() { 
iP3 = setInterval(STP3, 1000);
}
function PP3() { 
if (iP3) {
clearInterval(iP3);
iP3 = null;
io.emit('p3pause');
} else {
iP3 = setInterval(STP3, 1000);
io.emit('p3resume');
}
}   
function RSP3() { 
clearInterval(iP3);
iP3 = null;
timeP3 = 0;
io.emit('p3end', timeP3);
}

client.on('IntP1', function() {
console.log('An Intake Service in Phillipsburg Room 1 has been Started');
SP1();
});
 client.on('MedP1', function() {
console.log('A Med Service in Phillipsburg Room 1 has been started Started');
SP1();
});
client.on('UrgP1', function() {
console.log('An Urgent Service in Phillipsburg Room 1 has been started');
SP1();
});
client.on('StopP1', function() {
console.log('The Service in Phillipsburg Room 1 has been paused.');
PP1();
});
client.on('ResetP1', function() {
console.log('The Service in Phillipsburg Room 1 has ended.');
RSP1();
});

client.on('IntP2', function() {
console.log('An Intake Service in Phillipsburg Room 2 has been Started');
SP2();
});
client.on('MedP2', function() {
console.log('A Med Service in Phillipsburg Room 2 has been started Started');
SP2();
});
client.on('UrgP2', function() {
console.log('An Urgent Service in Phillipsburg Room 2 has been started ');
SP2();
 });
client.on('StopP2', function() {
console.log('The Service in Phillipsburg Room 2 has been paused.');
PP2();
  });
client.on('ResetP2', function() {
console.log('The Service in Phillipsburg Room 2 has ended.');
RSP2();
});
//Phillipsburg Room 3
client.on('IntP3', function() {
console.log('An Intake Service in Phillipsburg Room 3 has been Started.');
SP3();
});
client.on('MedP3', function() {
console.log('A Med Service in Phillipsburg Room 3 has been started Started.');
SP3();
});
client.on('UrgP3', function() {
console.log('An Urgent Service in Phillipsburg Room 3 has been started.');
SP3();
});
client.on('StopP3', function() {
console.log('The Service in Phillipsburg Room 3 has been paused.');
PP3();
});
client.on('ResetP3', function() {
console.log('The Service in Phillipsburg Room 3 has ended.');
RSP3();
});

});
  //Webserver/Socket On Code
  server.listen(3000, function(){
    console.log('listening on *:3000');
  }); 