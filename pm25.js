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
 if (c>=0.0 && c<=29.0) 
 { 
 AQI=Linear(50.0,0.0,29.0,0.0,c); 
 } 
else if (c>=30.0 && c<=59.0) 
 { 
 AQI=Linear(100.0,51.0,59.0,30.0,c); 
 } 
 else if (c>=60.0 && c<=89.0) 
 { 
 AQI=Linear(200.0,101.0,89.0,60.0,c); 
 } 
 else if (c>=90.0 && c<=119.0) 
 { 
 AQI=Linear(300.0,201.0,119.0,90.0,c); 
 } 
 else if (c>=120.0 && c<=249.0) 
 { 
 AQI=Linear(400.0,301.0,249.0,120.0,c); 
 } 
 else if (c>=250.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,401.0,999.0,250.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryINDPM25="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryINDPM25="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryINDPM25="Poor"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryINDPM25="Very Poor"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryINDPM25="Severe"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorINDPM25="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorINDPM25="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorINDPM25="#00b0f0"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorINDPM25="#0000cc"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorINDPM25="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=12.0) 
 { 
 AQI=Linear(50.0,0.0,12.0,0.0,c); 
 } 
else if (c>=12.1 && c<=35.4) 
 { 
 AQI=Linear(100.0,51.0,35.4,12.1,c); 
 } 
 else if (c>=35.5 && c<=55.4) 
 { 
 AQI=Linear(150.0,101.0,55.4,35.5,c); 
 } 
 else if (c>=55.5 && c<=150.4) 
 { 
 AQI=Linear(200.0,151.0,150.4,55.5,c); 
 } 
 else if (c>=150.5 && c<=250.4) 
 { 
 AQI=Linear(300.0,201.0,250.4,150.5,c); 
 } 
 else if (c>=250.5 && c<=350.4) 
 { 
 AQI=Linear(400.0,301.0,350.4,250.5,c); 
 } 
 else if (c>=350.5 && c<=500.4) 
 { 
 AQI=Linear(500.0,401.0,500.4,350.5,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryUSPM25="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryUSPM25="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQICategoryUSPM25="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQICategoryUSPM25="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryUSPM25="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryUSPM25="Hazardous"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorUSPM25="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorUSPM25="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQIcolorUSPM25="#fc8004"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQIcolorUSPM25="#ff0000"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorUSPM25="#9e004f"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorUSPM25="#851911"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=34.0) 
 { 
 AQI=Linear(35.0,0.0,34.0,0.0,c); 
 } 
else if (c>=35.0 && c<=74.0) 
 { 
 AQI=Linear(75.0,36.0,74.0,35.0,c); 
 } 
 else if (c>=75.0 && c<=114.0) 
 { 
 AQI=Linear(115.0,76.0,114.0,75.0,c); 
 } 
 else if (c>=115.0 && c<=159.0) 
 { 
 AQI=Linear(150.0,116.0,159.0,115.0,c); 
 } 
 else if (c>=160.0 && c<=249.0) 
 { 
 AQI=Linear(250.0,151.0,249.0,160.0,c); 
 } 
 else if (c>=240.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,251.0,349.0,240.0,c); 
 } 
 else if (c>=350.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,351.0,999.0,350.0,c); 
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
 if (AQI<=35.0) 
 { 
 AQICategoryCNPM25="Good"; 
 } 
else if (AQI>=36.0 && AQI<=75.0) 
 { 
 AQICategoryCNPM25="Moderate"; 
 } 
 else if (AQI>=76.0 && AQI<=115.0) 
 { 
 AQICategoryCNPM25="Lightly Polluted"; 
 } 
 else if (AQI>=116.0 && AQI<=150.0) 
 { 
 AQICategoryCNPM25="Medially Polluted"; 
 } 
 else if (AQI>=151.0 && AQI<=250.0) 
 { 
 AQICategoryCNPM25="Heavily Polluted"; 
 } 
 else if (AQI>=251.0 && AQI<=350.0) 
 { 
 AQICategoryCNPM25="Severely Polluted"; 
 } 
 else if (AQI>=351.0 && AQI<=500.0) 
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
 if (AQI<=35.0) 
 { 
 AQIcolorCNPM25="#00b050"; 
 } 
else if (AQI>=36.0 && AQI<=75.0) 
 { 
 AQIcolorCNPM25="#ffff00"; 
 } 
 else if (AQI>=76.0 && AQI<=115.0) 
 { 
 AQIcolorCNPM25="#fc8004"; 
 } 
 else if (AQI>=116.0 && AQI<=150.0) 
 { 
 AQIcolorCNPM25="#ff0000"; 
 } 
 else if (AQI>=151.0 && AQI<=250.0) 
 { 
 AQIcolorCNPM25="#800080"; 
 } 
 else if (AQI>=251.0 && AQI<=350.0) 
 { 
 AQIcolorCNPM25="#96001d"; 
 } 
 else if (AQI>=351.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=19.0) 
 { 
 AQI=Linear(10.0,0.0,19.0,0.0,c); 
 } 
else if (c>=20.0 && c<=29.0) 
 { 
 AQI=Linear(20.0,11.0,29.0,20.0,c); 
 } 
 else if (c>=30.0 && c<=39.0) 
 { 
 AQI=Linear(30.0,21.0,39.0,30.0,c); 
 } 
 else if (c>=40.0 && c<=59.0) 
 { 
 AQI=Linear(60.0,31.0,59.0,40.0,c); 
 } 
 else if (c>=60.0 && c<=999.0) 
 { 
 AQI=Linear(100.0,61.0,999.0,60.0,c); 
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
 if (AQI<=10.0) 
 { 
 AQICategoryEUPM25="Very Low"; 
 } 
else if (AQI>=11.0 && AQI<=20.0) 
 { 
 AQICategoryEUPM25="Low"; 
 } 
 else if (AQI>=21.0 && AQI<=30.0) 
 { 
 AQICategoryEUPM25="Medium"; 
 } 
 else if (AQI>=31.0 && AQI<=60.0) 
 { 
 AQICategoryEUPM25="High"; 
 } 
 else if (AQI>=61.0 && AQI<=100.0) 
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
 if (AQI<=10.0) 
 { 
 AQIcolorEUPM25="#96001d"; 
 } 
else if (AQI>=11.0 && AQI<=20.0) 
 { 
 AQIcolorEUPM25="#99ff33"; 
 } 
 else if (AQI>=21.0 && AQI<=30.0) 
 { 
 AQIcolorEUPM25="#ffff00"; 
 } 
 else if (AQI>=31.0 && AQI<=60.0) 
 { 
 AQIcolorEUPM25="#fc8004"; 
 } 
 else if (AQI>=61.0 && AQI<=100.0) 
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
 if (c>=0.0 && c<=19.0) 
 { 
 AQI=Linear(10.0,0.0,19.0,0.0,c); 
 } 
else if (c>=20.0 && c<=29.0) 
 { 
 AQI=Linear(15.0,11.0,29.0,20.0,c); 
 } 
 else if (c>=30.0 && c<=39.0) 
 { 
 AQI=Linear(35.0,16.0,39.0,30.0,c); 
 } 
 else if (c>=40.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,36.0,49.0,40.0,c); 
 } 
 else if (c>=50.0 && c<=69.0) 
 { 
 AQI=Linear(70.0,51.0,69.0,50.0,c); 
 } 
 else if (c>=70.0 && c<=999.0) 
 { 
 AQI=Linear(100.0,71.0,999.0,70.0,c); 
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
 if (AQI<=10.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
 } 
else if (AQI>=11.0 && AQI<=15.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
 } 
 else if (AQI>=16.0 && AQI<=35.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
 } 
 else if (AQI>=36.0 && AQI<=50.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
 } 
 else if (AQI>=51.0 && AQI<=70.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
 } 
 else if (AQI>=71.0 && AQI<=100.0) 
 { 
 AQICategoryJPPM25="No advisory"; 
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
 if (AQI<=10.0) 
 { 
 AQIcolorJPPM25="#0070c0"; 
 } 
else if (AQI>=11.0 && AQI<=15.0) 
 { 
 AQIcolorJPPM25="#00b0f0"; 
 } 
 else if (AQI>=16.0 && AQI<=35.0) 
 { 
 AQIcolorJPPM25="#08f963"; 
 } 
 else if (AQI>=36.0 && AQI<=50.0) 
 { 
 AQIcolorJPPM25="#ffff00"; 
 } 
 else if (AQI>=51.0 && AQI<=70.0) 
 { 
 AQIcolorJPPM25="#ff9900"; 
 } 
 else if (AQI>=71.0 && AQI<=100.0) 
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
 if (c>=0.0 && c<=19.0) 
 { 
 AQI=Linear(12.0,0.0,19.0,0.0,c); 
 } 
else if (c>=20.0 && c<=49.0) 
 { 
 AQI=Linear(34.4,13.0,49.0,20.0,c); 
 } 
 else if (c>=50.0 && c<=79.0) 
 { 
 AQI=Linear(55.4,34.5,79.0,50.0,c); 
 } 
 else if (c>=80.0 && c<=149.0) 
 { 
 AQI=Linear(150.4,55.5,149.0,80.0,c); 
 } 
 else if (c>=150.0 && c<=249.0) 
 { 
 AQI=Linear(250.4,150.5,249.0,150.0,c); 
 } 
 else if (c>=250.0 && c<=500.0) 
 { 
 AQI=Linear(500.0,250.5,500.0,250.0,c); 
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
 if (AQI<=12.0) 
 { 
 AQICategoryLKPM25="Good"; 
 } 
else if (AQI>=13.0 && AQI<=34.4) 
 { 
 AQICategoryLKPM25="Moderate"; 
 } 
 else if (AQI>=34.5 && AQI<=55.4) 
 { 
 AQICategoryLKPM25="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>=55.5 && AQI<=150.4) 
 { 
 AQICategoryLKPM25="Unhealthy"; 
 } 
 else if (AQI>=150.5 && AQI<=250.4) 
 { 
 AQICategoryLKPM25="Very Unhealthy"; 
 } 
 else if (AQI>=250.5 && AQI<=500.0) 
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
 if (AQI<=12.0) 
 { 
 AQIcolorLKPM25="#00b050"; 
 } 
else if (AQI>=13.0 && AQI<=34.4) 
 { 
 AQIcolorLKPM25="#ffff00"; 
 } 
 else if (AQI>=34.5 && AQI<=55.4) 
 { 
 AQIcolorLKPM25="#ff66ff"; 
 } 
 else if (AQI>=55.5 && AQI<=150.4) 
 { 
 AQIcolorLKPM25="#ff0000"; 
 } 
 else if (AQI>=150.5 && AQI<=250.4) 
 { 
 AQIcolorLKPM25="#9e004f"; 
 } 
 else if (AQI>=250.5 && AQI<=500.0) 
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
 if (c>=0.0 && c<=22.0) 
 { 
 AQI=Linear(23.0,0.0,22.0,0.0,c); 
 } 
else if (c>=23.0 && c<=52.0) 
 { 
 AQI=Linear(53.0,24.0,52.0,23.0,c); 
 } 
 else if (c>=53.0 && c<=69.0) 
 { 
 AQI=Linear(70.0,54.0,69.0,53.0,c); 
 } 
 else if (c>=70.0 && c<=999.0) 
 { 
 AQI=Linear(100.0,71.0,999.0,70.0,c); 
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
 if (AQI<=23.0) 
 { 
 AQICategoryUKPM25="Low"; 
 } 
else if (AQI>=24.0 && AQI<=53.0) 
 { 
 AQICategoryUKPM25="Moderate"; 
 } 
 else if (AQI>=54.0 && AQI<=70.0) 
 { 
 AQICategoryUKPM25="High"; 
 } 
 else if (AQI>=71.0 && AQI<=100.0) 
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
 if (AQI<=23.0) 
 { 
 AQIcolorUKPM25="#08ff08"; 
 } 
else if (AQI>=24.0 && AQI<=53.0) 
 { 
 AQIcolorUKPM25="#ffc000"; 
 } 
 else if (AQI>=54.0 && AQI<=70.0) 
 { 
 AQIcolorUKPM25="#a20000"; 
 } 
 else if (AQI>=71.0 && AQI<=100.0) 
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
