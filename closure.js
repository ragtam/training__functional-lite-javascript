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
