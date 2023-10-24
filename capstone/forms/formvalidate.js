const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const subject = document.querySelector('#subject');
const textarea = document.querySelector('#message');

const form = document.querySelector('#form-msg');


const checkName = () => {

    let valid = false;

    const min = 6,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.').style.color = "red";
    } else if (!isNameBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`).style.color = "blue";
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkSubject = () => {
    
    let valid = false;
    const min = 6, max = 35;



    const sub = subject.value.trim();

    if (!isRequired(sub)) {
        showError(subject, 'subject cannot be blank.');
     } else if (!isSubjectBetween(sub.length, min, max)) {
            showError(subject, `Subject must be between ${min} and ${max} characters.`);
        } else {
            showSuccess(subject);
            valid = true;
        }
        return valid;
};

const checkMessage = () => {
    let valid = false;
const max =200, min=6; 
    // check message box 
    const area = textarea.value.trim();
    

    if (!isRequired(area)) {
        showError(textarea, 'Message cannot be blank.');
     } else if (!isMessageBetween(sub.length, min, max)) {
            showError(textarea, `Must be  must ${min} and ${max} characters.`);
        } else {
            showSuccess(textarea);
            valid = true;
        }
        return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



//length validation for name, subject and textaere
const isRequired = value => value === '' ? false : true;
const isNameBetween = (length, min, max) => length < min || length > max ? false : true;
const isSubjectBetween = (length, min, max) => length < min || length > max ? false : true;
const isMessageBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('p');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = 'Valid' ;
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject(),
        isMessageValid = checkMessage();

    let isFormValid = isNameValid &&
        isEmailValid &&
        isSubjectValid &&
        isMessageValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'subject':
            checkSubject();
            break;
        case 'message':
            checkMessage();
            break;
    }
}));
 