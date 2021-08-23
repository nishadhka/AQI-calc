function createTableNo2() {
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
function AQINO2IND(Concentration) 
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
 else if (c>=81.0 && c<=180.0) 
 { 
 AQI=Linear(200.0,101.0,180.0,81.0,c); 
 } 
 else if (c>=181.0 && c<=280.0) 
 { 
 AQI=Linear(300.0,201.0,280.0,181.0,c); 
 } 
 else if (c>=281.0 && c<=400.0) 
 { 
 AQI=Linear(400.0,301.0,400.0,281.0,c); 
 } 
 else if (c>=401.0 && c<=999.0) 
 { 
 AQI=Linear(500.0,401.0,999.0,401.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryINDNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryINDNO2;
 if (AQI<=50.0) 
 { 
 AQICategoryINDNO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryINDNO2="Medium"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryINDNO2="Poor"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryINDNO2="Very Poor"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryINDNO2="Severe"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQICategoryINDNO2="Severe"; 
 } 
 else 
 { 
 AQICategoryINDNO2="Out of Range"; 
 } 
 return AQICategoryINDNO2; 
 }
function AQIcolorINDNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorINDNO2;
 if (AQI<=50.0) 
 { 
 AQIcolorINDNO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorINDNO2="#ffff00"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorINDNO2="#00b0f0"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorINDNO2="#0000cc"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorINDNO2="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQIcolorINDNO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorINDNO2="Out of Range"; 
 } 
 return AQIcolorINDNO2; 
 }
function AQINO2CN(Concentration) 
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
 else if (c>=81.0 && c<=180.0) 
 { 
 AQI=Linear(200.0,101.0,180.0,81.0,c); 
 } 
 else if (c>=181.0 && c<=280.0) 
 { 
 AQI=Linear(300.0,201.0,280.0,181.0,c); 
 } 
 else if (c>=281.0 && c<=565.0) 
 { 
 AQI=Linear(400.0,301.0,565.0,281.0,c); 
 } 
 else if (c>=566.0 && c<=940.0) 
 { 
 AQI=Linear(500.0,401.0,940.0,566.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryCNNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryCNNO2;
 if (AQI<=50.0) 
 { 
 AQICategoryCNNO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryCNNO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryCNNO2="Lightly Polluted"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryCNNO2="Medially Polluted"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryCNNO2="Heavily Polluted"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQICategoryCNNO2="Severely Polluted"; 
 } 
 else 
 { 
 AQICategoryCNNO2="Out of Range"; 
 } 
 return AQICategoryCNNO2; 
 }
function AQIcolorCNNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorCNNO2;
 if (AQI<=50.0) 
 { 
 AQIcolorCNNO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorCNNO2="#ffff00"; AQICategoryCNNO2
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorCNNO2="#fc8004"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorCNNO2="#ff0000"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorCNNO2="#800080"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQIcolorCNNO2="#96001d"; 
 } 
 else 
 { 
 AQIcolorCNNO2="Out of Range"; 
 } 
 return AQIcolorCNNO2; 
 }
function AQINO2HK(Concentration) 
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
 else if (c>=81.0 && c<=150.0) 
 { 
 AQI=Linear(200.0,101.0,150.0,81.0,c); 
 } 
 else if (c>=151.0 && c<=280.0) 
 { 
 AQI=Linear(300.0,201.0,280.0,151.0,c); 
 } 
 else if (c>=281.0 && c<=940.0) 
 { 
 AQI=Linear(400.0,301.0,940.0,281.0,c); 
 } 
 else if (c>=941.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,941.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryHKNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryHKNO2;
 if (AQI<=50.0) 
 { 
 AQICategoryHKNO2="Low"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryHKNO2="Medium"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryHKNO2="High"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryHKNO2="Very High"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryHKNO2="Severe"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQICategoryHKNO2="Severe"; 
 } 
 else 
 { 
 AQICategoryHKNO2="Out of Range"; 
 } 
 return AQICategoryHKNO2; 
 }
function AQIcolorHKNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorHKNO2;
 if (AQI<=50.0) 
 { 
 AQIcolorHKNO2="#00b050"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorHKNO2="#00b0f0"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorHKNO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorHKNO2="#ff0000"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorHKNO2="#00000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQIcolorHKNO2="#00000"; 
 } 
 else 
 { 
 AQIcolorHKNO2="Out of Range"; 
 } 
 return AQIcolorHKNO2; 
 }
function AQINO2MY(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<=160.0) 
 { 
 AQI=Linear(50.0,0.0,160.0,0.0,c); 
 } 
else if (c>=161.0 && c<=320.0) 
 { 
 AQI=Linear(100.0,51.0,320.0,161.0,c); 
 } 
 else if (c>=321.0 && c<=1130.0) 
 { 
 AQI=Linear(200.0,101.0,1130.0,321.0,c); 
 } 
 else if (c>=1131.0 && c<=2260.0) 
 { 
 AQI=Linear(300.0,201.0,2260.0,1131.0,c); 
 } 
 else if (c>=2261.0 && c<=9999.0) 
 { 
 AQI=Linear(400.0,301.0,9999.0,2261.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryMYNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryMYNO2;
 if (AQI<=50.0) 
 { 
 AQICategoryMYNO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryMYNO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryMYNO2="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryMYNO2="Very Unhealthy"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryMYNO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryMYNO2="Out of Range"; 
 } 
 return AQICategoryMYNO2; 
 }
function AQIcolorMYNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorMYNO2;
 if (AQI<=50.0) 
 { 
 AQIcolorMYNO2="#0000ff"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorMYNO2="#00b050"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorMYNO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorMYNO2="#dd5800"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorMYNO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorMYNO2="Out of Range"; 
 } 
 return AQIcolorMYNO2; 
 }
function AQINO2TH(Concentration) 
 { 
 var Conc=parseFloat(Concentration); 
 var c; 
 var AQI; 
 c=Math.floor(Conc);           
 if (c>=0.0 && c<=160.0) 
 { 
 AQI=Linear(50.0,0.0,160.0,0.0,c); 
 } 
else if (c>=161.0 && c<=320.0) 
 { 
 AQI=Linear(100.0,51.0,320.0,161.0,c); 
 } 
 else if (c>=321.0 && c<=1130.0) 
 { 
 AQI=Linear(200.0,101.0,1130.0,321.0,c); 
 } 
 else if (c>=1131.0 && c<=2260.0) 
 { 
 AQI=Linear(300.0,201.0,2260.0,1131.0,c); 
 } 
 else if (c>=2261.0 && c<=3750.0) 
 { 
 AQI=Linear(400.0,301.0,3750.0,2261.0,c); 
 } 
 else if (c>=3751.0 && c<=9999.0) 
 { 
 AQI=Linear(500.0,401.0,9999.0,3751.0,c); 
 } 
 else 
 { 
 AQI="Out of Range"; 
 } 
 return AQI; 
 }
function AQICategoryTHNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQICategoryTHNO2;
 if (AQI<=50.0) 
 { 
 AQICategoryTHNO2="Good"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQICategoryTHNO2="Moderate"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQICategoryTHNO2="Unhealthy"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQICategoryTHNO2="Very Unhealthful"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQICategoryTHNO2="Hazardous"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQICategoryTHNO2="Hazardous"; 
 } 
 else 
 { 
 AQICategoryTHNO2="Out of Range"; 
 } 
 return AQICategoryTHNO2; 
 }
function AQIcolorTHNO2(AQIndex) 
 { 
 var AQI=parseFloat(AQIndex); 
 var AQIcolorTHNO2;
 if (AQI<=50.0) 
 { 
 AQIcolorTHNO2="#66ffcc"; 
 } 
else if (AQI>=51.0 && AQI<=100.0) 
 { 
 AQIcolorTHNO2="#00b050"; 
 } 
 else if (AQI>=101.0 && AQI<=200.0) 
 { 
 AQIcolorTHNO2="#ffff00"; 
 } 
 else if (AQI>=201.0 && AQI<=300.0) 
 { 
 AQIcolorTHNO2="#fc8004"; 
 } 
 else if (AQI>=301.0 && AQI<=400.0) 
 { 
 AQIcolorTHNO2="#ff0000"; 
 } 
 else if (AQI>=401.0 && AQI<=500.0) 
 { 
 AQIcolorTHNO2="#ff0000"; 
 } 
 else 
 { 
 AQIcolorTHNO2="Out of Range"; 
 } 
 return AQIcolorTHNO2; 
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
function AQICalcNo2(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQIPM10IND(f)
b2=AQIPM10CN(f)
b3=AQIPM10HK(f)
b4=AQIPM10MY(f)
b5=AQIPM10TH(f)
console.log(b1)
console.log(b13)

}


function appendRowNo2() {

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
	row.insertCell(0).innerHTML = AQICategoryCNNO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorCNNO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDNO2(b1);
	row.insertCell(0).innerHTML = AQICategoryINDNO2(b1);
        row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "India";
        
 
}

return true;
        

}


function appendRow1No2() {

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
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = AQICategoryMYNO2(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorMYNO2(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorHKNO2(b3);
	row.insertCell(0).innerHTML = AQICategoryHKNO2(b3);
        row.insertCell(0).innerHTML = b3;
        row.insertCell(0).innerHTML = "Hong Kong";
}

return true;
        

}

function appendRow2No2() {

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
	row.insertCell(0).innerHTML = "";
	row.insertCell(0).style.backgroundColor = AQIcolorTHNO2(b5);
	row.insertCell(0).innerHTML = AQICategoryTHNO2(b5);
        row.insertCell(0).innerHTML = b5;
        row.insertCell(0).innerHTML = "Thailand";
}

return true;
        

}
