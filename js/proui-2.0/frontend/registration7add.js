$(document).ready(function(){       
//      $.validator.addMethod("exactMatch", function(value, element, param) { 
 //        return this.optional(element) || value === param; 
 //    }, "You must enter {0}");

    $('#registration_form').validate({
        errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page
        errorElement: 'div',
        errorPlacement: function(error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function(e) {
            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function(e) {
            // You can use the following if you would like to highlight with green color the input after successful validation!
            e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
            e.closest('.help-block').remove();
        },
        rules: {
            reg_first_name: {
                required: true
            },
            reg_email_address: {
                required: true,
                email: true
            },
            reg_password: {
                required: true,
                equalTo: '#reg_confirm_password'
            },
            reg_confirm_password: {
                required: true
            }
        },
        messages: {
            reg_first_name: {
                required: 'Please enter your name'
            },
            reg_email_address: 'Please enter a valid email address',
            reg_password: {
                equalTo: 'Your password must match the confirm password'
            }
        }
    });
});
