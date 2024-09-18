// Function to fetch student data from API and update UI
function fetchStudentData() {
    const studentData = JSON.parse(sessionStorage.getItem('studentData')); // Retrieve data from session storage
  
    // Handle potential absence of session data gracefully
    if (!studentData) {
      alert('You are not logged in. Please redirect to the login page.');
      return; // Exit the function if no data
    }
    console.log(studentData);
    console.log(studentData.dateOfBirth);
    
    // Update UI elements with retrieved data
    document.getElementById('name').textContent = studentData.fullName;
    document.getElementById('roll-no').textContent = `21250${studentData.id}`;
    document.getElementById('father-name').textContent = studentData.fatherName;
    document.getElementById('mother-name').textContent = studentData.motherName;
    document.getElementById('dob').textContent = studentData.dateOfBirth;
    document.getElementById('phone-number').textContent = studentData.phoneNumber;
    document.getElementById('address').textContent = studentData.address;
  
    if (studentData.fullName==="Ansh") {
        document.getElementById("student-photo").src="./pic1.jpeg.png";
    } else if (studentData.fullName==="Vishakha") {
      document.getElementById("student-photo").src="./pic2.jpeg.png";
    } else if (studentData.fullName==="Khushi") {
    document.getElementById("student-photo").src="./pic3.jpeg.png";
    } else if (studentData.fullName==="Yash") {
      document.getElementById("student-photo").src="./pic4.jpeg.png";
    } else if (studentData.fullName==="Vaibhav") {
      document.getElementById("student-photo").src="./pic5.jpeg.png";
    } else if (studentData.fullName==="Soeel") {
      document.getElementById("student-photo").src="./pic6.jpeg.png";
  }
}
  // Call the fetchStudentData function when the script loads
  window.addEventListener('load', fetchStudentData);