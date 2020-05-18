/*
    We express operation that we are going to do as a list operation.
    We can have empty list, or list with one element. It can have a million args. 
    This is to get rid of a special case in case we need to deal with one or none. 
    If everything is a list this does not matter.

    Transformation, taking a value doing sth with it and returning it after a change.
    Number of values keeps unchanged.
*/

function doubleIt(v) {
    return v * 2;
}

function addOne(v) {
    return v + 1;
}

function transform(arr, fn) {
    var list = [];
    for (var i = 0; i < arr.length; i++) {
        list[i] = fn(arr[i]);
    }
    return list;
}

transform([1, 2, 3], doubleIt); // [ 2, 4, 6 ]

/*
JS way of transforming is through map. But a functional programmer might frow upon that. 
Since using map makes it hadrer to compose. We have to compose through chaining
*/
[1, 2, 3].map(doubleIt);

/*
    here intermediary array is going to be created, and we will go through array twice.
    So we should compose those two function to one.
*/

[1, 2, 3].map(doubleIt).map(addOne);

// EXCLUSION

function isOdd(v) {
    return v % 2 == 1;
}

function exclude(arr, fn) {
    var list = [];
    arr.forEach(function (value) {
        if (fn(value)) {
            list.push(value);
        }
    });
    return list;
}

// fortunately exclusion is build in too

// Composition

function mult(x, y) {
    return x * y;
}

function compose(arr, fn, initial) {
    var total = initial;
    for (var i = 0; i < arr.length; i++) {
        total = fn(total, arr[i]);
    }
    return total;
}

compose([1, 2, 3, 4, 5], mult, 1); // 120

/*
!!! Incosistency in compositional pattern.
this is called a FULL REDUCTION. Array gets chagned to a single value. We are unable to compose it afterwards. 
But reduction is usually the very last step in a chain so it might not be a big deal.

PARTIAL REDUCTION would return an array
*/

// FOR EACH
/*
    for each is about side effect. So this does not meet functional approach. 
*/

function logValue(v) {
    console.log(v);
}

function iterate(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

iterage([1, 2, 3, 4], logValue);
[1, 2, 3, 4].forEach(logValue);
