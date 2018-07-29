'use strict'
//     /((\d{3})\w(\s{2}))(\*{5})/
//   |表示或
//模式：g(globe)全局， i(ignore)忽略大小写  /h/ => 'hhhh' 'HHHH'
// m(multiple line) u(unicode) s(dotALL)
//m模式
let multipleMode = /\d{3}\n\d{3}/;
let multipleLineStr = `666
999`; //'666\n999'
console.log(multipleMode.test(multipleLineStr));//true

//判断一个对象是不是数组 Array isArray()
//console.log(Array.isArray());

//打印一行
//console.log(Array(30).fill('-').join(''));

var str1 = 'caligula';
let str1Copy = JSON.parse(JSON.stringify(str1));
console.log(`str1Copy: ${str1Copy}`);

var arr = [1, 3, -5, 9, 55, 4, 66, 999, 1204, 444, 2, 555, 31093];
arr = arr.slice(0,arr.indexOf(9)).concat(arr.slice(arr.indexOf(9) + 1))
console.log(arr);


/*
let sourceObj = {
    attr1: 'abc'
};

let newObj = {
    attr2: 'def'
}
newObj = {
         ...newObj,
         ...sourceObj
}
console.dir(newObj);//{ attr2: 'def', attr1: 'abc' }*/


let multipleMode1 = /666/g;
let multipleLineStr1 = '666\n666';
console.log(multipleLineStr1.replace(multipleMode1, 999));


let dotAllMode = /../;
let dotAllModeStr = '\n\n';
console.log(dotAllMode.test(dotAllModeStr)); // => false


let containZHStr = "hello I'm 小明, how are you?";
let zhPattern = /([^\u4E00-\u9FA5]+?)([\u4E00-\u9FA5]+)([^\u4E00-\u9FA5]+)/;
console.log(zhPattern.test(containZHStr));


let matchResult =  containZHStr.match(zhPattern);
// Array.isArray()
console.log(Array(30).fill('-').join(''));
console.log(matchResult);
console.log(Array(30).fill('-').join(''));
console.log(`${matchResult}`);
console.log(Array(30).fill('-').join(''));
console.log(Array.isArray(matchResult)); // => true
console.log('Result:', matchResult[2]);


let age = 21;
let object = {
    name: 'ly',
    age,              // => age: age
    grade: 99 
}
console.log(object);

var json4 = {'name':'aaa', 'age':3, 'fun':'haha'};

for(var attr in json4){

        console.log(json4[attr]);     //aaa    3     hahaha

 }

 var json5  = {

    url: ['img/1.png','img/2.png','img/3.png','img/4.png'],

    text: ['小宠物','图片二','图片三','面具']

}

for(var attr in json5){

   for(var i=0; i<json5[attr].length; i++)

           console.log(json5[attr][i]);

      }

      /*var str ='';

      var num = 0;
      
      for(var attr in document){
      
                str += attr + ':' + document[attr] +'<br/>';        num++;
      
      } */
      
      var arr = ['a', 'b', 'c'];

      for(var i in arr){
      
               console.log(i);//0 1 2
      
               console.log(arr[i]); //a,
      
      }
      for(var i=0; i<arr.length; i++){
          console.log(arr[i]);
      }
      
      //定义数组的indexOf方法
      [].indexOf || (Array.prototype.indexOf = function(v){ 

        for(var i = this.length; i-- && this[i] !== v;); 
        
        return i; 
        
        }); 
        
        var b = [0, 1, '哈哈', 3, 4, '嘿嘿', 6, 7, 8, 9]; 
        
        console.log('b'+ "= "+ b.join(",") );
        
        console.log(b.indexOf(2));//-1查找不到
        

    
            
        

    function toTwo(n){
    
                console.log(n < 10 ? '0' + n :''+ n);
            }
            
        toTwo(14);//14

       // 1.字符串转数组

        var s = "abc,abcd,aaa";
        var ss = s.split(",");// 在每个逗号(,)处进行分解。
        console.log(ss);//['abc],'abcd','aaa']

        //2.字符串转对象
        //例如：新建字符串
        var jsonData = '{"name":"gafish"}';
        //转换为对象：
        var obj= eval("('+ jsonData +')");
        console.log(obj.name);


        //length
        var arr5 = ['aaa',2,3];

        arr5.length = 1; 
        console.log(arr5);// aaa
        
        arr5.length = 0;
        console.log(arr5); //空
        
        arr5 = []; //空数组
        console.log(arr5);

        var arr8=[1,2,2,4,2];

for(var i=0;i<arr8.length;i++){

    for(var j=i+1;j<arr8.length;j++){

         if(arr8[i] == arr8[j]){

              arr8.splice(j,1);

              j--; // 注意

       }

   }

}
console.log(arr8);


//产生随机数字
var arr9= [];
for(var i=0;i<10;i++){

        arr9.push(Math.round(Math.random() *  1000)); // 先把随机数追加到数组尾部

 for(var j=0;j<arr9.length; j++){               

      if(arr9[arr9.length-1] == arr[j]){         //然后再拿这个数组最后一个与之前的数比较

         arr9.splice(j,1);

          j--;                                               //数组数量有效比较 

          i--;                                              //数组数量及时更新 

  }
 }
}
console.log(arr9);

console.log(parseInt('1234blue1234'));






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
var arr = [];
const dealStr = (toBeDealtStr) => {
    const pattern =  /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/gi;
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


/*所有有length属性的对象都可以看作是类数组,String的包装对象也有llength,怎样把一个字符串优雅有安全的转换成数组*/
var dataStr="1,2,3,4,5";//原始字符串
//先用charAt再用正则匹配
for(var i=0;i<dataStr.length;i++){
    var arr = (dataStr.charAt(i)).match(/\.+?/);
    console.log(arr);

}
//Javascript utf-16编码          utf-8 \u0000-\uFFFF
//求幂运算
//Math.pow()
// **
//console.log(2 ** 16);
//无法显示
//console.log(String.fromCodePoint(2 ** 16 + 10));
//console.log(String.fromCodePoint(2 ** 16 + 20));

let num3 = 96;
console.log(num3.toString(16)); //60

//扩展运算符...相当于调用for-of循环
/*
 let array = [];
 for(let char of array){
     array.push(char);
 }
    return array.length;
    */

//ES length



//有length属性对象都是类数组

//字符串 => 数组 


//使用slice方法   array.slice() -- 拷贝(参数为空)

//用call()调用希望“继承”的构造函数，并绑定this

//如何从实例访问原型

//class --- 定义包含了构造函数constructor和定义在原型对象上的函数hello()（注意没有function关键字）

//getter setter方法





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
    return `localeTime=[星期${dayMap.get(day)}/${month + 1}月/${year}年:${hours}时:${minutes}分:${seconds}秒] timestamp=[${+nowDate}毫秒]`
}

console.log(getLocaleNowTimeStr()); // => localeTime=[星期日/7月/2018年:21时:13分:31秒] timestamp=[1531660411535毫秒]


let c=1, d=2;
function toTwo(x,y){
    let temp = x;
    x = y;
    y = temp;
    console.log(x,y);
}
toTwo(c,d);
console.log(c,d);


var array1 = [],array2 = [];
for(var i=0;i<10;i++){
    console.log(i); //0,1,2,3,4,5,6,7,8,9
    array1[i] = function(){
        console.log(i);      //10
    }
}
console.log(array1[6]());   //undefined

for(let j=0;j<10;j++){
    console.log(j);       //0,1,2,3,4,5,6,7,8,9
    array2[j] = function(){
        console.log(j);   //6
    }
}
console.log(array2[6]());  //undefined




//JavaScript里函数的原有属性arguments

//------------------------------------------------------------------------day 5----------------------------------------------------//
//1.面向对象编程
//oop Object Oriented Programing
/*  封装, 继承 
let object = {
    _attr: 'ly'
};
*/
class Father {

}

class Son extends Father {

}

//2.基本概念：类class 
// ES没有class
// prototype, __proto__
// prototype绑定在构造函数上
// __proto__ 绑定在实例对象上面
//console.log(Student.prototype); // Student {}
//console.log(stu.__proto__); // Student {}
//console.log(Object.is(stu.__proto__, Student.prototype)); // 

// ES constructor
function Student() {
    this.name ='ly' ;
}
let stu = new Student();

// 如何从实例对象访问原型 =》 
let arr1 = new Array();
console.log(arr1.__proto__ === Array.prototype); // 
console.log(Object.getPrototypeOf(arr1));

// arguments args
function hasManyArguments(argumentObj) {
    console.log(argumentObj.firstArg);
}

hasManyArguments({ firstArg: 'ly' });


// class destructor 解构器
class Person{
    /**
     * 
     * @param {Object} options 
     */
    constructor(options) {
        this.name = options.name;
        this.__ID__ = options.id;
    }

    // 第二种加强封装
    // 访问器和控制器 getter setter
}
//(1)
class Person1 {
    constructor(options) {
        this.__ID__ = options.id;
        this.name
    }

    getID() {
        console.log('Get id');
        return this.__ID__;
    }

    setID(newID) {
        console.log('Set id');
        this.__ID__ = newID
    }

}
//(2)
let p1 = new Person1({name: 'ly', id: '11111'});
console.log(p1.getID());

class Person2 {
    constructor(options) {
        this.__ID__ = options.id;
        this.name 
    }

    get ID() {
        console.log('Get id');
        return this.__ID__;
    }

    set ID(newID) {
        console.log('Set id');
        this.__ID__ = newID
    }
}
//(3)
let p2 = new Person2({name: 'ly', id: '11111'});
console.log(p2.ID);

let oneObj = {
    get name() {
        return 'ly'
    },
    set name(a) {

    }
}
console.log(oneObj.name);



//必须使用new关键字（否则this指向undefined--严格模式，window--非

//怎么判断属性是否自己所有
//js里的判断




//Array.from('abc').reverse().join();


var formArr =  [

    {name: "Name", value: "111"},
    
    {name: "Price", value: "2"}
    
    ];
    
    var obj={ };
    
    //1.map循环方式
    
      formArr.map(function (e, item) {
    
      console.log(e.name);
    
      obj[e.name] = e.value;
    
      });
      console.log(obj);
    


      let str = 'ahdlhdkaaaaaaaaaa saclf is cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj';
      //插一个very => clf is very cool!
      //1.找下标
       let index = str.indexOf('is');
      //2.计算有用的下标 
      index += 'is'.length -1;
      //3.拼接：
      let resultStr = str.slice(0,index+1).concat(' very').concat(str.slice(index + 1));
       console.log(resultStr);



let my_love_friend; //true

let str11 = "I'm a string";
let str22 = str11;
console.log(str11,str22);
str11 = "I'm modified";
console.log(str11,str22);





//--------------------------------------------------------------------------7.22----------------------------------------------------//
//Math函数
//随机数 Math.random();
  console.log(Math.random()); //范围：(0,1)
//取整parseInt
  console.log(parseInt(3.1415)); //3
//floor()向下取整
 console.log(Math.floor(6.724)); //6
//ceil()向上取整
 console.log(Math.ceil(6.724));  //7
 //trunc 直接砍掉小数部分:区分+0 -0
 console.log(Math.trunc(+0.6)); //0
 console.log(Math.trunc(-0.6)); //-0
 //~~ 直接砍掉小数部分
 console.log(~~8.49); //8
 //round--四舍五入
 console.log(Math.round(5.6)); //6
 console.log(Math.round(5.4)); //4

 //产生1-10的随机数

 //定义
 {
     let a=6;
     let b=6;
 }
 console.log(a,b);
 var a=b=6;
 console.log(a,b); //6,6

 function func(){
     var a=b=8;
 }
 func();
 //console.log(a); //不能访问
 console.log(b); //b相当于没有被var、let定义，为全局变量

 //取最大最小数 Math.max()  Math.min()-- prototype
 console.log(Math.max(2,5,2,7,8)); //8
 console.log(Math.min(2,5,2,7,8)); //2
 //找数组里最大的数
 var arr11 = [2,3,6,4,8];
 




 //交换
 let a1 = 2,b1 = 4;
 //1. [a1,b1] = [b1,a1];
//2.stack栈
let stack = [];
console.log(a1,b1); //2,4
stack.push(a1,b1);
a1 = stack.pop();
b1 = stack.pop();
console.log(a1,b1); //4,2


let sourceObj = {

    attr1 : 'abc'

}
 let newObj = {

    attr2 : 'def'

}
for(let attr in sourceObj){

     newObj[attr]  = sourceObj[attr];

}

console.dir(newObj);

console.log('a'.codePointAt(0)); //97

let num2 = 96;
console.log(num2.toString(16)); //60

 
console.log(aa); //undefined
var aa = 2;
aa = 3;
console.log(aa);  //3
/*
function fn1(aa){
    console.log(aa); //3
    var aa = 4;
    console.log(aa); //4
}
fn1(aa);
console.log(aa); //3
*/
function fn1(aa){
    console.log(aa); //undefined
    var aa = 4;
    console.log(aa); //4
}
fn1();
console.log(aa); //3




//--------------------------------------------------------------------------------ajax-------------------------------------------------//
//spl
//Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。
//同步Sync--按顺序执行代码(必须等前面的执行完才能执行后面的)
//耗时操作也必须按照顺序执行

function func1(){
    console.log(1);
}
function func2(){
    console.log(2);
}
function syncstatement(){
     func1();
     func2();
}

syncstatement(); //1 2

//异步Async---耗时操作
//异步举例：网络请求、文件读写io、定时器setTimeout最好用箭头函数
//javascript是天生异步的
//必须等同步操作执行完再执行异步操作
//回调函数里也要等同步操作执行完再执行异步操作

//字符串的异步

function asyncStatement() {
    setTimeout(() => {
        console.log('async');  
    }, 1000)
    console.log('async end');
}

asyncStatement();  //async end
                  //async    


//域名
//跨域操作
//jquery--DOM操作、AJAX操作

setTimeout(() => {
    console.log('callBack1');
    setTimeout(() => {
        console.log('callBack2');
    }, 1000)
    console.log('callBack1 end');
}, 1000)
//callBack1
//callBack1 end
//callBack2



//异步处理
const fs = require('fs');
const path = require('path');

console.log('前面的代码');
fs.readFile(path.resolve(__dirname, './test.txt'), function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
 });
console.log('后面的代码');

// http://testField/?callback=getProducts&id=666
// <script src="http://testField/?callback=getProducts&id=666"></script>
 /* getProducts({
        id: 666,
        date: '18-7-26'
 })
 */
// function getProducts(products) {
//     window.products - products;
// }





//----------------------------------------------------------------promise----------------------------------------------------------------//
//函数类型
//链式调用
//promise相关函数里返回的全是promise类型的


//Promise.resolve();   //将传入的参数解析成Promise resolve

//Promise.all();      //并行操作

//Promise.race();    //竞争操作

//new Array(3); 三个数组元素


//ES6
// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {

//         }, 3000)
//     }, 2000)
// }, 1000)



// func1().func2().func3()
// 怎样使用promise解决回调链狱
// 先构造promise对象
// promise有三种状态
// 1. unresolved
// 2. resolved
// 3. rejected => catch--rejected
/* let p = new Promise((resolve, reject) => {
    // reject('错误');
    setTimeout(() => {
        console.log('888');
        resolve('abc')
    }, 1000);
});
*/
// 使用


// p.then((data) => console.log(data)).catch(error => console.log(error))
// p.then((date) => {
//     console.log(date);
//     return 666
// }).then((number) => console.log(number));


// Promise.resolve
Promise.resolve(p); // resolved promise
console.log(typeof Promise.resolve(123));


// Promise.all
function createPromise(printedValue) {
    return new Promise((resolve, reject) => {
        // reject('错误');
        setTimeout(() => {
            console.log(printedValue);
            reject('first')
            resolve(printedValue)
        }, 1000);
    })
}


//构造连续整数
// console.log(Array.from({ length: 8 }).map((ele, index) => index + 1));
// console.log([...new Array(8)].map((ele, index) => index + 1));

// Promise.all(Array.from({ length: 8 }).map((ele, index) => index + 1).map(ele => {
//     return createPromise(ele);
// })).then(array => {
//     console.log(array);
//     console.log('promise.all 执行完了');
// });



 //promise.race();
// Promise.race(Array.from({ length: 8 }).map((ele, index) => index + 1).map(ele => {
//     return createPromise(ele);
// })).then(() => {
//     return Promise.resolve('abc')
// }).then((p) => {
//     p.
// })

// closer


// closer= > grammer
function closer0(func) {
    var variable = 1;
    function func() {
        console.log(variable);
    }
    func(variable);
    return func
}







