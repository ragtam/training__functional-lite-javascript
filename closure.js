/*
    Closure is when a function remembers the variables around it 
    even when that function is executed elsewhere
*/

// function from return has variable count in its lexical scope
// inner function has a close over that count variable

function foo() {
    var count = 0;

    return function () {
        return count++;
    };
}

var x = foo();
x(); // 0
x(); // 1
x(); // 2

/*
    This example of closure should not go together with functional programming, it has effect, cound is getting changed. But closure is very useful
    with currying or partial application.
*/

function sumX(x) {
    return function (y) {
        return x + y;
    };
}

var add10 = sum(10);

add10(3); // 13;
add10(14); // 24

// use of closure and functional approach, no side effects
