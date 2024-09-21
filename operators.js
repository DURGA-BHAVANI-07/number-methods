var family=["bhavani","satya","divya","nani","chandu"]
family[0]="lakshmi" ;    //modify                       ```````         
console.log(family);

// famliy[1]="sri";
// console.log(family);
// famliy[1]="sri";
family[0]="nanna";
family[5]="chelli";
console.log(family);

var obj={
    name:"bhavani",
    age:21,
    study:"Bsc(computer science)",
    marks:8.48
}

//modification
obj.name="nanna"   
obj.age=42
obj.study="10th class" 
obj.marks=8.0

// adding
obj.loc="hyderabad"
obj.earn= 440000
console.log(obj)

//tostring
var a=100;
var a1=a.toString()
console.log(typeof a1,a1)

// paraseInt
var a=957.54798;
console.log(parseInt(a));

// parsefloat
var a=947.6666;
console.log(parseFloat(a));

// isfinite
var a=958.6666;
 console.log(isFinite(a));

 var a="bhavani";
 console.log(typeof isFinite(a));
 
 var a={name:"bhavani"}
 console.log(typeof a)

console.log(typeof isFinite(a))

// tofixed

var a=222.22;
console.log(a.toFixed(10));

var a=19.19;
console.log(a.toFixed(15))

// Number()

Number("123");
Number("123.47");
console.log(Number("123","123.47"));

Number(true); 
Number(false); 
console.log(Number(true)); 
console.log(Number(false)); 

// toExp ()
let num = 12345.6789;
let expStr = num.toExponential(3);

// let num = 12345.6789;
console.log(num.toExponential(2));
console.log(num.toExponential(5)); 


// NaN () 
let result = Math.sqrt(-1); 
let division = 0 / 0; 

// toLocaleString ()
let date = new Date();
console.log(date.toLocaleString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true 
}));