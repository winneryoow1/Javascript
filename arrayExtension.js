//-----------------------------------------------------------------鏁扮粍鎵╁睍------------------------------------------------------------//
//-------------------------------------------------鎵╁睍杩愮畻绗�-------------------------------------------------//
/**
 * 鎵╁睍杩愮畻绗︼紙spread锛夋槸涓変釜鐐癸紙...锛夈€傚畠濂芥瘮 rest 鍙傛暟鐨勯€嗚繍绠楋紝灏嗕竴涓暟缁勮浆涓虹敤閫楀彿鍒嗛殧鐨勫弬鏁板簭鍒椼€�
 */
let arr = [1,2,3,4];
console.log(...arr); //1 2 3 4
console.log(1,...[2,3,4],5); //1 2 3 4 5

[...document.querySelectorAll('div')];
// [<div>, <div>, <div>]

let [a,...b] = [1,2,3,4];
console.log(b);  //[ 2, 3, 4 ]
//鍏朵腑[]鐩稿綋浜庡尮閰嶄袱涓嫭鍙烽噷闈㈢殑鍐呭

/** 
 * 鐢ㄩ€�:
 * 1. 褰撲竴涓嚱鏁伴渶瑕佺殑澶氫釜鍙傛暟鍒氬ソ缁勬垚浜嗕竴涓暟缁勬椂
 * 2. 鐢ㄦ潵鏋勬垚鏂版暟缁�
 */

 let debug = (...rest) => console.log(...rest);
 debug("hello", "world"); //hello world

 let oldArr = ['b','c','d'];
 let newArr = ['a',...oldArr,'e'];
 console.log(newArr);  //[ 'a', 'b', 'c', 'd', 'e' ]

 // 鎵╁睍杩愮畻绗﹀緢鐏垫椿

// 鍚庨潰鍙互鎺ヨ〃杈惧紡
console.log(...('a' > 'A' ? ['a'] : [])); //a

//涓嶈兘鍗曡鐩存帴浣跨敤
// ...[1, 2, 3]; // SyntaxError: Unexpected number
console.log(...[1, 2, 3]); //1 2 3

// 瀵圭┖鏁扮粍鎵╁睍娌℃湁鏁堟灉
console.log([1, ...[2,3], ...[], 4]); //[ 1, 2, 3, 4 ]

//娴嬭瘯
let student = {
    name : 'ly',
    age : 21
};
//console.log(...student);--// TypeError: undefined is not a function

let newStudent = {...student, grade:2};
console.dir(newStudent); //{ name: 'ly', age: 21, grade: 2 }

let set = new Set([2,3,4]);
console.log(...set); //2 3 4
console.log([1, ...set,5]); //[ 1, 2, 3, 4, 5 ]

/**
 * 缁撹:
 * 瀵硅薄锛宻et涔熷彲浠ョ敤鎵╁睍杩愮畻绗�
 */


 //---------------------------------鏇挎崲鍑芥暟鐨刟pply鏂规硶--------------------------------------------//
/**
 * 鍑芥暟鐨刟pply鏂规硶甯哥敤涓庡皢涓€涓暟缁勪綔涓哄弬鏁板簭鍒�
 */
let digtalArr = [2,1,12,3,377];
console.log(Math.max.apply(null,digtalArr)); //377--Math.max涓嶆帴鍙楁暟缁勪綔涓哄弬鏁�
console.log(Math.max([1,3,7])); //NaN--涓嶆帴鍙楅潪number绫诲瀷鍙傛暟

//搴旂敤Math.max鏂规硶锛岀畝鍖栨眰鍑轰竴涓暟缁勬渶澶у厓绱犵殑鍐欐硶銆�
// ES5 鐨勫啓娉�
Math.max.apply(null, [14, 3, 77])

// ES6 鐨勫啓娉�
Math.max(...[14, 3, 77])

// 绛夊悓浜�
Math.max(14, 3, 77);


//閫氳繃push鍑芥暟锛屽皢涓€涓暟缁勬坊鍔犲埌鍙︿竴涓暟缁勭殑灏鹃儴
// ES5鐨� 鍐欐硶
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 鐨勫啓娉�
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);




//----------------------------------------鎵╁睍杩愮畻绗︾殑搴旂敤-----------------------------------------//
/**
 * 澶嶅埗鏁扮粍
 */

 //娴嬭瘯
 //arr2骞朵笉鏄痑rr1鐨勫厠闅嗭紝鑰屾槸鎸囧悜鍚屼竴浠芥暟鎹殑鍙︿竴涓寚閽堛€�
 //淇敼arr1锛屼細鐩存帴瀵艰嚧arr2鐨勫彉鍖栥€�
 let arr1 = [2,3,4];
 let arr2 = arr1;
 arr1[0] = 9;
 console.log(arr2[0]); //9
arr1[0] = 2;

//ES5鎷疯礉鍋氭硶
let arr4 = arr1.slice(); //concat涔熻
arr1[0] = 9;
console.log(arr4[0]);  //2
arr1[0] = 2;
/*
const a1 = [1, 2];
const a2 = a1.concat();
a2[0] = 2;
a1 // [1, 2]
*/

//ES6鎷疯礉鍋氭硶
let arr3 = [...arr1];
arr1[0] = 9;
console.log(arr3[0]); //2
//鎴栬€�
arr1[0] = 2;
let [...arr5] = arr1;
console.log(arr5[0]); //2


/**
 * 鏁扮粍鐨勫悎骞�
 */
const array1 = ['x','y','z'];
const array2 = ['i','j','k'];

//ES5鍚堝苟
let array3 = array1.concat(array2);
console.log(array3); //[ 'x', 'y', 'z', 'i', 'j', 'k' ]
//ES6
array3 = [...array1, ...array2];
console.log(array3); //[ 'x', 'y', 'z', 'i', 'j', 'k' ]


/* 涓婇潰涓ょ閮芥槸娴呮嫹璐�---鍙鍒跺璞＄殑绗竴灞傚睘鎬�
瀹冧滑鐨勬垚鍛橀兘鏄鍘熸暟缁勬垚鍛樼殑寮曠敤锛岃繖灏辨槸娴呮嫹璐濄€�
濡傛灉淇敼浜嗗師鏁扮粍鐨勬垚鍛橈紝浼氬悓姝ュ弽鏄犲埌鏂版暟缁勩€�
*/
// 璇佹槑:
let stuArr1 = [{name: 'ly'}, {name: 'jsq'}];
let stuArr2 = [...stuArr1];
console.log(stuArr1[0] === stuArr2[0]); // true


/**
 * 鎵╁睍杩愮畻绗﹀彲浠ヤ笌瑙ｆ瀯璧嬪€肩粨鍚堣捣鏉ワ紝鐢ㄤ簬鐢熸垚鏁扮粍銆�
 */
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []

//濡傛灉灏嗘墿灞曡繍绠楃鐢ㄤ簬鏁扮粍璧嬪€硷紝鍙兘鏀惧湪鍙傛暟鐨勬渶鍚庝竴浣嶏紝鍚﹀垯浼氭姤閿欍€�
const [...butLast, last] = [1, 2, 3, 4, 5];
// 鎶ラ敊



/**
 * 浣跨敤鎵╁睍杩愮畻绗﹀彲浠ュ皢瀛楃涓叉纭殑杞崲涓烘暟缁�
 */
console.log([..."abcde"]); // [ 'a', 'b', 'c', 'd', 'e' ]

// 姝ｇ‘澶勭悊4瀛楄妭瀛楃
console.log('x\uD83D\uDE80y'.length );// 4
console.log([...'x\uD83D\uDE80y'].length); // 3
// 鍑℃槸娑夊強鍒版搷浣滃洓涓瓧鑺傜殑 Unicode 瀛楃鐨勫嚱鏁帮紝閮芥湁杩欎釜闂銆傚洜姝わ紝鏈€濂介兘鐢ㄦ墿灞曡繍绠楃鏀瑰啓銆�

let str = 'x\uD83D\uDE80y';
console.log(str); //x馃殌y

console.log(str.split('').reverse().join('')); // y锟斤拷x
// 'y\uDE80\uD83Dx'

console.log([...str].reverse().join('')); // y馃殌x
// 'y\uD83D\uDE80x'
// 涓婇潰浠ｇ爜涓紝濡傛灉涓嶇敤鎵╁睍杩愮畻绗︼紝瀛楃涓茬殑reverse鎿嶄綔灏变笉姝ｇ‘銆�



/**
 * 浠讳綍瀹炵幇浜咺terator鎺ュ彛鐨勫璞￠兘鍙互鐢ㄦ墿灞曡繍绠楃鏋勬垚鏁扮粍
 * 鍍忓墠闈㈢殑set
 * 鍙堜緥濡俷odelist绫绘暟缁�
 */

/**
 * 鐢熸垚鍣ㄥ彲浠ヤ娇鐢ㄦ墿灞曡繍绠楃
 */
function *go() {
    yield 1;
    yield 2;
    yield 3
}

console.log([...go()]); // [ 1, 2, 3 ]
//鍙橀噺go鏄竴涓� Generator 鍑芥暟锛屾墽琛屽悗杩斿洖鐨勬槸涓€涓亶鍘嗗櫒瀵硅薄锛屽杩欎釜閬嶅巻鍣ㄥ璞℃墽琛屾墿灞曡繍绠楃锛屽氨浼氬皢鍐呴儴閬嶅巻寰楀埌鐨勫€硷紝杞负涓€涓暟缁勩€�
let arrx = [, ,];
for (let i of arrx) {
    console.log(1); //1 1
}


//------------------------------------------------Array.from------------------------------------//
//鐢ㄤ簬灏嗕袱绫诲璞★細绫讳技鏁扮粍鐨勫璞★紙array-like object锛夊拰鍙亶鍘嗭紙iterable锛夌殑瀵硅薄锛堝寘鎷� ES6 鏂板鐨勬暟鎹粨鏋� Set 鍜� Map锛夎浆涓虹湡姝ｇ殑鏁扮粍
let likeArrayObj = {
    length: 3,
    name: 'ly',
    age: 19,
    1: 'abc'
};
console.log(Array.from(likeArrayObj)); // [ undefined, 'abc', undefined ]
/**
 * 鍜屾墿灞曡繍绠楃涓嶄竴鏍�,鎵╄浆杩愮畻绗﹀彧鑳藉鐞嗘墍鏈夊疄鐜癝ymbol.iterator鎺ュ彛鐨勫璞�
 * Array.from鑳借浆鎹换鎰忓璞�
 */

console.log(Array.from({}));
// ES6鐨勪竴涓洿閲嶈鐨勭壒鎬у氨鏄疄鐜版帴鍙ｇ殑缁熶竴鎬�
// 瀵逛簬杩樻病鏈夐儴缃茶鏂规硶鐨勬祻瑙堝櫒锛屽彲浠ョ敤Array.prototype.slice鏂规硶鏇夸唬

const toArray = (() =>
        Array.from ? Array.from : obj => [].slice.call(obj)
)();


/*
Array.from杩樺彲浠ユ帴鍙楃浜屼釜鍙傛暟锛屼綔鐢ㄧ被浼间簬鏁扮粍鐨刴ap鏂规硶锛岀敤鏉ュ姣忎釜鍏冪礌杩涜澶勭悊锛屽皢澶勭悊鍚庣殑鍊兼斁鍏ヨ繑鍥炵殑鏁扮粍銆�
Array.from(arrayLike, x => x * x);
绛夊悓浜�
Array.from(arrayLike).map(x => x * x);
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]


涓嬮潰鐨勪緥瀛愭槸鍙栧嚭涓€缁� DOM 鑺傜偣鐨勬枃鏈唴瀹广€�
let spans = document.querySelectorAll('span.name');
 map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);
 Array.from()
let names2 = Array.from(spans, s => s.textContent)


涓嬮潰鐨勪緥瀛愬皢鏁扮粍涓竷灏斿€间负false鐨勬垚鍛樿浆涓�0銆�
Array.from([1, , 2, , 3], (n) => n || 0)
// [1, 0, 2, 0, 3]


鍙︿竴涓緥瀛愭槸杩斿洖鍚勭鏁版嵁鐨勭被鍨嬨€�
function typesOf () {
    return Array.from(arguments, value => typeof value)
}
typesOf(null, [], NaN)
// ['object', 'object', 'number']


濡傛灉map鍑芥暟閲岄潰鐢ㄥ埌浜唗his鍏抽敭瀛楋紝杩樺彲浠ヤ紶鍏rray.from鐨勭涓変釜鍙傛暟锛岀敤鏉ョ粦瀹歵his銆�
Array.from()鍙互灏嗗悇绉嶅€艰浆涓虹湡姝ｇ殑鏁扮粍锛屽苟涓旇繕鎻愪緵map鍔熻兘銆傝繖瀹為檯涓婃剰鍛崇潃锛屽彧瑕佹湁涓€涓師濮嬬殑鏁版嵁缁撴瀯锛屼綘灏卞彲浠ュ厛瀵瑰畠鐨勫€艰繘琛屽鐞嗭紝
鐒跺悗杞垚瑙勮寖鐨勬暟缁勭粨鏋勶紝杩涜€屽氨鍙互浣跨敤鏁伴噺浼楀鐨勬暟缁勬柟娉曘€�
Array.from({ length: 2 }, () => 'jack')
// ['jack', 'jack']
涓婇潰浠ｇ爜涓紝Array.from鐨勭涓€涓弬鏁版寚瀹氫簡绗簩涓弬鏁拌繍琛岀殑娆℃暟銆傝繖绉嶇壒鎬у彲浠ヨ璇ユ柟娉曠殑鐢ㄦ硶鍙樺緱闈炲父鐏垫椿銆�


Array.from()鐨勫彟涓€涓簲鐢ㄦ槸锛屽皢瀛楃涓茶浆涓烘暟缁勶紝鐒跺悗杩斿洖瀛楃涓茬殑闀垮害銆傚洜涓哄畠鑳芥纭鐞嗗悇绉� Unicode 瀛楃锛�
鍙互閬垮厤 JavaScript 灏嗗ぇ浜嶾uFFFF鐨� Unicode 瀛楃锛岀畻浣滀袱涓瓧绗︾殑 bug銆�
function countSymbols(string) {
    return Array.from(string).length;
}
*/


//-----------------------------------------------------Array.of----------------------------------//
//Array.of鏂规硶鐢ㄤ簬灏嗕竴缁勫€硷紝杞崲涓烘暟缁勩€�
// 鎺ュ彈澶氫釜鍙傛暟鏋勬垚鏁扮粍,姣擜rray()琛屼负鏇寸粺涓€
console.log(Array(3));
console.log(Array(3, 4));
console.log(Array.of(3));
console.log(Array.of(3, 4));
/*
[ <3 empty items> ]
[ 3, 4 ]
[ 3 ]
[ 3, 4 ]
 */

 //寮ヨˉArray()鏂规硶鐨勪笉瓒�
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

//妯℃嫙Array.of()鏂规硶锛�
function ArrayOf(){
    return [].slice.call(arguments);
  }



//--------------------------------------------鍐呴儴鎷疯礉瑕嗙洊-------------------------------------------------//
//淇敼褰撳墠鏁扮粍
//鍦ㄥ綋鍓嶆暟缁勫唴閮紝灏嗘寚瀹氫綅缃殑鎴愬憳澶嶅埗鍒板叾浠栦綅缃紙浼氳鐩栧師鏈夋垚鍛橈級锛岀劧鍚庤繑鍥炲綋鍓嶆暟缁�
console.log([1, 2, 3, 4].copyWithin(0, 3, 4));
/*
[ 4, 2, 3, 4 ]
浠庝笅鏍�0寮€濮嬬敤锛堜粠涓嬫爣3寮€濮嬶紙涓嶅寘鎷�3锛夊埌涓嬫爣4鐨勫唴瀹癸級瑕嗙洊
 */
console.log([1, 2, 3, 4].copyWithin(1, 3, 4)); //[ 1, 4, 3, 4 ]



//------------------------------------------------find鍜宖indIndex-------------------------------------//
/**
 * 鏄笉鏄拰some鍑芥暟鏈夌偣鐩镐技锛屽彧涓嶈繃some杩斿洖鐨勬槸true鎴杅alse锛宖ind杩斿洖鐨勬槸鍏冪礌鏈韩
 * 閮藉彲浠ユ帴鍙楃浜屼釜鍙傛暟缁戝畾鍥炶皟鍑芥暟this
 */
//杩斿洖绗竴涓鍚堟潯浠剁殑鏁扮粍鎴愬憳鐨勪綅缃紝濡傛灉鎵€鏈夋垚鍛橀兘涓嶇鍚堟潯浠讹紝鍒欒繑鍥瀠ndefined/-1銆�
//find/findIndex
//findIndex--鍙互璇嗗埆NaN 
var array5 = [1,2,3,NaN];
console.log(array5.indexOf(NaN)); //-1
console.log(array5.findIndex((ele,index) => Object.is(NaN,ele))); //3

//find銆乫indIndex涓巌ndexOf寰楀埌
console.log([1,2,3,4].indexOf(4)); //3
console.log([1,NaN].indexOf(NaN)); // -1 鏃犳硶澶勭悊NaN

console.log([6,8,9,NaN,'bbc'].find(v => v === 8)); //6
console.log([6,8,9,NaN,'bbc'].findIndex(function(ele,index,self) {
    console.log(this.words);
    return Object.is(ele,NaN);
},{words: "hello world"}));

//杩欎袱涓柟娉曢兘鍙互鎺ュ彈绗簩涓弬鏁帮紝鐢ㄦ潵缁戝畾鍥炶皟鍑芥暟鐨則his瀵硅薄銆�

//娴嬭瘯
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(0, -0));   //false
console.log(Object.is('', false)); //true
// 缁撹:
// Object.is鏄姞寮虹増===



//--------------------------------------------------fill---------------------------------------------//
//fill鏂规硶浣跨敤缁欏畾鍊硷紝濉厖涓€涓暟缁勩€�
console.log((Array(30).fill('*').join(''))); //// ******************************
console.log(Array(20).fill(0).map((ele, index) => ++index));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// 涓嶇敤fill浼氬嚭鐜颁粈涔堟儏鍐�
console.log(Array(20).map((ele, index) => ++index)); // [ <20 empty items> ]
// map瀵规暟缁勭殑绌轰綅澶勭悊鏄洿鎺ヨ烦杩�
// 绗竴涓弬鏁颁负濉厖鐨勬暟瀛楋紝鍚庝袱涓弬鏁版槸濉厖鐨勫紑濮嬬偣鍜岀粓鐐�
console.log([1,2,3,4].fill(6,0,4)); // [ 6, 6, 6, 6 ]



//--------------------------------------entries,keys,values-----------------------------------------//
//鐢ㄤ簬閬嶅巻鏁扮粍
// 娉ㄦ剰: 杩斿洖鐨勬槸杩唬鍣�,鍙互鐢╢or of 閬嶅巻
/*
keys()鏄閿悕鐨勯亶鍘嗐€�
values()鏄閿€肩殑閬嶅巻锛�
entries()鏄閿€煎鐨勯亶鍘嗐€�
*/
for(let index of['a', 'b'].keys()) {
    console.log(index);
}
// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }
for(let [k,v] of ['a','b','c'].entries()) {
    console.log(`${k}: ${v}`)
}
//0: a  1: b  2: c
// console.log(['a', 'b', 'c'].values());
console.log(go()); //鐢熸垚鍣ㄨ繑鍥炵┖瀵硅薄{}



//-----------------------------------------includes-----------------------------------------------------------//
//杩斿洖涓€涓竷灏斿€硷紝琛ㄧず鏌愪釜鏁扮粍鏄惁鍖呭惈缁欏畾鐨勫€�
console.log([1,2,3,4].includes(1));   //true
console.log([NaN, 2].includes(NaN));  //true
console.log([NaN, 1, 2].includes(2)); //true

//绗簩涓弬鏁拌〃绀烘悳绱㈢殑璧峰浣嶇疆
//绗簩涓弬鏁颁负璐熸暟,浼氶噸缃负浠�0寮€濮�
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
// 缁撹:indexof鍙互涓嶇敤浜�


// Map 缁撴瀯鐨刪as鏂规硶锛屾槸鐢ㄦ潵鏌ユ壘閿悕鐨勶紝姣斿Map.prototype.has(key)銆乄eakMap.prototype.has(key)銆�
// Reflect.has(target, propertyKey)銆�

// Set 缁撴瀯鐨刪as鏂规硶锛屾槸鐢ㄦ潵鏌ユ壘鍊肩殑锛屾瘮濡係et.prototype.has(value)銆乄eakSet.prototype.has(value)銆�
let map = new Map([['a', 1], ['b', 2]]);
console.log(map.has('b'));      //true



//-----------------------------------------------------鏁扮粍绌轰綅----------------------------------------------//
// 绌轰綅鎬庝箞璁＄畻涓暟
console.log([, , , , ,].length); // 5
// 閫楀彿鍓嶆湁澶氬皯绌轰綅灏辨湁澶氬皯鍏冪礌

/*
ES5 瀵圭┖浣嶇殑澶勭悊锛屽凡缁忓緢涓嶄竴鑷翠簡锛屽ぇ澶氭暟鎯呭喌涓嬩細蹇界暐绌轰綅銆�
forEach(), filter(), reduce(), every() 鍜宻ome()閮戒細璺宠繃绌轰綅銆�
map()浼氳烦杩囩┖浣嶏紝浣嗕細淇濈暀杩欎釜鍊�
join()鍜宼oString()浼氬皢绌轰綅瑙嗕负undefined锛岃€寀ndefined鍜宯ull浼氳澶勭悊鎴愮┖瀛楃涓层€�
Array.from鏂规硶浼氬皢鏁扮粍鐨勭┖浣嶏紝杞负undefined
 */

// ES6---Array.from()銆�...銆乪ntries()銆乲eys()銆乿alues()銆乫ind()鍜宖indIndex() 鍒欐槸鏄庣‘灏嗙┖浣嶈浆涓簎ndefined銆�
//copyWithin()浼氳繛绌轰綅涓€璧锋嫹璐�,fill()浼氬皢绌轰綅瑙嗕负姝ｅ父鐨勬暟缁勪綅缃�,for...of寰幆涔熶細閬嶅巻绌轰綅銆�
// 鐢变簬绌轰綅鐨勫鐞嗚鍒欓潪甯镐笉缁熶竴锛屾墍浠ュ缓璁伩鍏嶅嚭鐜扮┖浣嶃€�



//------------------------------------------------Map涓嶨enerator-----------------------------------//
//鍙鍏锋湁 Iterator 鎺ュ彛鐨勫璞★紝閮藉彲浠ヤ娇鐢ㄦ墿灞曡繍绠楃锛屾瘮濡� Map 缁撴瀯銆�
//Map 缁撴瀯
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  let arr = [...map.keys()]; // [1, 2, 3]

//Generator 鍑芥暟--杩斿洖涓€涓亶鍘嗗櫒瀵硅薄
const go = function*(){
    yield 1;
    yield 2;
    yield 3;
  };
  
  [...go()] // [1, 2, 3]



//-------------------------------------------------------鏁扮粍瀹炰緥鐨� flat()锛宖latMap() ---------------------------------//
//Array.prototype.flat()鐢ㄤ簬灏嗗祵濂楃殑鏁扮粍鈥滄媺骞斥€濓紝鍙樻垚涓€缁寸殑鏁扮粍銆傝鏂规硶杩斿洖涓€涓柊鏁扮粍锛屽鍘熸暟鎹病鏈夊奖鍝嶃€�
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

//鍙互灏唂lat()鏂规硶鐨勫弬鏁板啓鎴愪竴涓暣鏁帮紝琛ㄧず鎯宠鎷夊钩鐨勫眰鏁帮紝榛樿涓�1銆�
[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

//濡傛灉涓嶇鏈夊灏戝眰宓屽锛岄兘瑕佽浆鎴愪竴缁存暟缁勶紝鍙互鐢↖nfinity鍏抽敭瀛椾綔涓哄弬鏁般€�
[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

//濡傛灉鍘熸暟缁勬湁绌轰綅锛宖lat()鏂规硶浼氳烦杩囩┖浣嶃€�
[1, 2, , 4, 5].flat()
// [1, 2, 4, 5]


//flatMap()鏂规硶瀵瑰師鏁扮粍鐨勬瘡涓垚鍛樻墽琛屼竴涓嚱鏁�,鐒跺悗瀵硅繑鍥炲€肩粍鎴愮殑鏁扮粍鎵цflat()鏂规硶銆傝鏂规硶杩斿洖涓€涓柊鏁扮粍锛屼笉鏀瑰彉鍘熸暟缁勩€�
// 鐩稿綋浜� [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]

//鍙互鎺ュ彈涓変釜鍙傛暟:褰撳墠鏁扮粍鎴愬憳銆佸綋鍓嶆暟缁勬垚鍛樼殑浣嶇疆锛堜粠闆跺紑濮嬶級銆佸師鏁扮粍銆�
/*
arr.flatMap(function callback(currentValue[, index[, array]]) {
     ...
  }[, thisArg])
*/