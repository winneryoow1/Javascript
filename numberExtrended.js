'use strict';

// -----------------------------八进制 和 二进制---------------------------------//
// ES6新增 0b / 0o 或大写形式表示二进制和八进制
let octalNum = 0o10; //8
let binNum = 0b10; //2
console.log(octalNum + '' + binNum); //82

// 使用Number转换为10进制
console.log(Number(octalNum)); //8

//如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
Number('0b111'); //7
Number('0o10'); //8

// --------------------------Finite NaN-----------------------------------// ES5
// 全局方法 Finite--有限的 Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
//如果参数类型不是数值，Number.isFinite一律返回false Number.isNaN()用来检查一个值是否为NaN
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
//如果参数类型不是NaN，Number.isNaN一律返回false

console.log(isNaN(NaN)); //true
console.log(isFinite(2)); //true
console.log(isFinite(2E325)); //false

// ES6 为了更模块化,把方法添加到了Number, 而且判断更加严格
console.log(isNaN('a')); //true 先转换
console.log(Number.isNaN('')); //false 只对数值有效其他一律false

console.log(isFinite('abc')); //false
console.log(isFinite('InFinity')); //false
console.log(isFinite('2')); //true
console.log(Number.isFinite('2')); //false

/*
总结：这两个新方法只对数值有效，
Number.isFinite()对于非数值一律返回false,
Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。
*/
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false

// -------------------------parseInt parseFloat------------------------------//
// ES6 为了更模块化,把方法添加到了Number,行为完全一致
console.log(Number.parseFloat('0.123abc')); //0.123
console.log(Number.parseFloat(false)); //NaN
console.log(Number.parseInt('11.2 ', 2)); // 3

//ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。 ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true

// -------------------isInteger--------------------//
// Number.isInteger()用来判断一个数值是否为整数。
console.log(Number.isInteger(1.0)); //true
console.log(Number.isInteger(1.1)); //false
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(0.0)); //true

//如果参数不是数值，Number.isInteger返回false
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

// 2个特殊情况 转换后的精度位数高于53位 如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript
// 能够分辨的最小值，会被自动转为 0。
console.log(Number.isInteger(1.000000000000000000001)); //true 这个1转换后超过了53位，被舍弃
console.log(Number.isInteger(5E-324)) // false
console.log(Number.isInteger(5E-325)); //true 太接近0了,被视作0

// 结论: 对精度要求不高可以用 ----------------------epsilon 小量----------------------------//
/**
 * 2的-52放实际上是javaScript能表示的最小精度
 * 所以误差范围小于它可以被认为没误差
 */
console.log(Number.EPSILON === Math.pow(2, -52)); //true
console.log(Number.EPSILON); //2.220446049250313e-16
console.log(Number.EPSILON.toFixed(20)); //0.00000000000000022204

console.log(0.1 + 0.2 === 0.3); //false
console.log(5.551115123125783e-17. toFixed(20)); // '0.00000000000000005551'

//Number.EPSILON可以用来设置“能够接受的误差范围”。 误差检查函数
let isEqual = (left, right) => {
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
};

console.log(isEqual(0.1 + 0.2, 0.3)); //true
console.log(isEqual(0.3 + 0.6, 0.9)); //true

// ----------------------isSafeInteger------------------// 安全整数:JavaScript
// 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
console.log(Math.pow(2, 53)); //9007199254740992
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1); //true---最大存储2的53次方

//ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
console.log(Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER); //true
Number.MAX_SAFE_INTEGER === 9007199254740991 // true

console.log(-Math.pow(2, 53) + 1 === Number.MIN_SAFE_INTEGER); //true
Number.MIN_SAFE_INTEGER === -9007199254740991 // true

//Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false

Number.isSafeInteger(3) // true
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(9007199254740992) // false

Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false

//这个函数的实现: 需要同时验证两个运算数和运算结果。
let isSafeOp = (left, right, result) => {
    if (Number.isSafeInteger(left) && Number.isSafeInteger(right) && Number.isSafeInteger(result)) {
        return result;
    }
    throw new RangeError('Operation cannot be trusted!');
};
console.log(Number.isSafeInteger(Math.pow(2, 53) + 1)); // false

// debug(isSafeOp(9007199254740993, 990, 9007199254740993 - 990)); RangeError:
// Operation cannot be trusted!

console.log(isSafeOp(1, 2, 3));
// 3 ----------------------------Math 扩展----------------------//
// Math.trunc()------------------------------------------------ truncated(截取)
// 取整，用于去除一个数的小数部分，返回整数部分。 会自动转换
console.log(Math.trunc(0.1)); //0
console.log(Math.trunc(-1.2)); //-1
console.log(Math.trunc(-0.1)); //-0
console.log(Math.trunc(undefined)); //NaN

//对于非数值，Math.trunc内部使用Number方法将其先转为数值
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0

//对于空值和无法截取整数的值，返回NaN
Math.trunc(NaN); // NaN
Math.trunc('foo'); // NaN
Math.trunc(); // NaN
Math.trunc(undefined) // NaN

//对于没有部署这个方法的环境，可以用下面的代码模拟。
let getInt = (fNum) => fNum < 0
    ? Math.ceil(fNum)
    : Math.floor(fNum);
console.log(getInt(-0.3)); // =0

// Math.sign()--------------------------------------------------------- sign
// 取符号-判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
/*
参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。
*/
console.log(Math.sign(-0)); //-0
console.log(Math.sign(0)); //0
console.log(Math.sign(5.0)); //1
console.log(Math.sign(-3.0)); //-1
console.log(Math.sign('NaN')); //NaN

//如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN
Math.sign('') // 0
Math.sign(null) // 0
Math.sign('9') // +1
Math.sign('foo') // NaN
Math.sign() // NaN
Math.sign(undefined) // NaN

// 对于没有部署这个方法的环境，可以用下面的代码模拟。
Math.sign = Math.sign || function (x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0
        ? 1
        : -1;
};

// cbrt cubic root-----------------------------------------------------
// Math.cbrt方法用于计算一个数的立方根。
console.log(Math.cbrt(0)); // 0
console.log(Math.cbrt(-0)); // -0
console.log(Math.cbrt(-1)); // -1

//对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值
console.log(Math.cbrt('8')); // 2
console.log(Math.cbrt("jsklak")); // NaN

//对于没有部署这个方法的环境，可以用下面的代码模拟。
Math.cbrt = Math.cbrt || function(x) {
    var y = Math.pow(Math.abs(x), 1/3);
    return x < 0 ? -y : y;
  };

 
// hypot 返回所有参数的平方和的平方根
//Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(5, 12)); // 13
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755

// 对数
//Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
console.log(Math.exp(1)); // 2.718281828459045 求e的x次方
console.log(Math.expm1(1)); // 1.718281828459045 e ^ x - 1
console.log(Math.log(Math.exp(1))); // 1
//Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
console.log(Math.log1p(Math.exp(1) - 1)); // 1

//Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
console.log(Math.log10(1000)); // 3

//Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。
console.log(Math.log2(8)); // 3

// ** 求幂
debug(2 ** 3); // 8
let a = 3;
a **= 3;
debug(a); // 27





























//以下没有太大作用
// Math.clz32()-count leading zero bits in 32-bit binary representation of a number-
// Math.clz32方法返回一个数的 32 位无符号整数形式有多少个前导 0。
// Math.clz32(0) // 32
// Math.clz32(1) // 31
// Math.clz32(1000) // 22
// Math.clz32(0b01000000000000000000000000000000) // 1
// Math.clz32(0b00100000000000000000000000000000) // 2

// 左移运算符（<<）与Math.clz32方法直接相关。
// Math.clz32(0) // 32
// Math.clz32(1) // 31
// Math.clz32(1 << 1) // 30
// Math.clz32(1 << 2) // 29
// Math.clz32(1 << 29) // 2

// 对于小数，Math.clz32方法只考虑整数部分。
// Math.clz32(3.2) // 30
// Math.clz32(3.9) // 30

// 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。
// Math.clz32() // 32
// Math.clz32(NaN) // 32
// Math.clz32(Infinity) // 32
// Math.clz32(null) // 32
// Math.clz32('foo') // 32
// Math.clz32([]) // 32
// Math.clz32({}) // 32
// Math.clz32(true) // 31


// Math.imul()--返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
// Math.imul(2, 4)   // 8
// Math.imul(-1, 8)  // -8
// Math.imul(-2, -2) // 4

// Math.fround()---返回一个数的32位单精度浮点数形式
// 将64位双精度浮点数转为32位单精度浮点数
// Math.fround(0)   // 0
// Math.fround(1)   // 1
// Math.fround(2 ** 24 - 1)   // 16777215
// 如果参数的绝对值大于 224，返回的结果便开始丢失精度。
// Math.fround(2 ** 24)       // 16777216
// Math.fround(2 ** 24 + 1)   // 16777216

// 对于 NaN 和 Infinity，此方法返回原值。对于其它类型的非数值，Math.fround 方法会先将其转为数值，再返回单精度浮点数。
// Math.fround(NaN)      // NaN
// Math.fround(Infinity) // Infinity
// Math.fround('5')      // 5
// Math.fround(true)     // 1
// Math.fround(null)     // 0
// Math.fround([])       // 0
// Math.fround({})       // NaN

// 对于没有部署这个方法的环境，可以用下面的代码模拟。
// Math.fround = Math.fround || function (x) {
//     return new Float32Array([x])[0];
//   };




