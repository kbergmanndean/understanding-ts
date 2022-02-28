"use strict";
class Store {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Store' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const target = new Store('target');
target.describe();
