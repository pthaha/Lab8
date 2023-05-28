// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

/*
function isPhoneNumber(phoneNumber)
function isEmail(email)
function isStrongPassword(password)
function isDate(date)
function isHexColor(color) 
*/
// TODO - Part 2
test("", () => {
    expect(functions.isPhoneNumber('917-648-6270')).toBe(true);
}); 
test("", () => {
    expect(functions.isPhoneNumber('848-648-8366')).toBe(true);
}); 
test("", () => {
    expect(functions.isPhoneNumber('9176486270')).toBe(false);
}); 
test("", () => {
    expect(functions.isPhoneNumber('efawef')).toBe(false);
}); 
test("", () => {
    expect(functions.isEmail('tt389@gmail.com')).toBe(true);
}); 
test("", () => {
    expect(functions.isEmail('kllu@ucsd.edu')).toBe(true);
}); 
test("", () => {
    expect(functions.isEmail('917-648-6270')).toBe(false);
}); 
test("", () => {
    expect(functions.isEmail('a@a')).toBe(false);
}); 
test("", () => {
    expect(functions.isStrongPassword('A1638')).toBe(true);
}); 
test("", () => {
    expect(functions.isStrongPassword('g697hjh')).toBe(true);
}); 
test("", () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
}); 
test("", () => {
    expect(functions.isStrongPassword('90000')).toBe(false);
}); 
test("", () => {
    expect(functions.isDate('46/46/9999')).toBe(true);
}); 
test("", () => {
    expect(functions.isDate('6/6/7894')).toBe(true);

}); 
test("", () => {
    expect(functions.isDate('1/1/1')).toBe(false);

}); 
test("", () => {
    expect(functions.isDate('789/78/9')).toBe(false);

}); 
test("", () => {
    expect(functions.isHexColor('FF5733')).toBe(true);

}); 
test("", () => {
    expect(functions.isHexColor('#33FFA2')).toBe(true);

}); 
test("", () => {
    expect(functions.isHexColor('red')).toBe(false);

}); 
test("", () => {
    expect(functions.isHexColor('#33FFA23')).toBe(false);

}); 