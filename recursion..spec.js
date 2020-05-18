/*
    RECURSION, a function that is performing some action until it reaches a base case.

    MUTUAL RECURSION, two or more functions calling each other until they rach a base case.

    When one function calls another one ( even the same one) first function call allocates memory
    called stack frame ( a place in memory where all variables and state are held ).
    When it finishes it throws this stack frame away from memory. 
    If we have A calling B, B calling C, C calling D, D calling E. We have 5 stack frames allocated.
    Each of them taking up memory.

    ***
    OLD IE had arbitrary limitation of 13 levels deep in call stack. Only 13 stack frames could be allocated.
    Now its 10000 or 20000. If web app makes phone run out of memory, it will shud down.
    ***

    TCO, Tail Call Optimization. Tail Call, when a function returns a result from another function.
    In its optimization, js engine knows that it does need to create a new stack frame. 
    It is going to reuse it.

    ES6 spec requires on browsers to implement TCO. This way recursive functions are not going to be a problem.
    They will reuse the same stack frame over and over again.
*/

function sumIter() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

function sumRecFirstVer() {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    function sumArray(array) {
        if (array.length === 0) {
            return sum;
        }

        var [first, ...rest] = array;
        sum = sum + Number(first);
        return sumArray(rest);
    }

    return sumArray(args);
}

function sumRecSecondVer() {
    var args = [].slice.call(arguments);
    function sumArray(array) {
        if (array.length === 0) {
            return 0;
        } else if (array.length === 1) {
            return array[0];
        } else {
            var [first, second, ...rest] = array;
            return sumArray([first + second, ...rest]);
        }
    }
    return sumArray(args);
}

function sumRecKylesVersion() {
    var args = [].slice.call(arguments);
    if (args.length <= 2) {
        // this is a base case, we are not calling any other function
        return args[0] + args[1];
    }
    // recursive call
    return args[0] + sumRecKylesVersion.apply(null, args.slice(1));
}

function sumRecurEs6(...args) {
    if (args.length <= 2) {
        return args[0] + args[1];
    }
    // this is not a proper tail call since there is multiplication happening here.
    // For TCO, the very last thing to happen needs to be function call
    return args[0] + sumRecurEs6(...args.slice(1));
}

// EX 1
function multRec(...args) {
    return args.length <= 1 ? args[0] : args[0] * multRec(...args.slice(1));
}

test('it should sum numbers iteratively', () => {
    const res = sumIter(3, 4, 5);
    expect(res).toEqual(12);
});

test('it should sum recursively', () => {
    const res = sumRecFirstVer(3, 4, 5);
    expect(res).toEqual(12);
});

test('it should sum recursively ver 2', () => {
    const res = sumRecSecondVer(3, 4, 5);
    expect(res).toEqual(12);
});

test('it should sum recursively ver 2, #1', () => {
    const res = sumRecSecondVer(3);
    expect(res).toEqual(3);
});

test('it should sum, Kyle`s simpson', () => {
    const res = sumRecKylesVersion(3, 4, 5);
    expect(res).toEqual(12);
});

test('it should sum, Kyle`s simpson #1', () => {
    const res = sumRecurEs6(3, 4, 5);
    expect(res).toEqual(12);
});

test('it should multiply recursively', () => {
    const res = multRec(1, 2, 3);
    expect(res).toEqual(6);
});
