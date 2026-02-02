const palValue ='karthi'

let splitVal = palValue.split("");
console.log(splitVal)

let reversedVal="";
for (let i=splitVal.length-1;i>= 0;i--){
    reversedVal=reversedVal+splitVal[i];
}
console.log("Reversed String:", reversedVal);

if (reversedVal===palValue){
    console.log("Given String is a Palindrome")
}else{
    console.log("Given String is not a Palindrome")
}
