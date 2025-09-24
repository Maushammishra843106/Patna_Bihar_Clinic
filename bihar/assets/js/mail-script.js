    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });

    

  // Auto year
  document.getElementById('pbhc-year').textContent = new Date().getFullYear();

  // Basic newsletter demo (front-end only)
  function pbhcSubscribe(e) {
    e.preventDefault();
    const email = document.getElementById('pbhc-email').value.trim();
    const msg = document.getElementById('pbhc-msg');

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      msg.textContent = "Please enter a valid email address.";
      return false;
    }
    msg.textContent = "Thanks for subscribing! We’ll keep you posted.";
    e.target.reset();
    return false;
  }



  // Automatically update the year
  document.getElementById("pbhc-year").textContent = new Date().getFullYear();



//   *****************book appointment*************
document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
});

// *********************carousel********************
