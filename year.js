function year(x){
   if(Number.isInteger(x) == true){return x %4 == 0}else{return false};
};
let a = year(2020);
console.log(a);
