//--------------------------------------------------------------promise--------------------------------------------------------//
//在 Promise 中有三个状态：

//pending：等待态
//fulfilled：成功态
//rejected：失败态

/*
Promise 实例的状态只能从 pending 到 fulfilled 或从 pending 到 rejected，状态一旦发生变化就不可逆，
所以 Promise 实现链式调用与 jQuery 不同，返回的不是 this，只能是一个新的 Promise。
promise相关函数里返回的全是promise类型的
*/




//--------------------------------------------------------------1.then方法--------------------------------------------------------//
/*hen 方法中支持传入两个参数，一个是成功的回调，一个是失败的回调.
在 Promise 中调用了 resolve 方法，就会在 then 中执行成功的回调，
调用了 reject 方法，就会在 then 中执行失败的回调，
成功的回调和失败的回调只能执行一个，resolve 和 reject 方法调用时传入的参数会传递给 then 方法中对应的回调函数。
*/

//执行resolve
let p = new Promise((resolve,reject) => {
    console(1);
    resolve(3);
})
console.log(2);

p.then(data => {
    console.log(data);
},err => {
    console.log(err);
})
//1
//2
//3

//执行reject
let p = new Promise((resolve,reject) => {
    reject();
});

p.then(() => {
    console.log(1);
},() => {
    console.log(2);
})
//2

//如果 Promise 中发生错误，就会在 then 中执行失败的回调。
let p = new Promise((resolve,reject) => {
    throw new Error();
});

p.then(() => {
    console.log(1);
},() => {
    console.log("报错啦");
});
//报错啦


//当同一个 Promise 实例的 then 方法多次调用时，就会多次执行
let p = new Promise((resolve,reject) => {
    resolve("成功");
});

p.then(data => {
    console.log(data);
});

p.then(data => {
    console.log(data);
})
//成功
//成功




//---------------------------------------------------------2、Promise 的链式调用-------------------------------------------------------------//
/*Promise 支持链式调用，每次调用一次 then 方法都会返回一个新的 Promise实例，
如果该 then 方法中执行的回调函数有返回值，并且这个返回值会作为返回的下一个 Promise 实例的 then 方法回调的参数，
如果 then 方法的返回值是一个 Promise 实例，那就返回一个新的 Promise 实例，将 then 返回的 Promise 实例执行后的结果作为返回 Promise 实例回调的参数。
*/

//在 Promise 实例的 then 中如果有错误产生，在返回的新的 Promise 实例中的 then 方法中会执行错误的回调。
let p = new Promise((resolve, reject) => {
    resolve();
});

p.then(() => {
    console.log("success", 1);
    throw new Error();
}, () => {
    console.log("error", 1);
}).then(() => {
    console.log("success", 2);
}, () => {
    console.log("error", 2)
})

// success 1
// error 2



//---------------------------------------------------------3、catch方法-------------------------------------------------------------//
//catch 方法可以捕获链式调用中的异常，不需要每次调用 then 方法中都传入错误的回调
//在链式调用的过程中只要有任何一个 then 中出现错误，都会被 catch 方法捕获到。
let p = new Promise((resolve, reject) => {
    resolve();
});

p.then(() => {
    throw new Error();
    console.log("success", 1);
}).then(() => {
    console.log("success", 2);
}).catch(() => {
    console.log('出错了');
});

// 出错了

p.then(() => {
    console.log("success", 1);
}).then(() => {
    throw new Error();
    console.log("success", 2);
}).catch(() => {
    console.log('出错了');
});

// success 1
// 出错了




//---------------------------------------------------------4、Promise.all方法-------------------------------------------------------------//
/*可以实现多个 Promise 实例的并行，当所有结果都为成功时，返回一个数组，该数组存储的为每一个 Promise 实例的返回结果，
每一个 Promise 实例的返回顺序先后不固定，但是返回值的数组内存储每一个 Promise 的返回值的结果按照最初传入的顺序排列，
all 方法的返回值为一个新的 Promise 实例，返回的数组作为返回新 Promise 的 then 方法成功回调的参数。
*/

let p1 = new Promise((resolve, reject) => {
    resolve(1);
});

let p2 = new Promise((resolve, reject) => {
    resolve(2);
});

Promise.all([p1, p2]).then(data => {
    console.log(data);
});

// [1, 2]

//当 all 传入的参数数组中的 Promise 实例执行时，只要有一个失败，则直接返回该 Promise 实例失败的结果或错误信息
let p1 = new Promise((resolve, reject) => {
    resolve(1);
});

let p2 = new Promise((resolve, reject) => {
    reject(2);
});

Promise.all([p1, p2]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// 2



//-----------------------------------------------------5、Promise.race静态方法-------------------------------------------------------------//
/*参数为一个存储 Promise 实例的数组，返回值是一个新的 Promise 的实例，
但是数组中的 Promise 实例只有一个结果为成功，那就直接返回这个结果（只取出最快返回的结果）
*/
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
    
});

Promise.race([p1, p2]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// 2

//在没有成功的结果之前有一个出错，就直接返回这个错误。
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(1), 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
    
});

Promise.race([p1, p2]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// 1


//-----------------------------------------------------6、Promise.resolve-------------------------------------------------------------//
//可以直接将 Promise 的状态变为成功并返回一个新的 Promise 实例，resolve 的参数会传递给返回的新 Promise 实例 then 中成功回调。
Promise.resolve('hello').then(data => {
    console.log(data);
});

// hello


//-----------------------------------------------------7、Promise.reject-------------------------------------------------------------//
//返回一个新的 Promise 实例，但是 reject 的参数会传递给新 Promise 实例的 then 方法失败回调。
Promise.reject('出错了').then(null, err => {
    console.log(err);
});

// 出错了
//当成功的回调不传递时，可以使用 null 代替，因为 null 作为参数会被忽略掉，将参数穿透到下一个 then 的回调中