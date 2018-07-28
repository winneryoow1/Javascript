# JS函数里的this的含义，什么情况下怎么用

## this是Javascript语言的一个关键字。它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，那就是this指的是，调用函数的那个对象。

​    ### 情况一：纯粹的函数调用---这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。

​    　　function test(){
    　　　　this.x = 1;
    　　　　alert(this.x);
    　　}
    　　test(); // 1
    为了证明this就是全局对象，我对代码做一些改变：
    　　var x = 1;
    　　function test(){
    　　　　alert(this.x);
    　　}
    　　test(); // 1
    运行结果还是1。再变一下：
    　　var x = 1;
    　　function test(){
    　　　　this.x = 0;
    　　}
    　　test();
    　　alert(x); //0

#####          情况二：作为对象方法的调用---函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

​    　　function test(){
    　　　　alert(this.x);
    　　}
    　　var o = {};
    　　o.x = 1;
    　　o.m = test;
    　　o.m(); // 1

​      ### 情况三： 作为构造函数调用---所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
    　　function test(){
    　　　　this.x = 1;
    　　}
    　　var o = new test();
    　　alert(o.x); // 1
    运行结果为1。为了表明这时this不是全局对象，对代码做一些改变：
    　　var x = 2;
    　　function test(){
    　　　　this.x = 1;
    　　}
    　　var o = new test();
    　　alert(x); //2
    运行结果为2，表明全局变量x的值没变。

​    ###  情况四： apply调用--- apply()是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this指的就是这第一个参数。
    　　var x = 0;
    　　function test(){
    　　　　alert(this.x);
    　　}
    　　var o={};
    　　o.x = 1;
    　　o.m = test;
    　　o.m.apply(); //0
    apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。
    如果把最后一行代码修改为
    　　o.m.apply(o); //1
    运行结果就变成了1，证明了这时this代表的是对象o。

# this特性

## this指向的是函数对象原型上的constructor属性，直接写函数名当然就指向这整个函数对象。

搞懂这个，要理解一下js中函数对象的概念以及js是**基于对象**的脚本语言。

- js的函数是由`Function()`构造函数构建的：

```
//对于一个函数，你可以由以下几种方式来创建
function f(){};
var f = function(){};
var f = new Function();
```

**注意看第三种方式**，说明函数都是Function()的实例，而**实例**说白了就是对象，因此在js中函数也是对象，这是比较特别的一个地方。

- js中函数的this是由constructor属性实现的:

```
function F(){};
var f = new F();
console.dir(f);
```

按照以上操作，将在调试器中打印出一个对象的引用，展开即可发现`__proto__`这样一个属性，里面有一个construtor属性，这个就是this的指向，展开它则可以发现这就是一个函数定义，因此打印this会得到一个函数定义。

- 这两个的使用效果是有区别的，所以**不能替换**：

```
function F() {
    this.className="A";
    F.class="B";
}
console.log(F.hasOwnProperty('className'));//false
console.log(F.hasOwnProperty('class'));//true
```

通过私有属性检查方法可以得知，用this定义的属性是绑定在`F()`这个构造函数中的，因此通过它创建的实例都具有这个属性；而引用其本身来定义的属性，是F这个对象所具有的的私有属性，通过它创建的实例则不具有这个属性（因为new出来的都是一个新的对象嘛）。







