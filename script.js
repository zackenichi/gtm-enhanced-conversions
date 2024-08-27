document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.c-form'); // Assuming this is the form
  const emailField = document.querySelector('input[type="email"]');
  const submitButton = document.querySelector('#btn-submit'); // Targeting the submit button directly

  if (submitButton) {
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const email = emailField.value;

      if (email) {
        // Save the email to localStorage
        localStorage.setItem('hg-email', email);
        console.log('Form submitted, redirecting...');

        // Redirect to the thank-you page with the email as a query parameter
        window.location.href = `thank-you.html?email=${encodeURIComponent(
          email
        )}`;
      } else {
        // Handle the case where the email is not provided
        alert('Please enter your email.');
      }
    });
  }
});
