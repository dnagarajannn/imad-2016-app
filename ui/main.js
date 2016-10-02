// counter code


var button = document.getElementById('counter');
var counter=0;
Button.onclick = function() {
    // create  a request
var request = new XMLHttpRequest();
    // capture the response
    request.onreadystatechange = function() {
        if ( request.readyState === XMLHttpRequest.Done) {
            // take some action
            if ( request.status === 200 ) {
                var counter = request.responseText;
                var span = document.getElementById('count');
    span.innterHTML = counter.toString();               
            }
        }
        // not done yet
    };
    // render the variable
    counter = counter+1;
    request.open('GET','http://dnagarajannn.imad.hasura-app.io/counter',true);
    request.send(null);
 
  
};

