/*1. Javascript 中对象的属性是什么数据类型?
   动态数据类型*/

//答： 测试表明是字符串类型
    let obj = {};
    obj.oneAttr = 1;
   for (let attr in obj) {
    debug(`the type of attr oneAttr in obj: ${typeof attr}`);
}


/*2.下面的代码打印的结果是什么?*/
var key = 'account';
var state = {
    key: '666666@gmail.com'
}
console.log(state['account'])
   undefined

//答： undefined,构造对象是键不会是使用变量的，键字面是什么样，键值就是其对应字符串，题目中state
// 只是添加了'key'这个属性，并不是'account'这个属性
//补充：
var key = 'account';
var state = {
    key: '666666@gmail.com'
}
console.log(state['key'])
// 666666@gmail.com



/*3.写一个函数isPropertyInPropotypeChain(obj, attr),这个函数用于判断属性是否是从原型链继承得来并且自己没有这个属性的,
obj是传入的对象，attr是用来判断的属性，函数返回值类型为bool类型。*/
*/
*/
function isPropertyInPropotypeChain(Obj, attr){
    if(obj.hasOwnProperty(attr) && obj.attr)
        return false;
    else
        return true;
}
// 参考代码
let isPropertyInPropotypeChain = (obj, attr) => {
    return attr in obj && !obj.hasOwnProperty(attr)
};
let obj1 = {
    name: 'ly'
};
debug(isPropertyInPropotypeChain(obj1, 'name')); // false，自身存在的属性。
debug(isPropertyInPropotypeChain(obj1, 'toString')); // true




/*4.修改下面代码使得:
分数在[0, 60)之间打印不及格，[60, 80) 打印一般，其他打印优秀*/
var grade = 80;
if (0 < grade < 60) {
    console.log('不及格')
} else if (60 <= grade <= 80) {
    console.log('一般般')
} else {
    console.log('优秀')
}
/*答：*/ if(grade<80 && grade>0){
                if(grade>=60)
                  console.log('一般');
               else
                   console.log('不及格');
              }
       else
              console.log('优秀');

//参考代码：
var grade = 80;
if (grade >= 0 && grade < 60) {
    console.log('不及格')
} else if (grade >= 60 && grade < 80) {
    console.log('一般般')
} else if(grade >= 80 && grade <= 100){
    console.log('优秀')
} else {
    //
}



    
/*5.下面的这些分别值是什么?*/
!{}                    //false
!''                    //true
!0                     //true
!null                  //true
!undefine              //这个不会
(!undefined            //true)
![]                    //false
!NaN                   //true
// 测试代码
debug(`!{}: ${!{}}`);
debug(`!'': ${!''}`);
debug(`!0: ${!0}`);
debug(`!null: ${!null}`);
debug(`!undefined: ${!undefined}`);
debug(`![]: ${![]}`);
debug(`!NaN: ${!NaN}`);
结果表明: 除了对象类型以外，别的数据类型在否定意义的值时转换为bool类型值为false




/*6.
(1)写一个for的死循环
(2)为什么for in循环遍历数组得到key是string类型 而不是number类型
(3)for ,while, do while分别适用于什么场景?*/
 //(1).
 for(var i=1;i>0;i++){
    console.log(i);
}
//(2)./*基于for in 的循环是针对Object {} 的属性而言的,对这个对象的属性进行循环遍历,所以得到的key就是string类型。*/
//(3)./*for循环通常用在有固定循环次数的循环语句中，而while语句则用在满足某种条件时才循环的语句中，它们都是先判断条件是否满足再执行语句，所以，如果一开始条件就不满足，循环语句有可能一次也不执行。do-while语句和while基本相同，所不同的是，它先执行循环语句，再判断条件是否满足，也就是说，循环语句至少能执行一次。*/

// 答：for的死循环,只有两个条件。
//for (; ;) {}
/*
* 因为for in循环遍历的是对象的属性,对象的属性就是string类型
 */
// for 适合计数器类型的,step有规律的
for (let i = 0; i < 10; i += 2) {debug(i)}
// while 适用于不是计数器类型或者条件复杂的情况
let num = +new Date() % 2; // 时间戳对2求模
while (num !== 0) {
    debug(num);
    num = +new Date() % 2;
}
// do while 适用于至少循环一次的情况
let doSomeThing = () => debug('doSomeThing....');
do {
    doSomeThing();
} while (false);
// for 和 while 循环可能一次都不执行，因为他们是先判断循环条件再执行循环体
// 而do while是先执行再判断




/*7.Map 和 Object很像，貌似都可以保存key-value,尝试列出它们的几个区别*/
/*Map<String, ?>只能是只读模式，不能增加，因为增加的时候不知道该写入什么类型的值；Map<String, Object>可以读和写，
只要是所有Object类的子类都可以。map中一个属性只能对应一个value值。多的后面的会把前面的给删掉。object的key只能是字符串。
 */
// 答：对象key一定是string类型的,但是Map的键可以是别的任意数据类型
let map = new Map([[1, 'google'], ['country', 'America']]);
debug(map.get(1)); // 'google'
alert(map.get('country')); // 'America'
let obj2 = {
    1: 'google',
    country: 'America'
};
// for in 遍历不了Map的
for (let attr in map) {debug(attr)} // 没有显示
// for of 无法遍历对象,因为对象不是iterable
// for (let attr of obj2) {debug(attr)} // 报错




/*8.尝试用多种方法,写一个函数deduplication(array)
该函数传入一个数组，返回去除重复元素且保持原顺序的新数组。*/
function deduplication(arr[]){
    for(var i=0;i<this.length;i++){
        if(arr.indexOf(this[i]==-1)){
                arr.push(this[i]);
            }
 }
}

// 展示两种不hack的方法
let array = [2, 3, 7, 6, 2, 14, 8, 3, 6, 9, 10, 8, 14];
let deduplication1 = (array) => {
    let resultArr = [];
    array.forEach((ele) => {
        if (resultArr.indexOf(ele) === -1) {
            resultArr.push(ele);
        }
    }); // 删除重复元素
    return resultArr.sort((x, y) => x - y) // 按数字大小（之前存储的数组元素位置）排序
};
debug(deduplication1(array));
let deduplication2 = (array) => Array.from(new Set(array)).sort((x, y) => x - y);
// 上面的还可以更简洁: let deduplication2 = (array) => [...new Set(array)].sort((x, y) => x - y);
debug(deduplication2(array));
debug(Array.isArray(deduplication2(array))); // Array.isArray()最靠谱的检验是不是数组的方法

// 上面的sort函数不写函数参数会有惊喜




/*9.写一个map , 变量名为items,以id为key,info为value保存上面两条记录,并且用代码表示出item2的性别。*/
var item1 = {
    id: 1,
    info: {
        name: `xiaoHong`
        gender: 'female'
    }
}
var item2 = {
    id: 1,
    info: {
        name: `xiaoMing`
        gender: 'male'
    }
}
var item1=new Map([[1:'xiaoHong'],[1:'female']]);
var item2=new Map([[1:'xiaoMing'],[1:'male']]);

// 之前题目item2的id是1,改成了2
let items = new Map([
    [item1.id, item1.info],
    [item2.id, item2.info]
]);
debug(items.get(2).gender); // male
debug(items.get(2).name); // xiaoMing



/*10.for of, for in有什么区别，for each一般传入的处理函数参数分别是什么;*/
/*for in是遍历键名，for of是遍历键值,for of可以实现对iterator对象的遍历，而for in就是简单的遍历.手动给对象添加属性后, for in 是可以将新添加的属性遍历出来  但是for of 不行*/
/*for each传入的处理函数参数是数组元素currentValue，元素的索引index，数组本身arr。*/
//答：for in 遍历的是对象的键或者说属性,for of遍历的是iterable对象元素的值,并且只能是iterable对象
// forEach 的三个参数:
// 第一个: element, 表示遍历传进来的元素值；
// 第二个: index, 表示遍历传进来的元素的索引；
// 第三个: self, 表示调用者自身


/*11.数组的很多属性在字符串里面也有，如length, slice, indexOf,你觉得string也是Iterable吗?*/
/*不是，因为遍历array可以采用下标循环，遍历Map和Set无法使用下标。集合类型不统一，所以才引进iterable。*/
//答：应该是的
// let str = 'test2 end!';
// for (let v of str) {debug(v)} // 不报错 打印每个字符


/*12.javascript是否支持switch语句,以及break,continue，条件表达式(就是三目运算符 ?)?*/
/*支持*/
//答：都支持
// 提醒一下几点:
// 1. 上面的break和continue少用
// 2. 要用break何不直接写在循环条件中，有时候break可以用return代替（函数中）
// 3. continue, 其实你把continue的条件反过来包住后面的代码即可去掉continue
// 4. 使用条件表达式可以使得代码很优雅
// 5. 除了switch可以大大提高可读性的情况，少用switch
// 6. do while不要用




/*强调几点
答案文件格式不要用.txt,最好用.js,文字部分可以用注释。
希望大家养成良好的代码风格
操作符左右要有空格
js关键字后面一般要空一个空格,比如for (; ;)
花括号左边要有空格
单行注释和代码文字之间各有一个空格
if 语句花括号不能省略
js官方是提倡变量名驼峰写法的，如userAge, 像python官方提倡下划线式use_age
除了for循环和单行语句外不要用单目运算符++,--
示例
let loopFlag = 0; // 定义一个标志变量 驼峰标示 单行注释左右都有空格
while (flag <= 5) { // 注意要while关键字右侧的空格和花括号左侧空格
    ++loopFlag; // 单行时使用
    if (loopFlag === 3) { // 花括号不能省略 
        console.log(flag)
    }
}

for (; ;) { // ;表示语句结束，一般for循环中;后面有一个空格
    
}
js要不要写分号?
这个问题各有各有看法,vue的开发者公开表示不要写分号,但就目前而言个人认为看个人喜好吧，
我还是比较建议要写分号，毕竟js不写分号还是有一些潜在的风险
对于12题
事实上更高级的语言python以上语法原生全部不支持，因为没必要。
以后题目中的代码可能会出现ES6,7,8的语法，看不懂自己百度或问我，
比如下面两个太常用了，我是不愿意再写var,太恶心

声明变量:
let:声明块作用域变量,var可以不再使用了
const: 相当于字面上的const let

箭头函数
let add = (x, y) => x+y
console.log(add(1, 2) ) // 3*/
