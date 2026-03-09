function add(num1, num2) {
    return num1 + num2;
}
var num1 = 10;
var num2 = 10;
console.log(add(num1, num2));
function getFullName(firstname, lastname) {
    return firstname + lastname;
}
var firstname = "vijay";
var lastname = "karthik";
console.log(getFullName(firstname, lastname));
function eligible(age) {
    return age >= 18;
}
console.log(eligible(18));
console.log(eligible(17));
function greet(name) {
    name ? console.log("Hello ".concat(name)) : console.log("Hello guest");
}
greet("vijay");
greet("");
