// const hubby = "mim rahman"
// console.log(hubby);

// class Student {
// constructor(sId, sName){
//   this.id = sId;
//   this.name = sName;
//   this.school = "kohinoor school";
// }
// }
// const student1 = new Student(12, "mim");
// const student2 = new Student(25, "rahim");
// console.log(student1, student2);
class Parent{
  constructor(){
    this.fatherName = "kumar"
  }
}
class Child extends Parent {
  constructor(name){
    super();
  this.name = name;
}
}
const baby = new Child("arnold");
const baby2 = new Child("ramisa");
console.log (baby);