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

var b1;
var b13;
function AQICalcPm10(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQIPM10IND(f);
b13=AQIPM10US(f);	
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
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
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
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = 'null';
	row.insertCell(0).innerHTML = AQICategoryIND(b1);
        row.insertCell(0).innerHTML = "AQI Advisory";
}

return true;
        

}


