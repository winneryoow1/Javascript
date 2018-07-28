# 面向对象

## 使用对象时，只关注对象提供的功能，而不关注其内部的细节

# 一、Js中的面向对象

## 面向对象编程（OOP--Object Oriented Programming）的特点：

1.  封装
2.  继承：从原有对象上，继承出新的对象
3.  多态

## 对象的组成

* 方法（被对象绑住）---函数：过程、动态的
* 属性（属于一个对象）---变量：状态、静态的

var a=12; //变量：自由

arr.a=5;   //属性：属于一个对象

//函数

function show()   

{

   alert('a');

}

//方法

arr.fn=function()

{

   alert('a');

}

### 创建对象

* this的用法--当前的方法属于谁（直接创建一个空白的对象）
* 函数有new的前提下this会失效（不能在系统对象中随意附加方法、属性，否则会覆盖已有方法、属性）

（全局的本就是属于window）

var obj=new Object( );

obj.aaa=12;

obj.show=function()

{

   alert(this.aaa);

};



//封装函数（工厂方式）

function createPerson(name,sex)//构造函数

{

​    var obj=new Object( );//原料

​    obj.name=name;//加工

​     obj.sex=sex;

​      obj.showName=function()

​     {

​          alert('my name is'+this.name);

​      }

​         obj.showSex=function()

​      {

​          alert('i am'+this.sex);

​      }

​     return obj;//出厂

}

//调用

var pl=createPerson('blue','男');

pl.showName();

pl.showSex();  



//用new构造函数--- Show()//windows     new  Show()//新的对象

通过new  Show()创建了很多对象，这些对象的函数共享一个函数，根据对象的属性查找原则，我们只要把Show函数移动到xiaoming、xiaohong这些对象共同的原型上就可以了，也就是Person.prototype：
xiaoming ↘
xiaohong -→ Student.prototype ----> Object.prototype ----> null
xiaojun  ↗

​    function createPerson(name,sex) {

​             //var this=new Object();

​               this.name=name;

​              this.sex=sex;

​               this.showName=function(_){

​                alert('my name is'+this.name);

​              };

​               this.showSex=function(_){

​                alert('i am'+this.sex);

​              };

   };

 var pl=new CreatePerson('blue','男');//构造函数首字母大写



###  原型方法（prototype)---给一类元素加方法和属性（所有对象只有一个方法)

JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。

* 类：不具备实际功能，只能用来构造对象（Array）
* 对象：真正有功能的东西，被类构造出来（arr）

​          //例子：给string添加trim方法--扩展系统对象的方法

​               String.prototype.trim=function(){

​                         return this.replace(/^\s+|\s+$/g,'');

​                    };

​              var str='   jsu wsd ed w ew';//测试

​               alert('('+str.trim()+'')');

#### 原型用法

​     Array.prototype.a=12;//相当于class

​      var arr=[1,2,3];

​       alert(arr.a);     //12

​        arr.a=5;       //相当于添加行间样式

​        alert(arr.a);     //5--行间样式优先级>class

#### 进一步精简构造函数

这个createStudent()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传
var xiaoming = createStudent({
    name: '小明'
});
xiaoming.grade; // 1

//例：

   function createPerson(name,sex) {        //构造函数

​             this.name=name;//属性：每个对象都各不相同

​              this.sex=sex;

​         };

​     createPerson.prototype.showName=function() {       //方法：所有对象都一样

​             alert('my name is'+this.name);

​      };

​    createPerson.prototype.showSex=function() {

​             alert('i am'+this.sex);

​      };

​     var pl=new createPerson('blue','男');

​      pl.showName();//调用



### 混合法



 function Person(name,sex) {  

​             this.name=name;

​              this.sex=sex;

​         };

​     Person.prototype.showName=function() {      

​             alert(this.name);

​      };

​     Person.prototype.showSex=function() {

​             alert(this.sex);

​      };

​     var pl=new createPerson('blue','男');

​     var pp=new createPerson('pink','女');

​      pl.showName();

​      pp.showSex();  //多次调用



##  总结：相同东西加到原型里，不同东西加到构造函数里。

例子：面向对象的选项卡（test-1.js)





#  二、原型继承

​    继承的本质是扩展一个已有的Class，并生成新的Subclass子类（类型扩展）
    把原型链修改为：
new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null



### （1）方法一

/ PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

##  空函数F:用过桥函数F(){}主要是为了清空构造函数里的属性，如果直接PrimaryStudent.prototype = new Student(),PrimaryStudent的原型上就会包含一些不必要的原Student构造函数上的属性，即只继承父函数的原型上的方法，而不继承父实例上的属性，也即是属性和方法的分开继承。



function F() {
}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;
// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();
// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;
// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2



### （2）方法二

把继承这个动作用一个inherits()函数封装起来，还可以隐藏F的定义，并简化代码：
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
这个inherits()函数可以复用：
function Student(props) {
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

#### 实现原型继承链:

inherits(PrimaryStudent, Student);
// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

#### JavaScript的原型继承实现方式就是：

定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
继续在新的构造函数的原型上定义新方法。







# 三、浏览器对象

## JavaScript可以获取浏览器提供的很多对象，并进行操作。



### 1.window

window对象不但充当全局作用域，而且表示浏览器窗口。
window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。（滚动条本来就属于内部的内容）
兼容性：IE<=8不支持。
对应的，还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。

### 2.navigator

navigator对象表示浏览器的信息，最常用的属性包括：
navigator.appName：浏览器名称；
navigator.appVersion：浏览器版本；
navigator.language：浏览器设置的语言；
navigator.platform：操作系统类型；
navigator.userAgent：浏览器设定的User-Agent字符串。
请注意，navigator的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。很多初学者为了针对不同浏览器编写不同的代码，喜欢用if判断浏览器版本，例如：
var width;
if (getIEVersion(navigator.userAgent) < 9) {
    width = document.body.clientWidth;
} else {
    width = window.innerWidth;
}
但这样既可能判断不准确，也很难维护代码。正确的方法是充分利用JavaScript对不存在属性返回undefined的特性，直接用短路运算符||计算：
var width = window.innerWidth || document.body.clientWidth;

### 3.screen

screen对象表示屏幕的信息，常用的属性有：
screen.width：屏幕宽度，以像素为单位；
screen.height：屏幕高度，以像素为单位；
screen.colorDepth：返回颜色位数，如8、16、24。

### 4.location

location对象表示当前页面的URL信息。例如，一个完整的URL：
http://www.example.com:8080/path/index.html?a=1&b=2#TOP
可以用location.href获取。要获得URL各个部分的值，可以这么写：
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
要加载一个新页面，可以调用location.assign()。如果要重新加载当前页面，调用location.reload()方法非常方便。

### 5.document

document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
（1）
document的title属性是从HTML文档中的<title>xxx</title>读取的，
但是可以动态改变：
'use strict';
document.title = '努力学习JavaScript!';
（此时浏览器窗口标题就会变化）
（2）从document对象开始查找查找DOM树的某个节点，最常用的查找是根据ID和Tag Name
例：
HTML数据：
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>
摩卡
热摩卡咖啡
酸奶
北京老酸奶
果汁
鲜榨苹果汁

JavaScript：
'use strict';
var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;
drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);//提供的饮料有:摩卡,酸奶,果汁,













  

 



































  





























































































































































































































































































































































































































































































































































































































































































































































