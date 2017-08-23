function createTablePm25() {
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
 th4.innerHTML = "Japan"
var th7 = table.tHead.appendChild(document.createElement("th")); 
 th7.innerHTML = "Sri Lanka"
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
function AQIPM25IND(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<29) 
 { 
 AQI=Linear(50,0,29,0,c); 
 } 
else if (c>=30 && c<59) 
 { 
 AQI=Linear(100,51,59,30,c); 
 } 
 else if (c>=60 && c<89) 
 { 
 AQI=Linear(200,101,89,60,c); 
 } 
 else if (c>=90 && c<119) 
 { 
 AQI=Linear(300,201,119,90,c); 
 } 
 else if (c>=120 && c<249) 
 { 
 AQI=Linear(400,301,249,120,c); 
 } 
 else if (c>=250 && c<999) 
 { 
 AQI=Linear(500,401,999,250,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryINDPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryINDPM25;
 if (AQI<=29) 
 { 
 AQICategoryINDPM25="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryINDPM25="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryINDPM25="Poor"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryINDPM25="Very Poor"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryINDPM25="Severe"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryINDPM25="Severe"; 
 } 
 else 
 { 
 AQICategoryINDPM25="Out of Range"; 
 } 
 return AQICategoryINDPM25; 
 }
function AQIcolorINDPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorINDPM25;
 if (AQI<=29) 
 { 
 AQIcolorINDPM25="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorINDPM25="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorINDPM25="#00b0f0"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorINDPM25="#0000cc"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorINDPM25="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorINDPM25="#ff0000"; 
 } 
 else 
 { 
 AQIcolorINDPM25="Out of Range"; 
 } 
 return AQIcolorINDPM25; 
 }
function AQIPM25US(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<12) 
 { 
 AQI=Linear(50,0,12,0,c); 
 } 
else if (c>=12 && c<35) 
 { 
 AQI=Linear(100,51,35,12,c); 
 } 
 else if (c>=36 && c<55) 
 { 
 AQI=Linear(150,101,55,36,c); 
 } 
 else if (c>=56 && c<150) 
 { 
 AQI=Linear(200,151,150,56,c); 
 } 
 else if (c>=151 && c<250) 
 { 
 AQI=Linear(300,201,250,151,c); 
 } 
 else if (c>=251 && c<350) 
 { 
 AQI=Linear(400,301,350,251,c); 
 } 
 else if (c>=351 && c<500) 
 { 
 AQI=Linear(500,401,500,351,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUSPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUSPM25;
 if (AQI<=12) 
 { 
 AQICategoryUSPM25="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryUSPM25="Moderate"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQICategoryUSPM25="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQICategoryUSPM25="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryUSPM25="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryUSPM25="Hazardous"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryUSPM25="Hazardous"; 
 } 
 else 
 { 
 AQICategoryUSPM25="Out of Range"; 
 } 
 return AQICategoryUSPM25; 
 }
function AQIcolorUSPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUSPM25;
 if (AQI<=12) 
 { 
 AQIcolorUSPM25="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorUSPM25="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=150) 
 { 
 AQIcolorUSPM25="#fc8004"; 
 } 
 else if (AQI>151 && AQI<=200) 
 { 
 AQIcolorUSPM25="#ff0000"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorUSPM25="#9e004f"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorUSPM25="#851911"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorUSPM25="#851911"; 
 } 
 else 
 { 
 AQIcolorUSPM25="Out of Range"; 
 } 
 return AQIcolorUSPM25; 
 }
function AQIPM25CN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<34) 
 { 
 AQI=Linear(35,0,34,0,c); 
 } 
else if (c>=35 && c<74) 
 { 
 AQI=Linear(75,36,74,35,c); 
 } 
 else if (c>=75 && c<114) 
 { 
 AQI=Linear(115,76,114,75,c); 
 } 
 else if (c>=115 && c<159) 
 { 
 AQI=Linear(150,116,159,115,c); 
 } 
 else if (c>=160 && c<249) 
 { 
 AQI=Linear(250,151,249,160,c); 
 } 
 else if (c>=240 && c<349) 
 { 
 AQI=Linear(350,251,349,240,c); 
 } 
 else if (c>=350 && c<999) 
 { 
 AQI=Linear(500,351,999,350,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryCNPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryCNPM25;
 if (AQI<=34) 
 { 
 AQICategoryCNPM25="Good"; 
 } 
else if (AQI>36 && AQI<=75) 
 { 
 AQICategoryCNPM25="Moderate"; 
 } 
 else if (AQI>76 && AQI<=115) 
 { 
 AQICategoryCNPM25="Lightly Polluted"; 
 } 
 else if (AQI>116 && AQI<=150) 
 { 
 AQICategoryCNPM25="Medially Polluted"; 
 } 
 else if (AQI>151 && AQI<=250) 
 { 
 AQICategoryCNPM25="Heavily Polluted"; 
 } 
 else if (AQI>251 && AQI<=350) 
 { 
 AQICategoryCNPM25="Severely Polluted"; 
 } 
 else if (AQI>351 && AQI<=500) 
 { 
 AQICategoryCNPM25="Severely Polluted"; 
 } 
 else 
 { 
 AQICategoryCNPM25="Out of Range"; 
 } 
 return AQICategoryCNPM25; 
 }
function AQIcolorCNPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorCNPM25;
 if (AQI<=34) 
 { 
 AQIcolorCNPM25="#00b050"; 
 } 
else if (AQI>36 && AQI<=75) 
 { 
 AQIcolorCNPM25="#ffff00"; 
 } 
 else if (AQI>76 && AQI<=115) 
 { 
 AQIcolorCNPM25="#fc8004"; 
 } 
 else if (AQI>116 && AQI<=150) 
 { 
 AQIcolorCNPM25="#ff0000"; 
 } 
 else if (AQI>151 && AQI<=250) 
 { 
 AQIcolorCNPM25="#800080"; 
 } 
 else if (AQI>251 && AQI<=350) 
 { 
 AQIcolorCNPM25="#96001d"; 
 } 
 else if (AQI>351 && AQI<=500) 
 { 
 AQIcolorCNPM25="#96001d"; 
 } 
 else 
 { 
 AQIcolorCNPM25="Out of Range"; 
 } 
 return AQIcolorCNPM25; 
 }
function AQIPM25EU(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<19) 
 { 
 AQI=Linear(10,0,19,0,c); 
 } 
else if (c>=20 && c<29) 
 { 
 AQI=Linear(20,11,29,20,c); 
 } 
 else if (c>=30 && c<39) 
 { 
 AQI=Linear(30,21,39,30,c); 
 } 
 else if (c>=40 && c<59) 
 { 
 AQI=Linear(60,31,59,40,c); 
 } 
 else if (c>=60 && c<999) 
 { 
 AQI=Linear(100,61,999,60,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryEUPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryEUPM25;
 if (AQI<=19) 
 { 
 AQICategoryEUPM25="Very Low"; 
 } 
else if (AQI>11 && AQI<=20) 
 { 
 AQICategoryEUPM25="Low"; 
 } 
 else if (AQI>21 && AQI<=30) 
 { 
 AQICategoryEUPM25="Medium"; 
 } 
 else if (AQI>31 && AQI<=60) 
 { 
 AQICategoryEUPM25="High"; 
 } 
 else if (AQI>61 && AQI<=100) 
 { 
 AQICategoryEUPM25="Very High"; 
 } 
 else 
 { 
 AQICategoryEUPM25="Out of Range"; 
 } 
 return AQICategoryEUPM25; 
 }
function AQIcolorEUPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorEUPM25;
 if (AQI<=19) 
 { 
 AQIcolorEUPM25="#96001d"; 
 } 
else if (AQI>11 && AQI<=20) 
 { 
 AQIcolorEUPM25="#99ff33"; 
 } 
 else if (AQI>21 && AQI<=30) 
 { 
 AQIcolorEUPM25="#ffff00"; 
 } 
 else if (AQI>31 && AQI<=60) 
 { 
 AQIcolorEUPM25="#fc8004"; 
 } 
 else if (AQI>61 && AQI<=100) 
 { 
 AQIcolorEUPM25="#a20000"; 
 } 
 else 
 { 
 AQIcolorEUPM25="Out of Range"; 
 } 
 return AQIcolorEUPM25; 
 }
function AQIPM25JP(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<19) 
 { 
 AQI=Linear(10,0,19,0,c); 
 } 
else if (c>=20 && c<29) 
 { 
 AQI=Linear(15,11,29,20,c); 
 } 
 else if (c>=30 && c<39) 
 { 
 AQI=Linear(35,16,39,30,c); 
 } 
 else if (c>=40 && c<49) 
 { 
 AQI=Linear(50,36,49,40,c); 
 } 
 else if (c>=50 && c<69) 
 { 
 AQI=Linear(70,51,69,50,c); 
 } 
 else if (c>=70 && c<999) 
 { 
 AQI=Linear(100,71,999,70,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryJPPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryJPPM25;
 if (AQI<=19) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
else if (AQI>11 && AQI<=15) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
 else if (AQI>16 && AQI<=35) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
 else if (AQI>36 && AQI<=50) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
 else if (AQI>51 && AQI<=70) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
 else if (AQI>71 && AQI<=100) 
 { 
 AQICategoryJPPM25="No adivisory"; 
 } 
 else 
 { 
 AQICategoryJPPM25="Out of Range"; 
 } 
 return AQICategoryJPPM25; 
 }
function AQIcolorJPPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorJPPM25;
 if (AQI<=19) 
 { 
 AQIcolorJPPM25="#0070c0"; 
 } 
else if (AQI>11 && AQI<=15) 
 { 
 AQIcolorJPPM25="#00b0f0"; 
 } 
 else if (AQI>16 && AQI<=35) 
 { 
 AQIcolorJPPM25="#08f963"; 
 } 
 else if (AQI>36 && AQI<=50) 
 { 
 AQIcolorJPPM25="#ffff00"; 
 } 
 else if (AQI>51 && AQI<=70) 
 { 
 AQIcolorJPPM25="#ff9900"; 
 } 
 else if (AQI>71 && AQI<=100) 
 { 
 AQIcolorJPPM25="#ff3300"; 
 } 
 else 
 { 
 AQIcolorJPPM25="Out of Range"; 
 } 
 return AQIcolorJPPM25; 
 }
function AQIPM25LK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<19) 
 { 
 AQI=Linear(12,0,19,0,c); 
 } 
else if (c>=20 && c<49) 
 { 
 AQI=Linear(34,13,49,20,c); 
 } 
 else if (c>=50 && c<79) 
 { 
 AQI=Linear(55,35,79,50,c); 
 } 
 else if (c>=80 && c<149) 
 { 
 AQI=Linear(150,56,149,80,c); 
 } 
 else if (c>=150 && c<249) 
 { 
 AQI=Linear(250,151,249,150,c); 
 } 
 else if (c>=250 && c<500) 
 { 
 AQI=Linear(500,251,500,250,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryLKPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryLKPM25;
 if (AQI<=19) 
 { 
 AQICategoryLKPM25="Good"; 
 } 
else if (AQI>13 && AQI<=34) 
 { 
 AQICategoryLKPM25="Moderate"; 
 } 
 else if (AQI>35 && AQI<=55) 
 { 
 AQICategoryLKPM25="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>56 && AQI<=150) 
 { 
 AQICategoryLKPM25="Unhealthy"; 
 } 
 else if (AQI>151 && AQI<=250) 
 { 
 AQICategoryLKPM25="Very Unhealthy"; 
 } 
 else if (AQI>251 && AQI<=500) 
 { 
 AQICategoryLKPM25="Hazardous"; 
 } 
 else 
 { 
 AQICategoryLKPM25="Out of Range"; 
 } 
 return AQICategoryLKPM25; 
 }
function AQIcolorLKPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorLKPM25;
 if (AQI<=19) 
 { 
 AQIcolorLKPM25="#00b050"; 
 } 
else if (AQI>13 && AQI<=34) 
 { 
 AQIcolorLKPM25="#ffff00"; 
 } 
 else if (AQI>35 && AQI<=55) 
 { 
 AQIcolorLKPM25="#ff66ff"; 
 } 
 else if (AQI>56 && AQI<=150) 
 { 
 AQIcolorLKPM25="#ff0000"; 
 } 
 else if (AQI>151 && AQI<=250) 
 { 
 AQIcolorLKPM25="#9e004f"; 
 } 
 else if (AQI>251 && AQI<=500) 
 { 
 AQIcolorLKPM25="#851911"; 
 } 
 else 
 { 
 AQIcolorLKPM25="Out of Range"; 
 } 
 return AQIcolorLKPM25; 
 }
function AQIPM25UK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<22) 
 { 
 AQI=Linear(23,0,22,0,c); 
 } 
else if (c>=23 && c<52) 
 { 
 AQI=Linear(53,24,52,23,c); 
 } 
 else if (c>=53 && c<69) 
 { 
 AQI=Linear(70,54,69,53,c); 
 } 
 else if (c>=70 && c<999) 
 { 
 AQI=Linear(100,71,999,70,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUKPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUKPM25;
 if (AQI<=22) 
 { 
 AQICategoryUKPM25="Low"; 
 } 
else if (AQI>24 && AQI<=53) 
 { 
 AQICategoryUKPM25="Moderate"; 
 } 
 else if (AQI>54 && AQI<=70) 
 { 
 AQICategoryUKPM25="High"; 
 } 
 else if (AQI>71 && AQI<=100) 
 { 
 AQICategoryUKPM25="Very High"; 
 } 
 else 
 { 
 AQICategoryUKPM25="Out of Range"; 
 } 
 return AQICategoryUKPM25; 
 }
function AQIcolorUKPM25(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUKPM25;
 if (AQI<=22) 
 { 
 AQIcolorUKPM25="#08ff08"; 
 } 
else if (AQI>24 && AQI<=53) 
 { 
 AQIcolorUKPM25="#ffc000"; 
 } 
 else if (AQI>54 && AQI<=70) 
 { 
 AQIcolorUKPM25="#a20000"; 
 } 
 else if (AQI>71 && AQI<=100) 
 { 
 AQIcolorUKPM25="#cc00ff"; 
 } 
 else 
 { 
 AQIcolorUKPM25="Out of Range"; 
 } 
 return AQIcolorUKPM25; 
 }
////////////////
////////////////
////////////////
////////////////




var b1;
var b2;
var b3;
var b4;
var b7;
var b12;
var b13;
function AQICalcPm25(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQIPM25IND(f)
b13=AQIPM25US(f)
b2=AQIPM25CN(f)
b3=AQIPM25EU(f)
b4=AQIPM25JP(f)
b7=AQIPM25LK(f)
b12=AQIPM25UK(f)
console.log(b1)
console.log(b13)

}


function appendRowPm25() {

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
	row.insertCell(0).innerHTML = b7;
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = b3;
	row.insertCell(0).innerHTML = b2;
	row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "AQI";
        
 
}

return true;
        

}


function appendRow1Pm25() {

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

	row.insertCell(0).innerHTML = AQICategoryUSPM25(b13);
	row.insertCell(0).innerHTML = AQICategoryUKPM25(b12);
	row.insertCell(0).innerHTML = AQICategoryLKPM25(b7);
	row.insertCell(0).innerHTML = AQICategoryJPPM25(b4);
	row.insertCell(0).innerHTML = AQICategoryEUPM25(b3);
	row.insertCell(0).innerHTML = AQICategoryCNPM25(b2);
	row.insertCell(0).innerHTML = AQICategoryINDPM25(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}

function appendRow2Pm25() {

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
        row.insertCell(0).style.backgroundColor = "yellow";
	row.insertCell(0).style.backgroundColor = AQIcolorUKPM25(b12);
	row.insertCell(0).style.backgroundColor = AQIcolorLKPM25(b7);
	row.insertCell(0).style.backgroundColor = AQIcolorJPPM25(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorEUPM25(b3);
	row.insertCell(0).style.backgroundColor = AQIcolorCNPM25(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDPM25(b1);
        row.insertCell(0).innerHTML = "AQI colour";
	console.log(AQIcolorUSPM25(b13))
}

return true;
        

}
