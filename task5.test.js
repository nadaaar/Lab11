const task5 = require("./task5");


test("Testing find",()=>{
    expect(task5.find(2)).toBe(true);
 });
 test("Testing find",()=>{
    expect(task5.find(21)).toBe(false);
 });