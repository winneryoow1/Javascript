//创建实例
// const promise = new Promise(function(resolve, reject) {
//     if(/* 异步操作成功 */) {
//         resolve(value);
//     }else{
//         reject(error);
//     }
// });
     //then方法调用
// promise.then(function(value) {
     //success
// }, function(error) {
      //failure
// });

//resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
const p1 = new Promise(function (resolve, reject) {
    //...
});
const p2 = new Promise(function (resolve, reject) {
    //...
    resolve(p1);
})


//then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function() {
    console.log('resolved.');
});
console.log('Hi!');
//Promise
//Hi!
//resolved.


//1.Promise.prototype.then() :为 Promise 实例添加状态改变时的回调函数
//链式调用
//箭头函数
// getJSON("/post/1.json").then(
//     post => getJSON(post.commentURL)
// ).then(
//     comments => console.log("resolved:", comments),
//     err => console.log("rejected:", err)
// );


//2.Promise.prototype.catch():用于指定发生错误时的回调函数
const promiseNew = new Promise(function(resolve, reject) {
    reject(new Error('test'));
});
promiseNew.catch(function(error) {
    console.log(error);
});
//如果 Promise 状态已经变成resolved，再抛出错误是无效的

//不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法
promise 
  .then(function(data) {
      //success
  })
  .catch(function(err) {
      //error
  });

//catch方法之中，还能再抛出错误
// someAsyncThing().then(function() {
//     return someOtherAsyncThing();
//   }).catch(function(error) {
//     console.log('oh no', error);
//     // 下面一行会报错，因为y没有声明
//     y + 2;
//   }).catch(function(error) {
//     console.log('carry on', error);
//   });


//3.Promise.prototype.finally()
//不管 Promise 对象最后状态如何，都会执行的操作
//finally方法总是会返回原来的值
Promise.resolve(2).finally(() => {})  //2
Promise.reject(3).finally(() => {}) //3


//4.Promise.all():将多个 Promise 实例，包装成一个新的 Promise 实例
//参数必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例
const p = Promise.all([p1, p2, p3]);
//(1)只要有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled
//（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected


//5.Promise.race():将多个 Promise 实例，包装成一个新的 Promise 实例
const p = Promise.race([p1, p2, p3]);
//只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变


//6.Promise.resolve():现有对象转为 Promise 对象
//（1）参数是一个 Promise 实例:原样返回

//(2)参数是一个thenable对象(具有then方法的对象)
let thenable = {
    then: function(resolve, reject) {
      resolve(42);
    }
  };
  
  let p1 = Promise.resolve(thenable);
  p1.then(function(value) {
    console.log(value);  // 42
  });

//(3)参数不是具有then方法的对象，或根本就不是对象
//返回一个新的 Promise 对象，状态为resolved
const p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});
// Hello

//(4)不带有任何参数
//直接返回一个resolved状态的 Promise 对象
// const p = Promise.resolve();
// p.then(function () {
     // ...
// });


//7.Promise.reject()
//返回一个新的 Promise 实例，该实例的状态为rejected
//与resolve不同，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数
const p = new Promise((resolve, reject) => reject('出错了'))
p.then(null, function (s) {
  console.log(s)
});
// 出错了



//Promise.try()
//同步函数同步执行，异步函数异步执行
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next

//包装
function getUsername(userId) {
    return database.users.get({id: userId})
    .then(function(user) {
      return user.name;
    });
  }
Promise.try(database.users.get({id: userId}))
  .then(...)
  .catch(...)

