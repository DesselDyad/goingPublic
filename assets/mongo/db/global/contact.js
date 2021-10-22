const Contact_Message = require('../../../models/global/contact_message');

module.exports = {
    submitForm: (req) => {
        return new Promise(async (resolve, reject) => {
			var dateTime = require('node-datetime');
			var dt = dateTime.create();
			var formatted = dt.format('Y-m-d H:M:S');
			var name = req.body.name;
            var sender = req.body.email;
			var username = req.body.username;
            var message = req.body.message;
            var subject = req.body.subject;
            var receiver = req.body.receiver;
			var created = formatted.toString();

			// Validation
			req.checkBody('name', 'Name is required').notEmpty();
			req.checkBody('email', 'Sender is required').notEmpty();
			req.checkBody('email', 'Sender is not valid').isEmail();
			req.checkBody('email2', 'Emails do not match').equals(req.body.email);
			req.checkBody('subject', 'Subject is required').notEmpty();
			req.checkBody('message', 'Message is required').notEmpty();
            if(username == '' || username == undefined || username == null) {
                username = '';
            }
			var errors = req.validationErrors();

			if (errors) {
				resolve({errors: errors});
			}
			else {
                var newMessage = new Contact_Message({
                    sender_name: name,
                    sender_username: username,
                    sender_email: sender,
                    receiver: receiver,
                    subject: subject,
                    message: message,
                    created: created
                });
                newMessage.save(newMessage, function (err, message) {
                    if (err) reject(err);
                });
                resolve({
                    'success_msg': 'message succesfully sent'
                });
			}
        })
    }
}