class EmployeePayrollData {
    
    constructor(...Data) {
        this.id =Data[0];
        this.name= Data[1];
        this.salary= Data[2];
        this.gender = Data[3];
        this.StartDate = Data[4];


    }

    get name() {return this._name;}
    set name(name) {
            let regName = RegExp("^[A-Z]{1}[a-z]{2,}$");
            if(regName.test(name))
                this._name = name;
            else throw "Name is Incorrect";
        }

    get id() {return this._id;}
    set id(id) {
        try{
            if(id >0) {
                this._id = id
            }

            if (id<=0) throw "Id Can't be negative or zero"
        } catch(e){
            console.error(e);
        }
        
        }

    get salary() {return this._salary;}
    set salary(salary) { 
        if(salary>0)
            this._salary = salary;
        else throw "Salary can't be negative or zero";}

    get gender() {return this._gender;}
    set gender(gender) { this._gender = gender;}

    get StartDate() {return this._StartDate;}
    set StartDate(StartDate) { this._StartDate = StartDate;}

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                        this.startDate.toLocalDateString("en-US",options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", Gender = " + this.gender + " , Start Date is = " + this.empDate;
    }

}

//let employeePayrollData = new EmployeePayrollData(1,"raj", 300000,'Male');
//console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(-1,"Terrisa",30000,"F", new Date());
console.log(newEmployeePayrollData.toString());

try {
    newEmployeePayrollData.name = "john";
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}



