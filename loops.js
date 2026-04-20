// sum of n digit numbers
let input=prompt("enter number")
let sum=0;
for(let i=0;i<=input;i++){
    sum=sum+i;
}
console.log("sum",sum);

// while
let i=1;
while(i<=5)
{
    console.log("hellooo");
    i++;
}
// do while
let it=1;
do{
    console.log("hellooo");
    it++;
}
while(it<=5);
// even
for(let i=1;i<=100;i++){
   if( i%2===0){
    console.log("i",i);}
}
// game
let n=25;
let u=prompt("guess");
while(u != n){
    u=prompt("guess again");
}
console.log("congrats");
// for of
let uname="hemanth";
let size=0;
for (let val of uname) {
    console.log(val);
    size++;
}
console.log(size);