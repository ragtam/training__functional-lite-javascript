/*
    const does NOT give immutable values, 
    it gives immutable assignment, or more specific, binding to a value
*/

var x = 2;
x++; // ok

const y = 3;
y++; // not allowed

//immutable variable called z bound to that array by reference
const z = [4, 5, 6];
z = 10; // not allowed
z[0] = 10; //allowed

// Object.freeze, at shallow level only. It does not return a copy of an object.
// It returns object itself that has just been frozen.
// Unfreeze is impossible
const w = Object.freeze([4, 5, 6]);
w = 10; // not allowed
w[0] = 10; // not allowed

// impure function
function doubleThemImmutable(list) {
    for (var i = 0; i < list.length; i++) {
        list[i] = list[i] * 2;
    }
}

var arr = [1, 2, 3];
doubleThemImmutable(arr);

// could be pured this way
function doubleThemImmutable2(list) {
    var newList = [];
    for (var i = 0; i < list.length; i++) {
        newList[i] = list[i] * 2;
    }
    return newList;
}
