import React from 'react';
import './App.css';
import math, {
    map,
    chunk,
    compact,
    concat,
    difference,
    drop,
    fill,
    flatten,
    head,
    initial,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    remove,
    reverse,
    sortedLastIndexOf,
    sortedLastIndex,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight, union, uniq, uniqBy, without, xor, zip, zipObject, countBy
} from 'lodash';
// const array = [1, 2, 3];
// const a = map(array, (value) => value * 2);
// console.log(a);

// const array=['a','b','c','d','e','f'];
// const a=chunk(array,2);
// console.log(a)

// const array=[0,1,'',false,2,'','',3];
// const a=compact(array);
// console.log(a)

// const a=[1,2,3,4];
// const b=concat(a,5,6);
// console.log(b)

// const a=[1,2,3];
// const b=[4,2,5];
// const c=difference(a,b)
// console.log(c)

// const a=[1,2,3];
// const b=drop(a,2);
//console.log(b)

// const a=[1,2,3];
// const b=fill(a,'a');
// console.log(b)

// const a=[1,2,[3]];
// const b=flatten(a);
// console.log(b)

// const a=[1,2,3];
// const b=head(a);
// console.log(b)

// const a=[1,2,3,4,5];
// const b=initial(a)
// console.log(b)

// const a=['a','b','c'];
// const b=join(a,'$');
// console.log(b)

// const a=[1,2,3,4,5];
// const b=last(a)
// console.log(b)

// const a=[1,2,3,2,5];
// const b=lastIndexOf(a,2);
// console.log(b)

/*const a=['a', 'b', 'c', 'd','e'];
const b=nth(a,3);
console.log(b)*/

/*const a=['a', 'b', 'c', 'a', 'b', 'c'];
const b=pull(a,'a','b');
console.log(b)*/

/*const a=[1,2,3,4,5,6];
 const b=remove(a,function (n) {
     return n%2==0
 });
console.log(b)
console.log(a)*/

/*const a=[1,2,3,4,5];
const b=reverse(a);
console.log(a);
const c=['a','b','c'];
const d=reverse(c);
console.log(c);*/

/*const a=[1,2,2,2,3,4];
const b=sortedLastIndexOf(a,2);
console.log(b);*/

/*const a=[1,2,2,2,2,4,5];
const b=sortedLastIndex(a,2);
console.log(b);*/

/*const a=[1,1,2,2,3,3];
const b=sortedUniq(a);
console.log(b);*/

/*const a=[1.1,1.2,2.1,2.2,3.5,3.1]
const b=sortedUniqBy(a,math.floor);
console.log(b);*/

/*const a=[8,5,3,4,6]
const b=tail(a)
console.log(b)*/

/*const a=[8,5,3,4,6]
const b=take(a,5)
console.log(b)*/

/*const a=[1,3,7,8,6]
const b=takeRight(a)
console.log(b)*/

/*const a=[1,4,2,3,4,2,1,5,6,2,7,3,8]
const b=union(a)
console.log(b)*/

/*const a=[1,1,2,3,2,4,1,3]
const b=uniq(a)
console.log(b)*/

/*const a=[1.2,2.1,3.2,3.1,4.1,4.2]
const b=uniqBy(a,math.floor)
console.log(b)*/

/*const a=[1,3,2,1,2,1]
const b=without(a,1)
console.log(b)*/

/*const a=[1,2,3,4,5,]
const b=[4,6,1,2,3]
const c=xor(a,b)
console.log(c)*/

/*const a=zip(['a','b','c'],[1,2,3])
console.log(a)*/

/*const a=zipObject(['a','b','c'],[1,2,3])
console.log(a)*/

//collection method

/*const a=countBy([6.1, 4.2, 6.3,6.4], Math.floor)
console.log(a)*/

/*const a=countBy([6.1, 4.2, 6.3,6.4],math.floor)
console.log(a)*/

const a=countBy(['one', 'two', 'three','four','five','six','seven'], 'length')
console.log(a)





function App() {

  return (
    <div className="App">
      <h1 className="App1">practice</h1>

        <p>React is a JavaScript library for building user interfaces.<br/>

            React is used to build single-page applications.<br/>

            React allows us to create reusable UI components.</p>



    </div>
  );
}

export default App;
