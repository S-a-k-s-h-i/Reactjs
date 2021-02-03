(function(){
  'use strict';
  let [x,y]=['a','b'];
  console.log(x,y);
  [,y]=['a','b'];
  console.log(y);
  // let {a,b}={a:'val1',b:'val2'};
  // console.log(a,b);
  let { b }={a:'val1',b:'val2'};
  console.log(b);

  function returnMultipleArrays(){
    return [
          ['a','b','c'],
          [1,2,3]
    ];
    }
    let [arr1,arr2]=returnMultipleArrays();
    console.log(arr1,arr2);

    let {lastname}={firstname:'dan',lastname:'wellman',age:21}
    console.log(lastname);
})();