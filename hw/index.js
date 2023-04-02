// TASK 1
const parametr1 = /^-?[1-9]\d{5}$/;

console.log('*******Task 1*******')

console.log(parametr1.test('123456'));
console.log(parametr1.test('-123456'));
console.log(parametr1.test('-12345'));
console.log(parametr1.test('023456'));
console.log(parametr1.test('-000016'));

// TASK 2
const parametr2 = /a\w+b/ig;

console.log('*******Task 2*******')

console.log('dfsAJhub sdad gbjhkakjhb kjhab gaCB'.match(parametr2));
console.log('FV fjd RJaCLFJSf Bs kjs SK djANbvXBf kd'.match(parametr2));