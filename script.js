TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(x);
forward(x);
right(x);
forward(x);
right(x);
forward(x);
right(x);
forward(x);
}

function triangle(x){
forward(x);
right(120);
forward(x);
right(120);
forward(x);
}

function pentagon(x){
    forward(x);
    right(x);
    forward(x);
    right(x);
    forward(x);
    right(x);
    forward(x);
    right(x);
    forward(x);
}



// Type your function call below
pentagon(100);
stamp();
