let a ="(1) Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name"
document.write(a)
document.write("<br> <br>")
// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your Last name")
// var fullName = firstName +" " +lastName

// document.write("hello Dear" + " " +fullName)

let b ="(2) Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser"
document.write(b+"<br>"+ "commit due to promt <br>")


// var favMob =prompt("enter your fav mob")
// var length = favMob.length;
// document.write("my fav mob is:"+ favMob+ "<br>")
// document.write(length)
// document.write(b+"<br> ")


let c ="(3) Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser ."
document.write(c+ "<br> <br>")

var str= "pakistani"
var find = str.indexOf("n")

document.write("index of n is"+" " +find)
document.write("<br> <br>")

let d ="(4) Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser."
document.write(d +"<br> <br>")
var sent =" hello world"
var find1 =sent.lastIndexOf("l")
document.write("last index of l is "+" "+ find1)
document.write("<br> <br>")

let e="(5) Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser."
document.write(e + "<br>")

var word = "pakistan"
var find2 = word.charAt(3)

document.write("3rd letter is"+" " + find2)
document.write("<br> <br>")

let f ="(6) Repeat Q1 using string concat() method."
document.write(f+"<br>"+ "commit due to promt")


// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your Last name")
// var fullName = firstName.concat(" " +lastName)

// document.write("hello Dear" + " " +fullName)
document.write("<br> <br>")

let g ="(7) Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser."
document.write(g+"<br>")

var city1 ="haiderabad"
var city2 =city1.replace("haider", "islam")

document.write(city2)
document.write("<br> <br>")

let h="(8) Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser."
document.write(h +"<br>")

var message = "Ali and Sami are best friends. They play cricket and football together"
document.write(message+ "<br>")

var replaced = message.replace(/and/g, "&")
document.write(replaced)
document.write("<br> <br>")

let i="(9) Write a program that converts a string “472” to a number 472. Display the values & types in your browser."
document.write(i+"<br>")

var str1 ="472"
var num1 =parseInt(str1)
document.write(num1)
document.write(typeof num1+"<br> ")
var num2 =472
var str2 =num2.toString()
document.write(str2)
document.write(typeof str2)
document.write("<br> <br>")

let j="(10) Write a program that takes user input. Convert and show the input in capital letters."
document.write(j +"<br>"+ "commit due to promt")

// var user1= prompt("enter the word")
// var changecase =user1.toUpperCase()

// document.write("the uppercase word of "+ user1+" is " +
// changecase)
document.write("<br> <br>")

let k ="Write a program that takes user input. Convert and show the input in title case."
document.write(k+ "<br>"+ "commit due to promt")

