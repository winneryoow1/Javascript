'use strict';
//----------------------属性的简洁表示-----------------------------//
let name = 'lv';
let study = () => {
    console.log("I love jj...");
}
let student = {
    name,
    study,
    exercise() {
        console.log("Exercising is good for health");
    }
};
for(let key of Object.keys(student)) {
    console.log(`${key}: ${student[key]}`);
}

// 模板字符串函数转字符窜和console.log不一样
/*
name: ly
study: () => {
    console.log("I'm study ES6...")
}
exercise: excise() {
        console.log("Exercising is good for health")
    }
 */
console.log(student.study); // [Function: study]
console.log(student["study"]); // [Function: study]
student.exercise(); // Exercising is good for health


// 当属性名和变量名相同是构造对象相当方便
// 例如下面的函数返回值,nodejs的模块接口导出
function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
}
getPoint()
//{x:1, y:10}


//属性的getter,setter
let user = {
    _id: 0,
    get id() {
        console.log("getId");
        return this._id;
    },
    set id(newId) {
        console.log("setId");
        this._id = newId;
    }
};
user.id = 10086;
console.log(user.id);
/*
setId
getId
10086
 */


// 属性的简洁表示法变量总是被解析为字符串
let classObject = {
    class() {
        console.log("The class is a function,here is parsed to string")
    }
};
classObject.class();  //The class is a function, here is parsed to string

// 简洁表示生成器方法时加个*即可
let generatorObj = {
    *generatorFunc() {
        yield 0;
        yield 1;
    }
};
console.log(generatorObj.generatorFunc().next()); // { value: 0, done: false }



//----------------------属性名表达式--------------------------//
// 表示对象的属性
// ES5
let oneObj = {};
//直接使用标识符
oneObj.name = 'oneObj';
//表达式[]
oneObj['i' + 'd'] = 1024;

// ES6允许在对象字面值使用索引操作符声明对象属性,又叫属性名表达式
// 加强了在使用字面值形式对象定义属性时的灵活性,更方便
let propKey = 'name';
let attrNameExpObj = {
    [propKey]: 'lv'
};
console.log(attrNameExpObj.name); //lv


// 属性名表达式如果接受的是非字符串会将其转换为字符串
const keyA = {a: 1};
const keyB = {b: 1};
let objObjectAsKey = {
    [keyA]: 'valueA',
    [keyB]: "valueB"
};
console.dir(objObjectAsKey); // { '[object Object]': 'valueB' } keyA被keyB覆盖


let nullKey = null;
let nullAsAtrrName = {
    [nullKey]: "nullAsKey"
};
console.dir(nullAsAtrrName); // { null: 'nullAsKey' }


//-------------------------object.is---------------------------------//
// ES5 判断相等
console.log(0.1 + 0.2 === 0.3);  // false 严格相等运算符
console.log(' ' == false); // true 相等运算符,会自动转换

// 严格相等运算符不足
console.log(NaN === NaN); // false
console.log(+0 === -0); // true

// ES6提出视为同值相等的说法
// 和 === 大致相同,不同之处1.NaN等于NaN,+0不等于-0
console.log(Object.is('', false)); //false
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(+0, -0)); //false
console.log(+0 + (-0) === 0); //true



//------------------------assign------------------------------//
// assign用于将源对象的可枚举属性浅拷贝到目标对象,不包括继承的
 let target = {name:'lv'};
 target = Object.assign(target, Object.defineProperty({}, 'invisible', {
     value: "can't be seen",
     enumerable: false
 }));
 console.log(Object.getOwnPropertyNames(target));  //[ 'name' ]
 console.dir(target); //{ name: 'lv' }  inVisible不可枚举
 console.log("invisible" in target); //false
 console.log(target.hasOwnProperty("invisible")); //false
 console.log(Object.getOwnPropertyDescriptor(target, "invisible"));  //undefined
 console.log(Reflect.ownKeys(target)); //[ 'name' ]

// 一些特殊情况
// target 是非对象会被转换成对象
//只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
console.log(Object.assign(1, {name: 'lv'}));  //{ [Number: 1] name: 'lv' }
console.log(Object.assign('abc', {name: 'lv'})); //{ [String: 'abc'] name: 'lv' }

// null,undefined无法转换为对象,如果作为target参数,报错
// console.log(Object.assign(null, {name: 'ly'})); // TypeError: Cannot convert undefined or null to object
// source也会被自动转换成对象,null,undefined会被跳过,只有字符串被转换成数组(会以数组形式，拷贝入目标对象)


// 注意
// 1.浅拷贝

// 2.同名属性替换
console.log(Object.assign({}, {name: 'lv'}, {name: 'lvyaru'})); //{ name: 'lvyaru' }
// 3.也可以用来合并数组
console.log(Object.assign([1, 2, 3], [2, 4, 5])); //[ 2, 4, 5 ]
// 4.取值函数不会被拷贝过去,会先取值再拷贝过去
const getterObj = {
    get id() {
        console.log('getId');
        return '1314'
    }
};
console.log(Object.assign({}, getterObj)); //{ id: '1314' }


/*
常见用途
Object.assign方法有很多用处。
（1）为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。
（2）为对象添加方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});
// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};
上面代码使用了对象属性的简洁表示法，直接将两个函数放在大括号中，再使用assign方法添加到SomeClass.prototype之中。
（3）克隆对象
function clone(origin) {
  return Object.assign({}, origin);
}
上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。
不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
（4）合并多个对象
将多个对象合并到某个对象。
const merge =
  (target, ...sources) => Object.assign(target, ...sources);
如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
const merge =
  (...sources) => Object.assign({}, ...sources);
（5）为属性指定默认值
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};
function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
上面代码中，DEFAULTS对象是默认值，options对象是用户提供的参数。Object.assign方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。
注意，由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用。
const DEFAULTS = {
  url: {
    host: 'example.com',
    port: 7070
  },
};
processContent({ url: {port: 8000} })
// {
//   url: {port: 8000}
// }
上面代码的原意是将url.port改成 8000，url.host不变。实际结果却是options.url覆盖掉DEFAULTS.url，所以url.host就不存在了。
 */


//可枚举性enumerable
/*有四个操作会忽略enumerable为false的属性
for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
*/


//-----------------------------------遍历对象属性的5种方法------------------//
const testObj = Object.create({prototypeAttr: 'Attribute of prototype'}, {
    visible: {
        value: 'Visible attribute',
        enumerable: true
    },
    invisible: {
        value: 'Invisible attribute',
        enumerable: false
    },
    [Symbol('s1')]: {
        value: 's1',
        enumerable:true
    }
});

console.dir(testObj); // { visible可见的: 'Visible attribute' }

//1.for in
for(let attr in testObj) {
    console.log(attr);
}
/*
visible
prototypeAttr
*/

//2.Object.keys
console.log(Object.keys(testObj));  //[ 'visible' ]

//3.Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(testObj)); //[ 'visible', 'invisible' ]

//4.Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(testObj)); //[ Symbol(s1) ]

//5.Reflect.ownKeys
console.log(Reflect.ownKeys(testObj)); //[ 'visible', 'invisible', Symbol(s1) ]

// 结论:
/*
1. 如果要遍历一个对象键,使用Object.keys而不是for in, 遍历继承来的属性一般没必要
2. 要遍历Symbol键,使用Object.getOwnPropertySymbols
3. Reflect是终极法宝
 */



let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

//Object.keys()返回一个数组
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]

//Object.values()返回一个数组(有顺序)
//只返回对象自身的可遍历属性,过滤属性名为 Symbol 值的属性
//参数是一个字符串，会返回各个字符组成的一个数组
const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj)
// ["b", "c", "a"]

//Object.entries()
