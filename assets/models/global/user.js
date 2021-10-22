var mongoose = require('mongoose');

// User Schema
module.exports = mongoose.model('User', mongoose.Schema({
	local: {
		account: {
			username: {
				type: String,
				index: true
			},
			password: { type: String }
		},
		contact_info: {
			name: { type: String },
			email: { type: String }
		},
		preferences: {
			profile_searchable: { type: Boolean },
			theme: { type: String }
		},
		forum: {
			postCount: {type: Number,
						default: 0},
			threadCount: {type: Number,
						default: 0}
		},
		profile_img: { type: String },
		role: { type: String },
		created: { 
			type: String,
			default: new Date().toLocaleString('en-GB', {timeZone: 'GMT'})
		},
		signature: {type: String}
	},
	facebook: {
		id: { type: String },
		token: { type: String },
		email: { type: String },
		name: { type: String },
		profile_picture: { type: String }
	},
	google: {
		id: { type: String },
		token: { type: String },
		email: { type: String },
		name: { type: String }
	},
	github: {
		id: { type: String },
		token: { type: String },
		name: { type: String },
		profile_url: { type: String },
		email: { type: String },
		profile_img: { type: String },
		followers: { type: String },
		following: { type: String },
		gists: { type: String },
		repos: { type: String },
		location: { type: String },
		bio: { type: String },
		created_at: { type: String },
		updated_at: { type: String }
	}
}),
'users'
);

