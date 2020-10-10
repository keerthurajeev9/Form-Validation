
$(function() {
    //name attribute is register
    $("form[name='register']").validate({
      rules: {
        fname: "required",
        lname: "required",
        agree: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        password2:{
            required: true,
            minlength: 6,
            equalTo:"#password" 
        }
      },
      messages: {
        fname: "Please provide your first name",
        lname: "Please provide your last name",
        password: {
          required: "Please enter a password",
          minlength: "Your password must be at least 6 characters long"
        },
        agree:"Please accept the terms and conditions",
        password2:{
            required: "Please enter a password",
            minlength: "Your password must be at least 6 characters long",
            equalTo:"Please enter the same password"
        },
        email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });