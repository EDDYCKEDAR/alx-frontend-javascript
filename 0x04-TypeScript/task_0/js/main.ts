// Task 0: Creating an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create array containing the two students
const studentsList: Array<Student> = [student1, student2];

// Render table using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Add header row
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add student rows
studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
