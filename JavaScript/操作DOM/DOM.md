#  浏览器

##  操作DOM

       ####       操作一个DOM节点的有关操作：

- 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
- 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
- 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
- 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。

       ####     拿到一个DOM节点 ：

1. `document.getElementById()`返回对拥有指定 id 的第一个对象的引用。-----直接定位唯一的一个DOM节点 

   1. `document.getElementsByTagName()`返回一组DOM节点 ---返回指定标签名的所有子元素集合。
   2. 以及CSS选择器`document.getElementsByClassName() ` 返回一组DOM节点 ---返回文档中所有指定类名的元素集合，作为 NodeList 对象。
   3. 要准确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

   #### 例如：

   

   ```
   // 返回ID为'test'的节点：
   var test = document.getElementById('test');
   
   // 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
   var trs = document.getElementById('test-table').getElementsByTagName('tr');
   tag-附属，标签
   
   // 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：--设置或返回元素的class属性
   var reds = document.getElementById('test-div').getElementsByClassName('red');
   
   // 获取节点test下的所有直属子节点:
   var cs = test.children;
   
   // 获取节点test下第一个、最后一个子节点：
   var first = test.firstElementChild;
   var last = test.lastElementChild;
   
   //element.id---设置或者返回元素的 id。
   //element.innerHTML---设置或者返回元素的内容。
   //element.lastChild---返回的最后一个子元素
   //element.toString()---一个元素转换成字符串
   //element.style---设置或返回元素的样式属性
   ```

   2.使用`querySelector()`和`querySelectorAll()`，需要了解selector语法，然后使用条件来获取节点 

   ```
   // 通过querySelector获取ID为q1的节点：
   var q1 = document.querySelector('#q1');
   
   // 通过querySelectorAll获取q1节点内的符合条件的所有节点：
   var ps = q1.querySelectorAll('div.highlighted > p');
   ```

   #### 注意：

   严格地讲，我们这里的DOM节点是指`Element`，但是DOM节点实际上是`Node`，在HTML中，`Node`包括`Element`、`Comment`、`CDATA_SECTION`等很多种，以及根节点`Document`类型，但是，绝大多数时候我们只关心`Element`，也就是实际控制页面结构的`Node`，其他类型的`Node`忽略即可。根节点`Document`已经自动绑定为全局变量`document`。

   



### 更新DOM---直接修改节点的文本

#### 1.修改`innerHTML`属性，不但可以修改一个DOM节 点的 文本内容，还可以直接通过HTML片段修改DOM节点内部的子树

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```

#### 2.修改`innerText`或`textContent`属性，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签 

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
```

##### 注意：在读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本 

#### 3.修改CSS也是经常需要的操作。DOM节点的`style`属性对应所有的CSS，可以直接获取或设置。

注意：因为CSS允许`font-size`这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为驼峰式命名`fontSize`

```
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```

#### 练习：

```
<!-- HTML结构 -->
<div id="test-div">
  <p id="test-js">javascript</p>
  <p>Java</p>
</div>
```

请尝试获取指定节点并修改： 

// 获取<p>javascript</p>节点:
var js = document.getElementById('test-js')

// 修改文本为JavaScript:
// TODO:
js.innerText = 'JavaScript'

// 修改CSS为: color: #ff0000, font-weight: bold
// TODO:
js.style.color =  '#ff0000'
js.style.fontWeight = 'bold'





### 插入DOM

#### 插入新的节点

##### 1.使用`appendChild`，把一个子节点添加到父节点的最后一个子节点。 

```
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```

把`<p id="js">JavaScript</p>`添加到`<div id="list">`的最后一项：

```
var js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);//附加
```

```
这个节点首先会从原先的位置删除，再插入到新的位置
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>
```

##### 2从零创建一个新的节点，然后插入到指定位置 

```
var list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);
```

这样我们就动态添加了一个新的节点：

```
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>
```

##### 动态地给文档添加了新的CSS定义 

```
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);
```



#### insertBefore

##### 使用`parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到`referenceElement`之前。 

把`Haskell`插入到`Python`之前：

```
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```

可以这么写：

```
var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);
```

新的HTML结构如下：

```
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```

##### 注：循环一个父节点的所有子节点，可以通过迭代`children`属性实现： 

```
var i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}
```

#### 练习：按字符串顺序重新排序DOM节点 

```
<!-- HTML结构 -->
<ol id="test-list">
    <li class="lang">Scheme</li>
    <li class="lang">JavaScript</li>
    <li class="lang">Python</li>
    <li class="lang">Ruby</li>
    <li class="lang">Haskell</li>
</ol>
```

// sort list:
var list = document.getElementById('test-list');
var lans = list.children;
var length = lans.length;
for(var i=0;i<length-1;i++){
    var min = lans[i];
    for(var j=i+1;j<length;j++){
           if(min.innerText>lans[j].innerText){
                 min = lans[j];
              }
    }
  list.insertBefore(min, lans[i]);
}





### 删除DOM

#### 删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的`removeChild`把自己删掉： 

```
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```

##### 注意：你遍历一个父节点的子节点并进行删除操作时，要注意，`children`属性是一个只读属性，并且它在子节点变化时会实时更新。删除多个节点时，要注意`children`属性时刻都在变化 。 

#### 练习

```
<!-- HTML结构 -->
<ul id="test-list">
    <li>JavaScript</li>
    <li>Swift</li>
    <li>HTML</li>
    <li>ANSI C</li>
    <li>CSS</li>
    <li>DirectX</li>
</ul>
```

把与Web开发技术不相关的节点删掉：得到JavaScript、HTML、css

##### 方法一

var parent = document.getElementById('test-list');
for (var i = 1;i<4;i++){
    parent.removeChild(parent.children[i]);
}

##### 方法二

```
<script>
    let children = document.getElementById('test-list').children;
    var web = ['JavaScript', 'HTML', 'CSS'];
    for(let child of children)
    {
        if(!web.includes(child.innerText))
            child.parentElement.removeChild(child);
    }
</script>
```

 







## 操作表单







## 操作文件







## Canvas

