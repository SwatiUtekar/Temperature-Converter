var newCel=document.getElementById("cel");
var newFahr=document.getElementById("fahr");

function fahrConverter(){
  var newFahr1= (parseFloat(newCel.value)*9/5)+32;
  newFahr.value=newFahr1;
}

function celConverter(){
  var newCel1=(parseFloat(newFahr.value)-32)*5/9;
  newCel.value=newCel1;
}
