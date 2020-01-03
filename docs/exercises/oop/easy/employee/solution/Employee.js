class Employee {
    constructor(name, salary) {

        try {
            if (name === undefined) {
                throw "Employee is not defined !";
            }
            if (name === "") {
                throw "Enter the name of employee !";
            }
            if (salary < 0) {
                throw "The amount cannot be negative !";
            }
            if (salary < 47000) {
                throw "Inapropriate salary !";
            }
        } catch (e) {
            console.log(e);
        }

        if (salary === undefined) {
            salary = 47000;
        }

        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percent) {
        let newSalary = this.salary / ((percent / 100) * this.salary);
        return newSalary;
    }

    annualSalary() {
        return this.salary * 12;
    }

    toString() {
        return this.name + "," + this.salary;
    }
}
