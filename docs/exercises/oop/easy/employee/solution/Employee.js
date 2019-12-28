class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    raiseSalary(percent) {
        this._salary = this._salary + (percent / 100 * this._salary);
    }

    annualSalary() {
        return this._salary * 12;
    }

    toString() {
        return `Employee[_name=${this._name},_salary=${this._salary}]`;
    }
}

module.exports = Employee;