// const users = [
//     {
//         "Id": "1",
//         "motherName": "Savita",
//         "fullName": "Ansh",
//         "fatherName": "Arun",
//         "gender": "Male",
//         "dateOfBirth": "23/11/2002",
//         "category": "General",
//         "phoneNumber": "9413293707",
//         "emailAddress": "anshtiwari231102@gmail.com",
//         "imagePath": "C:UsersHpMyJavapic1.jpeg.png",
//         "passwordHash": "Ansh123",
//         "address": "Bhilwara",
//         "id": "1"
//     },
//     {
//         "Id": "2",
//         "motherName": "Sangeeta",
//         "fullName": "Vishakha",
//         "fatherName": "Suresh",
//         "gender": "Female",
//         "dateOfBirth": "26/08/2003",
//         "category": "OBC",
//         "phoneNumber": "7340060540",
//         "emailAddress": "Vishakhajangid03@gmail.com",
//         "imagePath": "C:UsersHpMyJavapic2.jpeg.png",
//         "passwordHash": "Vish1234",
//         "address": "Namdev colony",
//         "id": "2"
//     },
//     {
//         "Id": "3",
//         "motherName": "Madhu",
//         "fullName": "Khushi",
//         "fatherName": "Rooplal",
//         "gender": "Female",
//         "dateOfBirth": "25/07/2002",
//         "category": "General",
//         "phoneNumber": "9460973671",
//         "emailAddress": "khushigagrani25@gmail.com",
//         "imagePath": "C:UsersHpMyJavapic3.jpeg.png",
//         "passwordHash": "Khushi1234",
//         "address": "RC Vyas colony",
//         "id": "3"
//     },
//     {
//         "Id": "4",
//         "motherName": "Madhu",
//         "fullName": "Yash",
//         "fatherName": "Vikas",
//         "gender": "Male",
//         "dateOfBirth": "03/03/2002",
//         "category": "General",
//         "phoneNumber": "7597847232",
//         "emailAddress": "joskeshu03@gmail.com",
//         "imagePath": "C:UsersHpMyJavapic4.jpeg.png",
//         "passwordHash": "Keshu1234",
//         "address": "Shubhash Nagar",
//         "id": "4"
//     },
//     {
//         "Id": "5",
//         "motherName": "Madhu",
//         "fullName": "Vaibhav",
//         "fatherName": "Vikas",
//         "gender": "Male",
//         "dateOfBirth": "03/03/2002",
//         "category": "General",
//         "phoneNumber": "8764897800",
//         "emailAddress": "vaibhavjoshi03@gmail.com",
//         "imagePath": "C:UsersHpMyJavapic5.jpeg.png",
//         "passwordHash": "anshu1234",
//         "address": "Shubhash Nagar",
//         "id": "5"
//     }
// ];

// const tableBody = document.querySelector('#userTable tbody');

// users.forEach(user => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${user.Id}</td>
//         <td>${user.fullName}</td>
//         <td>${user.motherName}</td>
//         <td>${user.fatherName}</td>
//         <td>${user.gender}</td>
//         <td>${user.dateOfBirth}</td>
//         <td>${user.category}</td>
//         <td>${user.phoneNumber}</td>
//         <td>${user.emailAddress}</td>
//         <td>${user.address}</td>
//         <td><img src=${user.imagePath.replace(/"/g, '')} alt="Image" width="50"></td>
//     `;
//     tableBody.appendChild(row);
// });

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from API
    fetch('http://localhost:8080/api/students/admin')
        .then(response => {
            // Check if the response is OK (status 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
            // Get the table body where the rows will be inserted
            const tableBody = document.querySelector('#userTable tbody');
            
            // Loop through the data and create a row for each student
            data.forEach(student => {
                const row = document.createElement('tr');
                
                // Create cells for each field in the student object
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.fullName}</td>
                    <td>${student.motherName}</td>
                    <td>${student.fatherName}</td>
                    <td>${student.gender}</td>
                    <td>${student.dateOfBirth}</td>
                    <td>${student.category}</td>
                    <td>${student.phoneNumber}</td>
                    <td>${student.emailAddress}</td>
                    <td>${student.address}</td>
                `;
                
                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
