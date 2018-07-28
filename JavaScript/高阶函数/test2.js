//------------------------------------------------filter---------------------------------------------------------//
//接收一个函数，依次作用于每个元素--用于缩小在被选元素组合中搜索元素的范围
//filter() 方法返回符合一定条件的元素。$(selector).filter(criteria,function(index))
//该方法让您规定一个条件,把Array的某些元素过滤掉，然后返回剩下的元素--返回值是true还是false
//提示：filter() 方法---“筛选”函数 ,与 not() 方法相对

//例子： 1.删除数组里的偶数，只保留奇数
       var arr1 = [1,2,4,5,6,9,10,15];
       var r1 = arr1.filter(function(x){
           return x % 2 !== 0;
       })

      console.log(r1); //[1,5,9,15]

//例子： 2.把数组里的空字符串删掉
   var arr2 = ['A','B','',null,undefined,'C',' '];
   var r2 = arr2.filter(function(s){
       return s && s.trim();
   })

   console.log(r2); //['A','B','C']
   //$.trim() 函数用于去除字符串两端的空白字符。

//第一个参数表示Array的某个元素,另外两个参数表示元素的位置和数组本身
    var arr2 = ['A','B','C'];
    var r2 = arr2.filter(function(element,index,self){
        console.log(element); //'A','B','C'
        console.log(index); //0,1,2
        console.log(self); //['A','B','C']
        return true;
    })

//例子：3.去除数组里的重复元素
      var arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
      var r3 = arr3.filter(function(element,index,self){
          return self.indexOf(element) === index;
      })

      console.log(r3); //apple,strawberry,banana,pear,orange
      //indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。

//练习：用filter（）筛选出素数--最小为2
   function get_primes(arr){
       return arr.filter(function(x){
           if(x<2){
               return false;
           }
           for(var i=2; i*i <= x;i++){
               if(x % i == 0){
                   return false;
               }
           }
           return true;
       })
   }
  console.log(get_primes([1,2,3,4,8])); //[2,3]






//--------------------------------------------------------sort-----------------------------------------------//
//sort() 方法用于对数组的元素进行排序。array.sort(sortfunction)
//排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。
//使用数字排序，你必须通过一个函数作为参数来调用。函数指定数字是按照升序还是降序排列。
//注意： 这种方法会改变原始数组！
//注意：当数字是按字母顺序排列时"40"将排在"5"前面。

//例子：
      console.log(['Google','Apple','Microsoft'].sort()); //[ 'Apple', 'Google', 'Microsoft' ]

      //根据ASCII码进行排序
      console.log(['Google','apple','Microsoft'].sort()); //[ 'Google', 'Microsoft', 'apple' ]

     //把所有元素先转换为String再排序,而字符'1'比字符'2'的ASCII码小
      console.log([10,20,1,2].sort());  //[ 1, 10, 2, 20 ]

    
//接收一个比较函数来实现自定义的排序
//按数字大小排序:想要升序序列，直接默认情况小于返回-1，相等返回0，大于返回1，而想要降序，则小于返回1，相等返回0，大于返回-1
//  return a - b => 小于0：“a”被排序为低于“b”的索引。 零： “a”和“b”被认为是相等的，并且不执行排序。  大于0： “b”被排序为比“a”更低的索引。

     var arr4 = [10,20,1,2];
     arr4.sort(function(x,y){
         if(x<y){
             return -1;
         }
         if(x>y){
             return 1;
         }
            return 0;
     })
      console.log(arr4); //[ 1, 2, 10, 20 ]

//倒序排列
        var arr4=[10,20,1,2];
        arr4.sort(function(x,y){
            if(x<y){
                return 1;
            }
            if(x>y){
                return -1;
            }
            return 0;
        })
        console.log(arr4); //[ 20, 10, 2, 1 ]

//字符串排序（忽略大小写）--实际上就是先把字符串都变成大写（或者都变成小写），再比较。
          var arr5 = ['Google','apple','Microsoft'];
          arr5.sort(function(s1,s2){
              x1 = s1.toUpperCase();
              x2 = s2.toUpperCase();
              if(x1<x2){
                  return -1;
              }
              if(x1>x2){
                  return 1;
              }
              return 0;
          })
          console.log(arr5); //[ 'apple', 'Google', 'Microsoft' ]


//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array
     var a1 = ['B','A','C'];
     var a2 = a1.sort();
     console.log(a1); //[ 'A', 'B', 'C' ]
     console.log(a2); //[ 'A', 'B', 'C' ]
     console.log(a1 === a2); //true



//------------------------------------------------------闭包------------------------------------------------//
//把函数作为结果值返回,相关参数和变量都保存在返回的函数中
//闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。(使得函数拥有私有变量变成可能)
//例子：
      //返回求和的函数
        function lazy_sum(arr){
            var sum = function(){
                return arr.reduce(function(x,y){
                    return x+y;
                })
            }
            return sum;
        }
        var f1 = lazy_sum([1,2,3,4,5]); //function sum
        console.log(f1()); //15

      //每次调用都会返回一个新的函数，即使传入相同的参数
      var f2 = lazy_sum([1,2,3,4,5]);
      console.log(f2()); //15 
      console.log(f1 === f2); //false


//返回函数不要引用任何循环变量，或者后续会发生变化的变量。
//例子：
    //返回的函数并没有立刻执行，而是直到调用了f()才执行
    //此时引用的变量i已经变成了4，因此最终结果为16。
        function count1(){
            var arr = [];
            for(var i=1;i<=3;i++){
                arr.push(function(){
                    return i*i;
                })
            }
            return arr;
        }
           var results = count1();
           var f3 = results[0];
           var f4 = results[1];
           var f5 = results[2];

           console.log(f3()); //16
           console.log(f4()); //16
           console.log(f5()); //16
       
//再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变
function count2(){
    var arr = [];
    for(var i=1;i<=3;i++){
        arr.push((function(n){
            return function(){
                return n*n;
            }
        })(i));
            
    }
    return arr;
}
   var results = count2();
   var f3 = results[0];
   var f4 = results[1];
   var f5 = results[2];

   console.log(f3()); //1
   console.log(f4()); //4
   console.log(f5()); //9

      //注：创建一个匿名函数并立刻执行
      (function (x) {
           return x * x 
        }) (3);


//利用闭包封装一个私有变量---闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
//创建一个计数器
//在返回的对象中，实现了一个闭包，该闭包携带了局部变量x，并且，从外部代码根本无法访问到变量x。
      function creat_counter(initial){
          var x = initial || 0;
          return {
              inc: function(){
                  x += 1;
                  return x;
              }
          }
      }
      var c1 = creat_counter();
      console.log(c1.inc()); //1
      console.log(c1.inc()); //2
      console.log(c1.inc()); //3

      var c2 = creat_counter(10);
      console.log(c2.inc()); //11
      console.log(c2.inc()); //12
      console.log(c2.inc()); //13


//闭包还可以把多参数的函数变成单参数的函数
//计算x的y次方(Math.pow(x, y)函数)
    function make_pow(n){
        return function(x){
            return Math.pow(x,n);
        }
    }
    var pow2 = make_pow(2);
    var pow3 = make_pow(3);

    console.log(pow2(5)); //25
    console.log(pow3(7)); //343



//只用函数实现计算
//定义数字0
   var zero = function(f){
       return function(x){
           return x;
       }
   }

//定义数字1
    var one = function(f){
        return function(x){
            return f(x);
        }
    }

    
/*
//定义数字2
//可以看成f(g),g=f(x),初中数学的知识,我们要先求g=f(x),执行f(x)也就是打印了一次,现在得到了g=f(x),把g代入f(g),也就是又执行了一次f函数,又打印了一次,所以是2次.
//其中f(x)===one(f)(x)的return,还是拆开,f(g)也就是one(f)(g)===one(f)(f(x))===one(f)(one(f)(x)).
var two = function(f){
    return function(x){
        return f(f(x));
    }
}

//定义加法
    function add(n,m){
        return function(f){
            return function(x){
                return m(f)(n(f)(x));
            }
        }
    }

//定义乘法
   function multi(n,m){
       return function(f){
           return function(x){
               return m(n(f))(x);
           }
       }
   }
*/