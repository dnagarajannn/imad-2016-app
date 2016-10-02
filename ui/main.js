// counter code
var button = document.getElementById('counter');

button.onclick = function() {
    // create  a request
var request = new XMLHttpRequest();
    // capture the response
    request.onreadystatechange = function() {
        if ( request.readyState === XMLHttpRequest.DONE) {
            // take some action
            if ( request.status === 200 ) {
                var counter = request.responseText;
                counter++;
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

