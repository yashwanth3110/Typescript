import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from "./classes/payment.js";
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice("athena","web work",35000);
// docTwo=new Payment("harsha","work",20000);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// interface Isperson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(b:number):number;
// }
// let me:Isperson={
//     name:"yash",
//     age:21,
//     speak(text: string){
//         console.log(text);
//     },
//     spend(amount:number){
//         console.log(amount);
//         return amount;
//     }
// };
// let invone=new Invoice("yash","work",35000);
// let invtwo=new Invoice("saju","work",10000);
// let invoices:Invoice[]=[];
// invoices.push(invone);
// invoices.push(invtwo);
// let op=invoices[0].format();
// console.log(op);
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //list template instance
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
//Generics
// const adduid=<T extends object>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
// let docone=adduid({name:"yash",age:40});
// console.log(docone.name);
//ENUM
// enum ResourceType { BOOK, AUTHOR, PERSON,PUBLISHER}
// interface Resource<T>{
//     uid:number
//     Resource:ResourceType;
//     data:T;
// }
// let doctwo:Resource<object>={
//     uid:20,
//     Resource:ResourceType.PERSON,
//     data:{name:"yash"}
// }
// let docthree:Resource<string>={
//     uid:21,
//     Resource:ResourceType.BOOK,
//     data:"bread"
// }
// console.log(doctwo, docthree);
//TUPLES
