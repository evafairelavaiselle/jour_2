const a = 9
const b = 7
const action = "sub"

function calculator() {
if (action === "add") {
return addition()
}
else if (action === "sub") {
return subtraction()
}}
function addition(){
return a + b
}
function subtraction(){
return a - b
}