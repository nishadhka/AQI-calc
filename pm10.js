function createTablePm10() {
        var myTableDiv = document.getElementById("tablePrint1");  //indiv
        table = document.createElement("TABLE");   //TABLE??
        table.setAttribute("id", "data");
        table.border = '1';
        myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)
        var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "Country";
 var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "India"
var th2 = table.tHead.appendChild(document.createElement("th")); 
 th2.innerHTML = "China"
var th3 = table.tHead.appendChild(document.createElement("th")); 
 th3.innerHTML = "European Union"
var th4 = table.tHead.appendChild(document.createElement("th")); 
 th4.innerHTML = "Hong Kong"
var th5 = table.tHead.appendChild(document.createElement("th")); 
 th5.innerHTML = "Indonesia"
var th6 = table.tHead.appendChild(document.createElement("th")); 
 th6.innerHTML = "South Korea"
var th7 = table.tHead.appendChild(document.createElement("th")); 
 th7.innerHTML = "Sri Lanka"
var th8 = table.tHead.appendChild(document.createElement("th")); 
 th8.innerHTML = "Malyasia"
var th9 = table.tHead.appendChild(document.createElement("th")); 
 th9.innerHTML = "Philippines"
var th10 = table.tHead.appendChild(document.createElement("th")); 
 th10.innerHTML = "Singapore"
var th11 = table.tHead.appendChild(document.createElement("th")); 
 th11.innerHTML = "Thailand"
var th12 = table.tHead.appendChild(document.createElement("th")); 
 th12.innerHTML = "United Kingdom"
var th13 = table.tHead.appendChild(document.createElement("th")); 
 th13.innerHTML = "United States"

}

function Linear(AQIhigh, AQIlow, Conchigh, Conclow, Concentration)
{
var linear;
var Conc=parseFloat(Concentration);
var a;
a=((Conc-Conclow)/(Conchigh-Conclow))*(AQIhigh-AQIlow)+AQIlow;
linear=Math.round(a);
return linear;
}


////////////////
////////////////
////////////////
////////////////
function AQIPM10IND(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<99) 
 { 
 AQI=Linear(100,0,99,0,c); 
 } 
else if (c>=100 && c<149) 
 { 
 AQI=Linear(150,101,149,100,c); 
 } 
 else if (c>=150 && c<349) 
 { 
 AQI=Linear(350,151,349,150,c); 
 } 
 else if (c>=350 && c<419) 
 { 
 AQI=Linear(420,351,419,350,c); 
 } 
 else if (c>=420 && c<999) 
 { 
 AQI=Linear(500,421,999,420,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryINDPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryINDPM10;
 if (AQI<=99) 
 { 
 AQICategoryINDPM10="Good"; 
 } 
else if (AQI>101 && AQI<=150) 
 { 
 AQICategoryINDPM10="Medium"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQICategoryINDPM10="Poor"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQICategoryINDPM10="Very Poor"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQICategoryINDPM10="Severe"; 
 } 
 else 
 { 
 AQICategoryINDPM10="Out of Range"; 
 } 
 return AQICategoryINDPM10; 
 }
function AQIcolorINDPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorINDPM10;
 if (AQI<=99) 
 { 
 AQIcolorINDPM10="#00b050"; 
 } 
else if (AQI>101 && AQI<=150) 
 { 
 AQIcolorINDPM10="#ffff00"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQIcolorINDPM10="#00b0f0"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQIcolorINDPM10="#0000cc"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQIcolorINDPM10="#ff0000"; 
 } 
 else 
 { 
 AQIcolorINDPM10="Out of Range"; 
 } 
 return AQIcolorINDPM10; 
 }
function AQIPM10US(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<54) 
 { 
 AQI=Linear(50,0,54,0,c); 
 } 
else if (c>=55 && c<154) 
 { 
 AQI=Linear(100,51,154,55,c); 
 } 
 else if (c>=155 && c<254) 
 { 
 AQI=Linear(150,101,254,155,c); 
 } 
 else if (c>=255 && c<354) 
 { 
 AQI=Linear(200,151,354,255,c); 
 } 
 else if (c>=355 && c<424) 
 { 
 AQI=Linear(300,201,424,355,c); 
 } 
 else if (c>=425 && c<504) 
 { 
 AQI=Linear(400,301,504,425,c); 
 } 
 else if (c>=505 && c<604) 
 { 
 AQI=Linear(500,401,604,505,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUSPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUSPM10;
 if (AQI<=54) 
 { 
 AQICategoryUSPM10="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryUSPM10="Moderate"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQICategoryUSPM10="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQICategoryUSPM10="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryUSPM10="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryUSPM10="Hazardous"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryUSPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategoryUSPM10="Out of Range"; 
 } 
 return AQICategoryUSPM10; 
 }
function AQIcolorUSPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUSPM10;
 if (AQI<=54) 
 { 
 AQIcolorUSPM10="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorUSPM10="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQIcolorUSPM10="#fc8004"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQIcolorUSPM10="#ff0000"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorUSPM10="#9e004f"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorUSPM10="#851911"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorUSPM10="#851911"; 
 } 
 else 
 { 
 AQIcolorUSPM10="Out of Range"; 
 } 
 return AQIcolorUSPM10; 
 }
function AQIPM10CN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(50,0,49,0,c); 
 } 
else if (c>=50 && c<149) 
 { 
 AQI=Linear(100,51,149,50,c); 
 } 
 else if (c>=150 && c<249) 
 { 
 AQI=Linear(150,101,249,150,c); 
 } 
 else if (c>=250 && c<349) 
 { 
 AQI=Linear(200,151,349,250,c); 
 } 
 else if (c>=350 && c<419) 
 { 
 AQI=Linear(300,201,419,350,c); 
 } 
 else if (c>=420 && c<499) 
 { 
 AQI=Linear(400,301,499,420,c); 
 } 
 else if (c>=500 && c<599) 
 { 
 AQI=Linear(500,401,599,500,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryCNPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryCNPM10;
 if (AQI<=49) 
 { 
 AQICategoryCNPM10="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryCNPM10="Moderate"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQICategoryCNPM10="Lightly Polluted"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQICategoryCNPM10="Medially Polluted"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryCNPM10="Heavily Polluted"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryCNPM10="Severely Polluted"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryCNPM10="Severely Polluted"; 
 } 
 else 
 { 
 AQICategoryCNPM10="Out of Range"; 
 } 
 return AQICategoryCNPM10; 
 }
function AQIcolorCNPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorCNPM10;
 if (AQI<=49) 
 { 
 AQIcolorCNPM10="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorCNPM10="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQIcolorCNPM10="#fc8004"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQIcolorCNPM10="#ff0000"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorCNPM10="#800080"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorCNPM10="#96001d"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorCNPM10="#96001d"; 
 } 
 else 
 { 
 AQIcolorCNPM10="Out of Range"; 
 } 
 return AQIcolorCNPM10; 
 }
function AQIPM10EU(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<14) 
 { 
 AQI=Linear(15,0,14,0,c); 
 } 
else if (c>=15 && c<29) 
 { 
 AQI=Linear(30,16,29,15,c); 
 } 
 else if (c>=30 && c<49) 
 { 
 AQI=Linear(50,31,49,30,c); 
 } 
 else if (c>=50 && c<99) 
 { 
 AQI=Linear(100,51,99,50,c); 
 } 
 else if (c>=100 && c<999) 
 { 
 AQI=Linear(100,1,999,100,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryEUPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryEUPM10;
 if (AQI<=14) 
 { 
 AQICategoryEUPM10="Very Low"; 
 } 
else if (AQI>16 && AQI<=30) 
 { 
 AQICategoryEUPM10="Low"; 
 } 
 else if (AQI>31 && AQI<=50) 
 { 
 AQICategoryEUPM10="Medium"; 
 } 
 else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryEUPM10="High"; 
 } 
 else if (AQI>1 && AQI<=100) 
 { 
 AQICategoryEUPM10="Very High"; 
 } 
 else 
 { 
 AQICategoryEUPM10="Out of Range"; 
 } 
 return AQICategoryEUPM10; 
 }
function AQIcolorEUPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorEUPM10;
 if (AQI<=14) 
 { 
 AQIcolorEUPM10="#96001d"; 
 } 
else if (AQI>16 && AQI<=30) 
 { 
 AQIcolorEUPM10="#99ff33"; 
 } 
 else if (AQI>31 && AQI<=50) 
 { 
 AQIcolorEUPM10="#ffff00"; 
 } 
 else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorEUPM10="#fc8004"; 
 } 
 else if (AQI>1 && AQI<=100) 
 { 
 AQIcolorEUPM10="#a20000"; 
 } 
 else 
 { 
 AQIcolorEUPM10="Out of Range"; 
 } 
 return AQIcolorEUPM10; 
 }
function AQIPM10HK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<29) 
 { 
 AQI=Linear(28,0,29,0,c); 
 } 
else if (c>=30 && c<59) 
 { 
 AQI=Linear(55,29,59,30,c); 
 } 
 else if (c>=60 && c<174) 
 { 
 AQI=Linear(180,56,174,60,c); 
 } 
 else if (c>=175 && c<349) 
 { 
 AQI=Linear(350,181,349,175,c); 
 } 
 else if (c>=350 && c<600) 
 { 
 AQI=Linear(600,351,600,350,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryHKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryHKPM10;
 if (AQI<=29) 
 { 
 AQICategoryHKPM10="Low"; 
 } 
else if (AQI>29 && AQI<=55) 
 { 
 AQICategoryHKPM10="Medium"; 
 } 
 else if (AQI>56 && AQI<=180) 
 { 
 AQICategoryHKPM10="High"; 
 } 
 else if (AQI>181 && AQI<=350) 
 { 
 AQICategoryHKPM10="Very High"; 
 } 
 else if (AQI>351 && AQI<=600) 
 { 
 AQICategoryHKPM10="Severe"; 
 } 
 else 
 { 
 AQICategoryHKPM10="Out of Range"; 
 } 
 return AQICategoryHKPM10; 
 }
function AQIcolorHKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorHKPM10;
 if (AQI<=29) 
 { 
 AQIcolorHKPM10="#00b050"; 
 } 
else if (AQI>29 && AQI<=55) 
 { 
 AQIcolorHKPM10="#00b0f0"; 
 } 
 else if (AQI>56 && AQI<=180) 
 { 
 AQIcolorHKPM10="#ffff00"; 
 } 
 else if (AQI>181 && AQI<=350) 
 { 
 AQIcolorHKPM10="#ff0000"; 
 } 
 else if (AQI>351 && AQI<=600) 
 { 
 AQIcolorHKPM10="#00000"; 
 } 
 else 
 { 
 AQIcolorHKPM10="Out of Range"; 
 } 
 return AQIcolorHKPM10; 
 }
function AQIPM10IDN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(50,0,49,0,c); 
 } 
else if (c>=51 && c<99) 
 { 
 AQI=Linear(100,51,99,51,c); 
 } 
 else if (c>=101 && c<199) 
 { 
 AQI=Linear(250,101,199,101,c); 
 } 
 else if (c>=201 && c<299) 
 { 
 AQI=Linear(350,251,299,201,c); 
 } 
 else if (c>=301 && c<399) 
 { 
 AQI=Linear(430,351,399,301,c); 
 } 
 else if (c>=401 && c<999) 
 { 
 AQI=Linear(500,431,999,401,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryIDNPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryIDNPM10;
 if (AQI<=49) 
 { 
 AQICategoryIDNPM10="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryIDNPM10="Medium"; 
 } 
 else if (AQI>101 && AQI<=250) 
 { 
 AQICategoryIDNPM10="Unfair"; 
 } 
 else if (AQI>251 && AQI<=350) 
 { 
 AQICategoryIDNPM10="Very Unfair"; 
 } 
 else if (AQI>351 && AQI<=430) 
 { 
 AQICategoryIDNPM10="Dangerous"; 
 } 
 else if (AQI>431 && AQI<=500) 
 { 
 AQICategoryIDNPM10="Dangerous"; 
 } 
 else 
 { 
 AQICategoryIDNPM10="Out of Range"; 
 } 
 return AQICategoryIDNPM10; 
 }
function AQIcolorIDNPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorIDNPM10;
 if (AQI<=49) 
 { 
 AQIcolorIDNPM10="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorIDNPM10="#0000ff"; 
 } 
 else if (AQI>101 && AQI<=250) 
 { 
 AQIcolorIDNPM10="#ffff00"; 
 } 
 else if (AQI>251 && AQI<=350) 
 { 
 AQIcolorIDNPM10="#ff0000"; 
 } 
 else if (AQI>351 && AQI<=430) 
 { 
 AQIcolorIDNPM10="#00000"; 
 } 
 else if (AQI>431 && AQI<=500) 
 { 
 AQIcolorIDNPM10="#00000"; 
 } 
 else 
 { 
 AQIcolorIDNPM10="Out of Range"; 
 } 
 return AQIcolorIDNPM10; 
 }
function AQIPM10KR(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(30,0,49,0,c); 
 } 
else if (c>=51 && c<99) 
 { 
 AQI=Linear(80,31,99,51,c); 
 } 
 else if (c>=101 && c<149) 
 { 
 AQI=Linear(120,81,149,101,c); 
 } 
 else if (c>=151 && c<249) 
 { 
 AQI=Linear(200,121,249,151,c); 
 } 
 else if (c>=251 && c<349) 
 { 
 AQI=Linear(300,201,349,251,c); 
 } 
 else if (c>=351 && c<499) 
 { 
 AQI=Linear(600,301,499,351,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryKRPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryKRPM10;
 if (AQI<=49) 
 { 
 AQICategoryKRPM10="Good"; 
 } 
else if (AQI>31 && AQI<=80) 
 { 
 AQICategoryKRPM10="Moderate"; 
 } 
 else if (AQI>81 && AQI<=120) 
 { 
 AQICategoryKRPM10="Unhealthy for Sensitive Groups"; 
 } 
 else if (AQI>121 && AQI<=200) 
 { 
 AQICategoryKRPM10="Very Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryKRPM10="Hazardous"; 
 } 
 else if (AQI>301 && AQI<=600) 
 { 
 AQICategoryKRPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategoryKRPM10="Out of Range"; 
 } 
 return AQICategoryKRPM10; 
 }
function AQIcolorKRPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorKRPM10;
 if (AQI<=49) 
 { 
 AQIcolorKRPM10="#0000ff"; 
 } 
else if (AQI>31 && AQI<=80) 
 { 
 AQIcolorKRPM10="#00b050"; 
 } 
 else if (AQI>81 && AQI<=120) 
 { 
 AQIcolorKRPM10="#ffff00"; 
 } 
 else if (AQI>121 && AQI<=200) 
 { 
 AQIcolorKRPM10="#ff6600"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorKRPM10="#da0000"; 
 } 
 else if (AQI>301 && AQI<=600) 
 { 
 AQIcolorKRPM10="#da0000"; 
 } 
 else 
 { 
 AQIcolorKRPM10="Out of Range"; 
 } 
 return AQIcolorKRPM10; 
 }
function AQIPM10LK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(54,0,49,0,c); 
 } 
else if (c>=50 && c<149) 
 { 
 AQI=Linear(154,55,149,50,c); 
 } 
 else if (c>=150 && c<249) 
 { 
 AQI=Linear(254,155,249,150,c); 
 } 
 else if (c>=250 && c<349) 
 { 
 AQI=Linear(354,255,349,250,c); 
 } 
 else if (c>=350 && c<424) 
 { 
 AQI=Linear(424,355,424,350,c); 
 } 
 else if (c>=425 && c<604) 
 { 
 AQI=Linear(604,425,604,425,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryLKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryLKPM10;
 if (AQI<=49) 
 { 
 AQICategoryLKPM10="Good"; 
 } 
else if (AQI>55 && AQI<=154) 
 { 
 AQICategoryLKPM10="Moderate"; 
 } 
 else if (AQI>155 && AQI<=254) 
 { 
 AQICategoryLKPM10="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>255 && AQI<=354) 
 { 
 AQICategoryLKPM10="Unhealthy"; 
 } 
 else if (AQI>355 && AQI<=424) 
 { 
 AQICategoryLKPM10="Very Unhealthy"; 
 } 
 else if (AQI>425 && AQI<=604) 
 { 
 AQICategoryLKPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategoryLKPM10="Out of Range"; 
 } 
 return AQICategoryLKPM10; 
 }
function AQIcolorLKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorLKPM10;
 if (AQI<=49) 
 { 
 AQIcolorLKPM10="#00b050"; 
 } 
else if (AQI>55 && AQI<=154) 
 { 
 AQIcolorLKPM10="#ffff00"; 
 } 
 else if (AQI>155 && AQI<=254) 
 { 
 AQIcolorLKPM10="#ff66ff"; 
 } 
 else if (AQI>255 && AQI<=354) 
 { 
 AQIcolorLKPM10="#ff0000"; 
 } 
 else if (AQI>355 && AQI<=424) 
 { 
 AQIcolorLKPM10="#9e004f"; 
 } 
 else if (AQI>425 && AQI<=604) 
 { 
 AQIcolorLKPM10="#851911"; 
 } 
 else 
 { 
 AQIcolorLKPM10="Out of Range"; 
 } 
 return AQIcolorLKPM10; 
 }
function AQIPM10MY(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(50,0,49,0,c); 
 } 
else if (c>=50 && c<149) 
 { 
 AQI=Linear(150,51,149,50,c); 
 } 
 else if (c>=150 && c<349) 
 { 
 AQI=Linear(350,151,349,150,c); 
 } 
 else if (c>=350 && c<419) 
 { 
 AQI=Linear(420,351,419,350,c); 
 } 
 else if (c>=420 && c<999) 
 { 
 AQI=Linear(500,421,999,420,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryMYPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryMYPM10;
 if (AQI<=49) 
 { 
 AQICategoryMYPM10="Good"; 
 } 
else if (AQI>51 && AQI<=150) 
 { 
 AQICategoryMYPM10="Moderate"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQICategoryMYPM10="Unhealthy"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQICategoryMYPM10="Very Unhealthy"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQICategoryMYPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategoryMYPM10="Out of Range"; 
 } 
 return AQICategoryMYPM10; 
 }
function AQIcolorMYPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorMYPM10;
 if (AQI<=49) 
 { 
 AQIcolorMYPM10="#0000ff"; 
 } 
else if (AQI>51 && AQI<=150) 
 { 
 AQIcolorMYPM10="#00b050"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQIcolorMYPM10="#ffff00"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQIcolorMYPM10="#dd5800"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQIcolorMYPM10="#ff0000"; 
 } 
 else 
 { 
 AQIcolorMYPM10="Out of Range"; 
 } 
 return AQIcolorMYPM10; 
 }
function AQIPM10PH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(54,0,49,0,c); 
 } 
else if (c>=50 && c<149) 
 { 
 AQI=Linear(154,55,149,50,c); 
 } 
 else if (c>=150 && c<254) 
 { 
 AQI=Linear(254,155,254,150,c); 
 } 
 else if (c>=255 && c<354) 
 { 
 AQI=Linear(354,255,354,255,c); 
 } 
 else if (c>=355 && c<424) 
 { 
 AQI=Linear(424,355,424,355,c); 
 } 
 else if (c>=425 && c<999) 
 { 
 AQI=Linear(500,425,999,425,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryPHPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryPHPM10;
 if (AQI<=49) 
 { 
 AQICategoryPHPM10="Good"; 
 } 
else if (AQI>55 && AQI<=154) 
 { 
 AQICategoryPHPM10="Fair"; 
 } 
 else if (AQI>155 && AQI<=254) 
 { 
 AQICategoryPHPM10="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>255 && AQI<=354) 
 { 
 AQICategoryPHPM10="Very Unhealthy"; 
 } 
 else if (AQI>355 && AQI<=424) 
 { 
 AQICategoryPHPM10="Accutely Unhealthy"; 
 } 
 else if (AQI>425 && AQI<=500) 
 { 
 AQICategoryPHPM10="Emergency"; 
 } 
 else 
 { 
 AQICategoryPHPM10="Out of Range"; 
 } 
 return AQICategoryPHPM10; 
 }
function AQIcolorPHPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorPHPM10;
 if (AQI<=49) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
else if (AQI>55 && AQI<=154) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>155 && AQI<=254) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>255 && AQI<=354) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>355 && AQI<=424) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>425 && AQI<=500) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else 
 { 
 AQIcolorPHPM10="Out of Range"; 
 } 
 return AQIcolorPHPM10; 
 }
function AQIPM10SG(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<49) 
 { 
 AQI=Linear(50,0,49,0,c); 
 } 
else if (c>=50 && c<139) 
 { 
 AQI=Linear(150,51,139,50,c); 
 } 
 else if (c>=140 && c<349) 
 { 
 AQI=Linear(350,151,349,140,c); 
 } 
 else if (c>=350 && c<419) 
 { 
 AQI=Linear(420,351,419,350,c); 
 } 
 else if (c>=420 && c<999) 
 { 
 AQI=Linear(500,421,999,420,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategorySGPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategorySGPM10;
 if (AQI<=49) 
 { 
 AQICategorySGPM10="Good"; 
 } 
else if (AQI>51 && AQI<=150) 
 { 
 AQICategorySGPM10="Moderate"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQICategorySGPM10="Unhealthy"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQICategorySGPM10="Very Unhealthy"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQICategorySGPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategorySGPM10="Out of Range"; 
 } 
 return AQICategorySGPM10; 
 }
function AQIcolorSGPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorSGPM10;
 if (AQI<=49) 
 { 
 AQIcolorSGPM10="#00b050"; 
 } 
else if (AQI>51 && AQI<=150) 
 { 
 AQIcolorSGPM10="#0070c0"; 
 } 
 else if (AQI>151 && AQI<=350) 
 { 
 AQIcolorSGPM10="#ffff00"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQIcolorSGPM10="#fc8004"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQIcolorSGPM10="#ff0000"; 
 } 
 else 
 { 
 AQIcolorSGPM10="Out of Range"; 
 } 
 return AQIcolorSGPM10; 
 }
function AQIPM10TH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<39) 
 { 
 AQI=Linear(40,0,39,0,c); 
 } 
else if (c>=40 && c<119) 
 { 
 AQI=Linear(120,41,119,40,c); 
 } 
 else if (c>=120 && c<349) 
 { 
 AQI=Linear(350,121,349,120,c); 
 } 
 else if (c>=350 && c<419) 
 { 
 AQI=Linear(420,351,419,350,c); 
 } 
 else if (c>=420 && c<999) 
 { 
 AQI=Linear(500,421,999,420,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryTHPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryTHPM10;
 if (AQI<=39) 
 { 
 AQICategoryTHPM10="Good"; 
 } 
else if (AQI>41 && AQI<=120) 
 { 
 AQICategoryTHPM10="Moderate"; 
 } 
 else if (AQI>121 && AQI<=350) 
 { 
 AQICategoryTHPM10="Unhealthy"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQICategoryTHPM10="Very Unhealthful"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQICategoryTHPM10="Hazardous"; 
 } 
 else 
 { 
 AQICategoryTHPM10="Out of Range"; 
 } 
 return AQICategoryTHPM10; 
 }
function AQIcolorTHPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorTHPM10;
 if (AQI<=39) 
 { 
 AQIcolorTHPM10="#66ffcc"; 
 } 
else if (AQI>41 && AQI<=120) 
 { 
 AQIcolorTHPM10="#00b050"; 
 } 
 else if (AQI>121 && AQI<=350) 
 { 
 AQIcolorTHPM10="#ffff00"; 
 } 
 else if (AQI>351 && AQI<=420) 
 { 
 AQIcolorTHPM10="#fc8004"; 
 } 
 else if (AQI>421 && AQI<=500) 
 { 
 AQIcolorTHPM10="#ff0000"; 
 } 
 else 
 { 
 AQIcolorTHPM10="Out of Range"; 
 } 
 return AQIcolorTHPM10; 
 }
function AQIPM10UK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<16) 
 { 
 AQI=Linear(1,0,16,0,c); 
 } 
else if (c>=17 && c<33) 
 { 
 AQI=Linear(2,1,33,17,c); 
 } 
 else if (c>=34 && c<50) 
 { 
 AQI=Linear(3,2,50,34,c); 
 } 
 else if (c>=51 && c<58) 
 { 
 AQI=Linear(4,3,58,51,c); 
 } 
 else if (c>=59 && c<66) 
 { 
 AQI=Linear(5,4,66,59,c); 
 } 
 else if (c>=67 && c<75) 
 { 
 AQI=Linear(6,5,75,67,c); 
 } 
 else if (c>=76 && c<83) 
 { 
 AQI=Linear(7,6,83,76,c); 
 } 
 else if (c>=84 && c<91) 
 { 
 AQI=Linear(8,7,91,84,c); 
 } 
 else if (c>=92 && c<99) 
 { 
 AQI=Linear(9,8,99,92,c); 
 } 
 else if (c>=100 && c<999) 
 { 
 AQI=Linear(10,9,999,100,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUKPM10;
 if (AQI<=16) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
else if (AQI>1 && AQI<=2) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
 else if (AQI>2 && AQI<=3) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
 else if (AQI>3 && AQI<=4) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>4 && AQI<=5) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>5 && AQI<=6) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>6 && AQI<=7) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>7 && AQI<=8) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>8 && AQI<=9) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>9 && AQI<=10) 
 { 
 AQICategoryUKPM10="Very High"; 
 } 
 else 
 { 
 AQICategoryUKPM10="Out of Range"; 
 } 
 return AQICategoryUKPM10; 
 }
function AQIcolorUKPM10(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUKPM10;
 if (AQI<=16) 
 { 
 AQIcolorUKPM10="#99ff99"; 
 } 
else if (AQI>1 && AQI<=2) 
 { 
 AQIcolorUKPM10="#00ff00"; 
 } 
 else if (AQI>2 && AQI<=3) 
 { 
 AQIcolorUKPM10="#54bc2a"; 
 } 
 else if (AQI>3 && AQI<=4) 
 { 
 AQIcolorUKPM10="#ffff00"; 
 } 
 else if (AQI>4 && AQI<=5) 
 { 
 AQIcolorUKPM10="#ffc000"; 
 } 
 else if (AQI>5 && AQI<=6) 
 { 
 AQIcolorUKPM10="#fc8004"; 
 } 
 else if (AQI>6 && AQI<=7) 
 { 
 AQIcolorUKPM10="#ff6d6d"; 
 } 
 else if (AQI>7 && AQI<=8) 
 { 
 AQIcolorUKPM10="#ff0000"; 
 } 
 else if (AQI>8 && AQI<=9) 
 { 
 AQIcolorUKPM10="#c00000"; 
 } 
 else if (AQI>9 && AQI<=10) 
 { 
 AQIcolorUKPM10="#cc00ff"; 
 } 
 else 
 { 
 AQIcolorUKPM10="Out of Range"; 
 } 
 return AQIcolorUKPM10; 
 }
////////////////
////////////////
////////////////
////////////////




var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
function AQICalcPm10(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQIPM10IND(f)
b13=AQIPM10US(f)
b2=AQIPM10CN(f)
b3=AQIPM10EU(f)
b4=AQIPM10HK(f)
b5=AQIPM10IDN(f)
b6=AQIPM10KR(f)
b7=AQIPM10LK(f)
b8=AQIPM10MY(f)
b9=AQIPM10PH(f)
b10=AQIPM10SG(f)
b11=AQIPM10TH(f)
b12=AQIPM10UK(f)
console.log(b1)
console.log(b13)

}


function appendRowPm10() {

        if (b1 == "Out of Range")
{
	alert("The concentration number you've entered is out of range for this pollutant.");
	document.form.inputbox.value=" ";
	document.form.outputbox1a.value=" ";
	document.form.outputbox2a.value=" ";
}

else
{
	
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        
        
	row.insertCell(0).innerHTML = b13;
	row.insertCell(0).innerHTML = b12;
	row.insertCell(0).innerHTML = b11;
	row.insertCell(0).innerHTML = b10;
	row.insertCell(0).innerHTML = b9;
	row.insertCell(0).innerHTML = b8;
	row.insertCell(0).innerHTML = b7;
	row.insertCell(0).innerHTML = b6;
	row.insertCell(0).innerHTML = b5;
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = b3;
	row.insertCell(0).innerHTML = b2;
	row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "AQI";
        
 
}

return true;
        

}


function appendRow1Pm10() {

        if (b1 == "Out of Range")
{
	alert("The concentration number you've entered is out of range for this pollutant.");
	document.form.inputbox.value=" ";
	document.form.outputbox1a.value=" ";
	document.form.outputbox2a.value=" ";
}

else
{
	
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

	row.insertCell(0).innerHTML = AQICategoryUSPM10(b13);
	row.insertCell(0).innerHTML = AQICategoryUKPM10(b12);
	row.insertCell(0).innerHTML = AQICategoryTHPM10(b11);
	row.insertCell(0).innerHTML = AQICategorySGPM10(b10);
	row.insertCell(0).innerHTML = AQICategoryPHPM10(b9);
	row.insertCell(0).innerHTML = AQICategoryMYPM10(b8);
	row.insertCell(0).innerHTML = AQICategoryLKPM10(b7);
	row.insertCell(0).innerHTML = AQICategoryKRPM10(b6);
	row.insertCell(0).innerHTML = AQICategoryIDNPM10(b5);
	row.insertCell(0).innerHTML = AQICategoryHKPM10(b4);
	row.insertCell(0).innerHTML = AQICategoryEUPM10(b3);
	row.insertCell(0).innerHTML = AQICategoryCNPM10(b2);
	row.insertCell(0).innerHTML = AQICategoryINDPM10(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}

function appendRow2Pm10() {

        if (b1 == "Out of Range")
{
	alert("The concentration number you've entered is out of range for this pollutant.");
	document.form.inputbox.value=" ";
	document.form.outputbox1a.value=" ";
	document.form.outputbox2a.value=" ";
}

else
{
	
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).style.backgroundColor = AQIcolorUSPM10(b13);
	row.insertCell(0).style.backgroundColor = AQIcolorUKPM10(b12);
	row.insertCell(0).style.backgroundColor = AQIcolorTHPM10(b11);
	row.insertCell(0).style.backgroundColor = AQIcolorSGPM10(b10);
	row.insertCell(0).style.backgroundColor = AQIcolorPHPM10(b9);
	row.insertCell(0).style.backgroundColor = AQIcolorMYPM10(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorLKPM10(b7);
	row.insertCell(0).style.backgroundColor = AQIcolorKRPM10(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorIDNPM10(b5);
	row.insertCell(0).style.backgroundColor = AQIcolorHKPM10(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorEUPM10(b3);
	row.insertCell(0).style.backgroundColor = AQIcolorCNPM10(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDPM10(b1);
        row.insertCell(0).innerHTML = "AQI colour";
}

return true;
        

}
