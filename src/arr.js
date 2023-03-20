
let arr1=[{"name":"Dikosta","age":32},{"name":"Johnny","age":34},{"name":"DikosSimonta","age":20}];
let arr2=[4,5,6];
let arr3="Singh";
let merge=[].concat(arr2,arr3);
console.log(merge);
const surfacetypes = require('./assets/surfacetypes.json');
let grades=require('./assets/grades.json');
console.log([...surfacetypes,...grades]);
const record=require('./app/records')
record=[...surfacetypes,...grades]
console.log(record);
