// Code goes here

'use strict';

let a = {
  name: 'Misha',
  order: {
    price: 20,
  }
};

let b = {
  name: 'Misha',
  order: {
    price: 20,
  }
};

function countPropertiesObj(property) {
  let returnCount = 0;
  for (let keyProperty in property) {
    returnCount++;
  }
  return returnCount;
}

function deepEqual(a, b) {
  let recurs;
  //--
  if ((typeof (a) !== 'object') || (typeof (b) !== 'object')) {
    console.log('a или b !==object');
    return false;
  }
  //--
  if (countPropertiesObj(a) !== countPropertiesObj(b)) {
    console.log('число свойств a!=b');
    return false;
  }
  //--
  for (let keyProperty in a) {

    if (typeof (a[keyProperty]) === 'object') {
      recurs = deepEqual(a[keyProperty], b[keyProperty]);
      if (recurs===true){
        continue;
      }
    }

    if (typeof (a[keyProperty]) !== typeof (b[keyProperty])) {
      console.log('разные типы свойств!');
    return false;    
    }

    if (a[keyProperty] !== b[keyProperty]) {
      console.log(`разные значения свойств! a:${keyProperty} b:${b[keyProperty]}`);
    return false;    
    } 


  }
  //--
  return true;

}

console.log(deepEqual(a, b));
a.test=1;
console.log(deepEqual(a, b));