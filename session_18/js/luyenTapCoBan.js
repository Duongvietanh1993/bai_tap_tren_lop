// bai 1
/*
let humanA = {
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi",
}

console.log(humanA);
console.log("================");
console.log(humanA.name)
console.log("================");
console.log(humanA["age"])
console.log("================");
console.log(humanA.address)*/

//bai 2
/*
class Student{
    id;
    name;
    gender;
    age;
    mark;

    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }

}
let student = new Student(1,"Nguyen Van A","Nam",20,8);
let newStudent = new Student(1,"Nguyen Van B","Nam",20,8);
let students=[student,newStudent];
console.log(students[0]["name"])*/

//bai 3

class Student {
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }
}

let student = new Student(1, "Nguyen Van A", "Nam", 20, 2);
let newStudent = new Student(2, "Nguyen Van B", "Nam", 20, 8);
let newStudent1 = new Student(3, "Nguyen Van C", "Nam", 20, 4);

let students = [student, newStudent, newStudent1];

let index;
let max = students[0].mark;
for (let i in students) {
    if (students[i].mark > max) {
        max = students[i].mark;
        index = i;
    }
}
console.log(max)
console.log(students[index]);

//bai 4
/*
class Student {
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;
    }
}

let student = new Student(1, "Nguyen Van A", "Nam", 20, 8);
let newStudent = new Student(2, "Nguyen Van B", "Nam", 20, 6);
let newStudent1 = new Student(3, "Nguyen Van C", "Nam", 20, 7);

let students = [student, newStudent, newStudent1];

let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].mark;
}
let averageScore= sum/students.length
if (averageScore>=7.5){
    console.log("Lớp Khá")
}else if (averageScore>=5){
    console.log("Lớp TB")
}else {
    console.log("Lớp Yếu")
}*/
