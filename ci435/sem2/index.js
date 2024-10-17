console.log("Week 2:");
console.log("Hello world!");
let a = 5; 
console.log(a);
let b = 3 ; 
console.log(a*b);
console.log((a+b) % 3);
let s1 = "Hello";
let s2 = "Blue";
console.log(s1 + s2);
console.log(s1+" "+ s2);
console.log(a+" squared is "+ a*a);
console.log("--------------------------------------");

console.log("Week 3:");
console.log(1 == true);
let x = 3; 
let y = 5;
console.log(x <= y);
console.log(x>4 && y>4);
console.log(x>4 || y>4);
console.log(!(x>4 || y>4));
console.log(x != y && y>0);
console.log((x*y)< 15); 
console.log((x*y)<= 15);

if (x>y) {
    console.log("x is greater than y"); 
    console.log(x/y);
}
else {
    console.log("x is less than or equal to y"); 
}


while (y<100){
    y=y + x;
}
console.log(y);

for (let j = 1; j <= y; j++){
    console.log("Hello " + j );
}

var day = Math.floor(Math.random() * 7); 

switch (day){
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break; 
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
}

console.log("--------------------------------------");

console.log("Week 4:");

let str = "I\'m learning Javascript in my Web Development module.";
console.log(str.length);
console.log(str.indexOf("Javascript"));
let numOfE =0 ;
for (let k = 0; k< (str.length-1); k++){

    if (str.charAt(k)== "e"){
        numOfE++;
    }

}
console.log(numOfE);

let whereM=0;
while (whereM != -1){
    str.indexOf("m",whereM);
    console.log(whereM);
    whereM++;
}

let reverseString="";
for( l = str.length; l>=0; l--){
    reverseString = reverseString + str.charAt(l);
}
console.log(reverseString);