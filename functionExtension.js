//-------------------------default未履行 value----------------------------//
// ES5
function func1(x) {
    x = x || 'default';
    console.log(x);
}
//局限性
func1(); //default
func1(false);  //default
func1(null);  //default
func1(undefined); //default

//ES6
let myPow = (x, y=2) => {
    return Math.pow(x, y);
};
console.log(myPow(4)); //16

/**
 * 好处
 * 1.可以明显看出哪些参数时可以用默认值，不需要看函数体
 * 2.有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。
 */

/*注意点*/

// 参数是默认声明的不允许用const,let再次声明
// let testFunc = (x, y=0) => {
//     let x = 1; // Identifier 'x' has already been declared
//     const y = 3; // Identifier 'y' has already been declared
// };


//惰性求值
let x = 0;
function foo1(p = x + 10) {
    console.log(p);
}
foo1(); //10
x = -10;
foo1(); //0



//与解构赋值默认值结合使用
//使用对象的解构赋值
// function foo({x, y = 5}) {
//     console.log(x, y);
//   }
  
//   foo({}) // undefined 5
//   foo() // TypeError: Cannot read property 'x' of undefined

//两种写法的区别
// 写法一
function m1({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]



// 一般把有默认值的参数放在尾部，这样就不用写那些参数，放前面其实是不能省的(除尾参数外)
function funcIngore(x=0, y){
    console.log([x, y]);
}
funcIngore(1);
// funcIngore( , 2); // SyntaxError: Unexpected token ,不能省，要省放后面去
funcIngore(null, 2); // [ null, 2 ]

//只有undefine可以触发默认值
funcIngore(undefined, 2); // [ 0, 2 ] 


// 函数length属性
function funcLen(x, y, v, w=5) {
    let z = 0;
    const k = 0;
}
function funclen1(x, y, z=0, w){
    console.log('a');
}
console.log(funcLen.length); //3 返回的是参数个数--默认值参数前面的参数，后面的不计入length
console.log(funclen1.length); //2
// rest参数也不计入
function funcRest(x, ...rest) {}
console.log(funcRest.length); //1

// 同一个作用域 多次声明同一个变量，只要有一次let，报错
var t = 2;
var t = 1;
// let t = 5;



//作用域--------------------------------------------
//第一种：不设置参数默认值
var xx = 1;
function f(xx, yy = xx) {
  console.log(yy);
}

f(2) // 2

//第二种：
//函数调用时，函数体内部的局部变量x影响不到默认值变量x。
let xxx = 1;
function f(yyy = xxx) {
  let xxx = 2;
  console.log(yyy);
}

f() // 1

//第三种：
//此时全局变量x不存在 会报错。(var也会报错)
// function f(y = x) {
//     let x = 2;
//     console.log(y);
//   }
  
//   f() // ReferenceError: x is not defined



//----------------------rest 参数-------------------------//
/**
 * rest和arguments区别
 * rest是真正的数组，可以直接调用数组的方法
 * 幽灵rest就不需用arguments
 *  rest数组内参数不计入length
 */
//arguments
function argFunc() {
    return Array.prototype.slice.call(arguments).sort();
}
console.log(argFunc(2, 5, 3));

//rest
let restFunc = (...numbers) => {
    return numbers.sort()
};
console.log(restFunc(3, 11, 9));



//----------------------严格模式-----------------------//
// ES5允许在函数内部使用strict
variabb = 8;
function strFunc() {
    'use strict';
    let variabb = 6; // ReferenceError: variabb is not defined
}
strFunc();

// ES6规定，如果在函数参数中使用了如默认值，rest，, 结构赋值，捕鱼不许内部声明严格模式
/**
 * 理由:
 * 函数内部的严格模式，同时适用于函数体和函数参数。
 * 但是，函数执行的时候，先执行函数参数，然后再执行函数体。
 * 这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，
 * 但是参数却应该先于函数体执行。
 */
// 咱又想在函数体内部使用strict有想使用参数高级语法咋办
// 俩种破除限制的方法
// 设置全局strict
// 用立即执行函数

let breakLimit = (() => {
    aaa = 8;
    'use strict';
    return (...rest) => {
        // bbbb = 9; // ReferenceError: bbbb is not defined 
        console.log('ok');
    }
})();
breakLimit();



//-------------name----------------/
// 具名函数
function name1(){ }
console.log(name1.name); //name1

let _name1 = name1;
console.log(_name1.name); //name1

//函数表达式
let name2 = () => {};
console.log(name2.name); //name2

let _name2 = name2;
console.log(_name2.name); //name2

//匿名函数
console.log((() => {}).name); //''
console.log((function () {}).name); //''
//Function构造函数
console.log((new Function).name); // anonymous

let bname2 = name2.bind({});
console.log(bname2.name); //bound name2
/**
 * 总结name属性
 * 匿名函数返回空字符串
 * 通过变量名获取的name是匿名函数第一次绑定的变量名
 * 使用bind绑定后，name有bound前缀
 */


 //----------------------arrow function-------------------------//
// ES6新增加箭头函数
// 使用场景
// 函数体语句比较少的函数
let add = (a, b) => a + b;
//作为回调函数
console.log([4, 11, 6].sort((x, y) => x- y)); //[ 4, 6, 11 ]

// 注意事项
// 箭头函数没有自己的this,只能调用外部的this
let ob1 = {
    x : 1,
    f: function testThisExits() {
        return (() => {
            return (() => {
                let x = 6;
                return (() => this.x)();
            })();
        })();
    }
};
console.log(`this.x: ${ob1.f()}`); //1

// arrow function没有arguments
const outF = function () {
    arguments = 'outer args';
    console.log(((innerArgs) => arguments)());
};
outF(); //outer args

// 由于没有this所以不能用call,bind,apply
// 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target



//------------------------嵌套的箭头函数--------------------------------//
const insert = value => ({
    into: (...array) => ({
        after: afterValue => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log('insert: ' + Array.isArray(insert(2).into(1, 3).after(1))); //[1,2,3]

const pipe = (...funcs) => {
    funcs.reduce((lf, rf) => rf(lf()))
}


//尾递归