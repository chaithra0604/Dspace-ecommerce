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

 
