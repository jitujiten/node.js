

// var product=(a,b)=>{
//     console.log(a*b);
// }

// product(5,7);




// const person={
//     name:"jitendra sahu",
//     age:23,
//     print:()=>{
//         console.log("hii i am "+this.name)
//     }
// }
// person.print();

// one way:-
// const person={
//     name:"jitendra sahu",
//     age:23,
//     print:function(){
//         console.log("hii i am "+this.name)
//     }
// }
// person.print();


// 2nd way:-
const person={
    name:"jitendra sahu",
    age:23,
    print(){
        console.log("hii i am "+this.name)
    }
}
person.print();