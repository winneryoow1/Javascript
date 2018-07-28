# 一、Date(表示日期和时间)



## 1.要获取系统当前时间



var now = new Date();

now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)

## 2.指定日期和时间



### (1）创建一个Date对象

var d = new Date(2015, 5, 19, 20, 15, 30, 123);

d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

 ！！！重点：JavaScript的Date对象月份值从0开始，牢记0=1月，1=2月，2=3月，……，11=12月。

### (2)解析一个符合ISO 8601格式的字符串



var d = Date.parse('2015-06-24T19:49:22.875+08:00');

d; // 1435146562875

但它返回的不是Date对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个Date：

var d = new Date(1435146562875);

d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)

d.getMonth(); // 5

！！！重点： 使用Date.parse()时传入的字符串使用实际月份01~12，转换为Date对象后getMonth()获取的月份值为0~11。

var today = new Date();

if (today.getMonth() === 1 && today.getDate() === 14) {

    alert('亲爱的，我预定了晚餐，晚上6点在餐厅见！');

}
//2.14



## 3.时区

Date对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间：

var d = new Date(1435146562875);

d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关

d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

（1）在JavaScript中进行时区转换：只需要传递时间戳，或者把时间戳从数据库里读出来，再让JavaScript自动转换为当地时间就可以

（2）时间戳：是一个自增的整数，它表示从1970年1月1日零时整的GMT时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑

   ，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。

（3）要获取当前时间戳，可以用：

     'use strict';
    
     if (Date.now) {
    
    console.log(Date.now()); // 老版本IE没有now()方法
    
     } else {
    
     console.log(new Date().getTime());
    
    }




# 正则表达式：强大的字符串匹配工具  ---只能操作字符串  



## 1.复习字符串操作

 （1）indexOf /search查找--根据字符找到在字符串里面的位置(第一次出现的位置），没有的话返回-1
           var str='abcdef';
           alert(str.search('bc'));//1
 （2）charAt 获取某个字符--根据字符串里面的位置找对应的字符
             alert(str.charAt(0));//a
 （3）substring获取子字符串--两个参数（起始位置，结束位置，但不包括结束位置）
            alert(str.substring(1,4));//bcd
            alert(str.substring(1));//bcdef
  （4）split分割字符串，获得数组
            var str='abc-12-u-qu';
            var arr=str.split('-');
            alert(arr);//abc,12,u,qu

  ### 例：找出字符串中的所有数字

  (1)传统方法

  var str='haj12897hjaaaak23khusd377';
  function findNum(str){
        var arr=[];
        var tmp=' ';
        for(var i=0;i<str.length;i++){
              if(str.charAt(i)<='9' && str.charAt(i)>='0'){
                    tmp += str.charAt(i);
                }
                else{
                        if(tmp){
                                   arr.push(tmp);
                                   tmp=' ';
                                   }
                                }
                             }
                    if(tmp){
                                   arr.push(tmp);
                                   tmp=' ';
                                   }
                          return arr;
 （2）正则表达式
           var str='haj12897hjaaaak23khusd377';
           var re=/\d+/g;
           alert(str.match(re));
           

## 2.正则表达式
（1）JavaScript有两种方式创建一个正则表达式

1.直接通过/正则表达式/写出来

2.通过new RegExp('正则表达式')创建一个RegExp对象

例：

var re1 = /ABC-001/;

var re2 = new RegExp('ABC\-001');

re1; // /ABC-001/

re2; // /ABC-001/

（2）如何判断正则表达式是否匹配：

 例：

     var re = /^\d{3}-\d{3,8}$/;
    
     re.test('010-12345'); // true
    
    re.test('010-1234x'); // false
    
    re.test('010 12345'); // false
    
    RegExp对象的test()方法用于测试给定的字符串是否符合条件

方法：test();
例子：
                  var str='abcdef';
JS风格      var re=new RegExp('a');//    var re=new RegExp('a','i');--忽略大小写
                 alert（re.test(str))；//true
 简写（perl风格）：var re=/a/;    
                               var re=/a/i
                               

 ## 3.字符串操作与正则

 \d--digital数字

 ### （1）.search
 字符串搜索
 -返回出现的位置
 -忽略大小写：i-ignore
 -判断浏览器类型
         var str='abcdef';
         alert(str.search(/b/));//1
          

          var str='asdf 443 vajkkh 55';
          var re=/\d/;
          alert(str.search(re));//5
          
          alert(window.navigator.userAgent);//检查浏览器的版本
          if(window.navigator.userAgent.search(/firefox/i) !=-1)
          {
              alert ('ff');
            }

 ### （2）.match匹配--可以获取下标index（从第几个字符开始匹配）
 -量词：+许多
 -量词变化：\d一个、\d\d两个和 \d+（任何长度）

 ！！！正则选项
 -全局匹配（找全部）：g-----global
 -忽略大小写：i--ignore
 -例子：找出所有数字
              var str='hg j4222 jkkhsaj 44 kkkkk';
              var re=/\d+/g;   
              alert(str.match(re));//2,2,2,4,4

   ### （3）.replace替换所有匹配
   -返回替换后的字符串
           var str='abacdef';
           alert(str.replace(  'a','T')）;//只替换一个   
           alert(str.replace(/a/g,'T'));//替换全部
            alert(str.replace(/a/gi,'T'));//替换全部(包括大小写）
            
        -例子：敏感词过滤（|或）
               var re=/a|b|c/g;
               alert(str.replace(re,'***'));//即把str里面所有的a、b、c替换成***

​     

 ##  (4）切分字符串

   用正则表达式切分字符串比用固定的字符更灵活，请看正常的切分代码：无法识别连续的空格

       'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
    
         用正则表达式试试：无论多少个空格都可以正常分割。
    
       'a b   c'.split(/\s+/); // ['a', 'b', 'c']
    
        加入,试试：
    
        'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
    
         再加入;试试：

'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']

如果用户输入了一组标签，下次记得用正则表达式来把不规范的输入转化成正确的数组。

  ##  (5)分组



除了简单地判断是否匹配之外，正则表达式还有提取子串的强大功能。用()表示的就是要提取的分组（Group）。

比如：

^(\d{3})-(\d{3,8})$分别定义了两个组，可以直接从匹配的字符串中提取出区号和本地号码：

var re = /^(\d{3})-(\d{3,8})$/;

re.exec('010-12345'); // ['010-12345', '010', '12345']

re.exec('010 12345'); // null

如果正则表达式中定义了组，就可以在RegExp对象上用exec()方法提取出子串来。

exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。

exec()方法在匹配失败时返回null。

提取子串非常有用。

来看一个更凶残的例子：

var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;

re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']

这个正则表达式可以直接识别合法的时间。

但是有些时候，用正则表达式也无法做到完全验证，比如识别日期：

var re = /^(0[1-9]|1[0-2]|[0-9])-(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$/;

对于'2-30'，'4-31'这样的非法日期，用正则还是识别不了，或者说写出来非常困难，这时就需要程序配合识别了。

  ## (6)贪婪匹配



需要特别指出的是，正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。

举例如下，匹配出数字后面的0：

var re = /^(\d+)(0*)$/;

re.exec('102300'); // ['102300', '102300', '']

由于\d+采用贪婪匹配，直接把后面的0全部匹配了，结果0*只能匹配空字符串了。

必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配：

var re = /^(\d+?)(0*)$/;

re.exec('102300'); // ['102300', '1023', '00']

  ## (7)全局搜索



JavaScript的正则表达式还有几个特殊的标志，最常用的是g，

表示全局匹配：

var r1 = /test/g;

// 等价于:   var r2 = new RegExp('test', 'g');

全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。

当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：

var s = 'JavaScript, VBScript, JScript and ECMAScript';

var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:

re.exec(s); // ['JavaScript']

re.lastIndex; // 10

re.exec(s); // ['VBScript']

re.lastIndex; // 20

re.exec(s); // ['JScript']

re.lastIndex; // 29

re.exec(s); // ['ECMAScript']

re.lastIndex; // 44

re.exec(s); // null，直到结束仍没有匹配到

全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次。

正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。


 ## 4.字符类

  ### （1）任意字符

​          o[usb]t---obt、ost、out
          []中只能代表其中的一个字符，u或s或b(或者）
          [123 456];1/2/3/  /4/5/6
  例：
          var str='1b2 abc 1c2 ee';
          var re=/1[abc]2/g;
          alert(str.match(re));//1b2,1c2
    ### (2)范围
         [a-z]所有英文字母
         [0-9]所有数字  ---  \d(都是代表一个数字 ）
         [0-9a-z]数字或者字母  
          id[0-9]---id0、id5
   ###   (3）排除
         [^a]（除了a之外的所有）
         o[^0-9]t---oat、o?t、ot
      ### （4）组合
               [a-z0-9A-Z]
        ###  (5)转义字符
         .代表任意字符（英文数字空格等等）
         \d--数字
         \w--word(代表[a-z0-9_]英文、数字、下划线)
         \s--space(代表空白--空格、制表符）
             var str='  fd  rr  ';
             alert('str.replace(/\s+/g,''));//fdrr
         \D--非数字
         \W--非word
         \S--非space



  #### 例：偷小说
         过滤html标签
                 var re=/<[^<>]+>/g;
                 alert(str.replace(re,' ');
                 
          (6)量词
              1.量词：出现的次数
                {n,m},至少出现n次，最多m次
              2.常用量词：
                 {n,}至少n次，最多不限
                 {,m}最少不限，最多m次
                 *代表任意次{0,}
                 ?零次或一次{0,1}
                 + 代表一次或任意次{1,}
                 {n}正好n次  
                 
           （7）分组：
           （）把括起来看成一个整体    
 例：QQ号位数
        var str='我的qq是：222222214，你的是235433333吗？';
        var re=/[1-9]\d{4,10}/g;          
       alert(str.match(re));// 222222214,23543333

​       

### 练习：

### 1.校验邮箱
      判断一个字符串是否是合法的Email的方法是：
    
       a. 创建一个匹配Email的正则表达式；
    
       b.用该正则表达式去匹配用户的输入来判断是否合法。


​    blue                           @                  miaov                               .            com  
一串字母、数字、下划线 @ 一串英文或数字（域名不能有下划线）. 一串英文（长度：2-4）
 \w+                                @        [a-z0-9]             +                       \.          [a-z]{2,4}  
 行首^,行尾$，表示整个字符串必须全部符合要求，而不能只是一部分符合要求
 去首空格/^\s+/
 去尾部空格/\s+$/
 去首尾空格/^\s+| \s+$/g
 /^ \w+@[a-z0-9]+\.[a-z]{2,4}$ / 



  ### 2.匹配中文

   [\u4e00-\u9fa5]

   \u代表中文汉字
   4e00代表一
   u9fa5代表yu
 3.完美版getByClass
 单词边界\b
 '\\b'+sClass+'\\b\','i'(包含sClass的东西）

 字符串操作包括哪些？举例说明
什么是正则表达式？如何创建正则对象？
正则有几种选项？分别是什么意思？
search、match、replace是做什么的？怎么用？
字符类（[]）包括几种情况？
正则有哪些转义字符？分别是什么意思？
什么是量词？各个量词分别有什么作用？
举几个正则表达式的例子，比如：邮件、中文等



三、JSON：JavaScript Object Notation的缩写，它是一种数据交换格式。   

 1.

 （1）在JSON中，一共就这么几种数据类型：

          number：和JavaScript的number完全一致；
    
          boolean：就是JavaScript的true或false；
    
         string：就是JavaScript的string；
    
         null：就是JavaScript的null；
    
         array：就是JavaScript的Array表示方式——[]；
    
        object：就是JavaScript的{ ... }表示方式。
    
          以及上面的任意组合。           
    
    （2）定死了字符集必须是UTF-8
    
    JSON的字符串规定必须用双引号""，Object的键也必须用双引号""

 ！！！任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。

           如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。     


​           

 2.序列化：把对象序列化成JSON格式的字符串--stringify
例：
var s = JSON.stringify(xiaoming);

console.log(s);


（1）只想输出指定的属性，可以传入Array（第二个参数用于控制如何筛选对象的键值）

JSON.stringify(xiaoming, ['name', 'skills'], '  ');

（2）还可以传入一个函数，使对象的每个键值对都会被函数先处理：

function convert(key, value) {

    if (typeof value === 'string') {
    
        return value.toUpperCase();
    
    }
    
    return value;

}

JSON.stringify(xiaoming, convert, '  ');


 （3）精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：

var xiaoming = {

    name: '小明',
    
    age: 14,
    
    gender: true,
    
    height: 1.65,
    
    grade: null,
    
    'middle-school': '"W3C" Middle School',
    
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    
    toJSON: function () {
    
        return { // 只输出name和age，并且改变了key：
    
            'Name': this.name,
    
            'Age': this.age
    
        };
    
    }

};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'               

 3.反序列化：把JSON格式的字符串用JSON.parse()把它变成一个JavaScript对象---parse

 JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]

JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}

JSON.parse('true'); // true

JSON.parse('123.45'); // 123.45

JSON.parse()还可以接收一个函数，用来转换解析出的属性：

例：

'use strict';

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {

    if (key === 'name') {
    
        return value + '同学';
    
    }
    
    return value;

});

console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}


​                

​               