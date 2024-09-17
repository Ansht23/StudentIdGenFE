fetch('/api/students')
.then(response => response.json())
.then(data => {
   const tableBody = document.querySelector('#studentTable tbody');
     tableBody.innerHTML = '';
     data.forEach(student => {
         const row = `
             <tr>
                 <td>${student.id}</td>
                 <td>${student.name}</td>
                 <td>${student.father_name}</td>
                 <td>${student.mother_name}</td>
                 <td>${student.gender}</td>
                 <td>${student.category}</td>
                 <td>${student.gender}</td>
                 <td>${student.dob}</td>
                 <td>${student.email}</td>
                 <td>${student.phone}</td>
                 <td>${student.address}</td>
                 <td>${student.image}</td>
                 <td>
                     <button onclick="updateStudent(${student.id})">Update</button>
                     <button onclick="deleteStudent(${student.id})">Delete</button>
                 </td>
             </tr>
         `;
         tableBody.innerHTML += row;
     });
 });

function deleteStudent(id) {
 fetch(`/api/students/${id}`, {
     method: 'DELETE'
 })
 .then(response => response.json())
 .then(() => location.reload());
}

function updateStudent(id) {
 const name = prompt("Enter new name:");
 const father_name = prompt("Enter new father name:");
 const mother_name = prompt("Enter new mother name:");
 const gender = prompt("Enter new gender:");
 const category= prompt("Enter new catgory:");
 const dob = prompt("Enter new dob:");
 const email = prompt("Enter new email:");
 const phone = prompt("Enter new phone:");
 const address = prompt("Enter new address:");
 const image = prompt("Enter new image:");
 
 fetch(`/api/students/${id}`, {
     method: 'PUT',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({ name, father_name, mother_name, gender, category, dob, email, phone,address,image })
 })
 .then(response => response.json())
 .then(() => location.reload());
}