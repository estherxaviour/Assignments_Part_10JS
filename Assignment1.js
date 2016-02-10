/*Assignment1
You need to create node.js http server and write program to find palindrome number. Display
the result in browser as well as console.
*/
var http = require('http');

function palindrome(number){
	var num1 = parseInt(number); 	  
	var rev=0;
	var rem=0;
while (number>0)
{
	rem = parseInt(number%10);
	rev = parseInt((rev*10)+rem);
	number = parseInt(number/10);
}
if(rev == num1)
{
return true;
}
else
{
return false;
}
	  
  }
  
var number = 250;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
var result = palindrome(number);
  if (result === true ) {
  	console.log("Given number" + " " + number +" "+ "is pallindrome");
  	response.end("Given number" + " " + number + " " +"is pallindrome.");
  } else {
  	console.log("Given number" + " " + number + " "+ "is not pallindrome");
  	response.end("Given number" + " " + number + " "+"is not pallindrome.");
  }
  
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");







