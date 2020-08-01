
"use strict";
/*function reverse(valNum) {
  valNum = parseFloat(valNum);
  var temp = valnum;
  var reversedNo = 0;
  while(temp>0)
  {
    var digit = temp % 10;
    reversedNo = reversedNo * 10 + digit;
    temp /= 10;
  }
  //document.getElementById("reversed").innerHTML = reversedNo;
  return reversedNo;
}*/
function reverse_a_number()
{
  var n=document.getElementById("original").value;
	n = n + "";
  document.getElementById("reversed").innerHTML= n.split("").reverse().join("");
}
