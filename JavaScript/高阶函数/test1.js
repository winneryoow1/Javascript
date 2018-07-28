//---------------------------------------------------高阶函数-----------------------
//-------------------------//
'use strict'
//1.高阶函数 Higher-order function---一个函数接收另一个函数作为参数 形式
function add(x, y, f) {
    return f(x) + f(y);
}
//实例
function add(x, y, f) {
    return f(x) + f(y);
}

var x = add(-5, 6, Math.abs);
console.log(x); //11

//计算函数--包含加减乘除
function add(x, y) {
    return x + y;
}
function divide(x, y) {
    return x / y;
}
function multiply(x, y) {
    return x * y;
}
function minus(x, y) {
    return x - y;
}
//最后计算的话只用调用一个函数就可以
function operation(x, y, f) {
    return f(x, y);
}

console.log(operation(3, 4, add)); //7
console.log(operation(3, 4, divide)); //0.75
console.log(operation(3, 4, multiply)); //12
console.log(operation(3, 4, minus)); //-1

// ---------------------------------------------------map------------------------
// ----------------------------// 接收一个函数，对每一个元素进行同一个操作 map()
// 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。 map()
// 方法按照原始数组元素顺序依次处理元素。array.map(function(currentValue,index,arr), thisValue)
// 注意：1.map() 不会对空数组进行检测  2.map() 不会改变原始数组。 例子：1.计算
function pow(x) {
    return x * x;
}
var arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
var results = arr.map(pow); //传入的参数是pow函数

console.log(results); //[1,4,9,16,25,36,49,64,81]

//例子：2.把数字转为字符串
var arr = [
    1,
    2,
    3,
    4,
    5,
    6
];
var arr1 = arr.map(String);
console.log(arr1); //['1','2','3','4','5','6']

// --------------------------------------------------------------------reduce----
// -----------------------------------------------------// 接收一个函数，对整体进行同一个操作
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，把结果继续和序列的下一个元素做累积计算 reduce()
// 可以作为一个高阶函数，用于函数的 compose。array.reduce(function(total, currentValue,
// currentIndex, arr), initialValue) 注意: reduce() 对于空数组是不会执行回调函数的。必须接收两个参数(前两个)
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4) 例子：1.求和
var arr = [1, 3, 5, 7, 9];
var arr1 = arr.reduce(function (x, y) {
    return x + y;
})
console.log(arr1); //25

//2.求积
var arr2 = arr.reduce(function (x, y) {
    return x * y;
})
console.log(arr2); //945

//例子：3.把数组变成整数
var arr3 = arr.reduce(function (x, y) {
    return x * 10 + y;
})
console.log(arr3); //13579

//例子：4.把字符串变成整数 字符串=>数组=>整数
var str = "12345";
//var arr4 = []; arr4 = str.split();
var num = str
    .split()
    .reduce(function (x, y) {
        return x * 10 + y;
    })
console.log(num); //12345

//简易方法
function string2int(s) {
    return s * 1;
}

// 不可以直接用arr.map(parseInt)--- parseInt(string, radix)两个参数 parseInt('0', 0); // 0,
// 按十进制转换 可以使用arr.map(Number); -- Number(value)仅需要一个参数
var r = arr.map(Number);
console.log(r); //[1,3,5,7,9]

//练习：（1）请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
function normalize(arr) {
    return arr.map(function (x) {
        //return x[0].toUpperCase() + x.slice(1).toLowerCase();
        return x
            .toUpperCase()
            .substring(0, 1) + x
            .toLowerCase()
            .substring(1);
    })
}

console.log(normalize(['adam', 'LISA', 'barT'])); //['Adam', 'Lisa', 'Bart']
// substring()返回字符串中指定的几个字符
// -------------------------------------------------------箭头函数-------------------
// -----------------------------------// Arrow Function 用箭头定义 第一种
x => x * x
/*等价于
       function (x){
        return x * x;
    }
    */

//多参数   (x,y) => x * x + y * y 无参数    () => 3.14
/*可变参数
       (x,y,...rest) => {
           var i,sum = x + y;
           for(i=0;i<rest.length;i++){
               sum += rest[i];
           }
           return sum;
       }
    */
//返回一个对象：
x => ({foo: x})

//第二种：可以包含多条语句，{ ... }和return不能省略
x => {
    if (x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
}

//this的用法：箭头函数内部的this是词法作用域，由上下文确定。
//以前的那种hack写法：var that = this;就不再需要了。
//箭头函数完全修复了this的指向，this总是指向词法作用域，即本例里的外层调用者obj
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth; //1990
        var fn = () => new Date().getFullYear - this.birth; // this指向obj对象
        return fn();
    }
}
console.log(obj.getAge()); //有问题25--NaN


//练习：用箭头函数简化排序时传入的函数
 var arr6 = [10,20,1,2];
 arr6.sort((x,y) => x-y)
 console.log(arr6); //[1,2,10,20]
 arr6.sort((x,y) => x>=y)
 console.log(arr6); //[1,2,10,20]


