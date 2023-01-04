//Rest and Spread Operator

//Rest Operator-Example:

function productNum(a,b,c,...other){
   // console.log(other)
    //console.log(other.length)
return a*b*c;
}
const result= productNum(4,6,10,5,7);
console.log(result)



function multiply(multiplier,...theRest){
   // console.log(theRest)
    return theRest.map((el)=>multiplier*el);
    
}
const arr=multiply(3,6,7,8);
console.log(arr);


//Spread Operator -Example:
