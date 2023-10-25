const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const subject = document.getElementById('subject');
const textarea = document.getElementById('message');
const form = document.getElementById('formMsg');
const error = document.getElementById('error')
const mailerr = document.getElementById('mailerror')

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    let message= []
    let succmsg = []
    if (nameEl.value ==='' || nameEl.value == null ) {
        message.push ('Name cannot be empty');
    }
    
    if(emailEl.value ==='' || emailEl.value == null){
    message.push('email cannot be empty')
    } else if(emailEl.value.length <= 7 ){
        succmsg.push('Email must be more than 7 charcters')
    }else{
        succmsg.push('')
    }

    if(subject.value ==='' || subject.value == null){
        message.push('subject cannot be empty')
        }

        if(textarea.value ==='' || textarea.value == null){
            message.push('Message cannot be empty')
            }

            if(message.length > 0 ){
    e.preventDefault();
error.innerText = message.join(' , ')
mailerr.innerText = succmsg;
            }
});

        
        