class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){

    
    
        this.age=age;
        this.name=name;

    }
    getName():string{
        return this.name;
    }
}
class Student extends Person{
    rollNumber:number;
    courses:Course[]=[];
    constructor(name:string,age:number,rollNumber:number){
        super(name,age);
        this.rollNumber=rollNumber;
        this.courses=[];

    }
    registerForCourses(course:Course){
        this.courses.push(course);

    }
    
    
}
class Instructor extends Person{
    salary:number;
    courses:Course[]=[];
    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary=salary;
        this.courses=[];

    }
    assignCourse(course:Course){
        this.courses.push(course);

    }
    
    
}
class Course{
    id:number;
    name:string;
    students: Student[];
    instructor!:Instructor;
    constructor(id:number,name:string){
        this.id = id;
        this.name=name;
        this.students=[];

    }
    addStudent(student : Student):void{
        this.students.push(student);

    }
    setInstructor(instructor:Instructor):void{
        this.instructor = instructor;


    }

}
class Department{
    name:string;
    courses: Course[]=[];
    constructor(name:string){
        this.name = name;
        this.courses=[];

    }
    addCourse(course:Course):void{
        this.courses.push(course);
    }
} 

const student1 = new Student("Nimra",21,1234);
const student2 = new Student("Ayesha",20,2643);


const instructor1 = new Instructor("Hamzah",23,50000);
const instructor2 = new Instructor("Haseeb",24,400000);

const course1 = new Course(1,"Typescript");
const course2 = new Course(2,"Next js");

const department1 = new Department("Artificial Intelligence");

department1.addCourse(course1);
department1.addCourse(course2);

course1.addStudent(student1);
course1.addStudent(student2);

course1.setInstructor(instructor1);
course2.setInstructor(instructor2);

student1.registerForCourses(course1);
student2.registerForCourses(course1);

console.log(student1.getName());
console.log(student1.courses);
console.log(instructor1.courses);
console.log(department1.courses);
