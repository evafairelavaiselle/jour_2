fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruit(fru) {
if (Number.isInteger(fru)) {
if (fru == -1) {
return fruits[fruits.length - 1]
}
if (fru > fruits.length - 1) {
return null
} else {
return fruits[fru];
}
}
else {
if (fruits.indexOf(fru) == -1) {
return null;
}
else {
return fruits.indexOf(fru);
}
}
}
displayResult(getFruit("Pears"))