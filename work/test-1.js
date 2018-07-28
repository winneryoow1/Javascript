/*
 * 1,使用记事本写js可能会有什么问题。
* 不可以用Word或写字板来编写JavaScript或HTML，因为带格式的文本保存后不是纯文本文件，
*  无法被浏览器正常读取。也尽量不要用记事本编写，用记事本编写时它会自作聪明地在保存UTF-8格式文本时添加BOM头。
*/


/*2，写出你平时打开浏览器开发者工具的姿势。（比如设置=>开发者工具)
 *   进入谷歌浏览器––打开一个网页––点击菜单“查看(View)”––开发者(Developer)––开发者工具(Developer Tools)”
*   要查看一个变量的内容，在Console中输入console.log(a);，回车后显示的值就是变量的内容
*   右键感兴趣的页面部分 => 检查
*/


/*3.js注释有哪几种方式，哪种绝对安全。
答：单行注释绝对安全
多行注释在某些情况容易出问题，比如用了正则表达式的*有时候会和多行注释冲突
*/
     //这是一个正则表达式的例子  /\d+*/ 
//其实有些编程语言不支持多行注释，他们的多行注释是用单行注释
 // 下面的是单行注释，注意//左右都有一个空格
 var a = 6; // 定义了一个局部变量rrr

 /*
 * 这是js多行注释
 * 多行注释每一行建议都写上*
 */


 //这是块注释，在函数或类头部用/** */，一般的Ide都会自动填写参数和返回值
 /**
  * 
  * @param {*} x 
  * @param {*} y 
  */
 function add(x, y) {
     return x + y
 }


/*4.谈谈你对'js支持utf-8'（针对Unicode的可变长度字符编码）编码的理解。
*，因为文本是有编码的，一般使用标准的UTF-8编码，UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，
*又称万国码。UTF-8用1到6个字节编码Unicode字符。用在网页上可以统一页面显示中文简体繁体及其它语言（如英文，日文，韩文），
*UTF-8编码可以通过屏蔽位和移位操作快速读写。但有时候js文件的编码格式不对就会在上传后出现乱码。
*而且不能把默认设置成记事本，只是用记事本打开，并把设置charset=utf-8"。
* 所谓支持utf-8,个人认为js解释器可以解析用utf-8编写的js代码
* 具体就是说js的标识符是可以用utf-8字符的，
*/
//例：
var 变量 = 5;
console.log(变量）

// 中日朝unicode码值范围4E00－9FA5
let containZHStr = "hello I'm 小明, how are you?";
let zhPattern = /([^\u4E00-\u9FA5]+?)([\u4E00-\u9FA5]+)([^\u4E00-\u9FA5]+)/;
console.log(zhPattern.test(containZHStr)); //true
// +贪婪模式     +？非贪婪模式
            
                   
/*5.举个例子表示在字符串中写有双引号情况
*答：console.log('这是一个双引号>> " ')
*字符串里面写单引号用双引号里面直接套单引号就行了，字符串里面写双引号用单引号直接套双引号就可以了.
*/


/*6. 0.1+0.2 === 0.3 ?
*在JavaScript中，二进制的浮点数0.1和0.2并不是十分精确，在他们相加的结果并非正好等于0.3，而是一个比较接近的数字 0.30000000000000004，所以条件0.1+0.2===0.3判断结果为 false。
*因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题,
*其实大多数编程语言只要是浮点数参与运算都有这个问题,因为浮点数由于存储精度的问题本身就是不精确的，比如0.1可能内部存储的就是0.0999999999999999999999999,不精确的数参与运算结果当让就是不精确的，
*一般判断某两个浮点数是否相等是采取差值是否足够小
*/
   var debug = console.log;
//----------------------epsilon 小量----------------------------//
/**
* 2的-52放实际上是javaScript能表示的最小精度
* 所以误差范围小于它可以被认为没误差
*/
debug('------------------')
debug(Number.EPSILON === Math.pow(2, -52)); // true
debug(0.1 + 0.2 === 0.3); // false

let isEqual = (left, right) => {
   return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
};

debug(isEqual(0.1 + 0.2, 0.3)); // true
debug(isEqual(0.3 + 0.6, 0.9)); // true


/*7. "" == false ? 你认为结果客观逻辑是否合理。
*两个操作数分别是对象类型、布尔类型。需要将布尔类型转为数字类型，而false转为数字的结果是0，所以表达式变为：[''] == 0，两个操作数变成了对象类型、数字类型。需要将对象类型转为原始类型：
*首先调用[].valueOf()，由于数组的valueOf()方法返回自身，所以结果不是原始类型，继续调用[].toString()。
*对于数组来说，toString()方法的算法，是将每个元素都转为字符串类型，然后用逗号','依次连接起来，所以最终结果是空字符串''，它是一个原始类型的值。此时，表达式变为：'' == 0.两个操作数变成了字符串类型、数字类型。
*需要将字符串类型转为数字类型，前面说了空字符串变成数字是0。于是表达式变为：0 == 0.到此为止，两个操作数的类型终于相同了，结果明显是true。
*即在两者类型不同时，后者为布尔值，在使用"=="操作符时，JavaScript会尝试各种求值并进行转化，以检测两者是否会在某种情况下相等。
*所以下面的表达式结果为true。
*从这可以看出js的包容性很强，,所以当你需要精确判断两者是否相等用 ===
*==有转化 ' '/0 == false , undefined/null != false , undefined == null => true
*HTML里大小写无区别
 */   
    
    
  
/*8. 有个css代码
    .student {
    width: 20px;
    background-color: red;
}
*把上面代码写成一个对象的形式，
*并写出你调用background-color的方式（用代码表示)
*/
//对不规范属性名的处理
var student = {
    width: '20px',
    'background-color': 'red' // 注意最后别写逗号
};

console.log(student['background-color']);


/*9. 如何使用js严格模式，能不能在函数内部声明严格模式?
 *可以通过在文件、程序或函数的开头添加 "use strict"来声明严格模式。 严格模式声明的范围取决于其上下文。 如果在全局上下文（函数的范围之外）中声明严格模式，则程序中的所有代码都处于严格模式。
 * 如果在函数中声明严格模式，则函数中的所有代码都处于严格模式。
 *但在函数内声明严格模式时的，代函数内部的代码处于严格模式。 函数外部的变量声明不会导致语法错误，但函数内部的声明会导致语法错误。
*/


/*10.如果在html里面使用外部js，你认为script标签放在html哪个位置比较合适。
 *body后面吧，事实上，一般情况下html渲染顺序是从html头部渲染到尾部的，
 如果把<script>放<head>标签内可能会由于前面js部分计算量大或者说逻辑太重导致页面渲染延迟，影响客户端观感。``
<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<noscript>不支持js</noscript>
</head>
<body>

</body>
<script src="test.js"></script>
</html>
<!--
	type attr 属性在写script标签时是没必要的，默认是text/script
-->
JS里的函数如果不调用则永远不会解析里面的代码
  */  
    

/*11. var author = ''  // 写你自己大名
 *使用模板字符串写一首静夜诗，里面的插入author变量。
 *模板字符串就是一种新的字符串字面量，除了使用反引号 (`) 表示，它们看上去和普通的字符串没有什么区别。在最简单的情况下，他们就是普通的字符串：
 *context.fillText(`Ceci n'est pas une cha?ne.`, x, y);  
 *之所以被称为模板字符串，是因为模板字符串为 JS 引入了简单的字符串插值特性，也就是说，可以方便优雅地将 JS 的值插入到字符串中。
*/
 var jy_poem={
author:'吕雅茹',
content:'床前明月光，疑是地上霜，举头望明月，低头思故乡。'
}
var author = 'ly';
var poem = `静夜诗     
    ${author}
床前明月光
疑是地上霜
举头望明月
低头思故乡`
console.log(poem);

//模板字符串的运用
let multipleMode = /\d{3}\n\d{3}/;
let multipleLineStr = `666
999`; //'666\n999'
console.log(multipleMode.test(multipleLineStr));//true



//12. 写出你所能想到的拷贝一个字符串的方法
var str1 = 'caligula'; // js字符串是常量.不可以改变，改变的只是指向其实就是指针，
var str2 = 'caligula'; // 这不是拷贝，事实上str2指向str1指向的那个'caligula'
str2 = 'joke'; // 不是改动了caligula这个字符串，只是将str2指向了内存新new出来的字符串'joke'

// 拷贝str1的方式有很多
str1Copy = str1.substr();//substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。
console.log(`str1Copy: ${str1Copy}`);

str1Copy = str1.slice(); 
console.log(`str1Copy: ${str1Copy}`);

str1Copy = str1 + '';
console.log(`str1Copy: ${str1Copy}`);

str1Copy = `${str1}`;
console.log(`str1Copy: ${str1Copy}`); //JS里使用的是地址赋值，字符串是常量（不允许修改）

str1Copy = JSON.parse(JSON.stringify(obj));//拷贝--JSON先序列化再反序列化
console.log(`str1Copy: ${str1Copy}`);


//--------------------------------拷贝--------------------//
// str1 指向内存里面的新产生的"I'm a string"
let str1 = "I'm a string";
// str2 指向 str1
let str2 = str1;
console.log('str1:', str1, 'str2:', str2); //str5: I'm a string str6: I'm a string
str1 = "I'm modified";
console.log('str1:', str1, 'str2:', str2); //str5: I'm modified str6: I'm a string
str2 = 'modified';
console.log('str5:', str5, 'str6:', str6); //str5: I'm modified str6: modified



//JSON序列化
const fs = require('fs');
let objJsonStr = JSON.stringify(obj);
fs.writeFileSync('./object.json',objJSONStr,'utf-8');
//反序列化
let fileJSONStr = fs.readFileSync('./object.json','utf-8');
console.log(JSON.parse(fileJSONStr));
//=> {name:'ly',
//        age:21;
 //       grade:99;
 //       friendArray:['jxq','fl','rbd']}



// 克隆-------------------------------------------
// 方法一
let cloneObj = {};
// 下面这个不叫克隆,它不是深拷贝
// for (let attr in obj) {
//     cloneObj[attr] = obj[attr];
// }
// console.log(cloneObj);
const deepCopy = (obj) => {
    let cloneObj = {};
    for (let attr in obj) {
        if (typeof obj[attr] !== 'object') {
            cloneObj[attr] = obj[attr];
        } else {
            // 如果属性值是对象要递归拷贝
            cloneObj[attr] = deepCopy(obj[attr]);
        }
    }
}

// 方法二 使用json序列化再反序列化
cloneObj = {};
cloneObj = JSON.parse(JSON.stringify(obj));
console.log(cloneObj);
//  =>
//  { name: 'ly',
//   age: 21,
//   grade: 99,
//   friendArray: [ 'jxq', 'fl', 'rbd' ] } 





/*13.不使用splice方法，从数组[1, 3, -5, 9, 55]中删除9。
 *一、delete arr[4];
 *二、排序把9放到最后一个或是第一个，然后用pop()或是shift()弹出删除
 */
 var arr = [1, 3, -5, 9, 55, 4, 66, 999, 1204, 444, 2, 555, 31093];
arr = arr.slice(0,arr.indexOf(9)).concat(arr.slice(arr.indexOf(9) + 1))
console.log(arr);

/* ... 扩展/减速运算符 
 * rest语法用来接收，在数组和对象字面量里面就是扩展 
 */
let sourceObj = {
    attr1: 'abc'
};

let newObj = {
    attr2: 'def'
}

// 方法一
for (let attr in sourceObj) {
    newObj[attr] = sourceObj[attr]; 
 }

// ...扩展
newObj = {
        ...newObj,
        ...sourceObj
    }
    console.dir(newObj); //{ attr2: 'def', attr1: 'abc' }
   

//-----------------------扩展运算符举例---------------//
// firmArray 插到MS后面
let firmArray = ['IBM', 'Facebook']
let sourceArray = ['Google', 'Micro soft', 'TI'];
sourceArray.splice(1, 0, ...firmArray); // 返回[]
console.log(sourceArray);

//使用自定义函数--占位符
function printf(str, flag) {
    return console.log(str.replace('%d', flag));
}
printf('digtal %d', 666); //digtal 666



/*14.有个数组arr，里面有100000个字符串，现在要把这个数组里面所有字符串拼成一个字符串，你认为使用循环的方式用+拼接效率高，还是用数组的join函数拼接的方式效率高。
 *join,join() 方法用于把数组中的所有元素放入一个字符串,元素是通过指定的分隔符进行分隔的,更有可读性。
 *答：第一种更好//测试时间
 */

var arr = new Array();
for (var index = 0; index < 10000; index++) {
    length = Math.floor(Math.random() * 5 + 1);
    var str;
    for(var j = 0; j < length; j++) {
        str += String(97 + Math.floor(Math.random() * 26));
    }
    arr.push(str);
}
console.log(`arr create! the length: ${arr.length}`);
for (var k = 1; k < 4 ; ++k) {
    console.log(`第${k}次测试:`)
    console.time('test +');
    var rstr= '';
    for (var i = 0; i < 10000; i++) {
        rstr += arr[i];
    }
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test +');

    console.time('test join');
    var rstr = arr.join('')
    console.log(`resultStr's length is ${rstr.length}`);
    console.timeEnd('test join');
}

//拼接字符串 =》 产生新的字符串
let str1 = 'abc';
let str2 ='def';
let str3 = str1 + str2; //abcdef


// 命名方式 2种
//1. camel 驼峰命名法   let myLoveFriend;
//2. kebab 烤肉串式 js标识符,数字,字母,$,_ php
//  let my-love-friend;
"use strict";
let my_love_friend;

function test() {
    'use strict';
    let newVariable; // 严格模式不能直接声明变量
}
test();



//-----------------------------------正则----------------------------------//
 // js $1, $2 ~9
//  console.log(object);
str = str.replace(/(.+?is)(.+)/, `$1 very $2`);
console.log('regExp: ', str);
 // /(\d{3})\s\w+/ 总共有几个组?
 // 3个组 /((\d{3})\s(\w{5})\.)/
console.log('123456\+146 abcde.'.match(/((\d{3})\s(\w{5})\.)/));

//用match可以返回组
//打印一行 console.log(Array(30).fill('-').join(''));
// Array.isArray()--用来检查一个对象是否为数组
let containZHStr = "hello I'm 小明, how are you?";
console.log(Array(30).fill('-').join(''));
console.log(matchResult);
console.log(Array(30).fill('-').join(''));
console.log(`${matchResult}`);
console.log(Array(30).fill('-').join('')); //hello I'm 小明, how are you?
console.log(Array.isArray(matchResult)); // => true
console.log('Result:', matchResult[2]); //小明



    
// ES6属性名的简写
// 对象
let age = 21;
let object = {
    name: 'ly',
    age,              // => age: age
    grade: 99 
}
console.log(object);  //name:'ly', age:21, grade:99

//对象可以用[]数组形式保存
let objectArray = [
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
] 


  
//----------------------------------------JSON--------------------------------//
  //JSON--改写数组
  var arrUrl = ['img/1.png','img/2.png','img/3.png','img/4.png'];
  var arrText = ['小宠物','图片二','图片三','面具'];
  var imgData = {
       url: ['img/1.png','img/2.png','img/3.png','img/4.png'],
       text: ['小宠物','图片二','图片三','面具']
  }
  console.log(imgData.url[2]);

    // JSON 序列化
    let  objJSONStr = JSON.stringify(obj);
    fs.writeFileSync('./object.json',objJSONStr ,'utf-8');

    // 反序列化
    let fileJSONStr = fs.readFileSync('./object.json', 'utf-8');
    console.log(JSON.parse(fileJSONStr));
    // => { name: 'ly',
    //      age: 21,
    //      grade: 99,
    //      friendArray: [ 'jxq', 'fl', 'rbd' ] 