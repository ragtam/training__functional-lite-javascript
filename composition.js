function sum(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

var z = mult(3, 4);
z = sum(z, 5);

// side effect in this programme. Z is getting changed.

// in order it to be pure, it should look like this: Manual Composition:

sum(mult(3, 4), 5);

/*
technically in a programmatic sense, our programming language needs to 
store variable for the result of mult, but from the perspective of our programme
its pure operation.
*/

// pure wrapper around those would be: ( a manual composition )

function multAndSum(x, y, z) {
    return sum(mult(x, y), z);
}

// but we could create a compose utility for that

function compose(fn1, fn2) {
    return function comp() {
        var args = [].slice.call(arguments);
        return fn2(fn1(args.shift(), args.shift()), args.shift());
    };
}

var multAndSumComposed = compose(mult, sum);

multAndSumComposed(3, 4, 5);
