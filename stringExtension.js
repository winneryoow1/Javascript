'use strict';

//---------------------------------------------------------Unicode--------------------------------------------------------------------------------//
console.log('\u0061');   //使用\uxxxx转译一个unicode字符 => a
//console.log('\u35');  //必须4个数字
// 超过两个字节 即\u0000~\uFFFF外的数字用两个字节
console.log('\uD842\uDFB7');  // => 𠮷
console.log('\u20BB7'); // js理解成"\u20BB"+"7" => 7

//ES6
console.log('\u{20BB7}');  // 𠮷
console.log('\u{41}\u{42}\u{43}'); // ABC 可以只是两个数字
let hello = "123";
console.log(hell\u{6F}); //123 => 可以对变量名使用转译

console.log('\u{1F680}' === '\uD830\uDE80');  // true 表明俩种表示方法等价
// ES6这种新语法，致使js共有6种表示字符方法;
// log('z' === '\172'); // strict mode 不允许8进制
console.log('z' === '\x7A');
console.log('z' === '\u007A');
console.log('z' === '\u{7A}');
console.log('z' === '\z');



//-------------------------------------------------------使用codePointAt------------------------------------------------------------------------------//
// js内部以utf-16存储字符
// 码点大于/uFFFF会识别为俩个字符
let s = '\u{10000}ab';
console.log(s.length);
console.log(s.charAt(0)); //乱码
console.log(s.charAt(1)); //乱码
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));


// 使用codePointAt--返回对应码值(定义在字符串的实例对象上)
console.log(s.codePointAt(0)); // 65536
console.log(s.codePointAt(1) === s.charCodeAt(1)); //true
console.log(s.codePointAt(2)); //97


//进制转换
console.log(s.codePointAt(0).toString(16));

// 使用for of 循环可以避免普通for循环带来字符个数不正确的问题
let ts = "\u{20BB7}a";
for (let c of ts) {
    console.log(c);
}
// => 𠮷 a 而不是3个字符

// 判断一个字符是16位的还是32位的最简单方法
function is32Bit(chr) {
    return chr.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit('𠮷'));
console.log(is32Bit('a'));
console.log(0x10);
// log(010); SM forbidden


//String.fromCodePoint()---返回对应字符(定义在String对象上)
// ES6 String 对象提供了可以从超过0xFFFF的codePoint转换得到字符的方法
// ES5
console.log(String.fromCharCode(0x20BB7)); //乱码--自动截断溢出的2
//ES6
console.log(String.fromCharCode(0x20BB7) === "𠮷"); //true
//有多个参数时会被合并成一个字符串返回
console.log(String.fromCharCode(0x20BB7, 97)); //𠮷a


//for-of(提供遍历器接口)
for(let codePoint of 'foo') {
    console.log(codePoint);
}
//"f"  "o"  "o"

//可以识别大于0xFFFF的码点
let text = String.fromCodePoint(0x20BB7);
for(let i of text){
    console.log(i);
}
//𠮷



//--------------正规化-----------------//
//有些语意相同的字符如"喜", "喜喜"应该判断为相等
console.log('\u01D1' === '\u004F\u030c'); // false 单字符的重音字符的组合字符
console.log('\u01D1'+ ' , \u004F\u030c'); // Ǒ , Ǒ

//通过normalize
console.log('\u01D1'.normalize() === '\u004F\u030c'.normalize());  // 默认以组合方式正规化
console.log('\u004F\u030c'.normalize().length); //1

console.log('\u004F\u030c'.normalize('NFD').length); //2 //DFC拆解方法
console.log(String.fromCodePoint(0x20BB7).length); //2

console.log(Object.getPrototypeOf('\u004F\u030c'.normalize('NFD')) === String.prototype);
for (let c of '\u01D1'.normalize('NFD')) {
    console.log(c);
}
// 说明能正规化的字符他原本就是用俩个已经存在的字符组合



//----------------------串内搜索------------------------//
//ES5只有indexof
console.log('abc'.indexOf('c')); //2
//ES6 包含、开始、结束
console.log('hello world'.includes('world'));  //true
console.log('Taylor Swifter'.startsWith('Taylor')); //true
console.log('Justin Bib'.endsWith('Bib'));  //true

// 三个函数都可以有第二个参数表示开始搜索的下标.endWith第二个参数表示前n个
console.log('hello world'.includes('world', 5)); //true
console.log('Taylor Swifter'.startsWith('Taylor', 1)); //false
console.log('Justin Bib'.endsWith('Bib', 'Justin Bib'.length)); //true



//--------------------repeat----------------------//
console.log('xo'.repeat(2)); //xoxo
console.log('nike'.repeat(2.9)); //nikenike 小数取整

console.log('jb'.repeat(0)); //''
console.log('jb'.repeat(-0.6)); //''
console.log('jb'.repeat(NaN)); //''

//console.log('jb'.repeat(-1));   RangeError: Invalid count value
//console.log('jb'.repeat(Infinity));  RangeError: Invalid count value

console.log('wc'.repeat('c2')); //''
console.log('wc'.repeat('\x02')); //''
console.log('wc'.repeat('2')); //先转换为整数



//----------------------补全-----------------------//
// padStart padEnd
console.log('123'.padEnd(8, '0')); //12300000

let jh = '265444'; // 教务在线的教号就是要补空格
console.log(jh.padStart(8)); //  265444默认补空格
console.log('abcdef'.padEnd(3)); //abcdef

// 有个用途提示字符串格式
console.log('09-12'.padStart(10, 'YYYY-MM-DD')); //YYYY-09-12



//-----------------------template string---------------------------//
//模板字符串
//ES-
let mutiLinesStr = "我是林俊杰的\n" +
                    "粉丝！";
console.log(mutiLinesStr);
/*我是林俊杰的
粉丝! */

//ES6
mutiLinesStr = `我是林俊杰的
粉丝!`;
console.log(mutiLinesStr);

//当作普通字符串使用
console.log(`hello world`); //hello world

// 表示多行字符串很方便,所有字面量空格和换行都被保留，使用trim()除去第一行空字符
console.log(`
修炼爱情的辛酸
学会放好爱情的渴望
别人有的爱我们不可能模仿！`.trim());

// 可以格式化输出 ------ 插入变量
let name = 'jj';
console.log(`${name} is handsome!`); //jj is handsome!

//`${let v1 = 3}`;// 语法错误
let v = 4;
`${v = 5}`; //大括号里是一个js表达式
//`${udf}`; // ReferenceError: udf is not defined 使用未声明的变量
let df;
`${df}`; //safe
console.log(`${'abc'}`);  //abc---大括号里面就是执行js语句
console.log(`abc${'def'}`);  // abcdef 嵌套
console.log(`\`\`\``); //``` `需要转译

//模板字符串之中还能调用函数。
function fn(){
    return 'Hello World';
}
`foo ${fn()} bar`
//foo Hello World bar

// 嵌套的另一个例子
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));


// 在普通字符串中引用模板字符串
let str = "`${name}`";
console.log(str); //`${name}`
//执行里面的模板字符串
//写法一

// 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写
str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack'); // "Hello Jack!"

//写法二
//eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
str = '(name) => `Hello ${name}!`';
func = eval.call(null, str);
func('Jack'); // "Hello Jack!"

// js有很多模板库
//由一个通过模板字符串，生成正式模板的实例。
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

//compile模板编译函数
function compile(template){
    const evalExpr = /<%=(.+?)%>/g;
    const expr = /<%([\s\S]+?)%>/g;
  
    template = template
      .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
      .replace(expr, '`); \n $1 \n  echo(`');
  
    template = 'echo(`' + template + '`);';
  
    let script =
    `(function parse(data){
      let output = "";
  
      function echo(html){
        output += html;
      }
  
      ${ template }
  
      return output;
    })`;
  
    return script;
  }

//compile函数的用法：
let parse = eval(compile(template));
// div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"]});


//--------------------标签薄面--------------------------//
/**
 * 标签即函数
 *  本质上是函数调用
 *  参数为一个string数组，和其插入变量构成的...values
 *  适合处理模版字符串
 */

 let tag = (strArr, ...values) => {
     console.log(strArr);
     console.log(values);
 }
 tag`I'm ${name},cool`; // [ 'I\'m ', ',cool' ] [ 'ly' ]
 tag`${'sep'}`; // [ '', '' ] [ 'sep' ] 说明取参数机制是使用插入变量切割
 tag``;  // [ '' ] []

 let tag1 = (str) => {
     console.log(str);
 }
tag1`abc`;  //[ 'abc' ]  //说明标签模板传入的参数就是stringArray
// 将各个参数按照原来的位置拼合回去。
let total = 30;
let msg = passthru`The total is (${total*1.05} with tax)`;


function passthru(stringArray, ...values) {
    let result = "";
    let i;
    for(i = 0; i < values.length; ++i) {
        result += stringArray[i];
        result += values[i];
    }
    result += stringArray[i];
    console.log(result);
}



// “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。
function saferHTML(templateData) {
    let output = "";
    let index = 0;
 
    output += templateData[index++];
    for (; index < arguments.length; index++) {
        let arg = String(arguments[index]);
        output += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        output += templateData[index];
    }
 
    return output;
 }
 let sender = '<script>alert("abc")</script>'; // 恶意代码
 let message =
     saferHTML`<p>${sender} has sent you a message.</p>`;
 log(message);
 

