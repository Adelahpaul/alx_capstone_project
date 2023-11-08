const nameEl = document.getElementById('name').value;
const emailEl = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const textarea = document.getElementById('message').value;

function sendEmail(e){
e.prventDefault();

Email.send({

     Host : "smtp.elasticemail.com",
     Username : "skater200@gmail.com",
     Password : "966D6A50E5916956FA51395A3F692EDDBB0B",
     To : 'pauladelah1@gmail.com',
     name: nameEl,
     From : emailEl,
     Subject : subject,
     Body : textarea
 }).then(
   message => alert(message)
 );
 return true;
  } 



  // pass 966D6A50E5916956FA51395A3F692EDDBB0B
 // username skater200@gmail.comC