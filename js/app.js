'use strict';
let allStudent = [];
function Student(email, mobileNumber, tuition) {
  this.email = email;
  this.mobileNumber = mobileNumber;
  this.name = '';
  this.age = 0;
  this.tuition = tuition;
  allStudent.push(this);
}

Student.prototype.generateRandomAge = function () {
  return this.age = Math.floor(Math.random() * (24 - 18) + 24);
};

Student.prototype.studentName = function () {
  let studentName = this.email.split('@');

  return this.name = studentName[0];
};

let addStudent = document.getElementById('addNewStudent');
addStudent.addEventListener('click', addNewStudent);
function render() {
  let allStudentinLocal = JSON.parse(localStorage.getItem('Student'));
  let id = 1;
  let tableBody = document.getElementById('tbody');

  let tdElId = document.createElement('td');
  let tdElName = document.createElement('td');
  let tdElEmail = document.createElement('td');
  let tdElMobile = document.createElement('td');
  let tdElAge = document.createElement('td');
  let tdElTuition = document.createElement('td');
  let total = 0;
  if (allStudentinLocal) {
    allStudent = allStudentinLocal;
    for (let i = 0; i < allStudent.length; i++) {
      let studentInfo = document.createElement('tr');
      tableBody.appendChild(studentInfo);
      tdElId = document.createElement('td');
      tdElName = document.createElement('td');
      tdElEmail = document.createElement('td');
      tdElMobile = document.createElement('td');
      tdElAge = document.createElement('td');
      tdElTuition = document.createElement('td');
      studentInfo.appendChild(tdElId);
      studentInfo.appendChild(tdElName);
      studentInfo.appendChild(tdElEmail);
      studentInfo.appendChild(tdElMobile);
      studentInfo.appendChild(tdElAge);
      studentInfo.appendChild(tdElTuition);
      tdElId.textContent = id;
      tdElName.textContent = allStudent[i].name;
      tdElEmail.textContent = allStudent[i].email;
      tdElMobile.textContent = allStudent[i].mobileNumber;
      tdElAge.textContent = allStudent[i].age;
      tdElTuition.textContent = allStudent[i].tuition;
      total += parseInt(allStudent[i].tuition);
      id++;
    }
    document.getElementById('total').textContent = total;
  } else {
    allStudent = [];
  }
}
function addNewStudent(event) {
  event.preventDefault();
  let studentEmail = document.getElementById('studentEmail').value;
  let studentPhoneNumber = document.getElementById('studentPhoneNumber').value;
  let tuition = document.getElementById('tuition');
  tuition = tuition.options[tuition.selectedIndex].value;
  let newStudent = new Student(studentEmail, studentPhoneNumber, tuition);
  newStudent.generateRandomAge();
  newStudent.studentName();
  localStorage.setItem('Student', JSON.stringify(allStudent));
  render();

}


render();




