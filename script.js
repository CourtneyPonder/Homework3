const collectEmployees = function () {
  const employees = [];
  let addingEmployees = true;

  while (addingEmployees) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    const salaryInput = prompt("Enter the employee's salary:");

    // Convert salary to a number, default to 0 if not a number
    const salary = isNaN(salaryInput) ? 0 : Number(salaryInput);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    // Ask if the user wants to continue adding employees
    const continueAdding = prompt("Do you want to add another employee? (yes/no)");
    addingEmployees = continueAdding.toLowerCase() === 'yes';
  }

  return employees;
};

const firstName1 = prompt("Enter the first name of the first employee:");
    const lastName1 = prompt("Enter the last name of the first employee:");
    let salary1 = prompt("Enter the salary of the first employee:");

    // Validate salary input
    salary1 = isNaN(salary1) ? 0 : Number(salary1);


const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available to select.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations: ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};
addEmployeesBtn.addEventListener('click', function() {
  const employees = collectEmployees();
  displayAverageSalary(employees);
  getRandomEmployee(employees);
});

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
