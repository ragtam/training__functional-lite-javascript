// function foo() {
//     return 42;
// }

// function bar() {
//     return 10;
// }

function foo(x) {
    return function () {
        return x;
    };
}

function add(x, y) {
    return x + y;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

// add2(foo(10), foo(42)); // 42

function addN(arr) {
    return arr
        .slice(1)
        .map(foo)
        .reduce(function (previous, current) {
            return function () {
                return add2(previous, current);
            };
        }, foo(arr[0]))();
}

const arr = [1, 2, 3, 4];

test('should sum elements', () => {
    const res = addN(arr);
    expect(res).toEqual(10);
});
