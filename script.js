function fun(){
 var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
var cell = rows[0].insertCell(4); // Insert a new cell at the end of each row
    cell.innerHTML = "Mean Time (s)";
	cell = rows[0].insertCell(5);
    cell.innerHTML = "Time Period (s)";
	cell = rows[0].insertCell(6);
    cell.innerHTML = "T<sup>2</sup>";
	cell = rows[0].insertCell(7);
    cell.innerHTML = "L/T<sup>2</sup>";
	var lbyt=parseFloat(0);
	var t,s,m,l,t2,v,lby;
  for (var i = 1; i < rows.length; i++) {
    cell = rows[i].insertCell(4); // Insert a new cell at the end of each row
	 t=parseFloat(document.getElementById("t"+i).value);
	 s=parseFloat(document.getElementById("T"+i).value);
	m=(t+s)/2
	cell.innerHTML =m;
	cell= rows[i].insertCell(5);
	l=parseFloat(document.getElementById("osci").value);
	t=m/l;
	cell.innerHTML =t.toFixed(2);
	cell= rows[i].insertCell(6);
	t2=t*t;
	cell.innerHTML =t2.toFixed(3);
	cell= rows[i].insertCell(7);
	v=parseFloat(document.getElementById("l"+i).value);
	lby=parseFloat((v/t2).toFixed(4));
	cell.innerHTML =lby;
	lbyt+=lby;
  }
  var d=document.getElementById("output");
  var m=(lbyt/5).toFixed(4);
  d.innerHTML="Mean (L/T<sup>-2</sup>)="+m+"*10<sup>-2</sup> ms<sup>-2</sup>";
  var Radi=parseFloat(document.getElementById("R").value);
  var mass=parseFloat(document.getElementById("Mass").value);
 const inertia = calculateInertia(mass,Radi);
const customExponent = 1; // The custom exponent you want

const inertiaInPowerOfTen = convertToPowerOfTen(inertia, customExponent);
document.getElementById("result").innerHTML = "Moment of inertia="+inertiaInPowerOfTen+"*10<sup>-7</sup> kgm<sup>2</sup>";
  hide.style.display="none";
}
function convertToPowerOfTen(decimalNumber, customExponent) {
  if (decimalNumber === 0) {
    return "0"; // Special case for zero
  }

  const exponent = Math.floor(Math.log10(decimalNumber)) - customExponent;
  const coefficient = decimalNumber / Math.pow(10, exponent);

  return coefficient.toFixed(3);
}

function calculateInertia(mass, radius) {
  const inertia = (mass * 0.001 * radius * radius * 0.01 * 0.01) / 2;
  return inertia;
}
