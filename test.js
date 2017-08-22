function createTable() {
        var myTableDiv = document.getElementById("tablePrint1");  //indiv
        table = document.createElement("TABLE");   //TABLE??
        table.setAttribute("id", "data");
        table.border = '1';
        myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)
        var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "AQI";
        var th1 = table.tHead.appendChild(document.createElement("th"));
        th1.innerHTML = "AQI CAT";
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

function AQIPM10US(Concentration)
{
var Conc=parseFloat(Concentration);
var c;
var AQI;
c=Math.floor(Conc);
if (c>=0 && c<55)
{
	AQI=Linear(50,0,54,0,c);
}
else if (c>=55 && c<155)
{
	AQI=Linear(100,51,154,55,c);
}
else if (c>=155 && c<255)
{
	AQI=Linear(150,101,254,155,c);
}
else if (c>=255 && c<355)
{
	AQI=Linear(200,151,354,255,c);
}
else if (c>=355 && c<425)
{
	AQI=Linear(300,201,424,355,c);
}
else if (c>=425 && c<505)
{
	AQI=Linear(400,301,504,425,c);
}
else if (c>=505 && c<605)
{
	AQI=Linear(500,401,604,505,c);
}
else
{
	AQI="Out of Range";
}
return AQI;
}
    
    
function AQICategoryUS(AQIndex)
{
var AQI=parseFloat(AQIndex)
var AQICategoryUS;
if (AQI<=50)
{
	AQICategoryUS="Good";
}
else if (AQI>50 && AQI<=100)
{
	AQICategoryUS="Moderate";
}
else if (AQI>100 && AQI<=150)
{
	AQICategoryUS="Unhealthy for Sensitive Groups";
}
else if (AQI>150 && AQI<=200)
{
	AQICategoryUS="Unhealthy";
}
else if (AQI>200 && AQI<=300)
{
	AQICategoryUS="Very Unhealthy";
}
else if (AQI>300 && AQI<=400)
{
	AQICategoryUS="Hazardous";
}
else if (AQI>400 && AQI<=500)
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
function AQICalcPm10(form)
{

var f;
f=document.form.inputbox.value
f=f.replace(/\,/,'');

console.log(f)


document.form.inputbox.style.textAlign="center";
document.form.inputbox.style.backgroundColor="white";
b1=AQIPM10US(f);	
//console.log(b1)

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

        row.insertCell(0).innerHTML = b1;
        row.insertCell(1).innerHTML = AQICategoryUS(b1);
         


}

return true;
        

}




