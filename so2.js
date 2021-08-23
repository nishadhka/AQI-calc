function createTableSo2() {
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
function AQISO2IND(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<=40.0) 
 { 
 AQI=Linear(50.0,0.0,40.0,0.0,c); 
 } 
else if (c>=41.0 && c<=80.0) 
 { 
 AQI=Linear(100.0,51.0,80.0,41.0,c); 
 } 
 else if (c>=81.0 && c<=380.0) 
 { 
 AQI=Linear(200.0,101.0,380.0,81.0,c); 
 } 
 else if (c>=381.0 && c<=800.0) 
 { 
 AQI=Linear(300.0,201.0,800.0,381.0,c); 
 } 
 else if (c>=801.0 && c<=1600.0) 
 { 
 AQI=Linear(400.0,301.0,1600.0,801.0,c); 
 } 
 else if (c>=1601.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,1601.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryINDSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryINDSO2="Medium"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryINDSO2="Poor"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryINDSO2="Very Poor"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryINDSO2="Severe"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorINDSO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorINDSO2="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorINDSO2="#00b0f0"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorINDSO2="#0000cc"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorINDSO2="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=304.0 && c<=604.0) 
 { 
 AQI=Linear(300.0,201.0,604.0,304.0,c); 
 } 
else if (c>=605.0 && c<=804.0) 
 { 
 AQI=Linear(400.0,301.0,804.0,605.0,c); 
 } 
 else if (c>=805.0 && c<=1004.0) 
 { 
 AQI=Linear(500.0,401.0,1004.0,805.0,c); 
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
 if (AQI<=300.0) 
 { 
 AQICategoryUSSO2="Unhealthy"; 
 } 
else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryUSSO2="Very Unhealthy"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=300.0) 
 { 
 AQIcolorUSSO2="#ff0000"; 
 } 
else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorUSSO2="#9e004f"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=50.0) 
 { 
 AQI=Linear(50.0,0.0,50.0,0.0,c); 
 } 
else if (c>=51.0 && c<=150.0) 
 { 
 AQI=Linear(100.0,51.0,150.0,51.0,c); 
 } 
 else if (c>=151.0 && c<=475.0) 
 { 
 AQI=Linear(200.0,101.0,475.0,151.0,c); 
 } 
 else if (c>=476.0 && c<=800.0) 
 { 
 AQI=Linear(300.0,201.0,800.0,476.0,c); 
 } 
 else if (c>=801.0 && c<=1600.0) 
 { 
 AQI=Linear(400.0,301.0,1600.0,801.0,c); 
 } 
 else if (c>=1601.0 && c<=2620.0) 
 { 
 AQI=Linear(500.0,401.0,2620.0,1601.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryCNSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryCNSO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryCNSO2="Lightly Polluted"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryCNSO2="Medially Polluted"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryCNSO2="Heavily Polluted"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorCNSO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorCNSO2="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorCNSO2="#fc8004"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorCNSO2="#ff0000"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorCNSO2="#800080"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=39.0) 
 { 
 AQI=Linear(50.0,0.0,39.0,0.0,c); 
 } 
else if (c>=40.0 && c<=79.0) 
 { 
 AQI=Linear(100.0,51.0,79.0,40.0,c); 
 } 
 else if (c>=80.0 && c<=349.0) 
 { 
 AQI=Linear(200.0,101.0,349.0,80.0,c); 
 } 
 else if (c>=350.0 && c<=799.0) 
 { 
 AQI=Linear(300.0,201.0,799.0,350.0,c); 
 } 
 else if (c>=800.0 && c<=2619.0) 
 { 
 AQI=Linear(400.0,301.0,2619.0,800.0,c); 
 } 
 else if (c>=2620.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,2620.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryHKSO2="Low"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryHKSO2="Medium"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryHKSO2="High"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryHKSO2="Very High"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryHKSO2="Severe"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorHKSO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorHKSO2="#00b0f0"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorHKSO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorHKSO2="#ff0000"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorHKSO2="#00000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=88.94) 
 { 
 AQI=Linear(50.0,0.0,88.94,0.0,c); 
 } 
else if (c>=89.0 && c<=376.7) 
 { 
 AQI=Linear(100.0,51.0,376.7,89.0,c); 
 } 
 else if (c>=377.0 && c<=585.98) 
 { 
 AQI=Linear(200.0,101.0,585.98,377.0,c); 
 } 
 else if (c>=586.0 && c<=795.26) 
 { 
 AQI=Linear(300.0,201.0,795.26,586.0,c); 
 } 
 else if (c>=796.0 && c<=1580.26) 
 { 
 AQI=Linear(400.0,301.0,1580.26,796.0,c); 
 } 
 else if (c>=1581.0 && c<=2626.46) 
 { 
 AQI=Linear(500.0,401.0,2626.46,1581.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryLKSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryLKSO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryLKSO2="Unhealthy for sensitive Groups"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryLKSO2="Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryLKSO2="Very Unhealthy"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorLKSO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorLKSO2="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorLKSO2="#ff66ff"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorLKSO2="#ff0000"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorLKSO2="#9e004f"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=52.5) 
 { 
 AQI=Linear(50.0,0.0,52.5,0.0,c); 
 } 
else if (c>=52.6 && c<=105.0) 
 { 
 AQI=Linear(100.0,51.0,105.0,52.6,c); 
 } 
 else if (c>=106.0 && c<=800.0) 
 { 
 AQI=Linear(200.0,101.0,800.0,106.0,c); 
 } 
 else if (c>=801.0 && c<=1600.0) 
 { 
 AQI=Linear(300.0,201.0,1600.0,801.0,c); 
 } 
 else if (c>=1601.0 && c<=9999.0) 
 { 
 AQI=Linear(400.0,301.0,9999.0,1601.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryMYSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryMYSO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryMYSO2="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryMYSO2="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorMYSO2="#0000ff"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorMYSO2="#00b050"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorMYSO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorMYSO2="#dd5800"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
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
 if (c>=0.0 && c<=89.0) 
 { 
 AQI=Linear(50.0,0.0,89.0,0.0,c); 
 } 
else if (c>=90.0 && c<=377.0) 
 { 
 AQI=Linear(100.0,51.0,377.0,90.0,c); 
 } 
 else if (c>=378.0 && c<=586.0) 
 { 
 AQI=Linear(200.0,101.0,586.0,378.0,c); 
 } 
 else if (c>=587.0 && c<=795.0) 
 { 
 AQI=Linear(300.0,201.0,795.0,587.0,c); 
 } 
 else if (c>=796.0 && c<=1580.0) 
 { 
 AQI=Linear(400.0,301.0,1580.0,796.0,c); 
 } 
 else if (c>=1581.0 && c<=2103.0) 
 { 
 AQI=Linear(500.0,401.0,2103.0,1581.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryPHSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryPHSO2="Fair"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryPHSO2="Unhealthy for sensitive groups"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryPHSO2="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryPHSO2="Accutely Unhealthy"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorPHSO2="#ffffff"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=80.0) 
 { 
 AQI=Linear(50.0,0.0,80.0,0.0,c); 
 } 
else if (c>=81.0 && c<=365.0) 
 { 
 AQI=Linear(100.0,51.0,365.0,81.0,c); 
 } 
 else if (c>=366.0 && c<=800.0) 
 { 
 AQI=Linear(200.0,101.0,800.0,366.0,c); 
 } 
 else if (c>=801.0 && c<=1600.0) 
 { 
 AQI=Linear(300.0,201.0,1600.0,801.0,c); 
 } 
 else if (c>=1601.0 && c<=2100.0) 
 { 
 AQI=Linear(400.0,301.0,2100.0,1601.0,c); 
 } 
 else if (c>=2100.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,2100.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategorySGSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategorySGSO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategorySGSO2="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategorySGSO2="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategorySGSO2="Hazardous"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorSGSO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorSGSO2="#0070c0"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorSGSO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorSGSO2="#fc8004"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorSGSO2="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (c>=0.0 && c<=65.0) 
 { 
 AQI=Linear(50.0,0.0,65.0,0.0,c); 
 } 
else if (c>=66.0 && c<=300.0) 
 { 
 AQI=Linear(100.0,51.0,300.0,66.0,c); 
 } 
 else if (c>=301.0 && c<=800.0) 
 { 
 AQI=Linear(200.0,101.0,800.0,301.0,c); 
 } 
 else if (c>=801.0 && c<=1600.0) 
 { 
 AQI=Linear(300.0,201.0,1600.0,801.0,c); 
 } 
 else if (c>=1601.0 && c<=2620.0) 
 { 
 AQI=Linear(400.0,301.0,2620.0,1601.0,c); 
 } 
 else if (c>=2621.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,2621.0,c); 
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
 if (AQI<=50.0) 
 { 
 AQICategoryTHSO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryTHSO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryTHSO2="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryTHSO2="Very Unhealthful"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryTHSO2="Hazardous"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
 if (AQI<=50.0) 
 { 
 AQIcolorTHSO2="#66ffcc"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorTHSO2="#00b050"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorTHSO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorTHSO2="#fc8004"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorTHSO2="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
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
        
        
	
	row.insertCell(0).innerHTML = "China";
	row.insertCell(0).innerHTML = b2;
	row.insertCell(0).innerHTML = AQICategoryCNSO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorCNSO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDSO2(b1);
	row.insertCell(0).innerHTML = AQICategoryINDSO2(b1);
        row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "India";
        
 
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

	
	row.insertCell(0).innerHTML = "Sri Lanka";
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = AQICategoryLKSO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorLKSO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorHKSO2(b1);
	row.insertCell(0).innerHTML = AQICategoryHKSO2(b1);
        row.insertCell(0).innerHTML = b3;
        row.insertCell(0).innerHTML = "Hong Kong";
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
	

	row.insertCell(0).innerHTML = "Philippines";
	row.insertCell(0).innerHTML = b6;
	row.insertCell(0).innerHTML = AQICategoryPHSO2(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorPHSO2(b6);
	row.insertCell(0).style.backgroundColor = AQIcolorMYSO2(b5);
	row.insertCell(0).innerHTML = AQICategoryMYSO2(b5);
        row.insertCell(0).innerHTML = b5;
        row.insertCell(0).innerHTML = "Malyasia";
}

return true;
        

}


function appendRow3So2() {

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
	

	row.insertCell(0).innerHTML = "Thailand";
	row.insertCell(0).innerHTML = b8;
	row.insertCell(0).innerHTML = AQICategoryTHSO2(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorTHSO2(b8);
	row.insertCell(0).style.backgroundColor = AQIcolorSGSO2(b7);
	row.insertCell(0).innerHTML = AQICategorySGSO2(b7);
        row.insertCell(0).innerHTML = b7;
        row.insertCell(0).innerHTML = "Singapore";
}

return true;
        

}


function appendRow3So2() {

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
	row.insertCell(0).style.backgroundColor = AQIcolorUSSO2(b9);
	row.insertCell(0).innerHTML = AQICategoryUSSO2(b9);
        row.insertCell(0).innerHTML = b9;
        row.insertCell(0).innerHTML = "Singapore";
}

return true;
        

}
