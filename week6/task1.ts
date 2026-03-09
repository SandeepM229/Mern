function add(num1: number, num2: number): number{
    return num1+num2
}
let num1: number = 10
let num2: number = 10
console.log(add(num1, num2))

function getFullName(firstname: string, lastname: string): string{
    return firstname+lastname
}
let firstname: string = "vijay"
let lastname: string = "karthik"
console.log(getFullName(firstname, lastname))

function eligible(age: number): boolean{
    return age>=18
}
console.log(eligible(18))
console.log(eligible(17))

function greet(name: string): void{
    name ? console.log(`Hello ${name}`) : console.log("Hello guest")
}
greet("vijay")
greet("")

export {}
