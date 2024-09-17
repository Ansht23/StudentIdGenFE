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
  
    // (Optional) Update student image based on API data (if applicable)
    if (studentData.fullName==="Ansh") {
        document.getElementById("student-photo").src="./a.jpeg";
    }
  }
  
  // Call the fetchStudentData function when the script loads
  window.addEventListener('load', fetchStudentData);