class Store {
    name: string;

    employees: string[]=[];

    constructor(n:string) {
        this.name = n;
    }

    describe() {
        console.log('Store' + this.name);
    }

    addEmployee(employee:string) {
        this.employees.push(employee);    
    }

    printEmployees() {
        console.log(this.employees);
    }
}

const target = new Store('target');
target.describe();