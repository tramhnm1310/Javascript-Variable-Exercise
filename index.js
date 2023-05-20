function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var x = a;
    a = b;
    b = x;
    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// Creating alert using variables

var message = "Hello";
var name = "tramhnm";

alert (message + " " + name + "!");

// Tweet: How many character you have remaining

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount)  + " characters left.")