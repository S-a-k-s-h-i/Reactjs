var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// let p=new Promise((resolve,reject) => {
//     let a=3;
//     if(a==2){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// })

// p.then((message) => {
//     console.log("this is in then "+message);
// }).catch((message) => {
//     console.log("this is in catc "+message);
// })

// const video1=new Promise((resolve,reject) => {
//     resolve('video 1');
// })
// const video2=new Promise((resolve,reject) => {
//     resolve('video 2');
// })
// const video3=new Promise((resolve,reject) => {
//     resolve('video 3');
// })
// Promise.all([
//     video1,
//     video2,
//     video3
// ]).then((messages) => {
//     console.log(messages);
// })

(function(){
    let myPromise= new Promise((resolve,reject) => {
        (Math.random()<.5)?resolve("success"):reject("failure");
    });
    myPromise.then(function(msg){
        console.log(msg,'the promise was resolved!!');
        return true;
    },function(err){
        console.log(err,'the promise was rejected!!');
        return false;
    }).then(function(val){
        console.log(val);
        return 1
    },function(err){
        console.log(err);
        return 2
    }).then(function(v){
        console.log(v);
    },function(e){
        console.log(e);
    })

    function getNumberfact(url){
        return new Promise((resolve,reject) => {
            let request=new XMLHttpRequest();
            request.onload=function(){
                if(request.status===200){
                    resolve(request.responseText)
                }else{
                    reject(request.statusText)
                }
            }
            request.open('GET',url,true);
            request.send();
        })
    }
    getNumberfact('http://numbersapi.com/random').then(
        response => console.log(response),
        error => console.log(error)
    );

})();
