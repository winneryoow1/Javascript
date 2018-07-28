## Typora基本操作

1. 数学表达式

要启用这个功能，首先到Preference->Editor中启用。然后使用$符号包裹Tex命令，例如：$lim_{x \to \infty} \ exp(-x)=0$将产生如下的数学表达式：

2. 下标

下标使用~包裹，例如：H~2~O将产生水的分子式。

3. 上标

上标使用^包裹，例如：y^2^=4将产生表达式

4. 插入表情

使用:happy:输入高兴的表情，使用:sad:输入悲伤的表情，使用:cry:输入哭的表情等

5. 下划线

用HTML的语法<u>Underline</u>将产生下划线<u>Underline</u>.（快捷键是Ctrl+U）

6. 删除线

GFM添加了删除文本的语法，这是标准的Markdown语法木有的。使用~~包裹的文本将会具有删除的样式，例如~删除文本~将产生删除文本的样式。

7. 代码

使用`包裹的内容将会以代码样式显示，例如使用`printf()`，则会产生printf()样式。

8. 输入~~~或者```然后回车，可以输入代码块，并且可以选择代码的语言。例如：

 public Class HelloWorld{
   System.out.println("Hello World!");
 }

9. 强调

使用两个*号或者两个_包裹的内容将会被强调。例如
**使用两个*号强调内容**
__使用两个下划线强调内容__  
 将会输出使用两个号强调内容*
使用两个下划线强调内容，Typroa 推荐使用两个*号。

10. 加粗和斜体

在标准的Markdown语法中，*和_包裹的内容会是斜体显示，但是GFM下划线一般用来分隔人名和代码变量名，因此我们推荐是用星号来包裹斜体内容。如果要显示星号，则使用转义：\*
粗线是一对双星号**
斜体是一对单星号*

11. 插入图片

我们可以通过拖拉的方式，将本地文件夹中的图片或者网络上的图片插入。

12. 插入URL连接

使用尖括号包裹的url将产生一个连接，例如：<www.baidu.com>将产生连接:www.baidu.com.
如果是标准的url，则会自动产生连接，例如:www.google.com

13. 目录列表Table of Contents（TOC）

输入[toc]然后回车，将会产生一个目录，这个目录抽取了文章的所有标题，自动更新内容。

14. 水平分割线

使用***或者---，然后回车，来产生水平分割线。

15. 标注

    （1）我们可以对某一个词语进行标注。

例如
某些人用过了才知道[^注释]

[^注释]: Somebody that I used to know.
将产生：
注释
把鼠标放在注释上，将会有提示内容。

​               （2）脚注

脚注的正确用法：先创建一个，比如我要创建一个名字为“Typora”的脚注，那么我可以这样做，Typora1（1可以换成任意字符，是用中括号，里面是个^然后空格（千万不要忘了空格））然后把鼠标放在2的上面他就会出现一个黑色的框框，点击，然后到最下面去编写，这样就完成了

16. 表格

通过右键–>insert的形式打开的，当然也可以通过快捷键Ctrl+T来打开。填入行数与列数就可以了

|姓名|性别|毕业学校|工资|
|:---|:---:|:---:|---:|
|杨洋|男|重庆交通大学|3200|
|峰哥|男|贵州大学|5000|
|坑货|女|北京大学|2000|
将产生:
姓名	性别	毕业学校	工资
杨洋	男	重庆交通大学	3200
峰哥	男	贵州大学	5000
坑货	女	北京大学	2000
其中代码的第二行指定对齐的方式，第一个是左对齐，第二个和第三个是居中，最后一个是右对齐。

17. 数学表达式块

输入两个美元符号，然后回车，就可以输入数学表达式块了。例如：
$$\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\\end{vmatrix}$$
18.任务列表
使用如下的代码创建任务列表，在[]中输入x表示完成，也可以通过点击选择完成或者没完成。

- [ ] 吃饭
- [ ] 逛街
- [ ] 看电影
- [ ] 约泡
-[空格]空格 文字—–代表没有选中的复选框
-[x]空格 文字——代表选中的复选框

19. 列表（如果想跳出列表需要回车键和返回键配合使用）

（1）无序列表
这个小点（即无序列表）是”-/*/+ +空格“实现的（千万不要忘记空格）
（2）有序列表（ 任意数字.+空格空格）
这是有序列表（一定要注意 .后面有一个空格，如果想跳出列表需要回车键和返回键配合使用）
例：
1.这是有序列表（一定要注意.后面有一个空格） 
     1.这是嵌套列表，如果使用请注意顺序，先做有序列表，再使用嵌套，可能还有其他方法我不知道
2.有序列表
3.有序列表

20. 块引用

使用>空格（不要忘了空格）来插入块引用。例如：

>这是一个块引用！
将产生：
这是一个块引用！
21.标题
使用#表示一级标题，##表示二级标题，以此类推，有6个标题。
几个#代表几号字体的标题，只能用来做标题。
22.标签形式
用英文输入下的Esc键下面的那个键（一对）即可达到此效果，一般用来写单句代码
23.居中
要居中的文字，用一对<center></center>表示，但是只能等到输出文本的时候才会看到效果
24.代码编写
输入三个波浪线然后回车或者直右键插入就可以输入代码块。如果想让显示行数，需要开启，在File–>preference–>Code Fences。Typora支持大部分的编程语言，且支持高亮显示。开始编写之前需要现在右下角选择语言。

25. 附加常用快捷键

加粗：Ctrl+B
斜体：Ctrl+I
字体：Ctrl+数字
下划线：Ctrl+U
返回开头：Ctrl+Home
返回结尾：Ctrl+End
生成表格：Ctrl+T
创建链接：Ctrl+K

## Markdown

Markdown 是一个 Web 上使用的文本到HTML的转换工具，可以通过简单、易读易写的文本格式生成结构化的HTML文档。目前 github、Stackoverflow 等网站均支持这种格式。
Markdown 的理念是，能让文档更容易读、写和随意改。

1. 兼容 HTML

HTML 是一种发布的格式，Markdown 是一种书写的格式。就这样，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。
注意：在 HTML 区块标签间的 Markdown 格式语法将不会被处理。比如，你在 HTML 区块内使用 Markdown 样式的*强调*会没有效果。
和处在 HTML 区块标签间不同，Markdown 语法在 HTML 区段标签间 <span>、<cite>、<del>是有效的。

2. 特殊字符自动转换

在 HTML 文件中，有两个字符需要特殊处理： < 和 & 。 < 符号用于起始标签，& 符号则用于标记 HTML 实体
例：
要在文档中插入一个版权符号：&copy;    Markdown 会保留它不动。
而若你写：AT&T，Markdown 就会将它转为：AT&amp;T

3. 区块元素

（1）段落和换行
一个Markdown段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。
普通段落不该用空格或制表符来缩进。「由一个或多个连续的文本行组成」这句话其实暗示了 Markdown 允许段落内的强迫换行（插入换行符），这个特性和其他大部分的 text-to-HTML 格式不一样（包括 Movable Type 的「Convert Line Breaks」选项），其它的格式会把每个换行符都转成 <br /> 标签。
如果你确实想要依赖 Markdown 来插入 <br /> 标签的话，在插入处先按入两个以上的空格然后回车。
Markdown 中 email 式的 区块引用 和多段落的 列表 使用换行来排版
（2）标题
Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。
一、
类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题），例如：

This is an H1
=============
This is an H2
-------------
任何数量的 = 和 - 都可以有效果。
二、
类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如：
# 这是 H1
## 这是 H2
###### 这是 H6
你可以选择性地「闭合」类 atx 样式的标题，这纯粹只是美观用的，若是觉得这样看起来比较舒适，你就可以在行尾加上 #，而行尾的 # 数量也不用和开头一样（行首的井字符数量决定标题的阶数）：
# 这是 H1 #
## 这是 H2 ##
### 这是 H3 ######

4.区块引用Blockquotes
Markdown 标记区块引用是使用类似 email 中用 > 的引用方式。在 Markdown 文件中建立一个区块引用，那会看起来像是你自己先断好行，然后在每行的最前面加上 > ：
(1)
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
(2)Markdown 也允许你偷懒只在整个段落的第一行最前面加上 > ：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
(3)区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 > ：
 This is the first level of quoting.
>
> > This is nested blockquote.
(4)引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");
任何像样的文本编辑器都能轻松地建立 email 型的引用。例如在 BBEdit 中，你可以选取文字后然后从选单中选择增加引用阶层。

5. 列表

Markdown 支持有序列表和无序列表。
无序列表使用星号、加号或是减号作为列表标记
有序列表则使用数字接着一个英文句点
（1）如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用 <p> 标签包起来
例：

*   Bird

*   Magic
会被转换为：
<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>
（2）如果要在列表项目内放进引用，那 > 就需要缩进
*   一列表项包含一个列表区块：

        <代码写在这>
    
6. Markdown 会用 <pre> 和 <code> 标签来把代码区块包起来。

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，
例如，下面的输入：
这是一个普通段落：

    这是一个代码区块。
Markdown 会转换成：
<p>这是一个普通段落：</p>

<pre><code>这是一个代码区块。
</code></pre>

7. 区段元素：

（1）链接
（2）强调
（3）代码
（4）图片

8. 其他

（1）Markdown可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用 <em> 标签），你可以在星号的前面加上反斜杠：\*literal asterisks\*
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
\   反斜线
`   反引号

*   星号
_   底线
{}  花括号
[]  方括号
()  括弧
#   井字号
+   加号
-   减号
.   英文句点
!   惊叹号

（2）自动链接





