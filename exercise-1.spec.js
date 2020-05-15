import { foo, bar, bar1 } from './exercise-1';

test('[EX 1] impure function, different results with each call', () => {
    const r1 = foo(20);
    const r2 = foo(20);

    expect(r1).toEqual(120);
    expect(r2).toEqual(140);
});

test('[EX 1] pure bar equivalent', () => {
    const r1 = bar(20);
    const r2 = bar(20);

    expect(r1).toEqual(120);
    expect(r2).toEqual(120);
});

test('[EX 1] approach with added y argument', () => {
    const r1 = bar1(20, 5);
    const r2 = bar1(20, 5);

    expect(r1).toEqual([6, 120]);
    expect(r2).toEqual([6, 120]);
});
