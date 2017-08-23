function createTableNo2() {
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
 th1.innerHTML = "Malyasia"
var th1 = table.tHead.appendChild(document.createElement("th")); 
 th1.innerHTML = "Thailand"
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
 if (c>=0 && c<40) 
 { 
 AQI=Linear(50,0,40,0,c); 
 } 
else if (c>=41 && c<80) 
 { 
 AQI=Linear(100,51,80,41,c); 
 } 
 else if (c>=81 && c<180) 
 { 
 AQI=Linear(200,101,180,81,c); 
 } 
 else if (c>=181 && c<280) 
 { 
 AQI=Linear(300,201,280,181,c); 
 } 
 else if (c>=281 && c<400) 
 { 
 AQI=Linear(400,301,400,281,c); 
 } 
 else if (c>=401 && c<999) 
 { 
 AQI=Linear(500,401,999,401,c); 
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
 if (AQI<=40) 
 { 
 AQICategoryINDNO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryINDNO2="Medium"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryINDNO2="Poor"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryINDNO2="Very Poor"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryINDNO2="Severe"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (AQI<=40) 
 { 
 AQIcolorINDNO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorINDNO2="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorINDNO2="#00b0f0"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorINDNO2="#0000cc"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorINDNO2="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (c>=0 && c<40) 
 { 
 AQI=Linear(50,0,40,0,c); 
 } 
else if (c>=41 && c<80) 
 { 
 AQI=Linear(100,51,80,41,c); 
 } 
 else if (c>=81 && c<180) 
 { 
 AQI=Linear(200,101,180,81,c); 
 } 
 else if (c>=181 && c<280) 
 { 
 AQI=Linear(300,201,280,181,c); 
 } 
 else if (c>=281 && c<565) 
 { 
 AQI=Linear(400,301,565,281,c); 
 } 
 else if (c>=566 && c<940) 
 { 
 AQI=Linear(500,401,940,566,c); 
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
 if (AQI<=40) 
 { 
 AQICategoryCNNO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryCNNO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryCNNO2="Lightly Polluted"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryCNNO2="Medially Polluted"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryCNNO2="Heavily Polluted"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (AQI<=40) 
 { 
 AQIcolorCNNO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorCNNO2="#ffff00"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorCNNO2="#fc8004"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorCNNO2="#ff0000"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorCNNO2="#800080"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (c>=0 && c<40) 
 { 
 AQI=Linear(50,0,40,0,c); 
 } 
else if (c>=41 && c<80) 
 { 
 AQI=Linear(100,51,80,41,c); 
 } 
 else if (c>=81 && c<150) 
 { 
 AQI=Linear(200,101,150,81,c); 
 } 
 else if (c>=151 && c<280) 
 { 
 AQI=Linear(300,201,280,151,c); 
 } 
 else if (c>=281 && c<940) 
 { 
 AQI=Linear(400,301,940,281,c); 
 } 
 else if (c>=941 && c<9999) 
 { 
 AQI=Linear(500,401,9999,941,c); 
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
 if (AQI<=40) 
 { 
 AQICategoryHKNO2="Low"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryHKNO2="Medium"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryHKNO2="High"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryHKNO2="Very High"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryHKNO2="Severe"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (AQI<=40) 
 { 
 AQIcolorHKNO2="#00b050"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorHKNO2="#00b0f0"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorHKNO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorHKNO2="#ff0000"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorHKNO2="#00000"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (c>=0 && c<160) 
 { 
 AQI=Linear(50,0,160,0,c); 
 } 
else if (c>=161 && c<320) 
 { 
 AQI=Linear(100,51,320,161,c); 
 } 
 else if (c>=321 && c<1130) 
 { 
 AQI=Linear(200,101,1130,321,c); 
 } 
 else if (c>=1131 && c<2260) 
 { 
 AQI=Linear(300,201,2260,1131,c); 
 } 
 else if (c>=2261 && c<9999) 
 { 
 AQI=Linear(400,301,9999,2261,c); 
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
 if (AQI<=160) 
 { 
 AQICategoryMYNO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryMYNO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryMYNO2="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryMYNO2="Very Unhealthy"; 
 } 
 else if (AQI>301 && AQI<=400) 
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
 if (AQI<=160) 
 { 
 AQIcolorMYNO2="#0000ff"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorMYNO2="#00b050"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorMYNO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorMYNO2="#dd5800"; 
 } 
 else if (AQI>301 && AQI<=400) 
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
 if (c>=0 && c<160) 
 { 
 AQI=Linear(50,0,160,0,c); 
 } 
else if (c>=161 && c<320) 
 { 
 AQI=Linear(100,51,320,161,c); 
 } 
 else if (c>=321 && c<1130) 
 { 
 AQI=Linear(200,101,1130,321,c); 
 } 
 else if (c>=1131 && c<2260) 
 { 
 AQI=Linear(300,201,2260,1131,c); 
 } 
 else if (c>=2261 && c<3750) 
 { 
 AQI=Linear(400,301,3750,2261,c); 
 } 
 else if (c>=3751 && c<9999) 
 { 
 AQI=Linear(500,401,9999,3751,c); 
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
 if (AQI<=160) 
 { 
 AQICategoryTHNO2="Good"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQICategoryTHNO2="Moderate"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQICategoryTHNO2="Unhealthy"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQICategoryTHNO2="Very Unhealthful"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQICategoryTHNO2="Hazardous"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
 if (AQI<=160) 
 { 
 AQIcolorTHNO2="#66ffcc"; 
 } 
else if (AQI>51 && AQI<=100) 
 { 
 AQIcolorTHNO2="#00b050"; 
 } 
 else if (AQI>101 && AQI<=200) 
 { 
 AQIcolorTHNO2="#ffff00"; 
 } 
 else if (AQI>201 && AQI<=300) 
 { 
 AQIcolorTHNO2="#fc8004"; 
 } 
 else if (AQI>301 && AQI<=400) 
 { 
 AQIcolorTHNO2="#ff0000"; 
 } 
 else if (AQI>401 && AQI<=500) 
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
        
        

	row.insertCell(0).innerHTML = b5;
	row.insertCell(0).innerHTML = b4;
	row.insertCell(0).innerHTML = b3;
	row.insertCell(0).innerHTML = b2;
	row.insertCell(0).innerHTML = b1;
        row.insertCell(0).innerHTML = "AQI";
        
 
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



	row.insertCell(0).innerHTML = AQICategoryTHNO2(b5);
	row.insertCell(0).innerHTML = AQICategoryMYNO2(b4);
	row.insertCell(0).innerHTML = AQICategoryHKNO2(b3);
	row.insertCell(0).innerHTML = AQICategoryCNNO2(b2);
	row.insertCell(0).innerHTML = AQICategoryINDNO2(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
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
      
	row.insertCell(0).style.backgroundColor = AQIcolorTHNO2(b5);
	row.insertCell(0).style.backgroundColor = AQIcolorMYNO2(b4);
	row.insertCell(0).style.backgroundColor = AQIcolorHKNO2(b3);
	row.insertCell(0).style.backgroundColor = AQIcolorCNNO2(b2);
	row.insertCell(0).style.backgroundColor = AQIcolorINDNO2(b1);
        row.insertCell(0).innerHTML = "AQI colour";
}

return true;
        

}
