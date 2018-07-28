# 操作表单

## HTML表单的输入控件主要有以下几种：



- 文本框，对应的`<input type="text">`，用于输入文本；
- 口令框，对应的`<input type="password">`，用于输入口令；
- 单选框，对应的`<input type="radio">`，用于选择一项；
- 复选框，对应的`<input type="checkbox">`，用于选择多项；
- 下拉框，对应的`<select>`，用于选择一项；
- 隐藏文本，对应的`<input type="hidden">`，用户不可见，但表单提交时会把隐藏文本发送到服务器。

## 获取值

### 直接调用`value`获得对应的用户输入值：

```
// <input type="text" id="email">
var input = document.getElementById('email');
input.value; // '用户输入的值'
```

这种方式可以应用于`text`、`password`、`hidden`以及`select`.

#### 对于单选框和复选框，`value`属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用`checked`判断：

```
// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // '1'
tue.value; // '2'
mon.checked; // true或者false
tue.checked; // true或者false
```



## 设置值

对于`text`、`password`、`hidden`以及`select`，直接设置`value`：

```
// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容已更新
```

#### 对于单选框和复选框，设置`checked`为`true`或`false`即可 



## HTML5控件

常用的包括`date`、`datetime`、`datetime-local`、`color`等，它们都使用`<input>`标签：

```
<input type="date" value="2015-07-01">
<input type="datetime-local" value="2015-07-01T02:03:04">
<input type="color" value="#ff0000">
```



## 提交表单

#### 1.通过`<form>`元素的`submit()`方法提交一个表单 

```
function doSubmitForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 提交form:
    form.submit();
}
```

#### 2.响应`<form>`本身的`onsubmit`事件，在提交form时作修改 

```
<form id="test-form" onsubmit="return checkForm()"></form>
```

```
function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
```

##### 要想不改变用户的输入，可以利用`<input type="hidden">`实现 



### 练习：

利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：

- 用户名必须是3-10位英文字母或数字；
- 口令必须是6-20位；
- 两次输入口令必须一致。

```
<!-- HTML结构 -->
<form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>
```

```
'use strict';
var checkRegisterForm = function () 
{var username = document.getElementById('username');
var password = document.getElementById('password');
var password2 = document.getElementById('password-2'); var re_1 = /^[\w\d]{3,10}/;
var re_2 = /\.{6,20}/;  
if(re_1.test(username.value) && password.value == password2.value && re_2.test(password.value) && re_2.test(password2.value)){
  return true;
  else{ 
  return false; 
  }
  }
```



# 操作文件

## 上传文件

<input type="file"  enctype="multipart/form-data"  method="post"> 



# Canvas对象

```
<canvas id="test-stock" width="300" height="200">
    <p>Current Price: 25.51</p>
</canvas>
```

### 访问 Canvas 对象

您可以使用 getElementById() 来访问 <canvas> 元素：

var x = document.getElementById("myCanvas");[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_canvas_access)

### 创建 Canvas 对象

您可以使用 document.createElement() 方法来创建 <canvas> 元素：

var x = document.createElement("CANVAS");

### 绘制2D

```
var ctx = canvas.getContext('2d');
```

