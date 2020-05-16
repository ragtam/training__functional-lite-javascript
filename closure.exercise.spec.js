function foo() {
    var [a, b] = Array.prototype.slice.call(arguments);
    return function () {
        return a + b;
    };
}

var x = foo(3, 4);

test('x should always return 7', () => {
    var x = foo(3, 4);

    expect(x()).toEqual(7);
    expect(x()).toEqual(7);
    expect(x()).toEqual(7);
});
