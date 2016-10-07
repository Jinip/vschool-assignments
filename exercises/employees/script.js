function Employee(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
    
    this.printEmployeeForm = function(){
        console.log(this.name, this.title, this.salary, this.status)
    }
}

function addToEmployees(employees, temps){
    for (var i = 0; i < temps.length; i++){
        var employee = new Employee(temps[i][0], temps[i][1], temps[i][2])
        employees.push(employee);
    }
}

var employees = [];
var temps [
    [
        "John Doe",
        "CEO",
        "$1,000,000"
    ],
    [
        "Jane Doe",
        "CTO",
        "700,000"
    ],
    [
        "Derp Doe",
        "Paige",
        "Pittance"
    ]
];

addToEmployees(employees, temps);
employees[2].status = "Part Time";

for (var i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm();
}