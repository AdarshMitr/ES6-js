//   ***Rest and Spread Operator***   //

//Rest Operator-Example:

function productNum(a,b,c,...other){
   // console.log(other)
    //console.log(other.length)
return a*b*c*other[0];
}
const result= productNum(4,6,10,5,7);
//console.log(result)



function multiply(multiplier,...theRest){
   // console.log(theRest)
    return theRest.map((el)=>multiplier*el);
    
}
const arr=multiply(3,6,7,8);
//console.log(arr);


//Spread Operator 

// It is opposite of the rest syntax. It expands an array into its elements while rest syntax collects multiple elements and condense them into a single element.


//Spread Operator -Example:


var names=['Ankit','Gaurav','Lalit','Pankaj'];
function getNames(n1,n2,n3){
  //  console.log(n1,n2,n3);
}
//without spread operator
//getNames(names[0],names[1],names[3]); 

//with spread operator
getNames(...names);

//getNames(names);//full array



// Rest with Object

var students={
    name:'Adarsh',
    age:'28',
    hobbies:['cycling','chess','shooting']
}

//const age=students.age;
//without Rest operator
//const {age,hobbies}=students; //array destructuring
//console.log(hobbies);

//with Rest operator
const {age,...rest}=students;
console.log(rest);


// Spread with Object

var newStudent={
    ...students,
    age:'29'
}

console.log(newStudent);