function createTable() {
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
 if (c>=0.0 && c<99.0) 
 { 
 AQI=Linear(100.0,0.0,99.0,0.0,c); 
 } 
else if (c>=100.0 && c<149.0) 
 { 
 AQI=Linear(150.0,101.0,149.0,100.0,c); 
 } 
 else if (c>=150.0 && c<349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,150.0,c); 
 } 
 else if (c>=350.0 && c<419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryIND(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryIND;
 if (AQI<=99.0) 
 { 
 AQICategoryIND="Good"; 
 } 
else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQICategoryIND="Medium"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQICategoryIND="Poor"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQICategoryIND="Very Poor"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQICategoryIND="Severe"; 
 } 
 else 
 { 
 AQICategoryIND="Out of Range"; 
 } 
 return AQICategoryIND; 
 }
function AQIcolorIND(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorIND;
 if (AQI<=99.0) 
 { 
 AQIcolorIND="#00b050"; 
 } 
else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQIcolorIND="#ffff00"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQIcolorIND="#00b0f0"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQIcolorIND="#0000cc"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQIcolorIND="#ff0000"; 
 } 
 else 
 { 
 AQIcolorIND="Out of Range"; 
 } 
 return AQIcolorIND; 
 }
function AQIPM10US(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<54.0) 
 { 
 AQI=Linear(50.0,0.0,54.0,0.0,c); 
 } 
else if (c>=55.0 && c<154.0) 
 { 
 AQI=Linear(100.0,51.0,154.0,55.0,c); 
 } 
 else if (c>=155.0 && c<254.0) 
 { 
 AQI=Linear(150.0,101.0,254.0,155.0,c); 
 } 
 else if (c>=255.0 && c<354.0) 
 { 
 AQI=Linear(200.0,151.0,354.0,255.0,c); 
 } 
 else if (c>=355.0 && c<424.0) 
 { 
 AQI=Linear(300.0,201.0,424.0,355.0,c); 
 } 
 else if (c>=425.0 && c<504.0) 
 { 
 AQI=Linear(400.0,301.0,504.0,425.0,c); 
 } 
 else if (c>=505.0 && c<604.0) 
 { 
 AQI=Linear(500.0,401.0,604.0,505.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUS(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUS;
 if (AQI<=54.0) 
 { 
 AQICategoryUS="Good"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQICategoryUS="Moderate"; 
 } 
 else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQICategoryUS="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>151.0 && AQI<=200.0) 
 { 
 AQICategoryUS="Unhealthy"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQICategoryUS="Very Unhealthy"; 
 } 
 else if (AQI>301.0 && AQI<=400.0) 
 { 
 AQICategoryUS="Hazardous"; 
 } 
 else if (AQI>401.0 && AQI<=500.0) 
 { 
 AQICategoryUS="Hazardous"; 
 } 
 else 
 { 
 AQICategoryUS="Out of Range"; 
 } 
 return AQICategoryUS; 
 }
function AQIcolorUS(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUS;
 if (AQI<=54.0) 
 { 
 AQIcolorUS="#00b050"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQIcolorUS="#ffff00"; 
 } 
 else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQIcolorUS="#fc8004"; 
 } 
 else if (AQI>151.0 && AQI<=200.0) 
 { 
 AQIcolorUS="#ff0000"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQIcolorUS="#9e004f"; 
 } 
 else if (AQI>301.0 && AQI<=400.0) 
 { 
 AQIcolorUS="#851911"; 
 } 
 else if (AQI>401.0 && AQI<=500.0) 
 { 
 AQIcolorUS="#851911"; 
 } 
 else 
 { 
 AQIcolorUS="Out of Range"; 
 } 
 return AQIcolorUS; 
 }
function AQIPM10CN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<149.0) 
 { 
 AQI=Linear(100.0,51.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<249.0) 
 { 
 AQI=Linear(150.0,101.0,249.0,150.0,c); 
 } 
 else if (c>=250.0 && c<349.0) 
 { 
 AQI=Linear(200.0,151.0,349.0,250.0,c); 
 } 
 else if (c>=350.0 && c<419.0) 
 { 
 AQI=Linear(300.0,201.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<499.0) 
 { 
 AQI=Linear(400.0,301.0,499.0,420.0,c); 
 } 
 else if (c>=500.0 && c<599.0) 
 { 
 AQI=Linear(500.0,401.0,599.0,500.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryCN(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryCN;
 if (AQI<=49.0) 
 { 
 AQICategoryCN="Good"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQICategoryCN="Moderate"; 
 } 
 else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQICategoryCN="Lightly Polluted"; 
 } 
 else if (AQI>151.0 && AQI<=200.0) 
 { 
 AQICategoryCN="Medially Polluted"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQICategoryCN="Heavily Polluted"; 
 } 
 else if (AQI>301.0 && AQI<=400.0) 
 { 
 AQICategoryCN="Severely Polluted"; 
 } 
 else if (AQI>401.0 && AQI<=500.0) 
 { 
 AQICategoryCN="Severely Polluted"; 
 } 
 else 
 { 
 AQICategoryCN="Out of Range"; 
 } 
 return AQICategoryCN; 
 }
function AQIcolorCN(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorCN;
 if (AQI<=49.0) 
 { 
 AQIcolorCN="#00b050"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQIcolorCN="#ffff00"; 
 } 
 else if (AQI>101.0 && AQI<=150.0) 
 { 
 AQIcolorCN="#fc8004"; 
 } 
 else if (AQI>151.0 && AQI<=200.0) 
 { 
 AQIcolorCN="#ff0000"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQIcolorCN="#800080"; 
 } 
 else if (AQI>301.0 && AQI<=400.0) 
 { 
 AQIcolorCN="#96001d"; 
 } 
 else if (AQI>401.0 && AQI<=500.0) 
 { 
 AQIcolorCN="#96001d"; 
 } 
 else 
 { 
 AQIcolorCN="Out of Range"; 
 } 
 return AQIcolorCN; 
 }
function AQIPM10EU(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<14.0) 
 { 
 AQI=Linear(15.0,0.0,14.0,0.0,c); 
 } 
else if (c>=15.0 && c<29.0) 
 { 
 AQI=Linear(30.0,16.0,29.0,15.0,c); 
 } 
 else if (c>=30.0 && c<49.0) 
 { 
 AQI=Linear(50.0,31.0,49.0,30.0,c); 
 } 
 else if (c>=50.0 && c<99.0) 
 { 
 AQI=Linear(100.0,51.0,99.0,50.0,c); 
 } 
 else if (c>=100.0 && c<999.0) 
 { 
 AQI=Linear(100.0,1.0,999.0,100.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryEU(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryEU;
 if (AQI<=14.0) 
 { 
 AQICategoryEU="Very Low"; 
 } 
else if (AQI>16.0 && AQI<=30.0) 
 { 
 AQICategoryEU="Low"; 
 } 
 else if (AQI>31.0 && AQI<=50.0) 
 { 
 AQICategoryEU="Medium"; 
 } 
 else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQICategoryEU="High"; 
 } 
 else if (AQI>1.0 && AQI<=100.0) 
 { 
 AQICategoryEU="Very High"; 
 } 
 else 
 { 
 AQICategoryEU="Out of Range"; 
 } 
 return AQICategoryEU; 
 }
function AQIcolorEU(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorEU;
 if (AQI<=14.0) 
 { 
 AQIcolorEU="#96001d"; 
 } 
else if (AQI>16.0 && AQI<=30.0) 
 { 
 AQIcolorEU="#99ff33"; 
 } 
 else if (AQI>31.0 && AQI<=50.0) 
 { 
 AQIcolorEU="#ffff00"; 
 } 
 else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQIcolorEU="#fc8004"; 
 } 
 else if (AQI>1.0 && AQI<=100.0) 
 { 
 AQIcolorEU="#a20000"; 
 } 
 else 
 { 
 AQIcolorEU="Out of Range"; 
 } 
 return AQIcolorEU; 
 }
function AQIPM10HK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<29.0) 
 { 
 AQI=Linear(28.0,0.0,29.0,0.0,c); 
 } 
else if (c>=30.0 && c<59.0) 
 { 
 AQI=Linear(55.0,29.0,59.0,30.0,c); 
 } 
 else if (c>=60.0 && c<174.0) 
 { 
 AQI=Linear(180.0,56.0,174.0,60.0,c); 
 } 
 else if (c>=175.0 && c<349.0) 
 { 
 AQI=Linear(350.0,181.0,349.0,175.0,c); 
 } 
 else if (c>=350.0 && c<600.0) 
 { 
 AQI=Linear(600.0,351.0,600.0,350.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryHK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryHK;
 if (AQI<=29.0) 
 { 
 AQICategoryHK="Low"; 
 } 
else if (AQI>29.0 && AQI<=55.0) 
 { 
 AQICategoryHK="Medium"; 
 } 
 else if (AQI>56.0 && AQI<=180.0) 
 { 
 AQICategoryHK="High"; 
 } 
 else if (AQI>181.0 && AQI<=350.0) 
 { 
 AQICategoryHK="Very High"; 
 } 
 else if (AQI>351.0 && AQI<=600.0) 
 { 
 AQICategoryHK="Severe"; 
 } 
 else 
 { 
 AQICategoryHK="Out of Range"; 
 } 
 return AQICategoryHK; 
 }
function AQIcolorHK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorHK;
 if (AQI<=29.0) 
 { 
 AQIcolorHK="#00b050"; 
 } 
else if (AQI>29.0 && AQI<=55.0) 
 { 
 AQIcolorHK="#00b0f0"; 
 } 
 else if (AQI>56.0 && AQI<=180.0) 
 { 
 AQIcolorHK="#ffff00"; 
 } 
 else if (AQI>181.0 && AQI<=350.0) 
 { 
 AQIcolorHK="#ff0000"; 
 } 
 else if (AQI>351.0 && AQI<=600.0) 
 { 
 AQIcolorHK="#00000"; 
 } 
 else 
 { 
 AQIcolorHK="Out of Range"; 
 } 
 return AQIcolorHK; 
 }
function AQIPM10IDN(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=51.0 && c<99.0) 
 { 
 AQI=Linear(100.0,51.0,99.0,51.0,c); 
 } 
 else if (c>=101.0 && c<199.0) 
 { 
 AQI=Linear(250.0,101.0,199.0,101.0,c); 
 } 
 else if (c>=201.0 && c<299.0) 
 { 
 AQI=Linear(350.0,251.0,299.0,201.0,c); 
 } 
 else if (c>=301.0 && c<399.0) 
 { 
 AQI=Linear(430.0,351.0,399.0,301.0,c); 
 } 
 else if (c>=401.0 && c<999.0) 
 { 
 AQI=Linear(500.0,431.0,999.0,401.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryIDN(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryIDN;
 if (AQI<=49.0) 
 { 
 AQICategoryIDN="Good"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQICategoryIDN="Medium"; 
 } 
 else if (AQI>101.0 && AQI<=250.0) 
 { 
 AQICategoryIDN="Unfair"; 
 } 
 else if (AQI>251.0 && AQI<=350.0) 
 { 
 AQICategoryIDN="Very Unfair"; 
 } 
 else if (AQI>351.0 && AQI<=430.0) 
 { 
 AQICategoryIDN="Dangerous"; 
 } 
 else if (AQI>431.0 && AQI<=500.0) 
 { 
 AQICategoryIDN="Dangerous"; 
 } 
 else 
 { 
 AQICategoryIDN="Out of Range"; 
 } 
 return AQICategoryIDN; 
 }
function AQIcolorIDN(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorIDN;
 if (AQI<=49.0) 
 { 
 AQIcolorIDN="#00b050"; 
 } 
else if (AQI>51.0 && AQI<=100.0) 
 { 
 AQIcolorIDN="#0000ff"; 
 } 
 else if (AQI>101.0 && AQI<=250.0) 
 { 
 AQIcolorIDN="#ffff00"; 
 } 
 else if (AQI>251.0 && AQI<=350.0) 
 { 
 AQIcolorIDN="#ff0000"; 
 } 
 else if (AQI>351.0 && AQI<=430.0) 
 { 
 AQIcolorIDN="#00000"; 
 } 
 else if (AQI>431.0 && AQI<=500.0) 
 { 
 AQIcolorIDN="#00000"; 
 } 
 else 
 { 
 AQIcolorIDN="Out of Range"; 
 } 
 return AQIcolorIDN; 
 }
function AQIPM10KR(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(30.0,0.0,49.0,0.0,c); 
 } 
else if (c>=51.0 && c<99.0) 
 { 
 AQI=Linear(80.0,31.0,99.0,51.0,c); 
 } 
 else if (c>=101.0 && c<149.0) 
 { 
 AQI=Linear(120.0,81.0,149.0,101.0,c); 
 } 
 else if (c>=151.0 && c<249.0) 
 { 
 AQI=Linear(200.0,121.0,249.0,151.0,c); 
 } 
 else if (c>=251.0 && c<349.0) 
 { 
 AQI=Linear(300.0,201.0,349.0,251.0,c); 
 } 
 else if (c>=351.0 && c<499.0) 
 { 
 AQI=Linear(600.0,301.0,499.0,351.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryKR(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryKR;
 if (AQI<=49.0) 
 { 
 AQICategoryKR="Good"; 
 } 
else if (AQI>31.0 && AQI<=80.0) 
 { 
 AQICategoryKR="Moderate"; 
 } 
 else if (AQI>81.0 && AQI<=120.0) 
 { 
 AQICategoryKR="Unhealthy for Sensitive Groups"; 
 } 
 else if (AQI>121.0 && AQI<=200.0) 
 { 
 AQICategoryKR="Very Unhealthy"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQICategoryKR="Hazardous"; 
 } 
 else if (AQI>301.0 && AQI<=600.0) 
 { 
 AQICategoryKR="Hazardous"; 
 } 
 else 
 { 
 AQICategoryKR="Out of Range"; 
 } 
 return AQICategoryKR; 
 }
function AQIcolorKR(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorKR;
 if (AQI<=49.0) 
 { 
 AQIcolorKR="#0000ff"; 
 } 
else if (AQI>31.0 && AQI<=80.0) 
 { 
 AQIcolorKR="#00b050"; 
 } 
 else if (AQI>81.0 && AQI<=120.0) 
 { 
 AQIcolorKR="#ffff00"; 
 } 
 else if (AQI>121.0 && AQI<=200.0) 
 { 
 AQIcolorKR="#ff6600"; 
 } 
 else if (AQI>201.0 && AQI<=300.0) 
 { 
 AQIcolorKR="#da0000"; 
 } 
 else if (AQI>301.0 && AQI<=600.0) 
 { 
 AQIcolorKR="#da0000"; 
 } 
 else 
 { 
 AQIcolorKR="Out of Range"; 
 } 
 return AQIcolorKR; 
 }
function AQIPM10LK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(54.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<149.0) 
 { 
 AQI=Linear(154.0,55.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<249.0) 
 { 
 AQI=Linear(254.0,155.0,249.0,150.0,c); 
 } 
 else if (c>=250.0 && c<349.0) 
 { 
 AQI=Linear(354.0,255.0,349.0,250.0,c); 
 } 
 else if (c>=350.0 && c<424.0) 
 { 
 AQI=Linear(424.0,355.0,424.0,350.0,c); 
 } 
 else if (c>=425.0 && c<604.0) 
 { 
 AQI=Linear(604.0,425.0,604.0,425.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryLK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryLK;
 if (AQI<=49.0) 
 { 
 AQICategoryLK="Good"; 
 } 
else if (AQI>55.0 && AQI<=154.0) 
 { 
 AQICategoryLK="Moderate"; 
 } 
 else if (AQI>155.0 && AQI<=254.0) 
 { 
 AQICategoryLK="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>255.0 && AQI<=354.0) 
 { 
 AQICategoryLK="Unhealthy"; 
 } 
 else if (AQI>355.0 && AQI<=424.0) 
 { 
 AQICategoryLK="Very Unhealthy"; 
 } 
 else if (AQI>425.0 && AQI<=604.0) 
 { 
 AQICategoryLK="Hazardous"; 
 } 
 else 
 { 
 AQICategoryLK="Out of Range"; 
 } 
 return AQICategoryLK; 
 }
function AQIcolorLK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorLK;
 if (AQI<=49.0) 
 { 
 AQIcolorLK="#00b050"; 
 } 
else if (AQI>55.0 && AQI<=154.0) 
 { 
 AQIcolorLK="#ffff00"; 
 } 
 else if (AQI>155.0 && AQI<=254.0) 
 { 
 AQIcolorLK="#ff66ff"; 
 } 
 else if (AQI>255.0 && AQI<=354.0) 
 { 
 AQIcolorLK="#ff0000"; 
 } 
 else if (AQI>355.0 && AQI<=424.0) 
 { 
 AQIcolorLK="#9e004f"; 
 } 
 else if (AQI>425.0 && AQI<=604.0) 
 { 
 AQIcolorLK="#851911"; 
 } 
 else 
 { 
 AQIcolorLK="Out of Range"; 
 } 
 return AQIcolorLK; 
 }
function AQIPM10MY(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<149.0) 
 { 
 AQI=Linear(150.0,51.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,150.0,c); 
 } 
 else if (c>=350.0 && c<419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryMY(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryMY;
 if (AQI<=49.0) 
 { 
 AQICategoryMY="Good"; 
 } 
else if (AQI>51.0 && AQI<=150.0) 
 { 
 AQICategoryMY="Moderate"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQICategoryMY="Unhealthy"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQICategoryMY="Very Unhealthy"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQICategoryMY="Hazardous"; 
 } 
 else 
 { 
 AQICategoryMY="Out of Range"; 
 } 
 return AQICategoryMY; 
 }
function AQIcolorMY(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorMY;
 if (AQI<=49.0) 
 { 
 AQIcolorMY="#0000ff"; 
 } 
else if (AQI>51.0 && AQI<=150.0) 
 { 
 AQIcolorMY="#00b050"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQIcolorMY="#ffff00"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQIcolorMY="#dd5800"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQIcolorMY="#ff0000"; 
 } 
 else 
 { 
 AQIcolorMY="Out of Range"; 
 } 
 return AQIcolorMY; 
 }
function AQIPM10PH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(54.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<149.0) 
 { 
 AQI=Linear(154.0,55.0,149.0,50.0,c); 
 } 
 else if (c>=150.0 && c<254.0) 
 { 
 AQI=Linear(254.0,155.0,254.0,150.0,c); 
 } 
 else if (c>=255.0 && c<354.0) 
 { 
 AQI=Linear(354.0,255.0,354.0,255.0,c); 
 } 
 else if (c>=355.0 && c<424.0) 
 { 
 AQI=Linear(424.0,355.0,424.0,355.0,c); 
 } 
 else if (c>=425.0 && c<999.0) 
 { 
 AQI=Linear(500.0,425.0,999.0,425.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryPH(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryPH;
 if (AQI<=49.0) 
 { 
 AQICategoryPH="Good"; 
 } 
else if (AQI>55.0 && AQI<=154.0) 
 { 
 AQICategoryPH="Fair"; 
 } 
 else if (AQI>155.0 && AQI<=254.0) 
 { 
 AQICategoryPH="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>255.0 && AQI<=354.0) 
 { 
 AQICategoryPH="Very Unhealthy"; 
 } 
 else if (AQI>355.0 && AQI<=424.0) 
 { 
 AQICategoryPH="Accutely Unhealthy"; 
 } 
 else if (AQI>425.0 && AQI<=500.0) 
 { 
 AQICategoryPH="Emergency"; 
 } 
 else 
 { 
 AQICategoryPH="Out of Range"; 
 } 
 return AQICategoryPH; 
 }
function AQIcolorPH(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorPH;
 if (AQI<=49.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
else if (AQI>55.0 && AQI<=154.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
 else if (AQI>155.0 && AQI<=254.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
 else if (AQI>255.0 && AQI<=354.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
 else if (AQI>355.0 && AQI<=424.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
 else if (AQI>425.0 && AQI<=500.0) 
 { 
 AQIcolorPH="#ffffff"; 
 } 
 else 
 { 
 AQIcolorPH="Out of Range"; 
 } 
 return AQIcolorPH; 
 }
function AQIPM10SG(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<49.0) 
 { 
 AQI=Linear(50.0,0.0,49.0,0.0,c); 
 } 
else if (c>=50.0 && c<139.0) 
 { 
 AQI=Linear(150.0,51.0,139.0,50.0,c); 
 } 
 else if (c>=140.0 && c<349.0) 
 { 
 AQI=Linear(350.0,151.0,349.0,140.0,c); 
 } 
 else if (c>=350.0 && c<419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategorySG(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategorySG;
 if (AQI<=49.0) 
 { 
 AQICategorySG="Good"; 
 } 
else if (AQI>51.0 && AQI<=150.0) 
 { 
 AQICategorySG="Moderate"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQICategorySG="Unhealthy"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQICategorySG="Very Unhealthy"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQICategorySG="Hazardous"; 
 } 
 else 
 { 
 AQICategorySG="Out of Range"; 
 } 
 return AQICategorySG; 
 }
function AQIcolorSG(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorSG;
 if (AQI<=49.0) 
 { 
 AQIcolorSG="#00b050"; 
 } 
else if (AQI>51.0 && AQI<=150.0) 
 { 
 AQIcolorSG="#0070c0"; 
 } 
 else if (AQI>151.0 && AQI<=350.0) 
 { 
 AQIcolorSG="#ffff00"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQIcolorSG="#fc8004"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQIcolorSG="#ff0000"; 
 } 
 else 
 { 
 AQIcolorSG="Out of Range"; 
 } 
 return AQIcolorSG; 
 }
function AQIPM10TH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<39.0) 
 { 
 AQI=Linear(40.0,0.0,39.0,0.0,c); 
 } 
else if (c>=40.0 && c<119.0) 
 { 
 AQI=Linear(120.0,41.0,119.0,40.0,c); 
 } 
 else if (c>=120.0 && c<349.0) 
 { 
 AQI=Linear(350.0,121.0,349.0,120.0,c); 
 } 
 else if (c>=350.0 && c<419.0) 
 { 
 AQI=Linear(420.0,351.0,419.0,350.0,c); 
 } 
 else if (c>=420.0 && c<999.0) 
 { 
 AQI=Linear(500.0,421.0,999.0,420.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryTH(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryTH;
 if (AQI<=39.0) 
 { 
 AQICategoryTH="Good"; 
 } 
else if (AQI>41.0 && AQI<=120.0) 
 { 
 AQICategoryTH="Moderate"; 
 } 
 else if (AQI>121.0 && AQI<=350.0) 
 { 
 AQICategoryTH="Unhealthy"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQICategoryTH="Very Unhealthful"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQICategoryTH="Hazardous"; 
 } 
 else 
 { 
 AQICategoryTH="Out of Range"; 
 } 
 return AQICategoryTH; 
 }
function AQIcolorTH(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorTH;
 if (AQI<=39.0) 
 { 
 AQIcolorTH="#66ffcc"; 
 } 
else if (AQI>41.0 && AQI<=120.0) 
 { 
 AQIcolorTH="#00b050"; 
 } 
 else if (AQI>121.0 && AQI<=350.0) 
 { 
 AQIcolorTH="#ffff00"; 
 } 
 else if (AQI>351.0 && AQI<=420.0) 
 { 
 AQIcolorTH="#fc8004"; 
 } 
 else if (AQI>421.0 && AQI<=500.0) 
 { 
 AQIcolorTH="#ff0000"; 
 } 
 else 
 { 
 AQIcolorTH="Out of Range"; 
 } 
 return AQIcolorTH; 
 }
function AQIPM10UK(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<16.0) 
 { 
 AQI=Linear(1.0,0.0,16.0,0.0,c); 
 } 
else if (c>=17.0 && c<33.0) 
 { 
 AQI=Linear(2.0,1.0,33.0,17.0,c); 
 } 
 else if (c>=34.0 && c<50.0) 
 { 
 AQI=Linear(3.0,2.0,50.0,34.0,c); 
 } 
 else if (c>=51.0 && c<58.0) 
 { 
 AQI=Linear(4.0,3.0,58.0,51.0,c); 
 } 
 else if (c>=59.0 && c<66.0) 
 { 
 AQI=Linear(5.0,4.0,66.0,59.0,c); 
 } 
 else if (c>=67.0 && c<75.0) 
 { 
 AQI=Linear(6.0,5.0,75.0,67.0,c); 
 } 
 else if (c>=76.0 && c<83.0) 
 { 
 AQI=Linear(7.0,6.0,83.0,76.0,c); 
 } 
 else if (c>=84.0 && c<91.0) 
 { 
 AQI=Linear(8.0,7.0,91.0,84.0,c); 
 } 
 else if (c>=92.0 && c<99.0) 
 { 
 AQI=Linear(9.0,8.0,99.0,92.0,c); 
 } 
 else if (c>=100.0 && c<999.0) 
 { 
 AQI=Linear(10.0,9.0,999.0,100.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryUK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryUK;
 if (AQI<=16.0) 
 { 
 AQICategoryUK="Low"; 
 } 
else if (AQI>1.0 && AQI<=2.0) 
 { 
 AQICategoryUK="Low"; 
 } 
 else if (AQI>2.0 && AQI<=3.0) 
 { 
 AQICategoryUK="Low"; 
 } 
 else if (AQI>3.0 && AQI<=4.0) 
 { 
 AQICategoryUK="Moderate"; 
 } 
 else if (AQI>4.0 && AQI<=5.0) 
 { 
 AQICategoryUK="Moderate"; 
 } 
 else if (AQI>5.0 && AQI<=6.0) 
 { 
 AQICategoryUK="Moderate"; 
 } 
 else if (AQI>6.0 && AQI<=7.0) 
 { 
 AQICategoryUK="High"; 
 } 
 else if (AQI>7.0 && AQI<=8.0) 
 { 
 AQICategoryUK="High"; 
 } 
 else if (AQI>8.0 && AQI<=9.0) 
 { 
 AQICategoryUK="High"; 
 } 
 else if (AQI>9.0 && AQI<=10.0) 
 { 
 AQICategoryUK="Very High"; 
 } 
 else 
 { 
 AQICategoryUK="Out of Range"; 
 } 
 return AQICategoryUK; 
 }
function AQIcolorUK(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorUK;
 if (AQI<=16.0) 
 { 
 AQIcolorUK="#99ff99"; 
 } 
else if (AQI>1.0 && AQI<=2.0) 
 { 
 AQIcolorUK="#00ff00"; 
 } 
 else if (AQI>2.0 && AQI<=3.0) 
 { 
 AQIcolorUK="#54bc2a"; 
 } 
 else if (AQI>3.0 && AQI<=4.0) 
 { 
 AQIcolorUK="#ffff00"; 
 } 
 else if (AQI>4.0 && AQI<=5.0) 
 { 
 AQIcolorUK="#ffc000"; 
 } 
 else if (AQI>5.0 && AQI<=6.0) 
 { 
 AQIcolorUK="#fc8004"; 
 } 
 else if (AQI>6.0 && AQI<=7.0) 
 { 
 AQIcolorUK="#ff6d6d"; 
 } 
 else if (AQI>7.0 && AQI<=8.0) 
 { 
 AQIcolorUK="#ff0000"; 
 } 
 else if (AQI>8.0 && AQI<=9.0) 
 { 
 AQIcolorUK="#c00000"; 
 } 
 else if (AQI>9.0 && AQI<=10.0) 
 { 
 AQIcolorUK="#cc00ff"; 
 } 
 else 
 { 
 AQIcolorUK="Out of Range"; 
 } 
 return AQIcolorUK; 
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


function appendRow() {

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


function appendRow1() {

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

	row.insertCell(0).innerHTML = AQICategoryUS(b13);
	row.insertCell(0).innerHTML = AQICategoryUK(b12);
	row.insertCell(0).innerHTML = AQICategoryTH(b11);
	row.insertCell(0).innerHTML = AQICategorySG(b10);
	row.insertCell(0).innerHTML = AQICategoryPH(b9);
	row.insertCell(0).innerHTML = AQICategoryMY(b8);
	row.insertCell(0).innerHTML = AQICategoryLK(b7);
	row.insertCell(0).innerHTML = AQICategoryKR(b6);
	row.insertCell(0).innerHTML = AQICategoryIDN(b5);
	row.insertCell(0).innerHTML = AQICategoryHK(b4);
	row.insertCell(0).innerHTML = AQICategoryEU(b3);
	row.insertCell(0).innerHTML = AQICategoryCN(b2);
	row.insertCell(0).innerHTML = AQICategoryIND(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}

function appendRow2() {

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

	row.insertCell(0).innerHTML = AQICategoryUS(b13);
	row.insertCell(0).innerHTML = AQICategoryUK(b12);
	row.insertCell(0).innerHTML = AQICategoryTH(b11);
	row.insertCell(0).innerHTML = AQICategorySG(b10);
	row.insertCell(0).innerHTML = AQICategoryPH(b9);
	row.insertCell(0).innerHTML = AQICategoryMY(b8);
	row.insertCell(0).innerHTML = AQICategoryLK(b7);
	row.insertCell(0).innerHTML = AQICategoryKR(b6);
	row.insertCell(0).innerHTML = AQICategoryIDN(b5);
	row.insertCell(0).innerHTML = AQICategoryHK(b4);
	row.insertCell(0).innerHTML = AQICategoryEU(b3);
	row.insertCell(0).innerHTML = AQICategoryCN(b2);
	row.insertCell(0).innerHTML = AQICategoryIND(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}
