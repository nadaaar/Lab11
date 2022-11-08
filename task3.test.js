const task3 = require("./task3");

test("Testing power",()=>{
    expect(task3.power(2,2)).toBe(4);
 });

 test("Testing rounding",()=>{
    expect(task3.rounding(2.6)).toBe(3);
 });

 test("Testing ceiling",()=>{
    expect(task3.ceiling(2.6)).toBe(3);
 });