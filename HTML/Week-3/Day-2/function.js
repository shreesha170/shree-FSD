//types
// function with parameters and function without parameters
//function without parameters
function show(){
    console.log('Show ')
}
show();

//function with parameters
function show(name){
    // console.log('Show ')
    console.log('The name is ${name}');
}
show("Peter");  // Arguments

// //eg-3
// const a=()=>{
//     console.log("Arrow Function");
// }
// a();       
let course_name='js'
const a=(cs)=>{
    console.log('${cs_name}');
}
a(course_name);     

// eg-5 immediate invoke function
