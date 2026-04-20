// let x="hemanth";
// console.log(x);
// console.log(x.length);
// console.log(x[2]);
// let y=10;
// console.log(`your num ${y} is this`);
// let user = prompt("enter full name");
// user=user.trim();
// console.log(`your user name is=@${user}${user.length}`);
// let arr=[1,2,3,4,45,5,5,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// practice
// let studentMarks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<studentMarks.length;i++){
// sum=sum+studentMarks[i];
// avg=sum/studentMarks.length;
// }

// console.log(avg);
    // let studentMarks=[85,97,44,37,76,60];
    // let sum=0;
    // for(i of studentMarks){
    // sum=sum+i;
    // avg=sum/studentMarks.length;
    // }
    // console.log(avg);

// let arr=[250,645,300,900,50];
// let percent=Number(prompt("enter percentage"));
// let offer;
// for(let i=0;i<arr.length;i++){
//   console.log("actual price=" + arr[i]);
//   offer=arr[i]*percent/100;
//    tp=arr[i]-offer;
//    console.log("offer price="+ tp);
// }

// let list=["apple","cycle","her0"];
// let fist=["apple","cycle","her0"];
// // let j=list.push("apple");
// console.log(list);
// // console.log(list.toString());
// let con=list.concat(fist);
// console.log(con);
// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// let re=companies.shift();
// console.log(companies);
// console.log(re);
// console.log(companies.splice(1,1,"ola"));
// console.log(companies);
// console.log(companies.push("amazon"));
// console.log(companies);
// function hemanth(a,b,c,d){
//     console.log("study");
//     let sum=a+b*c+d;
//     console.log(sum);
    
    
// }
// hemanth(3,3,3,3);
// const hemanth=(a,b)=> {
//     let sum=a+b;
//    console.log(sum);
// };
// practice
// let  vowel=(name) =>{
//     let c=0;
//     for (i of name){
//         if( i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             c++;
//         }
//     }
//     return c;
    
// }
// console.log(vowel("string"));
// **forEach
let arr=[112,3,4,5,5];
let h=arr.forEach((i) =>{
    console.log(i*2);
    return i*2;  //return not works in foreach
});
console.log(h);

// **map
let array=[1,2,3,4,45];
let newarray=array.map((i) => {
  console.log("aar",i*2);
//   console.log(i**2);
     return i**2;
});
console.log(newarray);


// array.forEach(val);
// array.map(val);
console.log("filters");

// ***filter

let num=[1,2,3,4,46,55];
let evenarray=num.filter((i) => {
     return i%2===0;
});
console.log(evenarray);
console.log(num);

// **reduce
let Arr=[1,2,3,4];
let output=Arr.reduce((prev,cur) => {
     return prev > cur? prev:cur;
});
console.log(output);

//**practice
console.log("using filter");
let stdmarks=[98,97,90,89,78,77];
let highscorer=stdmarks.filter((val)=>{
     return val>=90;
     
});
console.log(highscorer);

// **pactice 2
console.log("practice 2");

let n=Number(prompt("input values"));
let arr1=[];
for(let i=1;i<=n;i++){
   arr1[i-1]=i;   
}
console.log(arr1);
let sum=arr1.reduce((prev,cur)=>{
    return prev+cur;
});
let product=arr1.reduce((prev,cur)=>{
    return prev*cur;
});
console.log("sum",sum);
console.log("product",product);

