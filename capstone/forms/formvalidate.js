<script>
  document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('form-msg');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const  subject = document.getElementById('subject')
    const textarea = document.getElementById('Message')

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const sub = suject.value.trim();
        const msg = textarea.value.trim()

        if (validateForm(name, email, sub, msg)) {
            displaySuccessMessage();
        } else {
            displayErrorMessage();
        }
    });

    function validateForm(name, email, sub, msg) {
        return !(name === '' || email === '' || sub==='' || msg ==='');
    }

    function displaySuccessMessage() {
        const successMessage = document.createElement('p');
        successMessage.textContent = '';
        successMessage.style.color = 'green';
        submitForm.appendChild(successMessage);
    }

    function displayErrorMessage() {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill in all required fields.';
        errorMessage.style.color = 'red';
        submitForm.appendChild(errorMessage);
    }
});
</script>