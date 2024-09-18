function showLogin(role) {
    const studentLoginBox = document.querySelector('.login-box.Student');
    const adminLoginBox = document.querySelector('.login-box.Admin');
    const studentButton = document.querySelector('.role-button:nth-child(1)');
    const adminButton = document.querySelector('.role-button:nth-child(2)');
  
    if (role === 'Student') {
      studentLoginBox.classList.add('active');
      adminLoginBox.classList.remove('active');
      studentButton.classList.add('active');
      adminButton.classList.remove('active');
    } else if (role === 'Admin') {
      adminLoginBox.classList.add('active');
      studentLoginBox.classList.remove('active');
      adminButton.classList.add('active');
      studentButton.classList.remove('active');
    }
  }
  
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const role = document.getElementsByClassName('active')[0].innerHTML;
  
      let emailOrUsername, password;
  
      if (role === 'Student') {
        emailOrUsername = document.getElementById('email-id').value;
        password = document.getElementById('Student-password').value;
  
        if (emailOrUsername.trim() !== "" && password.trim() !== "") {
          fetch('http://localhost:8080/api/students/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded' // Set content type for form data
            },
            body: `emailAddress=${encodeURIComponent(emailOrUsername)}&password=${encodeURIComponent(password)}` // Encode form data for proper transmission
          })
          .then(response => response.json()) // Parse response as JSON
          .then(data => {
            if (data.status === 'success') {
              // Store student data in session storage (using JSON.stringify for complex data)
              sessionStorage.setItem('studentData', JSON.stringify(data.data));
              window.location.href = "studentDashboard.html";
            } else {
              alert("Invalid login credentials. Please try again.");
            }
          })
          .catch(error => {
            console.error('Error fetching student data:', error);
            alert('An error occurred during login. Please try again later.');
          });
        } else {
          alert("Please enter valid credentials.");
        }
      } else if (role === 'Admin') {
        emailOrUsername = document.getElementById('Username').value;
        password = document.getElementById('Admin-password').value;

        if (emailOrUsername === "Admin" && password === "admin123") {
            window.location.href = "adminDashboard.html";
        } else {
            alert("Invalid Admin credentials");
        }
    }
});
});