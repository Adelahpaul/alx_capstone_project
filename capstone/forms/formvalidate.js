function validatate_form (){
const validateEmail = (email) => {

    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
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
//
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("name").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x == [a-z] || x == [A-Z] ) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
}