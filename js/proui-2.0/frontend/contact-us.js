$(document).ready(function(){       
	$.validator.addMethod("exactMatch", function(value, element, param) { 
        return this.optional(element) || value === param; 
    }, "You must enter {0}");

    $('#contactform').validate({
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
            name: {
                required: true
            },
            email_address: {
                required: true,
                email: true
            },
            comments: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Please enter your name'
            },
            email_address: 'Please enter a valid email address',
            comments: 'Please enter your comments or questions'
        }
    });
	// $('.w-map-h').gMap({
	// 	controls: {
	// 		panControl: false,
	// 		zoomControl: true,
	// 		mapTypeControl: true,
	// 		scaleControl: false,
	// 		streetViewControl: false,
	// 		overviewMapControl: false
	// 	},
	// 	address: "Grimes, IA 50111, United States",
	// 	zoom: 8,
	// 	markers:[
	// 		{
	// 			address: "Grimes, IA 50111, United States",
	// 			html: "MyAttendanceTracker Office",
	// 			icon: {
	// 				image: "/images/proui-2.0/map-pin.png",
	// 				iconsize: [34, 50],
	// 				iconanchor: [12, 46]
	// 			},
	// 			popup: false
	// 		}
	// 	]
	// });
});
