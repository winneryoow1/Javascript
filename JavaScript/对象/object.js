//------------------------------创建对象----------------------//
//1.直接用{ ... }创建
/**举例：
建一个Array对象：var arr = [1, 2, 3];
其原型链是：arr ----> Array.prototype ----> Object.prototype ----> null
Array.prototype定义了indexOf()、shift()等方法，因此你可以在所有的Array对象上直接调用这些方。
*/


//2.构造函数
//（1）用new创建基于原型的JavaScript的对象
  function Student(name) {
    this.name = name;
    }

   Student.prototype.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
var xiaoming = new Student('小明');

xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

var xiaoming = new Student('小红');

xiaoming.name; // '小红'
xiaoming.hello(); // Hello, 小红!

//（2）编写一个createStudent()函数，在内部封装所有的new操作。
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}

/*练习：构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：*/
function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return ('Hello'+',  '+this.name+'!');};//有一个空格




//------------------------------------------------------------------原型继承---------------------------------------------------------//
//继承的本质是扩展一个已有的Class，并生成新的Subclass子类（类型扩展）
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
       say() {
   return('Hello, '+this.name+'!');
};
}
//或者
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    say(){
        return "Hello, " + this.name + "!";
    }
}


    

//-------------------------------------------------------------BOM---------------------------------------------------//
//console.log(window);

//iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。
//您可以把需要的文本放置在 <iframe> 和 </iframe> 之间，这样就可以应对无法理解 iframe 的浏览器。

//location
//一个完整的URL可以用location.href获取。要获得URL各个部分的值
//http://www.example.com:8080/path/index.html?a=1&b=2#TOP
//hash:#后面 
location.protocol; // 'http'协议
location.host; // 'www.example.com'域名（IP）
location.port; // '8080'
location.pathname; // '/path/index.html' --path
location.search; // '?a=1&b=2'
location.hash; // 'TOP' --#后面全是

//alert():弹框
//confirm() ：询问用户 true/false
//prompt（） 接收用户的输入：第一个参数为标题，第二个参数为默认输入
//Notification() :控制弹窗
//localStorage:临时存储


//-----------------------------------------------------------------DOM-----------------------------------------------------//
document.getElementById('id');
document.getElementsByTagName('li');
document.getElementsByName('person');
document.getElementsByClassName('red');

document.querySelector('input[type=tel');
document.querySelectorAll('div:red');





