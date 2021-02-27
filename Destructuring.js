//----------------------------------------------------------解构赋值---------------------------------------------------------------------//
//ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值

//--------------------------------------------------数组的解构赋值----------------------------------------------------------------------//
//例
let a = 1;
let b = 2;
let c = 3;
//等价于:从数组中提取值，按照对应位置，对变量赋值
//  let [a, b, c] = [1, 2, 3];

//“模式匹配”:只要等号两边的模式相同，左边的变量就会被赋予对应的值
//嵌套数组
let[foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); //1 2 3

//解构不成功 => undefined
//let [foo1] = [];
//let [bar1, foo1] = [1];  //foo1 => undefined

//不完全解构
let [x, y] = [1, 2, 3];
console.log(x); //1
console.log(y); //2

//右边不是数组将会报错(number,false,NaN,undefined,null,{})

//set结构
let [e, f, g] = new Set(['e', 'f', 'g']);
console.log(e); //e


//具有Iterator 接口
//fibs是一个 Generator 函数,原生具有 Iterator 接口。
function* fibs() {
    let m = 0;
    let n = 1;
    while(true) {
        yield m;
        [m, n] = [n, m + n];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth); //0  1  1  2  3  5



//默认值
let [foo1 = true] = [];
foo1 // true

let [x1, y1 = 'b'] = ['a']; // x1='a', y1='b'
let [x2, y2 = 'b'] = ['a', undefined]; // x2='a', y2='b'

//ES6: ===
//当一个数组成员严格等于undefined，默认值才会生效
// let [x = 1] = [undefined];
x // 1

// let [x = 1] = [null];
x // null == undefined

//惰性求值
function f1() {
    console.log('aaa');
}
let [z = f1()] = [1];
console.log(z); //1



//--------------------------------------------------对象的解构赋值----------------------------------------------------------------------//
//数组的元素是按次序排列的，变量的取值由它的位置决定
//对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let { fo, ba } = { fo: "aaa", ba: "bbb" };
fo // "aaa"

let { bazr } = { f:"aaa", b:"bbb"};
console.log(bazr); //undefined


//若变量名与属性名不一致
let { fa:fc } = { fa: 'aaa', fb: 'bbb'};
console.log(fc); //aaa


//真正被赋值的是对应变量(可以将一组参数与变量名对应起来)
let { fd: fd, fe: fe} = { fd: "aaa", fe:"bbb"};

//function ff({x1, y1, z1}) { ... }
ff({z1: 3, y1: 2, x1: 1});


//嵌套赋值
let obj = {
    p: [
        'hello',
        {n : 'world'}
    ]
};
let {p, p: [m, {n}]} = obj;
console.log('m、n、p:', m, n, p); //hello  world   ['hello', {n: 'world'}]


//默认值
var {small, big = 3} = {small: 1};
console.log(small, big); //1 3

var {x: jj = 3} = {x: 5};
console.log(jj); //5

var { message: msg = 'something went wrong'} = {};
console.log(msg); //something went wrong

//同理：默认值生效的条件是，对象的属性值严格等于undefined
//加括号()
let apple;
({apple} = {apple: 1});
console.log(apple); //1


//将现有对象的方法方便地赋值到某个变量
let { log, sin, cos} = Math;

//数组
let arr = [1, 2, 3];
let {0 : First, [arr.length - 1] : last} = arr;
console.log(First); //1
console.log(last); //3




//--------------------------------------------------其他解构赋值----------------------------------------------------------------------//
//字符串(被转换成类似数组的对象)
const [aa, bb, cc, dd, ee] = 'hello';
console.log(aa); //"h"
bb //"e"
cc //"l"
dd //"l"
ee //"o"

//length属性
let {length: len} = 'hello';
console.log(len); //5



//数值和布尔值(转为对象)
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: ss} = true;
ss === Boolean.prototype.toString // true
//undefined和null不行



//函数参数的解构赋值
function add([x,y]) {
    console.log(x + y);
}
add([1, 2]); //3

//map
[[1, 2], [3, 4]].map(([a, b]) => a + b);  //[3, 7]
[[1, undefined, 3].map((x = 'yes') => x)]; //[1, 'yes', 3]

//使用默认值(解构失败时)
function move({x = 0, y = 0} = {}) {
    console.log([x, y]);
}
move({x: 3}); //[3, 0]



//用途
//(1)交换
let long = 1;
let short = 2;
[long, short] = [short, long];
console.log(long, short); //2 1


//(2)放在数组或对象里从函数返回多个值
function example() {
    return [1, 2, 3];
}
let [a1, b1, c1] = example();

function example1() {
    return {
        fn1: 1,
        fn2:2
    };
}
let{ fn1, fn2} = example1();


//(3)提交JSON数据
let jsonData = {
    id: 42,
    status: "ok",
    data: [22, 12]
};
let { id, status, data: number} = jsonData;
// 42, "OK", [867, 5309]


//(4)遍历map结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for(let [key, value] of map) {
    console.log(key + "is" + value);
}
// first is hello
// second is world

//获取键名
for(let [key] of map) {
    //...
}

//获取键值
for(let [, value] of map){
    //...
} 



