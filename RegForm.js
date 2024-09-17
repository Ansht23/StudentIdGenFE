function togglePassword() {
    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("confirm-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
}

document.getElementById("Registration").addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form default submission

    // Create FormData object to send form data and file
    const formData = new FormData();
    formData.append('fullName', document.getElementById("full-name").value);
    formData.append('fatherName', document.getElementById("father-name").value);
    formData.append('motherName', document.getElementById("mother-name").value);
    formData.append('gender', document.getElementById("gender").value);
    formData.append('dateOfBirth', document.getElementById("dob").value);
    formData.append('category', document.getElementById("category").value);
    formData.append('phoneNumber', document.getElementById("phone").value);
    formData.append('emailAddress', document.getElementById("email-id").value);
    formData.append('address', document.getElementById("address").value);
    formData.append('image', document.getElementById("image").files[0]);  // Fetch file
    formData.append('password', document.getElementById("password").value);

    // Make the POST request with FormData
    fetch('http://localhost:8080/api/students/register', {
        method: 'POST',
        body: formData  // Do not set Content-Type, fetch will automatically set it to multipart/form-data
    })
    .then(response => response.text())  // Handle the response
    .then(data => {
        console.log(data);
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});
