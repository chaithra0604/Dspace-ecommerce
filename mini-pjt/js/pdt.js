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
  $('.prdimg').click(function(){
    var smallimage=$(this).attr('src');
    $('#prdlgimg').attr('src',smallimage);
   })
   $('.increment-btn').click(function (e) {
    e.preventDefault();
    var incre_value = $(this).parents('.quantity').find('.qty-input').val();
    var value = parseInt(incre_value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
        $(this).parents('.quantity').find('.qty-input').val(value);
    }
  });
});



 
 