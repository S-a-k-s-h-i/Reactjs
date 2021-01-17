'use strict';
// USING FUNCTIONS
// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//     return `This ${this.type} is ${this.color}`;
// }

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = function(){
//                return `This ${this.type} is ${this.color}`;
//     }
//     };

function Fruit(type){
    this.type=type;
    this.color='unknown';
}
Fruit.prototype.getInformation=function(){
    return `This ${this.type} is ${this.color}`;
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

// USING OBJECT LITERALS
let slime={
    type:'Mexican Slime',
    color:'yellow',
    getInformation:function(){
        return `This ${this.type} is ${this.color}`
    }
}
console.log(slime.getInformation());
lime.color='green';
console.log(slime.getInformation())