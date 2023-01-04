//Async in JS
// Callback, Promise, Async & Await



const data=[
{name:'Adarsh',Profession:'Web Developer'},
{name:'Sumit',Profession:'Quality Engineer'}
];

function getData(){
    setTimeout(()=>{
        let output="";
        data.forEach((data,index)=>{
            output+=`<li> ${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000);
}

//using callback
// function createData(newData,callback){

    
//     setTimeout(()=>{
// data.push(newData);
// callback();
//     },2000);
// }
// getData();

// createData({name:'Hemant',Profession:'Driver'},getData);


//using promise

function createData(newData){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        data.push(newData);
        let error=false;
        if(!error){
            resolve();
        }else{
            reject('nothing good')
        }
           },2000);
})
   
    }

    // createData({name:'Hemant',Profession:'Driver'}).then(getData).catch(err=>console.log(err));


//using async-await

async function start(){
    await createData({name:'Hemant',Profession:'Driver'})
    getData();
}

start();