var galToLit = function () {
  var gallon = parseFloat(prompt("Gallons:"));
  var liter = gallon * 3.785411784;

  return liter;
}

var litToGal = function () {
  var liter = parseFloat(prompt("Liters:"));
  var gallon = liter / 3.7854;

  return gallon;
}
alert(litToGal());
