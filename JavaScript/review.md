

# day 1

## IDE Integrade develop environment 集成开发环境

编程语言学习过程
基本语法
高级语法
框架
基本语法
变量
数据类型
语句
条件语句
循环语句
函数
面向对象
__io__操作 (input output)
网络编程 http html
GUI (graphic user interface)图形用户界面
框架 framework

## js的三个组成部分

Ecmascript 一套标准 Ecma2018
定义各种api
实现有浏览器厂商 firefox , chrome,saf ari,IE,opera,
array.sort()
DOM document object model - 文档对象模型
BOM browser object model 浏览器对象模型
javascript 为什么叫javascript?
蹭java热度
语法很像java
要不要写分号?
个人意见: 写

vue: 尤雨溪——————不用写

### 注释

1. 单行注释

// 我是单行注释,我在// 后面有一个空格
const a = 2;
// 说明性放单行
// 定义一个变量
var variable = 7;
// 打印hello world
console.log('hello', 'world'); // 'hello world'

// 注释不要写废话
// const constraint = 5;


/*
* 从这一行开始写
* 每一行以*和一个空格开头
*/

/**
 * @param(int)
 * @param(int)
 * @return(int)
 */

 // 多行注释不能嵌套

 // 最安全还是单行注释

2. 多行注释

3. 文档注释

   

### 运算符

算术运算符
逻辑运算符
判断数据类型
typeof
定义变量四种方式
直接声明

// b不是用var声明的
var a = b =1;
b = 1;
var a = b;

// let 
数组定义后元素不能修改 
尽量使用var定义局部变量，不要定义全局变量 
var不能定义块作用域 





# day 2

### 1.简写技巧

let var1;

if(var1 !== undefined || var1 !== null || var1 !== ''){

​        let var2 = var1;

}  

=> var2 = var1 || 'new'; //'new' 为var1为空时你想赋值的默认值

### 2.命名方式-2种

* camel 驼峰命名法  let myLoveFriend;

* let my-love-friend;

* 'use strict';  

  let my_love_friend; //true

### 3.扩展(减速)运算符...

#####  rest语法是用来接受,在数组和对象字面值里面用就是扩展. 

let charArray = ['a', 'b', 'c'];

func(...charArray);

##### 把sourceObj扩展到newObj中

let sourceObj = {

​    attr1 : 'abc'

}

 let newObj = {

​    attr2 : 'def'

}

##### 方法一：

for(let attr in sourceObj){

​     newObj[attr]  = sourceObj[attr];

}

##### 方法二：

newObj = {

​    ...newObj,

​    ...sourceObj

}

console.dir(newObj);

### 4.拷贝str1的方式有很多

1.str1Copy = str1.substr();//substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。

console.log(`str1Copy: ${str1Copy}`);

 2.str1Copy = str1.slice(); 

console.log(`str1Copy: ${str1Copy}`);

 3.str1Copy = str1 + '';

console.log(`str1Copy: ${str1Copy}`);

 4.str1Copy = `${str1}`;

console.log(`str1Copy: ${str1Copy}`); //JS里使用的是地址赋值，字符串是常量（不允许修改）

 5.str1Copy = JSON.parse(JSON.stringify(obj));//拷贝--JSON先序列化再反序列化

console.log(`str1Copy: ${str1Copy}`);

 ### 5.克隆

##### 方法一

let cloneObj = {};

// 下面这个不叫克隆,它不是深拷贝

// for (let attr in obj) {

//     cloneObj[attr] = obj[attr];

// }

// console.log(cloneObj);

const deepCopy = (obj) => {

​    let cloneObj = {};

​    for (let attr in obj) {

​        if (typeof obj[attr] !== 'object') {

​            cloneObj[attr] = obj[attr];

​        } else {

​            // 如果属性值是对象要递归拷贝

​            cloneObj[attr] = deepCopy(obj[attr]);

​        }

​    }

}

 #####  方法二 使用json序列化再反序列化

cloneObj = {};

cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj);

//  =>

//  { name: 'ly',

//   age: 21,

//   grade: 99,

//   friendArray: [ 'jxq', 'fl', 'rbd' ] } 

 ### 6.简写

##### 第一种

let obj = {

 name:'ly';

 age:21;

 friendArray:['jxq','fl','rbd'],

  func(params){

​         console.log('ES6对象内方法简写，直接写函数名')；

   }

}

##### 第二种

// ES6属性名的简写

// 对象

let age = 21;

let object = {

​    name: 'ly',

​    age,

​    grade: 99 // => age: age

}

console.log(object);

let objectArray = [

​    {name: 'ly', age: 21},

​    {name: 'ly', age: 21},

​    {name: 'ly', age: 21},

]



# day 3

### 持久化

​      持久化就是持久数据 ==> `目的` 

            1. 一般的数据库使用硬盘
      2. 内存数据库 redies

### 序列化--保存数据的形式（文本序列化）

序列化 (Serialization)将对象的状态信息转换为可以存储或传输的形式的`过程`。 

{"name":"ly","age":21,"grade":99,"friendArray":["jxq","fl","rbd"]} 

//对象

let age = 21;

let object = {

  name:'ly',

   age,

}



## JSON--可以拷贝对象、可以序列化（跨平台使用）



##### 注意：不能用注释，所有属性名（键）必须用双引号（不能是单引号），可以直接写数字，可以直接用数组形式保存

对一个函数进行序列化和反序列化操作，没有任何变化，无法保存信息

拷贝--for in/JSON序列化再反序列化

var json={'name':'leo', 'age':22};



#####  1.读取

​     json['name']; // json.name

 ##### 改写

​      json.name = '妙味'; //json['name'] = '妙味';



##### 2.JSON里面可以包含很多类型---即那几种数据类型（其中数组和JSON可以互相表示）

  var json3 = {'abc': 123, 'arr':[ 1,2,3]};

   var arr = [{'name': 'aaa', 'age' :23}, {'name': 'leo', 'age': 32}];

  arr[0].name; //aaa            arr[1].age; //32



##### 3.for-in遍历JSON

##### （JSON无length，不可以用for循环）

var json4 = {'name':'aaa', 'age':3, 'fun':'haha'};

for(var attr in json4){

​         json4[attr];             //aaa    3     hahaha

 }

##### 4.for-in遍历JSON里的数组

var json5  = {

​       url: ['img/1.png','img/2.png','img/3.png','img/4.png'],

​       text: ['小宠物','图片二','图片三','面具']

  }

for(var attr in json5){

​      for(var i=0; i<json5[attr].length; i++)

​              console.log(json5 [attr][i]  );         //img/1.png   img/2.png  img/3.png  img/4.png   小宠物  图片二  图片三   面具

​         }



##### 5.for-in遍历对象属性

var str ='';

var num = 0;

for(var attr in document){

​          str += attr + ':' + document[attr] +'<br/>'        num++;

} 

##### 6.遍历数组

  for/for-in循环

 var arr = ['a', 'b', 'c'];

for(var i in arr){

​         console.log(i);//0 1 2

​         console.log(arr[i]); //a b c

}

 for(var i=0; i<arr.length; i++){

​          console.log(arr[i]);

​      }

#### 7.常用函数

序列化：stringify() ---对象=>字符串

反序列化：parse() ---字符串=>对象





# day 4

#### HTML标签的三部分

* tag：标签名--(注：以后的HTML将不允许出现单标签名)
* property：属性
* children：内部内容

##### 单属性

<form action="">

​          <!--<input type="email">-->

​          <input type="email" multiple>

​          <input type="submit" value="提交">

</form>



### 文本文件与二进制文件--是否可以用记事本打开

##### 记事本无论打开什么文件都按既定的字符编码工作（如ASCII码），所以当他打开二进制文件时，出现乱码

##### exe---二进制文件，是最简单的序列化类型（包括word、mp3、mp4等），也是基于值编码的文件，你可以根据具体应用，指定某个值是什么意思（这样一个过程，可以看作是自定义编码。二进制文件可看成是变长编码的，因为是值编码嘛，多少个比特代表一个值，完全由你决定。

##### txt---文本（ASCII)文件--指定字符集即基于字符编码的文件，常见的编码有ASCII编码，UNICODE编码等等。文本文件基本上是定长编码的(也有非定长的编码如UTF-8)。



### 对象

使用多行表示时最后一个写逗号，单行不写逗号

let age = 21;

let object = {

​    name: 'ly',

​    age,

}

//或者

let object = {name: 'ly' , age}



### 正则补充

##### 计算组 

let pattern = /(\*{5})((\d{3})\w(\s{2}))/ 

下标为0的组((\*{5})((\d{3})\w(\s{2}))) 

1 (\*{5}) 

2 ((\d{3})\w(\s{2})) 

3 (\d{3}) 

 4 (\s{2}) 



##### 正则里面的或 ====> | 

let datePattern = /\d{2}|\d{4}/; 

console.log(dataPattern.test('98') && dataPattern.test('1998'));



##### 正则模式 /regExp/g g(global) i(ignore)  /h/=> /h/ 'HHHHHH'=>'hhhhhhhh' 

##### m(multiple line) u(unicode) s(dotAll) 



#### m模式

let multipleMode = /\d{3}\n\d{3}/; 

let multipleLineStr = `666

999`;   //'666\n999'

console.log(multipleMode.test(multipleLineStr));//true

##### 替换

let multipleMode1 = /666/g;

let multipleLineStr1 = '666\n666';

console.log(multipleLineStr1.replace(multipleMode1, 999));  // 999 

​                                                                                                                    999

##### 测试匹配

let dotAllMode = /../;

let dotAllModeStr = '\n\n';

console.log(dotAllMode.test(dotAllModeStr)); // false

let dotAllMode1 = /../s;

console.log(dotAllMode1.test(dotAllModeStr)); // true



## 补充

### 模板字符串

## 语法

```
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

## 描述

模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（`${expression}`）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）。

```
`\`` === "`" // --> true
```

### 多行字符串

在新行中插入的任何字符都是模板字符串中的一部分，使用普通字符串，你可以通过以下的方式获得多行字符串：

```
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
```

要获得同样效果的多行字符串，只需使用如下代码：

```
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### 插入表达式

在普通字符串中嵌入表达式，必须使用如下语法：

```
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

现在通过模板字符串，我们可以使用一种更优雅的方式来表示：

```
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### 嵌套模板

在某些时候，嵌套模板是具有可配置字符串的最简单也是更可读的方法。 在模板中，只需在模板内的占位符 `${ }` 内使用它们，就可以轻松地使用内部反引号。 例如，如果条件 a 是真的，那么返回这个模板化的文字。

ES5:

```
var classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');
```

在ES2015中使用模板文字而没有嵌套：

```
const classes = `header ${ isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
```

在ES2015的嵌套模板字面量中：

```
const classes = `header ${ isLargeScreen() ? '' :
 `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

### 带标签的模板字符串

更高级的形式的模板字符串是带标签的模板字符串。标签使您可以用函数解析模板字符串。标签函数的第一个参数包含一个字符串值的数组。其余的参数与表达式相关。最后，你的函数可以返回处理好的的字符串（或者它可以返回完全不同的东西 , 如下个例子所述）。用于该标签的函数的名称可以被命名为任何名字。

```
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Mike is a youngster
```

正如下面例子所展示的，标签函数并不一定需要返回一个字符串。

```
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!" 
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
```

### 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性`raw` ，我们可以通过它来访问模板字符串的原始字符串，而不经过特殊字符的替换。

```
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```

另外，使用[`String.raw()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw) 方法创建原始字符串和使用默认模板函数和字符串连接创建是一样的。

```
var str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"

str.length;
// 6

str.split('').join(',');
// "H,i,\,n,5,!"
```



# day5

##### 1.utf-8范围： \u0000~\uFFFF 

/ let \u0060\u0060 = 7;

// js utf-16 2个字符       utf-8   2/3/1个字符

// \uB000~\BFFF '\uB0001' // 辅助字符 \u0060\uB0001\uB002

#### 2.求幂运算  Math.pow() 

console.log(2 ** 16);

console.log(String.fromCodePoint(2 ** 16 +10));

console.log(Sting.fromCodePoint(2 ** 16 + 20));

##### 3.字符编码

console.log('a'.codePointAt(0)); 

##### 4.得到对应进制的数

let num2 = 96;

console.log(num2.toString(16));  //60

##### 5. ES length

let char = String.fromCodePoint(2 ** 16 +5);

console.log('length:', char.length);

console.log([...char].length);

/*功能 =>

let array = []

for (let char of str) {

​    array.push(char);

}

return array.length;

*/

##### 6.slice功能=>自定义函数

function mySlice(array, start) {

​    let resultArray = [];

​    for (let index = start; index < array.length; ++index) {

​        resultArray.push(array[index])

​    }

​    return resultArray;

}

let aObject = Object.create({mySlice}); 

console.log(aObject.hasOwnProperty('mySLice'));

console.log('mySlice' in aObject)

 ##### 7.有length属相对象都是类数组--arguments 

function func() {

​    console.log(arguments.length);

​    console.log(arguments[0]);

​    console.log(Array.isArray(arguments));

​    // arguments.slice(0,)   ES5

​    let argumentsArray =  Array.prototype.slice.call(arguments); // 临时绑定this slice(）

​    // 永久绑定 bind

​    console.log('argumentsArray:', argumentsArray);

}

##### 8.循环中标志flag的使用

 for (let i = 0; i < 10; ++i) {

​     for (let i = 0; i < 10; ++i) {

​         for (let i = 0; i < 10; ++i) {

​             let flag = false;

​             if (flag = true ) {

​                console.log('from 4');

​                 break;

​             }

​             for (let i = 0; i < 10; ++i) {

​               if(condition = true) {

​                    flag = true;

​                  break;

​                                  }

​           }

​        }

​    }

 }

