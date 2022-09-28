class Human{
  _firstName
  _lastName
  _fatherName
  constructor(firstName,lastName,fatherName){
    this._firstName=firstName
    this._lastName=lastName
    this.fatherName=fatherName
  }
  set FirstName(value){
    this._firstName=value
  }
  get FirstName(){
  return this._firstName
  }
  set LastName(value){
    this._lastName=value

  }
  get LastName(){
   return this._lastName
  }
  set FatherName(value){
    this._fatherName=value
  }
  get FatherName(){
   return this._fatherName
  }
  fullName(){
    return `fullName:${this._firstName +" "+ this._lastName}`
  }

}
class Employee extends Human{
  #_clock
  #_degree
  #_tax
  constructor(firstName,lastName,fatherName,clock,degree,tax){
    super(firstName,lastName,fatherName)
    this.#_clock=clock
    this.#_degree=degree
    this.#_tax=tax
  }
  salary(){
    if (this.#_degree==="phd" && this.#_tax==="tax") {
      return `fullNmae:${this.fullName()}----salaryTax:${(this.#_clock*150000)-10*(this.#_clock*150000)/100}`
     
      
    }else if (this.#_degree==="master" && this.#_tax==="tax") {
      return `fullNmae:${this.fullName()}----salaryTax:${(this.#_clock*120000)-10*(this.#_clock*120000)/100}`
    }else if (this.#_degree==="bachelor" && this.#_tax==="tax") {
      return `fullNmae:${this.fullName()}----salaryTax:${(this.#_clock*100000)-10*(this.#_clock*100000)/100}`
    }else if (this.#_degree==="other" && this.#_tax==="tax") {
      return `fullNmae:${this.fullName()}----salaryTax:${(this.#_clock*80000)-10*(this.#_clock*80000)/100}`
    }
  }
 
}
let HM=new Employee("hadis","mollaeii","saeed",200,"phd","tax")
console.log(HM.salary());
let PM=new Employee("pari","mollaeii","saeed",200,"master","tax")
console.log(PM.salary());
let MM=new Employee("mohammad","mollaeii","reza",200,"bachelor","tax")
console.log(MM.salary());
let ZM=new Employee("zahra","mollaeii","reza",200,"other","tax")
console.log(ZM.salary());

