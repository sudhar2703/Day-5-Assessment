//1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array(using IIFE function)
var oddnumber= (function(a){
  console.log("a.Print odd numbers in an array(using IIFE function)")
  console.log("USING IIFE FUNCTION");
  for(i=0;i<a.length;i++){
    if(a[i]%2!=0){
      console.log(a[i]);
    }
    else{
      continue;
    }}
    })(["1","2","3","4","5","6","7","8","9"])

// B)Convert all the strings to title caps in a string array (using IIFE function)
console.log("B)Convert all the strings to title caps in a string array (using IIFE function)");
  console.log("USING IIFE FUNCTION");
var stringtitlecaps= (function(a){
  let b="";
for(let i=0;i<a.length;i++){
  let c=a[i].split("");
  c[0]=c[0].toUpperCase();
  b=b+c.join("")+" ";
  }
let d=b.split(" ");
  d.pop();
  let e= d.join(" ");
console.log(e);
  })(["guvi","geeks","code"])

//C)Sum of all numbers in an array (using anonymous function)
console.log("C) Sum of all numbers in an array")
  console.log("USING ANONYMOUS FUNCTION");
var sumofarray= function(a){
  let b=0;
  for(i=0;i<a.length;i++){
    b=b+a[i];
  }
  return b;
}
console.log(sumofarray([1,2,3,4,5,6,7,8,9]));


//D.Return all the prime numbers in an array
console.log("D.Return all the prime numbers in an array")
  console.log("USING ANONYMOUS FUNCTION");
let num = [1,2,3,4,5,6,7,8,9,10];
let result = [];
var isPrime =function (num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//E)Return all the palindromes in an array(using  function)
console.log("E)Return all the palindromes in an array")
  console.log("USING ANONYMOUS FUNCTION");
var palindrome= function(a){
  let c="";
  for(i=0;i<a.length;i++){
  let b=a[i].split("").reverse().join("");
  if(b==a[i]){
    c=c+a[i]+" ";
  }
}
let d=c.trimEnd();
return d;
}
console.log(palindrome(["selva","madam","kumar","nitin"]));


//F.Return median of two sorted arrays of the same size.
console.log("F.Return median of two sorted arrays of the same size")
  console.log("USING ANONYMOUS FUNCTION");
var median= function(a,b){
  let joinarray=a.concat(b);
  joinarray.sort((a, b) => a - b);
  let c=joinarray.length/2;
  let result=(joinarray[c-1]+joinarray[c])/2;
  return "median= "+ result;
    }
 console.log(median([12,14,25,35],[2,3,8,18]))

//G.Remove duplicates from an array
console.log("G.Remove duplicates from an array")
  console.log("USING IIFE FUNCTION");
 var removeduplicate= (function(a){
  console.log ( [...new Set(a)])

})(["banana","apple","banana","grape"])

//H.Rotate an array by k times
console.log("H.Rotate an array by k times")
  console.log("USING ANONYMOUS FUNCTION");
var rotate=function(a,b){
  for(i=0;i<b;i++){
  a.unshift(a.pop())}

return a;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],11))


// 3.Do the below programs in arrow function.
// a.Print odd numbers in an array(using arrow function)
var oddnumber= (a)=>{
  console.log("A) PRINT ODD NUMBERS IN A ARRAY")
  console.log("USING ARROW FUNCTION");
for(i=0;i<a.length;i++){
  if(a[i]%2!=0){
    console.log(a[i]);
  }
  else{
    continue;
  }}
  }
oddnumber(["1","2","3","4","5","6","7","8","9"])

// b).Convert all the strings to title caps in a string array (using arrow function)
console.log("B) Convert all the strings to title caps in a string array")
  console.log("USING ARROW FUNCTION");
var stringtitlecaps= (a)=>{
  let b="";
for(let i=0;i<a.length;i++){
  let c=a[i].split("");
  c[0]=c[0].toUpperCase();
  b=b+c.join("")+" ";
  }
let d=b.split(" ");
  d.pop();
  let e= d.join(" ");
return e;
  }
console.log(stringtitlecaps(["guvi","geeks","code"]));

//C)Sum of all numbers in an array (using arrow function)
console.log("C) Sum of all numbers in an array")
  console.log("USING ARROW FUNCTION");
var sumofarray= (a)=>{
  let b=0;
  for(i=0;i<a.length;i++){
    b=b+a[i];
  }
  return b;
}
console.log(sumofarray([1,2,3,4,5,6,7,8,9]));

//D.Return all the prime numbers in an array
console.log("D.Return all the prime numbers in an array")
  console.log("USING ARROW FUNCTION");
let numb = [1,2,3,4,5,6,7,8,9,10];
let result1 = [];
var isPrime = (numb)=> {
  if(numb < 2) return false;

  for (let k = 2; k < numb; k++){
    if(numb % k == 0){
      return false;
    }
  }
  return true;
}
numb.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result1.push(element);
  }
});
console.log(result1);

// E)Return all the palindromes in an array(using arrow function)
console.log("E)Return all the palindromes in an array")
  console.log("USING ARROW FUNCTION");
var palindrome= (a)=>{
  let c="";
  for(i=0;i<a.length;i++){
  let b=a[i].split("").reverse().join("");
  if(b==a[i]){
    c=c+a[i]+" ";
  }
}
let d=c.trimEnd();
return d;
}
console.log(palindrome(["selva","madam","kumar","nitin"]));
