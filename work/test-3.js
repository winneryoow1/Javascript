//1. 基础复习
let num = 15;
// 用代码表示出num的16进制字符
let num = 0xF;

// 字符'饕餮'的unicode码值是多少
//9955 992E

// console.log(!new Set([])) 输出是什么?
false

//console.log(new Set([]))
  Set(0) {}

// console.log(0.1 - 0.1 === 0.0) true还是false?
 true
console.log(0.1 + 0.1 === 0.2)
true
console.log(0.1 + 0.3 === 0.4)
true
console.log(0.4 - 0.3 === 0.1)
false
console.log(0.1 + 0.2 === 0.3)
false
console.log(0.3 - 0.2 === 0.1)
false
console.log(0.3 - 0.1 === 0.2)
false

// 下面打印的结果是什么? 把&&换成||呢?
let str = 'abc';
'' && str.slice(0, 1);
console.log(str);
//abc
//把&&换成||,也输出abc




2.设计函数
/**
 * 一群学生分组对抗
 * 不足2人返回null
 * 人数足够多8人一组
 * 最少2组
 * 返回应该分的组数
 * @param studentsCount
 * @returns {*}
 */
let getGroups = studentsCount => {
    // 补齐代码
    if(studentsCount < 2)
        return null;
    else if(studentsCount >= 2 && studentsCount <= 10)
        return 2;
    else{
        if(studentsCount / 8 == 0)
            return (studentsCount/8);
        else
            return (parseInt(studentsCount/8) + 1);
    }
};
console.debug(getGroups(1)); // null
console.debug(getGroups(7)); // 2
console.log(getGroups(19)); // 3




3. 字符串处理
// 待处理字符串数组
let data = [
    '*/A19_100.lab',
    '*/A19_101.lab',
    '*/A19_102.lab',
    '*/A19_103.lab',
    '*/A19_104.lab',
    '*/A19_105.lab',
    '*/A19_106.lab',
];
/**
 * 将data数组中每个字符串前后加一个双引号
 * 将data中字符串拼成一个字符串使得其中每个元素占一行
 * @param data
 * @returns {string}
 */
const deal = (data) => {
    let resultStr = '';
    // 补齐代码
    var countInLine = 1;
    for（ int i = 0;i<str.length;i++ ）{
        data[i] = data[i].replaceAll(data[i],'"'+ data[i] + '"');
    }
    document.write(data.join('\n'));
    return resultStr;
};





4.数据结构
分别选用合适的数据类型用代码表示给出的伪代码数据
file: fileName: 'test.txt' fileSize: 200 type: 'executable'
2. ```python
来过11栋的人:
  - 小刘
  - 小骆
  - 小兰
  - 小高
  - 小骆
  - 小高
  - 小胡
items: item1: 22 item2: 33 item3: 44 item3: 22 item4: 66```
//解答：
   //1.
        var file={
                   fileName:'test.txt',
                   fileSize:200,
                   type:'executable'
               };
   //2.
        var arr=['小刘','小骆','小兰','小高','小骆','小高','小胡'];
   //3.
     var items={
                 items1:22,
                 items2:33,
                 items3:44,
                 items4:66
          };






5.函数初步
不使用ES6参数默认值语法怎样给参数设默认值?例如下面的pow函数
    // ES6
    let pow = (n, m=2) => {
    return Array(m).fill(n).reduce((f, b) => f * b);
};
console.log(pow(2)); // 4
console.log(pow(2, 3)); // 8
// ES5不能用 m=2，用代码改写;
const pow = n => {
    return
};

根据代码注释完成
/**
 * 接受任意个参数
 * 打印用空格拼接所有字符串参数构成的字符串
 * @param
 */
const print = ('' + '' )=>{// 补全函数
    print('hello', 'world'); // hello world
    print('name:', 'ly'); // name: ly
}

var 和let有什么区别?
    /*声明后未赋值，表现相同,使用未声明的变量，表现不同(var输出undefined，let直接报错），重复声明同一个变量时，表现不同（let直接报错）
 变量作用范围，表现不同（内部"{}"中声明的varTest变量覆盖外部的letTest，内部"{}"中声明的letTest和外部的letTest不是同一个变量*/

    提取其中method,url,status,按比如<GET http://localhost:8081/> status: 200的格式输出他们(相当于一条日志)
    let http = {
        method: 'GET',
        header: {
            'User-Agent': 'fireFox'
        },
        req: {
            url: 'http://localhost:8080/'
        },
        response: {
            status: 200,
            reason: 'ok',
            text: '<h1>测试成功</h1>'
        }
    };
    console.log(http.method + '<' + req.url + '>' + response.status);