//1.什么是higher-order function?
/*高阶函数是指至少满足下列条件之一的函数：
(1).函数可以作为参数被传递；(2).函数可以作为返回值输出。JavaScript语言中的函数满足高阶函数的条件，
在实际开发中，一般是将函数当作参数传递，或者是让函数的执行结果返回给另外一个函数.
（高阶函数描述的是函数的数学概念，就如同在高中数学中学过的复合函数的概念，
如果u(x) = x * 2，而y(u) = u + 3，那么y接受的“参数”是一个函数，而y本身也是一个函数。）*/

//2.怎么理解函数式编程这个词?
/*函数式编程（FP）是一种编程方式，它将电脑运算视为函数的计算。函数编程语言最重要的基础是λ演算（lambda calculus），
而且λ演算的函数可以接受函数当作输入（参数）和输出（返回值）。
和指令式编程相比，函数式编程强调函数的计算比指令的执行重要。和过程化编程相比，函数式编程里函数的计算可随时调用。*/

//3.面向对象编程简称oop,函数式编程简称fp,你认为fp的出现有什么意义,或者说解决了你以前编程的哪些痛点?
/*(目前我真的还没有什么感觉，只是在网上找到了一些回答。)
(1).单元测试：对被测试程序中的每个函数，你只需在意其参数，而不必考虑函数调用顺序，不用谨慎地设置外部状态。
意味着函数求值的结果只是其返回值，而惟一影响其返回值的就是函数的参数。
(2).调试：在命令式程序里，只检查一个函数的返回值不能够让你确信这个函数已经正常工作了，
你还要去查看那个函数作用域外数十个对象的状态来确认。对函数式程序，你要做的所有事就是查看其返回值！
沿着堆栈检查函数的参数和返回值，只要发现一个不尽合理的结果就进入那个函数然后一步步跟踪下去，重复这一个过程，直到它让你发现了 bug 的生成点。
(3).并行：函数式程序无需任何修改即可并行执行。
 */


/*常见的高阶函数有:
摘抄自js高级程序设计
迭代类
ECMAScript 5 为数组定义了 5 个迭代方法。每个方法都接收两个参数：要在每一项上运行的函数和 （可选的）运行该函数的作用域对象——影响 this 的值。
传入这些方法中的函数会接收三个参数：数 组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能 会也可能不会影响方法的返回值。
以下是这 5 个迭代方法的作用。
 every() ：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true ，则返回 true 。
  filter() ：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
  forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
  map() ：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
  some() ：对数组中的每一项运行给定函数，如果该函数对任一项返回 true ，则返回 true 。

归并类
ECMAScript 5 还新增了两个归并数组的方法： reduce() 和 reduceRight() 。这两个方法都会迭 代数组的所有项，然后构建一个最终返回的值。
其中， reduce() 方法从数组的第一项开始，逐个遍历 到最后。而 reduceRight() 则从数组的最后一项开始，向前遍历到第一项。 这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。传
给 reduce() 和 reduceRight() 的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这 个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
谈谈map, filter,forEach,reduce分别的使用场景,也就是说这几个函数分别应该在什么时候选择他们；*/

/*假设我们有个数组，每个元素是一个人，你面前站了一排人。 
foreach 就是你按顺序一个一个跟他们说做点什么，具体做什么：
people.forEach(function (dude) { dude.pickUpSoap(); });

map 就是你手里拿一个盒子（一个新数组），一个个叫他们把钱包扔进去。结束的时候你获得一个新数组，
里面是大家的钱包，钱包顺序和人的顺序一 一对应。
var wallets = people.map(function (dude) { return dude.wallet; });

reduce 就是你拿着钱包，一个个数过去看里面有多少钱，每检查一个，就和前面综合加起来，结束时候就知道总共多少钱了。
var totalMoney = wallets.reduce(function (countedMoney, wallet) { return countedMoney + wallet.money; }, 0);

filter 就是你每个钱包数过去的时候，里面钱少于100块的不要（留在原来盒子里），
大于100块的丢到新盒子里，这样结束的时候就有了一个新数组，里面都是大于100的钱包。
var fatWallets = wallets.filter(function (wallet) { return wallet.money > 100; })
总结：map和filter只会返回一个新数组，不会改变原来那个数组。
*/


//5.js中的this有很多坑,两个问题:
//(1).请写出不同情况下this的指向情况
/*1、对象.函数的形式调用：object.function()---this指代该对象;
2、普通函数的形式调用：function()---this指向全局对象;(直接调用函数 fun(); 与通过对象调用函数 xxx.fun(); this指代的对象不同)
3、构造器调用---this指代这个正在创建中的对象;
4、Function.prototype.call或Function.prototype.apply调用;
注：this总是指向调用某个方法的对象，但是使用call()和apply()方法时，就会改变this的指向*/
//(2).有哪些情况下this不存在?
/*情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window，这里需要说明的是在js的严格版中this指向的不是window。
情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象.*/


//Desigin function
/*题一要求：
处理一个字符串数组epicLevelFirms,其中有些首字母小写
补全一个函数processStr,使得其将传入的数组中首字母全部改成大写
返回的是原数组的拷贝,对原数组不能改变
尽量使用高阶函数*/
let epicLevelFirms = ["apple", "Google", "microSoft", "IBM", "mozilla"];
/**
 *
 * @param strArray
 * @returns {*}
 */
// 补齐下面的函数
let processStr = function(x) {
      x = x.toString();
      return x.substr(0,1).toUpperCase()+x.substr(1);
}
    epicLevelFirms = epicLevelFirms.map(processStr);
    console.log(processStr(epicLevelFirms)[0]); // Apple
    console.log(epicLevelFirms[0]); // apple



/*题二要求
补全函数使得它可以接收任意个参数并且返回其相乘的结果*/

/**
 *
 * @param args
 * @returns {*|number}
 */
//我觉得这个题目有问题
function factorial (arr) {
    // 补全
    arr.reduce(function (x, y) {
        return x * y;
    })
}
console.log(factorial(2, 3, 4)); // 24



/*题三要求
廖雪峰教程里面的一道题,请改正并说清楚为什么是小明那样的结果;*/

/*原因就是：由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，
而parseInt(string, radix）是两个参数，在调用时index使用了radix的值。
//以下为课程上的解释：
由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，通常我们仅需要第一个参数，
而忽略了传入的后面两个参数。不幸的是，parseInt(string, radix)没有忽略第二个参数，导致实际执行的函数分别是：
parseInt('0', 0); // 0, 按十进制转换
parseInt('1', 1); // NaN, 没有一进制
parseInt('2', 2); // NaN, 按二进制转换不允许出现2
可以改为r = arr.map(Number);，因为Number(value)函数仅接收一个参数。
 */
let arr = ['1', '2', '3'];
let r;
r = arr.map(parseInt);
console.log(r); // [ 1, NaN, NaN ]
//改正：
let arr = ['1', '2', '3'];
let r;
r = arr.map(Number);
console.log(r);//1,2,3



/*题四要求
有一个数组digitalStrArray,请将其中非数字字符串过滤掉
将string数组转成number数组
排序
返回倒序后的数组*/
let digitalStrArray = ["2", "ha", "13", "5", "Mischief", "46"];
/**
 *
 * @param array
 * @returns {Int32Array}
 */
let deal = (array) =>
// 补全
    digitalStrArray.filter(function() {
  /     for(var i=0;i<arguments.length;i++)
        {
            if(!isNaN(arguments[i])){
                return arguments[i];
            }
        }
    })
     console.log(deal(digitalStrArray)); // [ 46， 13， 5， 2 ]



/*题五要求
就是一个复杂排序
首先按level排序,p后面的数越大排序的权重(就是越应该放最后的)越大
其次按age排序,age越小权重越大
反思: 有了高阶函数,别人写的排序函数是不是得以定制化了?,就不用一个场景写一个排序函数。*/
let objects = [
    {
        level: "p7",
        age: 28
    },
    {
        level: "p7",
        age: 19
    },
    {
        level: "p5",
        age: 19
    }
];

/**
 *
 * @param array
 * @returns {*}
 */
let sortArray = array => array.sort((x, y) => {
    // 补全
    if(x>y){
        return -1;
    }
    if(x<y){
        return 1;
    }
    return 0;
});

console.log(sortArray(objects));
/*
[ { level: 'p5', age: 19 },
  { level: 'p7', age: 28 },
  { level: 'p7', age: 19 } ]
 */