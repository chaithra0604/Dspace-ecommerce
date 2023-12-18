
$(document).ready(function() {
    $('#subscriptionForm').submit(function(event) {
      event.preventDefault(); 
  
      const email = $('#emailInput').val().trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(email)) {
        alert('Valid email. Now you can submit the form.');
        console.log('Submitted email:', email);
        $(this).unbind('submit').submit(); 
      } else {
        alert('Please enter a valid email address');
      }
    });
  });

  submitButton = () => {
    if(document.getElementById("firstName").value===""){
      document.getElementById("error").innerHTML='Please enter your First Name!!!';
    }
    else if (document.getElementById("lastName").value == '') {
        document.getElementById("error").innerHTML = 'Please enter your Last Name!!!';
  
    }
    
  else if (document.getElementById("country").value == '') {
    document.getElementById("error").innerHTML = 'Please select Your Country!!!';

}
    else if (document.getElementById("address").value == '') {
        document.getElementById("error").innerHTML = 'Please enter your Address!!!';
  
    }
    else if (document.getElementById('code').value == '') {
        document.getElementById("error").innerHTML = 'Please enter Zipcode!!!';
  
    }
    else if (document.getElementById('town').value == '') {
      document.getElementById("error").innerHTML = 'Please enter Town!!!';
  
  }
  else if (document.getElementById('phone').value == '') {
    document.getElementById("error").innerHTML = 'Please enter Phone number!!!';
  
  }
  else if (document.getElementById('email').value == '') {
    document.getElementById("error").innerHTML = 'Please enter Email!!!';
  
  }
  else{
    document.getElementById("error").innerHTML = 'Successfully Placed Order';
    
      document.getElementById('checkoutform').submit();
    
  }
  }