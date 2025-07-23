/**
 * Author: [Your Name]
 * Lab: Week 11 - Form Validation
 * Description: Validates user input and displays confirmation message on success
 */

function validatePage() {
  let isValid = true;

  // Clear all previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Full Name Validation
  const nameField = document.getElementById("fullName");
  const name = nameField.value.trim();
  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Name is required and must contain only letters and spaces.";
    isValid = false;
  }

  // Date of Birth Validation
  const dobField = document.getElementById("dob");
  const dob = dobField.value.trim();
  if (dob === "" || !/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
    document.getElementById("dobError").textContent = "Date of Birth must be in YYYY-MM-DD format.";
    isValid = false;
  }

  // Part Number Dropdown
  const partNumber = document.getElementById("partNumber").value;
  if (partNumber === "0") {
    document.getElementById("partError").textContent = "Please select a valid part.";
    isValid = false;
  }

  // Warranty Radio Buttons
  const warrantySelected = document.querySelector('input[name="warranty"]:checked');
  if (!warrantySelected) {
    document.getElementById("warrantyError").textContent = "Please select Yes or No.";
    isValid = false;
  }

  // Final submission logic
  if (isValid) {
        // 1. Build a display string
        const summaryHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Part Number:</strong> ${partNumber}</p>
        <p><strong>Extended Warranty:</strong> ${warrantySelected.value}</p>
        `;

        // 2. Set innerHTML of the orderDetails container
        document.getElementById("orderDetails").innerHTML = summaryHTML;

        // 3. Show confirmation, hide form
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("confirmation").style.display = "block";  
    }
}