const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const subject = document.getElementById('subject');
const textarea = document.getElementById('message');
const form = document.getElementById('formMsg');
// error messages
const error = document.getElementById('error')
const mailerr = document.getElementById('mailerror')
const nameerror = document.getElementById('name-err')
const subjecterror = document.getElementById('subeerr')
const msgerror = document.getElementById('msgeerr')

// email Regular expression validation
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#mailerror');
    const email = $('#email').val();
    $result.text('');
  
    if(validateEmail(email)){
      $result.text(email + ' is valid.');
      $result.css('color', 'green');
    } else{
      $result.text(email + ' is invalid.');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);

  //sending email to the recipient
  

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    let message= []
    let succmsg = []
    let namemsg =[]
    let submsg =[]
    let mmsg = []

    if ((nameEl.value ==='' || nameEl.value == null)|| (subject.value ==='' || subject.value == null  )||
     (textarea.value ==='' || textarea == null)) {
        message.push ('Please complete ALL the fields! "ALL the fields are REQUIRED ');
    } 
// name ereror popup
    if(nameEl.value ==='' || emailEl.value == null){
        namemsg.push (' Name cannot be empty ');
        } else if(nameEl.value.length <=1 ){
            namemsg.push('Name must be atleast 2 charcters')
        }else{
            namemsg.push('')
        }



    // email message pop up
    if(emailEl.value ==='' || emailEl.value == null){
        succmsg.push (' email cannot be empty ');
        } else if(emailEl.value.length <= 7 ){
            succmsg.push('Email must be more than 7 charcters')
        }else{
            succmsg.push('')
        }


        // Subject ereror popup
    if(subject.value ==='' |subject.value == null){
    submsg.push (' Subject cannot be empty ');
        } else if(subject.value.length < 1 ){
            submsg.push('Subject must be atleast 1 charcters')
        }else{
            submsg.push('')
        }

        // messsage ereror popup
        if(textarea.value ==='' |textarea.value == null){
            mmsg.push (' Message cannot be empty ');
                } else if(textarea.value.length < 1 ){
                    mmsg.push('Message must be atleast 1 charcters')
                }else{
                    mmsg.push('')
                }

        
        function emailval(){
          const errmsg = document.getElementById('erorr')
          succmsg = []
             var mailRegex = /^([a-xA_Z0-9\._]+)@([a-zA_Z0-9])+(.[a.z]+)?$/
            // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (mailRegex.text(emailfield)){
  submsg('valid email')
    // succmsg.push('valid');

     return true;
 }else{
 succmsg.push('invalid email');
 return false
 }
// errmsg.innerText= succmsg;         
 
 }
    

    

//let mailvalid = emailval();
            if(message.length > 0 ){
    e.preventDefault();
   
error.innerText = message;
 mailerr.innerText = succmsg;
nameerror.innerText = namemsg;
subjecterror.innerText = submsg;
 msgerror.innerText = mmsg;
            }
});

function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "sender@email_address.com", 
      Password: "Enter your password", 
      To: 'receiver@email_address.com', 
      From: "sender@email_address.com", 
      Subject: "Sending Email using javascript", 
      Body: "Well that was easy!!", 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 
  //**********A0E38
 // **********5944C
        
        