
function monitor(str) {

var count = 0;
var timer =  setInterval(function() {
if(count < 5) { count++; console.log(str, count); } else {clearInterval(timer)} 
}, 1000);
}

monitor("aa");
monitor("nn");
