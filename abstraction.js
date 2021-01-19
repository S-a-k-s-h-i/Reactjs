function Book(t,a){
    let title=t;
    let author=a;

    this.getTitle=function(){
        return title;
    }
    const summary=function(){
        return `${title} witten by ${author}`;
    }
    this.giveSummary=function(){
        return summary();
    }
}
const book1=new Book('hippi','Paulo');
console.log(book1.getTitle());
console.log(book1.author);