function bt(){

}

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    summary(){
        console.log(`${this.title} written by ${this.author}`);

    }
}
const book1=new Book('Jungle Book','Rudyard Kipling');
console.log(book1);
console.log(Book);
console.log(typeof Book);
console.log(typeof book1);
console.log(typeof bt);

function book(t,a){
    let title=t;
    let author=a;
    this.summary=function(){
        console.log(`${title} written by ${author}`);
    }
}
const b1=new Book('hippie','paulo');
b1.summary();
b1.title;