//基本语法
/*1.给下面的函数加上文档注释*/
function preAutoAdd(operand) {
    ///<param name="operand" type="Number">operand plus one.</param>
    ///<returns type="Number">The sum.</returns>
    operand += 1;
    return operand
}



//数据类型
/*2.ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，
前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
以前我出过一道题，问对象的属性名即键是什么数据类型，当时给出的答案是String类型,事实上这是错误的,
请你用代码测试数组的键的数据类型。
 */
var mycars=new Array()
mycars[0]="Saab"
mycars[1]="Volvo"
mycars[2]="BMW"
typeof Symbol(mycars[0])

//获取键的类型
const oneArray = [1,2,4];
for(Let key in oneArray){
   console.log(typeof key);
   break;
}
//Object.keys()
console.log(typeof Object.keys(oneArray)[0]);




/*3.写出下面的输出,写在注释后面，自行测试看看和你们想的是否一样,ES6 Object新增加一个is方法,
也是用来判断相等性的,自行测试我给出的测试代码,并总结一下==,===,Object.is()各自特点。
 */
// 猜测并测试
console.log('	' == false); //true
console.log('   ' === false); //false
console.log(+0 === -0); //true

// Object.is()测试代码
console.log(Object.is(1, 2)); //false
console.log(Object.is('', false)); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)) ; //true
/* ==运算符会对它两边的操作数做隐式的类型转换,
   === 也不会对操作数进行类型转换，但是它会把 -0和 +0 这两个数值视为相同的，还会把两个 NAN 看成是不相等的。
   Object.is比===更严格,Object.is 不会做类型转换,如果下列任何一项成立，则两个值相同：
   两个值都是 undefined
   两个值都是 null
   两个值都是 true 或者都是 false
   两个值是由相同个数的字符按照相同的顺序组成的字符串
   两个值指向同一个对象
   两个值都是数字并且
   都是正零 +0
   都是负零 -0
   都是 NaN
   都是除零和 NaN 外的其它同一个数字
 */



//变量
/*4.根据代码提示完成下列关于各种声明变量方式的作用域的测试，在注释后面写出测试结果*/

/*
testDir内有三个文件
./testDir
├── external1.js
├── external2.js
└── index.html
*/

// index.html
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
<script src="external1.js"></script>
<script src="external2.js"></script>
</html>
*/

// external1.js
directDefinition = 'directDefinition';
var varDefinition = 'varDefinition';
let letDefinition = 'letDefinition';
const constDefinition = 'constDefinition';

function test() {
    directDefinition1 = 'directDefinition1';
    var varDefinition1 = 'varDefinition1';
    let letDefinition1 = 'letDefinition1';
    const constDefinition1 = 'constDefinition1';
}

test()

// external2.js 下面的输出是怎样的情况?
console.log(directDefinition);//directDefinition
console.log(varDefinition1);//varDefinition1
console.log(letDefinition);//letDefinition
console.log(constDefinition);//constDefinition

//函数外部不能访问内部定义的变量
//var不能定义函数作用域
//const--let的不变形
//let、const可以声明块作用域

console.log(directDefinition1);//directDefinition1
console.log(varDefinition1);
console.log(letDefinition1);
console.log(constDefinition1);

//const定义--不可改
const CPU_ACCUNT = 4;
//const CPU_ACCUNT = 5; --- 不可改
//改变后面对应的属性值指向




//交换--值不交换--x、y交换，a、b不交换(a、b的指向不改变，只改变x、y的指向)
let a=1, b=2;
function toTwo(x,y){
    let temp = x;
    x = y;
    y = temp;
    console.log(x,y);        //2,1
}
toTwo(a,b);
console.log(a,b);           //1,2



/*5.使用函数表示后置自增运算符的计算过程,可以参考题1中表示前置自增运算符的函数。*/
const backAutoAdd = (operand) => {
    let temp = operand;
    operand += 1;
    return temp;
}


/*6.下面的代码中count经过计算后结果是什么?*/
//0--后置++ => 每次执行之后count的值仍为0
    let count = 0;
for (let i = 0; i < 100; ++i) {
    count = count++;
}
console.log(count);



/*7.所有有length属性的对象都可以看作是类数组,String的包装对象也有llength,怎样把一个字符串优雅有安全的转换成数组*/
var dataStr="1,2,3,4,5";//原始字符串
var dataStrArr=dataStr.split(",");//分割成字符串数组
var dataIntArr=[];//保存转换后的字符串
dataStrArr.forEach(function(data,index,arr){
    dataIntArr.push(+data);
});
console.log(dataIntArr);

//遍历字符串---for-of   遍历键---for-in

//把字符串转换成数组--可以正确返回长度
Array.from('abc');
[...'abc'];



/*8.function声明的函数内部有一个arguments对象,请判断他是不是数组类型,如果不是,怎样将它转换成数组对象?*/
function backAutoAdd(operand) {
    let temp = operand;
    operand += 1;
    return temp;
}

//原理
var a=Array.isArray(preAutoAdd());
if(!a){
    function preAutoAdd() {
        var slice = Array.prototype.slice,
            aArguments = slice.apply(arguments);
    }
}
console(preAutoAdd())

let op1 = 4;
console.log(op1++); //4

//转化为数组
// console.log('a,b,c'.split(','));
// for 循环
// console.log('abc'.map(element => element));
// console.log(Array.prototype.slice('abc'));
console.log(Array.from('abc')); //[ 'a', 'b', 'c' ]
console.log([...'cab']);



/*9.用代码表示出所有你知道的遍历一个对象属性和属性值的方法,比较它们各自特点。*/
//1.直接遍历
function allPrpos ( obj ) {
    // 用来保存所有的属性名称和值
    var props = "" ;
    // 开始遍历
    for ( var p in obj ){ // 方法
        if ( typeof ( obj [ p ]) == " function " ){ obj [ p ]() ;
        } else { // p 为属性名称，obj[p]为对应属性的值
            props += p + " = " + obj [ p ] + " /t " ;
        } } // 最后显示所有的属性
    alert ( props ) ;
}
function zTreeBeforeExpand(treeId,treeNode){
    allPrpos (treeNode);//将需要查询的对象录入即可
}

//2.获取所有参数
function test(){
    for(var i=0;i<arguments.length;i++)
        document.write(arguments[i]);
}
var obj = new Object();
obj.myname = "我是对象";
obj.pro2 = "23";
obj.pro3 = "abcdeg";
for (items in obj){
    document.write("属性:"+items+"的值是 ("+ obj[items] +")");
    document.write("<br>");
}



/*10.下面的代码解释了什么是浅拷贝,如何深拷贝一个对象,又叫克隆。*/
// 浅拷贝（shallow copy）：只复制指向某个对象的指针，而不复制对象本身，新旧对象共享一块内存；
//  深拷贝（deep copy）：复制并创建一个一摸一样的对象，不共享内存，修改新对象，旧对象保持不变。
var a = 25;
var b = a;
b = 10;
console.log(a);//25
console.log(b);//10

//浅拷贝
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = obj1;
obj2.b = 40;
console.log(obj1);// { a: 10, b: 40, c: 30 }
console.log(obj2);// { a: 10, b: 40, c: 30 }

// 怎样深拷贝?
//流程控制
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { a: obj1.a, b: obj1.b, c: obj1.c };
obj2.b = 40;
console.log(obj1);// { a: 10, b: 20, c: 30 }
console.log(obj2);// { a: 10, b: 40, c: 30 }



/*11.改写下面我写的冒泡排序算法,去掉break。*/---用条件
const bubbleSort = array => {
    let flag = true;
    for (let i = 0; i < array.length - 1; ++i) {
        if (!flag) {
            break;
        }
        flag = false;
        for (let j = 0; j < array.length - i - 1; ++j) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                flag = true;
            }
        }
    }
    return array
};
console.log(bubbleSort([12, 2, 7, 2, 6, 5, 5, 18, 3, 99, 99])); // [ 2, 2, 3, 5, 5, 6, 7, 12, 18, 99, 99 ]

//循环中标志flag的使用

 for (let i = 0; i < 10; ++i) {
     for (let i = 0; i < 10; ++i) {
         for (let i = 0; i < 10; ++i) {
             let flag = false;

             if (flag = true ) {
                console.log('from 4');
                 break;
             }

             for (let i = 0; i < 10; ++i) {
               if(condition = true) {
                    flag = true;
                  break;
                                  }
           }
        }
    }
 }






//设计函数
//字符串处理
/*12.按照代码提示完成函数*/
let firms = ['MicroSoft', 'google', 'IBM', 'Intel', 'AMD', 'TI', 'mozilla'];
/**
 * 将字符串数组每个元素首字母改成大写,再把字符串倒置
 * @param strArray
 * @returns array
 */
const dealString = strArray => {
        return s.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {
            return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        });
    }
document.write(strArray.split("").reverse().join(""));





//闭包
//闭包是装饰器的基础
/*13.设计一个高阶函数setLog,它接受一个函数func作为参数,返回一个函数autoLogFunc,这个autoLogFunc功能
和func一样,但是通过闭包修饰后的autologFunc会在执行前打印当前时间,并在执行后打印执行改函数花了多少时间。*/
 */
const setLog = func => {
    const autoLogFunc = (...args) => {
        console.log(`Execute func at ${new Date()}`);
        const start = +new Date();
        const result = func(...args);
        const end = +new Date();
        console.log(`Execute func cost ${~~((end -start) / 1000)}s`);
        return result
    };
   //测试并返回实际测试时间
    return autoLogFunc;
};

var time = test(add);
console.log(time);
const func = () => {
    for (let i = 0; i < 10000; ++i) {
        for (let j = 0; j < 10000; ++j) {
            `${i} ${j}`;
        }
    }
};
setLog(func)();
/*
Execute func at Sat Jun 16 2018 23:11:09 GMT+0800 (中国标准时间)
Execute func cost 3.526s
 */

//测试函数
const createTestStrArray = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let strArray = [];
    for (let i = 0; i < 100; ++i) {
        let str = '';
        for (let j = 0; j < 5; ++j) {
            str = `${str}${letters[~~(Math.random()*26)]}`
        }
        strArray.push(str)
    }

    return strArray
};



//性能优化
/*14.优化下面过滤数据的操作*/
// 过滤来自另一份数据源的优化
let data1 = getData1();
// [{id: XXX, name: XXX}, ...]

let data2 = getData2();
// [{id: XXX, name: XXX}, ...]

data2 = data2.filter(item => {
    for (let target of data1) {
        if (target.id === item.id) {
            return false
        }1
    }
    return true
});
// 有两个列表，要保证第一个列表中的数据不会出现在第二个列表中
data2 = data2.filter() {
    const filters = this.getFilters();
    return data.filter(data1 => {
        return filters.every(f => f(data1));
    });
}

//----------------------------------------------------------------------why------------------------------------------------------//
// 1. 为什么用函数表达式
// 2. 为什么用const

function func() {
    console.log("I'm a func");
}

function func() {
    console.log("I'm a func1");
}
//会覆盖
func(); //I'm a func1

let func1 = () => {

}


// const 不变用
// 一切错误应该尽早解决它
const oneArray = [1, 2, 4];
for (let key in oneArray) {
    console.log(typeof key); //string
    break;
}

// Object.keys()
console.log(typeof Object.keys(oneArray)[0]); //string

let symbol = Symbol(); // 独一无二的标志
let object1  = {
    [symbol]: 1
}
console.log(typeof Object.keys(object1)[0]); //undefined
console.log(typeof Object.keys(object1)); //object

console.log(Object.getOwnPropertySymbols(object1)); //[symbol()]


// Es5 window.  const => 不变的let
function testVariable() {
    noVar = 6;
    var varVar = 6;
    for (var a = 0; a < 10; ++a) {
        console.log(a);
        break;
    }


    {
        let c = 4;
        var b = 2;
        const constVar = 8;

        const CPU_COUNT = 4;
        // CPU_COUNT = 56; 

        const constObj = {
            attr: 8
        }
        constObj.attr = 7;
        console.log('constObj.attr:', constObj.attr);

        // constObj = 4; // not defined
    }

    // console.log(constVar);
    // console.log('c:', c); 1
    // console.log('b:', b); 2
    // console.log(a); 6
}

testVariable();

console.log(noVar);
// console.log(varVar);


//特殊字符
// \u0000-\uFFFF =>36 
console.log(String.fromCharCode(36));

// for of 遍历---解决4字节字符问题
var s = "𠮷";
// s.length // 2
// s.charAt(0) // ''
// s.charAt(1) // ''
// s.charCodeAt(0) // 55362
// s.charCodeAt(1) // 57271

console.log(s.length);
console.log('中'.length); // 
let str = '𠮷𠮷𠮷𠮷𠮷𠮷𠮷𠮷';
console.log(str.length);
console.log(Array.from(str).length);

//循环原理
for (let index =0; index < str.length; ++index) {
    console.log(str[index]);
}

for (let char of str) {
    console.log(char);
}

