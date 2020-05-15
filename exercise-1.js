// TAST: wrap foo around bar so that it became pure for the outside world

function foo(x) {
    y++;
    z = x * y;

    return z;
}

var y = 5,
    z;

// mine

function bar(x) {
    var y = 5;

    function foo(x) {
        y++;
        return x * y;
    }

    return foo(x);
}

// Kyle`s
// with functional approach, return result (if sevaral elements need to be returned)
// should be wrapped into some container: object or array.
// usually array is preferred. Easier to perform operations on list than an object

function bar1(x, y) {
    var z;
    foo(x);
    return [y, z];

    function foo() {
        y++;
        z = x * y;
    }
}

export { foo, bar, bar1 };
