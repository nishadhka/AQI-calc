function createTablePm10() {
        var myTableDiv = document.getElementById("tablePrint1");  //indiv
        table = document.createElement("TABLE");   //TABLE??
        table.setAttribute("id", "data");
	table.setAttribute("class", "table table-striped");
        //table.border = '1';
        myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)
        var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "Method";
 var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Value"
var th2 = table.tHead.appendChild(document.createElement("th")); 
 th2.innerHTML = "Category"
var th3 = table.tHead.appendChild(document.createElement("th")); 
 th3.innerHTML = "Color code"
var th4 = table.tHead.appendChild(document.createElement("th")); 
 th4.innerHTML = "Color code"
var th5 = table.tHead.appendChild(document.createElement("th")); 
 th5.innerHTML = "Category"
var th6 = table.tHead.appendChild(document.createElement("th")); 
 th6.innerHTML = "Value"
var th7 = table.tHead.appendChild(document.createElement("th")); 
 th7.innerHTML = "Method"

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
 if (c>=0.0 && c<=99.0) 
 { 
 AQI=Linear(100.0,0.0,99.0,0.0,c); 
 } 
else if (c>=100.0 && c<=149.0) 
 { 
 AQI=Linear(150.0,101.0,149.0,100.0,c); 
 } 
 else if (c>=150.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,150.0,c); 
 } 
 else if (c>=350.0 && c<=419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
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
 if (AQI<=100.0) 
 { 
 AQICategoryINDPM10="Good"; 
 } 
else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQICategoryINDPM10="Medium"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQICategoryINDPM10="Poor"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQICategoryINDPM10="Very Poor"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (AQI<=100.0) 
 { 
 AQIcolorINDPM10="#00b050"; 
 } 
else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQIcolorINDPM10="#ffff00"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQIcolorINDPM10="#00b0f0"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQIcolorINDPM10="#0000cc"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=54.0) 
 { 
 AQI=Linear(50.0,0.0,54.0,0.0,c); 
 } 
else if (c>=55.0 && c<=154.0) 
 { 
 AQI=Linear(100.0,51.0,154.0,55.0,c); 
 } 
 else if (c>=155.0 && c<=254.0) 
 { 
 AQI=Linear(150.0,101.0,254.0,155.0,c); 
 } 
 else if (c>=255.0 && c<=354.0) 
 { 
 AQI=Linear(200.0,151.0,354.0,255.0,c); 
 } 
 else if (c>=355.0 && c<=424.0) 
 { 
 AQI=Linear(300.0,201.0,424.0,355.0,c); 
 } 
 else if (c>=425.0 && c<=504.0) 
 { 
 AQI=Linear(400.0,301.0,504.0,425.0,c); 
 } 
 else if (c>=505.0 && c<=604.0) 
 { 
 AQI=Linear(500.0,401.0,604.0,505.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryUSPM10="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryUSPM10="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQICategoryUSPM10="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQICategoryUSPM10="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryUSPM10="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryUSPM10="Hazardous"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorUSPM10="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorUSPM10="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQIcolorUSPM10="#fc8004"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQIcolorUSPM10="#ff0000"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorUSPM10="#9e004f"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorUSPM10="#851911"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<=149.0) 
 { 
 AQI=Linear(100.0,51.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<=249.0) 
 { 
 AQI=Linear(150.0,101.0,249.0,150.0,c); 
 } 
 else if (c>=250.0 && c<=349.0) 
 { 
 AQI=Linear(200.0,151.0,349.0,250.0,c); 
 } 
 else if (c>=350.0 && c<=419.0) 
 { 
 AQI=Linear(300.0,201.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<=499.0) 
 { 
 AQI=Linear(400.0,301.0,499.0,420.0,c); 
 } 
 else if (c>=500.0 && c<=599.0) 
 { 
 AQI=Linear(500.0,401.0,599.0,500.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryCNPM10="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryCNPM10="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQICategoryCNPM10="Lightly Polluted"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQICategoryCNPM10="Medially Polluted"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryCNPM10="Heavily Polluted"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryCNPM10="Severely Polluted"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorCNPM10="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorCNPM10="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=150.0) 
 { 
 AQIcolorCNPM10="#fc8004"; 
 } 
 else if (AQI>=151.0 && AQI<=200.0) 
 { 
 AQIcolorCNPM10="#ff0000"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorCNPM10="#800080"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorCNPM10="#96001d"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=14.0) 
 { 
 AQI=Linear(15.0,0.0,14.0,0.0,c); 
 } 
else if (c>=15.0 && c<=29.0) 
 { 
 AQI=Linear(30.0,16.0,29.0,15.0,c); 
 } 
 else if (c>=30.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,31.0,49.0,30.0,c); 
 } 
 else if (c>=50.0 && c<=99.0) 
 { 
 AQI=Linear(100.0,51.0,99.0,50.0,c); 
 } 
 else if (c>=100.0 && c<=999.0) 
 { 
 AQI=Linear(100.0,1.0,999.0,100.0,c); 
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
 if (AQI<=15.0) 
 { 
 AQICategoryEUPM10="Very Low"; 
 } 
else if (AQI>=16.0 && AQI<=30.0) 
 { 
 AQICategoryEUPM10="Low"; 
 } 
 else if (AQI>=31.0 && AQI<=50.0) 
 { 
 AQICategoryEUPM10="Medium"; 
 } 
 else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryEUPM10="High"; 
 } 
 else if (AQI>=1.0 && AQI<=100.0) 
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
 if (AQI<=15.0) 
 { 
 AQIcolorEUPM10="#96001d"; 
 } 
else if (AQI>=16.0 && AQI<=30.0) 
 { 
 AQIcolorEUPM10="#99ff33"; 
 } 
 else if (AQI>=31.0 && AQI<=50.0) 
 { 
 AQIcolorEUPM10="#ffff00"; 
 } 
 else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorEUPM10="#fc8004"; 
 } 
 else if (AQI>=1.0 && AQI<=100.0) 
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
 if (c>=0.0 && c<=29.0) 
 { 
 AQI=Linear(28.0,0.0,29.0,0.0,c); 
 } 
else if (c>=30.0 && c<=59.0) 
 { 
 AQI=Linear(55.0,29.0,59.0,30.0,c); 
 } 
 else if (c>=60.0 && c<=174.0) 
 { 
 AQI=Linear(180.0,56.0,174.0,60.0,c); 
 } 
 else if (c>=175.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,181.0,349.0,175.0,c); 
 } 
 else if (c>=350.0 && c<=600.0) 
 { 
 AQI=Linear(600.0,351.0,600.0,350.0,c); 
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
 if (AQI<=28.0) 
 { 
 AQICategoryHKPM10="Low"; 
 } 
else if (AQI>=29.0 && AQI<=55.0) 
 { 
 AQICategoryHKPM10="Medium"; 
 } 
 else if (AQI>=56.0 && AQI<=180.0) 
 { 
 AQICategoryHKPM10="High"; 
 } 
 else if (AQI>=181.0 && AQI<=350.0) 
 { 
 AQICategoryHKPM10="Very High"; 
 } 
 else if (AQI>=351.0 && AQI<=600.0) 
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
 if (AQI<=28.0) 
 { 
 AQIcolorHKPM10="#00b050"; 
 } 
else if (AQI>=29.0 && AQI<=55.0) 
 { 
 AQIcolorHKPM10="#00b0f0"; 
 } 
 else if (AQI>=56.0 && AQI<=180.0) 
 { 
 AQIcolorHKPM10="#ffff00"; 
 } 
 else if (AQI>=181.0 && AQI<=350.0) 
 { 
 AQIcolorHKPM10="#ff0000"; 
 } 
 else if (AQI>=351.0 && AQI<=600.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=51.0 && c<=99.0) 
 { 
 AQI=Linear(100.0,51.0,99.0,51.0,c); 
 } 
 else if (c>=101.0 && c<=199.0) 
 { 
 AQI=Linear(250.0,101.0,199.0,101.0,c); 
 } 
 else if (c>=201.0 && c<=299.0) 
 { 
 AQI=Linear(350.0,251.0,299.0,201.0,c); 
 } 
 else if (c>=301.0 && c<=399.0) 
 { 
 AQI=Linear(430.0,351.0,399.0,301.0,c); 
 } 
 else if (c>=401.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,431.0,999.0,401.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryIDNPM10="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryIDNPM10="Medium"; 
 } 
 else if (AQI>=101.0 && AQI<=250.0) 
 { 
 AQICategoryIDNPM10="Unfair"; 
 } 
 else if (AQI>=251.0 && AQI<=350.0) 
 { 
 AQICategoryIDNPM10="Very Unfair"; 
 } 
 else if (AQI>=351.0 && AQI<=430.0) 
 { 
 AQICategoryIDNPM10="Dangerous"; 
 } 
 else if (AQI>=431.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorIDNPM10="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorIDNPM10="#0000ff"; 
 } 
 else if (AQI>=101.0 && AQI<=250.0) 
 { 
 AQIcolorIDNPM10="#ffff00"; 
 } 
 else if (AQI>=251.0 && AQI<=350.0) 
 { 
 AQIcolorIDNPM10="#ff0000"; 
 } 
 else if (AQI>=351.0 && AQI<=430.0) 
 { 
 AQIcolorIDNPM10="#00000"; 
 } 
 else if (AQI>=431.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(30.0,0.0,49.0,0.0,c); 
 } 
else if (c>=51.0 && c<=99.0) 
 { 
 AQI=Linear(80.0,31.0,99.0,51.0,c); 
 } 
 else if (c>=101.0 && c<=149.0) 
 { 
 AQI=Linear(120.0,81.0,149.0,101.0,c); 
 } 
 else if (c>=151.0 && c<=249.0) 
 { 
 AQI=Linear(200.0,121.0,249.0,151.0,c); 
 } 
 else if (c>=251.0 && c<=349.0) 
 { 
 AQI=Linear(300.0,201.0,349.0,251.0,c); 
 } 
 else if (c>=351.0 && c<=499.0) 
 { 
 AQI=Linear(600.0,301.0,499.0,351.0,c); 
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
 if (AQI<=30.0) 
 { 
 AQICategoryKRPM10="Good"; 
 } 
else if (AQI>=31.0 && AQI<=80.0) 
 { 
 AQICategoryKRPM10="Moderate"; 
 } 
 else if (AQI>=81.0 && AQI<=120.0) 
 { 
 AQICategoryKRPM10="Unhealthy for Sensitive Groups"; 
 } 
 else if (AQI>=121.0 && AQI<=200.0) 
 { 
 AQICategoryKRPM10="Very Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryKRPM10="Hazardous"; 
 } 
 else if (AQI>=301.0 && AQI<=600.0) 
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
 if (AQI<=30.0) 
 { 
 AQIcolorKRPM10="#0000ff"; 
 } 
else if (AQI>=31.0 && AQI<=80.0) 
 { 
 AQIcolorKRPM10="#00b050"; 
 } 
 else if (AQI>=81.0 && AQI<=120.0) 
 { 
 AQIcolorKRPM10="#ffff00"; 
 } 
 else if (AQI>=121.0 && AQI<=200.0) 
 { 
 AQIcolorKRPM10="#ff6600"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorKRPM10="#da0000"; 
 } 
 else if (AQI>=301.0 && AQI<=600.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(54.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<=149.0) 
 { 
 AQI=Linear(154.0,55.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<=249.0) 
 { 
 AQI=Linear(254.0,155.0,249.0,150.0,c); 
 } 
 else if (c>=250.0 && c<=349.0) 
 { 
 AQI=Linear(354.0,255.0,349.0,250.0,c); 
 } 
 else if (c>=350.0 && c<=424.0) 
 { 
 AQI=Linear(424.0,355.0,424.0,350.0,c); 
 } 
 else if (c>=425.0 && c<=604.0) 
 { 
 AQI=Linear(604.0,425.0,604.0,425.0,c); 
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
 if (AQI<=54.0) 
 { 
 AQICategoryLKPM10="Good"; 
 } 
else if (AQI>=55.0 && AQI<=154.0) 
 { 
 AQICategoryLKPM10="Moderate"; 
 } 
 else if (AQI>=155.0 && AQI<=254.0) 
 { 
 AQICategoryLKPM10="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>=255.0 && AQI<=354.0) 
 { 
 AQICategoryLKPM10="Unhealthy"; 
 } 
 else if (AQI>=355.0 && AQI<=424.0) 
 { 
 AQICategoryLKPM10="Very Unhealthy"; 
 } 
 else if (AQI>=425.0 && AQI<=604.0) 
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
 if (AQI<=54.0) 
 { 
 AQIcolorLKPM10="#00b050"; 
 } 
else if (AQI>=55.0 && AQI<=154.0) 
 { 
 AQIcolorLKPM10="#ffff00"; 
 } 
 else if (AQI>=155.0 && AQI<=254.0) 
 { 
 AQIcolorLKPM10="#ff66ff"; 
 } 
 else if (AQI>=255.0 && AQI<=354.0) 
 { 
 AQIcolorLKPM10="#ff0000"; 
 } 
 else if (AQI>=355.0 && AQI<=424.0) 
 { 
 AQIcolorLKPM10="#9e004f"; 
 } 
 else if (AQI>=425.0 && AQI<=604.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<=149.0) 
 { 
 AQI=Linear(150.0,51.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,150.0,c); 
 } 
 else if (c>=350.0 && c<=419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryMYPM10="Good"; 
 } 
else if (AQI>=51.0 && AQI<=150.0) 
 { 
 AQICategoryMYPM10="Moderate"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQICategoryMYPM10="Unhealthy"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQICategoryMYPM10="Very Unhealthy"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorMYPM10="#0000ff"; 
 } 
else if (AQI>=51.0 && AQI<=150.0) 
 { 
 AQIcolorMYPM10="#00b050"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQIcolorMYPM10="#ffff00"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQIcolorMYPM10="#dd5800"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(54.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<=149.0) 
 { 
 AQI=Linear(154.0,55.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<=254.0) 
 { 
 AQI=Linear(254.0,155.0,254.0,150.0,c); 
 } 
 else if (c>=255.0 && c<=354.0) 
 { 
 AQI=Linear(354.0,255.0,354.0,255.0,c); 
 } 
 else if (c>=355.0 && c<=424.0) 
 { 
 AQI=Linear(424.0,355.0,424.0,355.0,c); 
 } 
 else if (c>=425.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,425.0,999.0,425.0,c); 
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
 if (AQI<=54.0) 
 { 
 AQICategoryPHPM10="Good"; 
 } 
else if (AQI>=55.0 && AQI<=154.0) 
 { 
 AQICategoryPHPM10="Fair"; 
 } 
 else if (AQI>=155.0 && AQI<=254.0) 
 { 
 AQICategoryPHPM10="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>=255.0 && AQI<=354.0) 
 { 
 AQICategoryPHPM10="Very Unhealthy"; 
 } 
 else if (AQI>=355.0 && AQI<=424.0) 
 { 
 AQICategoryPHPM10="Accutely Unhealthy"; 
 } 
 else if (AQI>=425.0 && AQI<=500.0) 
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
 if (AQI<=54.0) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
else if (AQI>=55.0 && AQI<=154.0) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>=155.0 && AQI<=254.0) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>=255.0 && AQI<=354.0) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>=355.0 && AQI<=424.0) 
 { 
 AQIcolorPHPM10="#ffffff"; 
 } 
 else if (AQI>=425.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<=139.0) 
 { 
 AQI=Linear(150.0,51.0,139.0,50.0,c); 
 } 
 else if (c>=140.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,140.0,c); 
 } 
 else if (c>=350.0 && c<=419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategorySGPM10="Good"; 
 } 
else if (AQI>=51.0 && AQI<=150.0) 
 { 
 AQICategorySGPM10="Moderate"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQICategorySGPM10="Unhealthy"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQICategorySGPM10="Very Unhealthy"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorSGPM10="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=150.0) 
 { 
 AQIcolorSGPM10="#0070c0"; 
 } 
 else if (AQI>=151.0 && AQI<=350.0) 
 { 
 AQIcolorSGPM10="#ffff00"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQIcolorSGPM10="#fc8004"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=39.0) 
 { 
 AQI=Linear(40.0,0.0,39.0,0.0,c); 
 } 
else if (c>=40.0 && c<=119.0) 
 { 
 AQI=Linear(120.0,41.0,119.0,40.0,c); 
 } 
 else if (c>=120.0 && c<=349.0) 
 { 
 AQI=Linear(350.0,121.0,349.0,120.0,c); 
 } 
 else if (c>=350.0 && c<=419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
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
 if (AQI<=40.0) 
 { 
 AQICategoryTHPM10="Good"; 
 } 
else if (AQI>=41.0 && AQI<=120.0) 
 { 
 AQICategoryTHPM10="Moderate"; 
 } 
 else if (AQI>=121.0 && AQI<=350.0) 
 { 
 AQICategoryTHPM10="Unhealthy"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQICategoryTHPM10="Very Unhealthful"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (AQI<=40.0) 
 { 
 AQIcolorTHPM10="#66ffcc"; 
 } 
else if (AQI>=41.0 && AQI<=120.0) 
 { 
 AQIcolorTHPM10="#00b050"; 
 } 
 else if (AQI>=121.0 && AQI<=350.0) 
 { 
 AQIcolorTHPM10="#ffff00"; 
 } 
 else if (AQI>=351.0 && AQI<=420.0) 
 { 
 AQIcolorTHPM10="#fc8004"; 
 } 
 else if (AQI>=421.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=16.0) 
 { 
 AQI=Linear(1.0,0.0,16.0,0.0,c); 
 } 
else if (c>=17.0 && c<=33.0) 
 { 
 AQI=Linear(2.0,1.0,33.0,17.0,c); 
 } 
 else if (c>=34.0 && c<=50.0) 
 { 
 AQI=Linear(3.0,2.0,50.0,34.0,c); 
 } 
 else if (c>=51.0 && c<=58.0) 
 { 
 AQI=Linear(4.0,3.0,58.0,51.0,c); 
 } 
 else if (c>=59.0 && c<=66.0) 
 { 
 AQI=Linear(5.0,4.0,66.0,59.0,c); 
 } 
 else if (c>=67.0 && c<=75.0) 
 { 
 AQI=Linear(6.0,5.0,75.0,67.0,c); 
 } 
 else if (c>=76.0 && c<=83.0) 
 { 
 AQI=Linear(7.0,6.0,83.0,76.0,c); 
 } 
 else if (c>=84.0 && c<=91.0) 
 { 
 AQI=Linear(8.0,7.0,91.0,84.0,c); 
 } 
 else if (c>=92.0 && c<=99.0) 
 { 
 AQI=Linear(9.0,8.0,99.0,92.0,c); 
 } 
 else if (c>=100.0 && c<=999.0) 
 { 
 AQI=Linear(10.0,9.0,999.0,100.0,c); 
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
 if (AQI<=1.0) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
else if (AQI>=1.0 && AQI<=2.0) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
 else if (AQI>=2.0 && AQI<=3.0) 
 { 
 AQICategoryUKPM10="Low"; 
 } 
 else if (AQI>=3.0 && AQI<=4.0) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>=4.0 && AQI<=5.0) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>=5.0 && AQI<=6.0) 
 { 
 AQICategoryUKPM10="Moderate"; 
 } 
 else if (AQI>=6.0 && AQI<=7.0) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>=7.0 && AQI<=8.0) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>=8.0 && AQI<=9.0) 
 { 
 AQICategoryUKPM10="High"; 
 } 
 else if (AQI>=9.0 && AQI<=10.0) 
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
 if (AQI<=1.0) 
 { 
 AQIcolorUKPM10="#99ff99"; 
 } 
else if (AQI>=1.0 && AQI<=2.0) 
 { 
 AQIcolorUKPM10="#00ff00"; 
 } 
 else if (AQI>=2.0 && AQI<=3.0) 
 { 
 AQIcolorUKPM10="#54bc2a"; 
 } 
 else if (AQI>=3.0 && AQI<=4.0) 
 { 
 AQIcolorUKPM10="#ffff00"; 
 } 
 else if (AQI>=4.0 && AQI<=5.0) 
 { 
 AQIcolorUKPM10="#ffc000"; 
 } 
 else if (AQI>=5.0 && AQI<=6.0) 
 { 
 AQIcolorUKPM10="#fc8004"; 
 } 
 else if (AQI>=6.0 && AQI<=7.0) 
 { 
 AQIcolorUKPM10="#ff6d6d"; 
 } 
 else if (AQI>=7.0 && AQI<=8.0) 
 { 
 AQIcolorUKPM10="#ff0000"; 
 } 
 else if (AQI>=8.0 && AQI<=9.0) 
 { 
 AQIcolorUKPM10="#c00000"; 
 } 
 else if (AQI>=9.0 && AQI<=10.0) 
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
        
        
	row.insertCell(0).innerHTML = "China";
	row.insertCell(0).innerHTML = b2;
	row.insertCell(0).innerHTML = AQICategoryCNPM10(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorCNPM10(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDPM10(b1);
	row.insertCell(0).innerHTML = AQICategoryINDPM10(b1);
        row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "India";
        
 
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
        
        
	row.insertCell(0).innerHTML = "Hong Kong";
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = AQICategoryHKPM10(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorCNPM10(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorINDPM10(b3);
	row.insertCell(0).innerHTML = AQICategoryEUPM10(b3);
        row.insertCell(0).innerHTML = b3;
        row.insertCell(0).innerHTML = "European Union";
        
 
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
        
        
	row.insertCell(0).innerHTML = "South Korea";
	row.insertCell(0).innerHTML = b6;
	row.insertCell(0).innerHTML = AQICategoryKRPM10(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorKRPM10(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorIDNPM10(b5);
	row.insertCell(0).innerHTML = AQICategoryIDNPM10(b5);
        row.insertCell(0).innerHTML = b5;
        row.insertCell(0).innerHTML = "Indonesia";
        
 
}

return true;
        

}



function appendRow3Pm10() {

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
        
        
	row.insertCell(0).innerHTML = "Malyasia";
	row.insertCell(0).innerHTML = b8;
	row.insertCell(0).innerHTML = AQICategoryMYPM10(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorMYPM10(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorLKPM10(b7);
	row.insertCell(0).innerHTML = AQICategoryLKPM10(b7);
        row.insertCell(0).innerHTML = b7;
        row.insertCell(0).innerHTML = "Sri Lanka";
        
 
}

return true;
        

}




function appendRow4Pm10() {

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
        
        
	row.insertCell(0).innerHTML = "Singapore";
	row.insertCell(0).innerHTML = b10;
	row.insertCell(0).innerHTML = AQICategorySGPM10(b10);
	row.insertCell(0).style.backgroundColor = AQIcolorSGPM10(b10);
	row.insertCell(0).style.backgroundColor = AQIcolorPHPM10(b9);
	row.insertCell(0).innerHTML = AQICategoryPHPM10(b9);
        row.insertCell(0).innerHTML = b9;
        row.insertCell(0).innerHTML = "Philippines";
        
 
}

return true;
        

}



function appendRow5Pm10() {

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
        
        
	row.insertCell(0).innerHTML = "United Kingdom";
	row.insertCell(0).innerHTML = b12;
	row.insertCell(0).innerHTML = AQICategoryUKPM10(b12);
	row.insertCell(0).style.backgroundColor = AQIcolorUKPM10(b12);
	row.insertCell(0).style.backgroundColor = AQIcolorTHPM10(b11);
	row.insertCell(0).innerHTML = AQICategoryTHPM10(b11);
        row.insertCell(0).innerHTML = b11;
        row.insertCell(0).innerHTML = "Thailand";
        
 
}

return true;
        

}




function appendRow6Pm10() {

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
        
        
	row.insertCell(0).innerHTML = "";
	row.insertCell(0).innerHTML = "";
	row.insertCell(0).innerHTML = "";
	row.insertCell(0).style.backgroundColor = "";
	row.insertCell(0).style.backgroundColor = AQIcolorUSPM10(b13);
	row.insertCell(0).innerHTML = AQICategoryUSPM10(b13);
        row.insertCell(0).innerHTML = b13;
        row.insertCell(0).innerHTML = "Thailand";
        
 
}

return true;
        

}

