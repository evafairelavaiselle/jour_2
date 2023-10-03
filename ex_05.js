const fruits= ["apple","apple","strawberry","strawberry","strawberry","lime","lime","peach","pear","pear"]

function getBasketContent(){
console. log( fruits. length + " fruit(s) selected");
showMyBasket(fruits)
}
// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}