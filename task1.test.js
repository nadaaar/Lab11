const task1 = require("./task1");







test("Testing sum",()=>{
   expect(task1.sum(1,2)).toBe(3);
});


test("Testing subtraction",()=>{
   expect(task1.subtraction(3,2)).toBe(1);
});

test("Testing multiplication",()=>{
    expect(task1.multiply(3,2)).toBe(6);
 });

 test("Testing Division",()=>{
    expect(task1.division(12,6)).toBe(2);
 });

 test("Testing Division#2",()=>{
    expect(task1.division(12,0)).toBe( "Not possible");
 });





 
