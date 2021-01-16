let school={
    name:'Army Public Scool',
    location:'Roorkee',
    established:'1962',
    20:'2000',
    displayInfo:function(){
        console.log(`${school.name} was established in ${school.established} at ${school.location}.
Value of key 20 is ${school['20']}`);

    }
}
school.displayInfo();

// Object Constructor
const intro=new Object();
intro.firstName='Sakshi';
intro.lastName='Pokhria';
intro.city='Roorkee';
intro.displayInfo=function(){
    console.log(`${intro.firstName} ${intro.lastName} from ${intro.city}`);
}
intro.displayInfo();