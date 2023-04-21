const sum = require("./sum.js")

test('sums two number', ()=>{
    expect(sum(1,2)).toBe(3);
})