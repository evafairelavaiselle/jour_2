const fruits= ["apple","apple","strawberry","strawberry","strawberry","lime","lime","peach","pear","pear"]

 

function getBasketContent(nbFruits){
if (nbFruits > fruits.length){
	console.log(" Too many fruit(s) selected")
}
else{
	console. log( nbFruits + " fruit(s) selected");
showMyBasket(fruits)
}
}
getBasketContent(10)