// Function to fetch student data from API and update UI
function fetchStudentData() {
    const studentData = JSON.parse(sessionStorage.getItem('studentData')); // Retrieve data from session storage
  
    // Handle potential absence of session data gracefully
    if (!studentData) {
      alert('You are not logged in. Please redirect to the login page.');
      return; // Exit the function if no data
    }
    console.log(studentData);
    
    // Update UI elements with retrieved data
    document.getElementById('full-name').textContent = studentData.fullName;
    document.getElementById('student-id').textContent = `Roll No: ${studentData.id}`;
    document.getElementById('father-name').textContent = studentData.fatherName;
    document.getElementById('mother-name').textContent = studentData.motherName;
    document.getElementById('gender').textContent = studentData.gender;
    document.getElementById('dob').textContent = studentData.dateOfBirth;
    document.getElementById('category').textContent = studentData.category;
    document.getElementById('phone-number').textContent = studentData.phoneNumber;
    document.getElementById('email-address').textContent = studentData.emailAddress;
    document.getElementById('address').textContent = studentData.address;
  

    if (studentData.fullName==="Ansh") {
      console.log("image");
      document.getElementById("student-image").src="./pic1.jpeg.png";
  } else if (studentData.fullName==="Vishakha") {
    console.log("image");
    document.getElementById("student-image").src="./pic2.jpeg.png";
} else if (studentData.fullName==="Khushi") {
  console.log("image");
  document.getElementById("student-image").src="./pic3.jpeg.png";
} else if (studentData.fullName==="Yash") {
  console.log("image");
  document.getElementById("student-image").src="./pic4.jpeg.png";
} else if (studentData.fullName==="Vaibhav") {
  console.log("image");
  document.getElementById("student-image").src="./pic5.jpeg.png";
} else if (studentData.fullName==="Soeel") {
  console.log("image");
  document.getElementById("student-image").src="./pic6.jpeg.png";
}


}

  window.addEventListener('load', fetchStudentData);