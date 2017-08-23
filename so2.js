function createTableSo2() {
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
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "China"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Hong Kong"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Sri Lanka"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Malyasia"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Philippines"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Singapore"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Thailand"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "United States"

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
function AQISO2IND(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<40) 
 { 
 AQI=Linear(50,0,40,0,c); 
 } 
else if (c>=41 && c<80) 
 { 
 AQI=Linear(100,51,80,41,c); 
 } 
 else if (c>=81 && c<380) 
 { 
 AQI=Linear(200,101,380,81,c); 
 } 
 else if (c>=381 && c<800) 
 { 
 AQI=Linear(300,201,800,381,c); 
 } 
 else if (c>=801 && c<1600) 
 { 
 AQI=Linear(400,301,1600,801,c); 
 } 
 else if (c>=1601 && c<9999) 
 { 
 AQI=Linear(500,401,9999,1601,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryINDSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryINDSO2;
 if (AQI<=40) 
 { 
 AQICategoryINDSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryINDSO2="Medium"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryINDSO2="Poor"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryINDSO2="Very Poor"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryINDSO2="Severe"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryINDSO2="Severe"; 
 } 
 else 
 { 
 AQICategoryINDSO2="Out of Range"; 
 } 
 return AQICategoryINDSO2; 
 }
function AQIcolorINDSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorINDSO2;
 if (AQI<=40) 
 { 
 AQIcolorINDSO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorINDSO2="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorINDSO2="#00b0f0"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorINDSO2="#0000cc"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorINDSO2="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorINDSO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorINDSO2="Out of Range"; 
 } 
 return AQIcolorINDSO2; 
 }
function AQISO2US(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=304 && c<604) 
 { 
 AQI=Linear(300,201,604,304,c); 
 } 
else if (c>=605 && c<804) 
 { 
 AQI=Linear(400,301,804,605,c); 
 } 
 else if (c>=805 && c<1004) 
 { 
 AQI=Linear(500,401,1004,805,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUSSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUSSO2;
 if (AQI<=604) 
 { 
 AQICategoryUSSO2="Unhealthy"; 
 } 
else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryUSSO2="Very Unhealthy"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryUSSO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryUSSO2="Out of Range"; 
 } 
 return AQICategoryUSSO2; 
 }
function AQIcolorUSSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUSSO2;
 if (AQI<=604) 
 { 
 AQIcolorUSSO2="#ff0000"; 
 } 
else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorUSSO2="#9e004f"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorUSSO2="#851911"; 
 } 
 else 
 { 
 AQIcolorUSSO2="Out of Range"; 
 } 
 return AQIcolorUSSO2; 
 }
function AQISO2CN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<50) 
 { 
 AQI=Linear(50,0,50,0,c); 
 } 
else if (c>=51 && c<150) 
 { 
 AQI=Linear(100,51,150,51,c); 
 } 
 else if (c>=151 && c<475) 
 { 
 AQI=Linear(200,101,475,151,c); 
 } 
 else if (c>=476 && c<800) 
 { 
 AQI=Linear(300,201,800,476,c); 
 } 
 else if (c>=801 && c<1600) 
 { 
 AQI=Linear(400,301,1600,801,c); 
 } 
 else if (c>=1601 && c<2620) 
 { 
 AQI=Linear(500,401,2620,1601,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryCNSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryCNSO2;
 if (AQI<=50) 
 { 
 AQICategoryCNSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryCNSO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryCNSO2="Lightly Polluted"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryCNSO2="Medially Polluted"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryCNSO2="Heavily Polluted"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryCNSO2="Severely Polluted"; 
 } 
 else 
 { 
 AQICategoryCNSO2="Out of Range"; 
 } 
 return AQICategoryCNSO2; 
 }
function AQIcolorCNSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorCNSO2;
 if (AQI<=50) 
 { 
 AQIcolorCNSO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorCNSO2="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorCNSO2="#fc8004"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorCNSO2="#ff0000"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorCNSO2="#800080"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorCNSO2="#96001d"; 
 } 
 else 
 { 
 AQIcolorCNSO2="Out of Range"; 
 } 
 return AQIcolorCNSO2; 
 }
function AQISO2HK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<39) 
 { 
 AQI=Linear(50,0,39,0,c); 
 } 
else if (c>=40 && c<79) 
 { 
 AQI=Linear(100,51,79,40,c); 
 } 
 else if (c>=80 && c<349) 
 { 
 AQI=Linear(200,101,349,80,c); 
 } 
 else if (c>=350 && c<799) 
 { 
 AQI=Linear(300,201,799,350,c); 
 } 
 else if (c>=800 && c<2619) 
 { 
 AQI=Linear(400,301,2619,800,c); 
 } 
 else if (c>=2620 && c<9999) 
 { 
 AQI=Linear(500,401,9999,2620,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryHKSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryHKSO2;
 if (AQI<=39) 
 { 
 AQICategoryHKSO2="Low"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryHKSO2="Medium"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryHKSO2="High"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryHKSO2="Very High"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryHKSO2="Severe"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryHKSO2="Severe"; 
 } 
 else 
 { 
 AQICategoryHKSO2="Out of Range"; 
 } 
 return AQICategoryHKSO2; 
 }
function AQIcolorHKSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorHKSO2;
 if (AQI<=39) 
 { 
 AQIcolorHKSO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorHKSO2="#00b0f0"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorHKSO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorHKSO2="#ff0000"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorHKSO2="#00000"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorHKSO2="#00000"; 
 } 
 else 
 { 
 AQIcolorHKSO2="Out of Range"; 
 } 
 return AQIcolorHKSO2; 
 }
function AQISO2LK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<88) 
 { 
 AQI=Linear(50,0,88,0,c); 
 } 
else if (c>=89 && c<376) 
 { 
 AQI=Linear(100,51,376,89,c); 
 } 
 else if (c>=377 && c<585) 
 { 
 AQI=Linear(200,101,585,377,c); 
 } 
 else if (c>=586 && c<795) 
 { 
 AQI=Linear(300,201,795,586,c); 
 } 
 else if (c>=796 && c<1580) 
 { 
 AQI=Linear(400,301,1580,796,c); 
 } 
 else if (c>=1581 && c<2626) 
 { 
 AQI=Linear(500,401,2626,1581,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryLKSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryLKSO2;
 if (AQI<=88) 
 { 
 AQICategoryLKSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryLKSO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryLKSO2="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryLKSO2="Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryLKSO2="Very Unhealthy"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryLKSO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryLKSO2="Out of Range"; 
 } 
 return AQICategoryLKSO2; 
 }
function AQIcolorLKSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorLKSO2;
 if (AQI<=88) 
 { 
 AQIcolorLKSO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorLKSO2="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorLKSO2="#ff66ff"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorLKSO2="#ff0000"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorLKSO2="#9e004f"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorLKSO2="#851911"; 
 } 
 else 
 { 
 AQIcolorLKSO2="Out of Range"; 
 } 
 return AQIcolorLKSO2; 
 }
function AQISO2MY(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<52) 
 { 
 AQI=Linear(50,0,52,0,c); 
 } 
else if (c>=53 && c<105) 
 { 
 AQI=Linear(100,51,105,53,c); 
 } 
 else if (c>=106 && c<800) 
 { 
 AQI=Linear(200,101,800,106,c); 
 } 
 else if (c>=801 && c<1600) 
 { 
 AQI=Linear(300,201,1600,801,c); 
 } 
 else if (c>=1601 && c<9999) 
 { 
 AQI=Linear(400,301,9999,1601,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryMYSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryMYSO2;
 if (AQI<=52) 
 { 
 AQICategoryMYSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryMYSO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryMYSO2="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryMYSO2="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryMYSO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryMYSO2="Out of Range"; 
 } 
 return AQICategoryMYSO2; 
 }
function AQIcolorMYSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorMYSO2;
 if (AQI<=52) 
 { 
 AQIcolorMYSO2="#0000ff"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorMYSO2="#00b050"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorMYSO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorMYSO2="#dd5800"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorMYSO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorMYSO2="Out of Range"; 
 } 
 return AQIcolorMYSO2; 
 }
function AQISO2PH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<89) 
 { 
 AQI=Linear(50,0,89,0,c); 
 } 
else if (c>=90 && c<377) 
 { 
 AQI=Linear(100,51,377,90,c); 
 } 
 else if (c>=378 && c<586) 
 { 
 AQI=Linear(200,101,586,378,c); 
 } 
 else if (c>=587 && c<795) 
 { 
 AQI=Linear(300,201,795,587,c); 
 } 
 else if (c>=796 && c<1580) 
 { 
 AQI=Linear(400,301,1580,796,c); 
 } 
 else if (c>=1581 && c<2103) 
 { 
 AQI=Linear(500,401,2103,1581,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryPHSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryPHSO2;
 if (AQI<=89) 
 { 
 AQICategoryPHSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryPHSO2="Fair"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryPHSO2="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryPHSO2="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryPHSO2="Accutely Unhealthy"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryPHSO2="Emergency"; 
 } 
 else 
 { 
 AQICategoryPHSO2="Out of Range"; 
 } 
 return AQICategoryPHSO2; 
 }
function AQIcolorPHSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorPHSO2;
 if (AQI<=89) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else 
 { 
 AQIcolorPHSO2="Out of Range"; 
 } 
 return AQIcolorPHSO2; 
 }
function AQISO2SG(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<80) 
 { 
 AQI=Linear(50,0,80,0,c); 
 } 
else if (c>=81 && c<365) 
 { 
 AQI=Linear(100,51,365,81,c); 
 } 
 else if (c>=366 && c<800) 
 { 
 AQI=Linear(200,101,800,366,c); 
 } 
 else if (c>=801 && c<1600) 
 { 
 AQI=Linear(300,201,1600,801,c); 
 } 
 else if (c>=1601 && c<2100) 
 { 
 AQI=Linear(400,301,2100,1601,c); 
 } 
 else if (c>=2100 && c<9999) 
 { 
 AQI=Linear(500,401,9999,2100,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategorySGSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategorySGSO2;
 if (AQI<=80) 
 { 
 AQICategorySGSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategorySGSO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategorySGSO2="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategorySGSO2="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategorySGSO2="Hazardous"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategorySGSO2="Hazardous"; 
 } 
 else 
 { 
 AQICategorySGSO2="Out of Range"; 
 } 
 return AQICategorySGSO2; 
 }
function AQIcolorSGSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorSGSO2;
 if (AQI<=80) 
 { 
 AQIcolorSGSO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorSGSO2="#0070c0"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorSGSO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorSGSO2="#fc8004"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorSGSO2="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorSGSO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorSGSO2="Out of Range"; 
 } 
 return AQIcolorSGSO2; 
 }
function AQISO2TH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0 && c<65) 
 { 
 AQI=Linear(50,0,65,0,c); 
 } 
else if (c>=66 && c<300) 
 { 
 AQI=Linear(100,51,300,66,c); 
 } 
 else if (c>=301 && c<800) 
 { 
 AQI=Linear(200,101,800,301,c); 
 } 
 else if (c>=801 && c<1600) 
 { 
 AQI=Linear(300,201,1600,801,c); 
 } 
 else if (c>=1601 && c<2620) 
 { 
 AQI=Linear(400,301,2620,1601,c); 
 } 
 else if (c>=2621 && c<9999) 
 { 
 AQI=Linear(500,401,9999,2621,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryTHSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryTHSO2;
 if (AQI<=65) 
 { 
 AQICategoryTHSO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryTHSO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryTHSO2="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryTHSO2="Very Unhealthful"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryTHSO2="Hazardous"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQICategoryTHSO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryTHSO2="Out of Range"; 
 } 
 return AQICategoryTHSO2; 
 }
function AQIcolorTHSO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorTHSO2;
 if (AQI<=65) 
 { 
 AQIcolorTHSO2="#66ffcc"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorTHSO2="#00b050"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorTHSO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorTHSO2="#fc8004"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorTHSO2="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
 { 
 AQIcolorTHSO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorTHSO2="Out of Range"; 
 } 
 return AQIcolorTHSO2; 
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
function AQICalcSo2(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQISO2IND(f)
b9=AQISO2US(f)
b2=AQISO2CN(f)
b3=AQISO2HK(f)
b4=AQISO2LK(f)
b5=AQISO2MY(f)
b6=AQISO2PH(f)
b7=AQISO2SG(f)
b8=AQISO2TH(f)
console.log(b1)
console.log(b13)

}


function appendRowSo2() {

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


function appendRow1So2() {

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

	
	row.insertCell(0).innerHTML = AQICategoryUSSO2(b9);
	row.insertCell(0).innerHTML = AQICategoryTHSO2(b8);
	row.insertCell(0).innerHTML = AQICategorySGSO2(b7);
	row.insertCell(0).innerHTML = AQICategoryPHSO2(b6);
	row.insertCell(0).innerHTML = AQICategoryMYSO2(b5);
	row.insertCell(0).innerHTML = AQICategoryLKSO2(b4);
	row.insertCell(0).innerHTML = AQICategoryHKSO2(b3);
	row.insertCell(0).innerHTML = AQICategoryCNSO2(b2);
	row.insertCell(0).innerHTML = AQICategoryINDSO2(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}

function appendRow2So2() {

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
	row.insertCell(0).style.backgroundColor = AQIcolorUSSO2(b9);
	row.insertCell(0).style.backgroundColor = AQIcolorTHSO2(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorSGSO2(b7);
	row.insertCell(0).style.backgroundColor = AQIcolorPHSO2(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorMYSO2(b5);
	row.insertCell(0).style.backgroundColor = AQIcolorLKSO2(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorHKSO2(b3);
	row.insertCell(0).style.backgroundColor = AQIcolorCNSO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDSO2(b1);
        row.insertCell(0).innerHTML = "AQI colour";
}

return true;
        

}
