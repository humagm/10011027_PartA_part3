
alert("Welcome")

let fname = prompt('What is the first name of the employee')
let lname = prompt('What is the last name of the employee')
let salary = prompt('What is the salary of the employee')


var count = 1;
for (var i = 0; i <= 2; i++) {
    console.log("The name of the employee is" + fname + lname + salary);
}



class Employee {

    get fname() {
        return this._fname;
    }
    set fname(value) {
        this._fname = value;
    }
    get lname() {
        return this._lname
    }
    set lname(value) {
        this._lname = value;
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        this._salary = value;
    }
    //constructors
    constructor(fname, lname, salary) {
        this._fname = firstname;
        this._lname = lastname;
        this._salary = salary;
    }



    //display function
    sayhello{
        console.log('The name of the employee is this._fname ${this.lname} salary is ${this.salary}')
    }
    submit.addEventListener('click', (e) => { table.innerHTML = displayEmployee(fname.value, lname.value, salary.value, ); e.preventDefault() })