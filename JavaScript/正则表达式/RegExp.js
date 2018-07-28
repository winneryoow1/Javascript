/**任务:
 * 标准对象
 *date
 *regExp
 *test1
 *全局对象
 *browser: window
 *node: global
 *正则表达式
 *regExp: regular expression
 *正则表达式: 就是写一个表达式=> 用正则符号来表示一类字符串
 */

/**
 * js内置对象之Date
 * 
 */

//-------------------------------Date初始化---------------------------------------//
console.dir(Date);

const date1 = new Date();
const date2 = Date();

console.log('date1:', date1);;
console.log('date2:', date2);;

// instance 实例 typeoftypeof
console.log(date1 instanceof Date); // true
console.log(date2 instanceof Date); // false
/**
 * 总结:
 * 不使用new关键字初始化Date,返回的不是Date实例化对象
 * 两者均可,最好用new
 */


//---------------------Date的api--------------------------------//
let date = new Date();
console.log(date);
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDay());
now.getHours();
now.getMinutes();
now.getSeconds();
now.getMilliseconds();
now.getTime();



//--------------------------获取指定的Date对象---------------------------------------//
// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
console.log(new Date(2018, 6, 9, 10, 4, 20, 2 * 1000));
// 7月1 7月2 97 1 1 0000
// timstamp 时间戳 毫秒为单位 120 * 1000 ms => 2min
console.log('本的时间: ', date.toLocaleString()); // 
console.log('标准时间: ', date.toUTCString());

console.log(+new Date());//打印时间戳
console.log(typeof (+'12306')) ;//转换类型

// 谷歌javascript规范: 用单引号和反引号 拼接字符窜用反引号
console.log('hello world');
let hell = 'hello';
let world = 'world';
console.log(hell + world);
console.log(`${hell}${world}`); // 占位符 %d, %s

// console.time
console.time('测试单引号拼接');
while (100 * 0000 * 0000) {
   hell + world;
}
console.timeEnd('测试单引号拼接') // 测试单引号拼接: 0.083ms


console.time('测试模版字符串拼接');
while (100 * 0000 * 0000) {
   `${hell}${world}`
}
console.timeEnd('测试模版字符串拼接') // 测试模版字符串拼接: 0.004ms
// 要在双引号里面打印单引号 "hello" 
console.log('\"hello\"');
// console.log('"hell'o"'); // 报错 SyntaxError: missing ) after argument list

// function checkPhone(str) {
//     if (isNaN(parseInt(str.slice(0, 2)) {
//         return false;
//     }
//     if (str[3] !== ' ') {
//         return false;
//     }
// }


1;
{
   a: 1;
}
'hello';
// ^\d{3}\s\d{8}$


//------------------------创建js 正则表达式对象--------------------------//
// 字面量
let regExp1 = /^\d{3}\s\d{8}$/;
// new RegExp
let regExp2 = new RegExp(/^\d{3}\s\d{8}$/);

// 正则表达式语法
// 位置类
/*
^
$
// 字符类型
// 数字
\d digtal
\s space 空字符 表示空格, tab
\S 非空字符
\w word 字母,数字,_
\u \u4E00-\u9FA5 中文字符
. 任意字符除了\n
// 数量
? 0个或1个
+ 1+
* 任意个, 0个或多个
// 分组 () 把括起来的内容看作整体
// {} 精确表示数量
// 一个数字 {6} 6个 (\w\d){6} {{3,6}}
// [] 之一 [abc] [123344555] 一定是表示一个字符 [a-z1-9A-Z]
*/
// **YY-MM-dd hh-ss-mm**
function nowTimeStr(str) {
   const nowDate = new Date()
   return (str.replace('YYYY', nowDate.getFullYear())
           .replace('MM', nowDate.getMonth())
           .replace('dd', nowDate.getDay())
           .replace('hh', nowDate.getHours())
           .replace('ss', nowDate.getSeconds())
           .replace('mm', nowDate.getMinutes()))
}

console.log(nowTimeStr('**YYYY-MM-dd hh-ss-mm**')); // **2018-07-09 21-05-19"

function formatStr(str) {
   return str.replace(/\s+/g, ' ');
}


// ms google    ti      ibm
console.log(formatStr('ms google    ti      ibm'));

// 匹配 test
console.log(/^\d{3}\s\d{8}$/.test('123 6666666'));

// 替换 replace //, //g

// exec连续匹配

// 拆分 split , ;   , 
console.log('ms,, google; , IBn'.split(/[,;\s]+/));

// search 搜索

//split
'a b   c'.split(/\s+/); // ['a', 'b', 'c']
//分组
var re = /^(\d{3})-(\d{3,8})$/;

re.exec('010-12345'); // ['010-12345', '010', '12345']

re.exec('010 12345'); // null



//------------------------JSON--------------------------//
//序列化

var xiaoming = {

    name: '小明',

    age: 14,

    gender: true,

    height: 1.65,

    grade: null,

    'middle-school': '"W3C" Middle School',

    skills: ['JavaScript', 'Java', 'Python', 'Lisp']

};

var s = JSON.stringify(xiaoming);

console.log(s);

//筛选属性
JSON.stringify(xiaoming, ['name', 'skills'], '  ');

//传入一个函数，把所有的属性值都变成大写
function convert(key, value) {

        if (typeof value === 'string') {
    
            return value.toUpperCase();
    
        }
    
        return value;
    
    }
    
    JSON.stringify(xiaoming, convert, '  ');

    
//反序列化--parse
//练习：用浏览器访问Yahoo的天气API，查看返回的JSON数据，然后返回城市、气温预报等信息：

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';

// 从远程地址获取JSON:

$.getJSON(url, function (data) {     

 // 获取结果:

    var city = data.query.results.channel.location.city;

    var forecast = data.query.results.channel.item.forecast;

    var result = {

        city: city,

        forecast: forecast

    };

    alert(JSON.stringify(result, null, '  '));

})        


//练习
//-------------------------------------------javascript test 6th----------------------------------------------//
//--------------------------------------------------date部分---------------------------------------------------//
//补全下面函数
//返回当前本地时间和时间戳字符串,格式按照下面代码所示

"use strict";

// Date
const getLocaleNowTimeStr = () => {
    let nowDate = new Date();

    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    let day =nowDate.getDay();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    let dayMap = new Map([
        [1,'一'],
        [2,'二'],
        [3,'三'],
        [4,'四'],
        [5,'五'],
        [6,'六'],
        [0,'日']
    ])
    return `localeTime` = [星期${dayMap.get(day)}/${month + 1}月/${year}年:${hours}时:${minutes}分:${seconds}秒] timestamp=[${+nowDate}]
}

console.log(getLocaleNowTimeStr()); // => localeTime=[星期日/7月/2018年:21时:13分:31秒] timestamp=[1531660411535毫秒]




//------------------------------------------------------表达式和JSON--------------------------------------------//
//补全下面函数，函数接受一个待处理字符串,返回一个json字符串
//从下面的toBeDealtStr模版字符串中提取出students数组,按照给定序列化结果的格式序列化为JSON文本字符串。
// 正则表达式 和 JSON

const toBeDealtStr = `# some students data

 // 注: [686]后面一定是数字 grade为1-4
'[name]=ly [age]=21  [grade]=2 [686]=999
'Motto---fighting......

'[name]=jxq [age]=22 [grade]=2  [686]=666
'Motto---To be able to eat is a blessing, ha ha...

'[name]=aGirl [age]=21 [grade]=1 [686]=646
'Motto---em em em...

`
//var reg = /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/gu;

const dealStr = (toBeDealtStr) => {
    const pattern =  /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/gu;
    let execResult = null;
    let students = [];
    while (execResult = pattern.exec(toBeDealtStr)){
          let student = {
              name:execResult[1],
              age:execResult[2],
              grade:execResult[3],
              '溜不溜':execResult[4],
              'motto':execResult[5],
          }
          students.push(student);
    }

    return  JSON.stringify(students);
}

console.log(dealStr(toBeDealtStr));
// => [{"name":"ly","age":"21","grade":"2","溜不溜":"999","motto":"fighting......"},{"name":"jxq","age":"22","grade":"2","溜不溜":"666","motto":"To be able to eat is a blessing, ha ha..."},{"name":"aGirl","age":"21","grade":"1","溜不溜":"646","motto":"em em em..."}]
//使用match全局模式提取index为0的组，然后再用正则exec（）提取
//是否使用全局模式对结果产生不同影响
//dubugger运行到这里停止


//正则里的占位符
let str = 'ahdlhdkaaaaaaaaaa saclf is cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj';

//方法一：
//插一个very => clf is very cool!
//1.找下标 let index = str.indexOf('is');
//2.计算有用的下标 index += 'is'.length -1;
//3.拼接：let resultStr = str.slice(0,index+1).concat(' very').concat(str.slice(index + 1));
// console.log(resultStr);

//----------------------------------------------------------使用正则--------------------------------------------------------//
//js $1,$2~9
//console.log(object);
str = str.replace(/(.+?is)(.+)/,`$1 very $2`);
console.log('regExp: ',str);

//1.分组
//   /(\d{3})\s\w+/ 总共有几个组?
// 3个组 /((\d{3})\s(\w{5})\.)/
console.log('123456\+146 abcde.'.match(/((\d{3})\s(\w{5})\.)/));
 
//2.计算组 
let pattern = /(\*{5})((\d{3})\w(\s{2}))/
//下标为0的组((\*{5})((\d{3})\w(\s{2})))
//1 (\*{5})
// 2 ((\d{3})\w(\s{2}))
// 3 (\d{3})
// 4 (\s{2})

//3.正则里面的或 ====> |
let datePattern = /\d{2}|\d{4}/;
console.log(datePattern.test('98') && datePattern.test('1998'));

//4. 正则模式 /regExp/g g(global) i(ignore)  /h/=> /h/ 'HHHHHH'=>'hhhhhhhh'
// m(multiple line) u(unicode) s(dotAll)
// m模式
let multipleMode = /\d{3}\n\d{3}/;
let multipleLineStr = `666
999`;
console.log(multipleMode.test(multipleLineStr)); // true

let multipleMode1 = /666/g;
let multipleLineStr1 = '666\n666';
console.log(multipleLineStr1.replace(multipleMode1, 999));

let dotAllMode = /../;
let dotAllModeStr = '\n\n';
console.log(dotAllMode.test(dotAllModeStr)); // => false

let dotAllMode1 = /../s;
console.log(dotAllMode1.test(dotAllModeStr)); // =< true

let containZHStr = "hello I'm 小明, how are you?";


// 5. 中日朝unicode码值范围4E00－9FA5
// let zhPattern = /.+?([\u4E00-\u9FA5]+).?$/;

// [^\w]
let zhPattern = /([^\u4E00-\u9FA5]+?)([\u4E00-\u9FA5]+)([^\u4E00-\u9FA5]+)/;
console.log(zhPattern.test(containZHStr));
// 用match可以返回组
let matchResult =  containZHStr.match(zhPattern);
// Array.isArray()
console.log(Array(30).fill('-').join(''));
console.log(matchResult);
console.log(Array(30).fill('-').join(''));
console.log(`${matchResult}`);
console.log(Array(30).fill('-').join(''));
console.log(Array.isArray(matchResult)); // => true
console.log('Result:', matchResult[2]);
// \S =>



// ES6属性名的简写
// 对象
let age = 21;
let object = {
    name: 'ly',
    age,
    grade: 99 // => age: age
}
console.log(object);
let objectArray = [
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
    {name: 'ly', age: 21},
]