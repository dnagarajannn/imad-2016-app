// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
 
 counter = counter + 1;

 var span1 = document.getElementById('count');
 span1.innerHTML = counter.toString();  
 span1.innerHTML = "hello";
};