import {commit as imba_commit} from 'imba'/*$path$*/;

/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;

const auth = {
	
	signupMode: false,
	loading: false,
	error: null,
	
	user: Meteor.user(),
	
	prepareRequest: function() {
		
		auth.error = null;
		return auth.loading = true;
	},
	
	actionCallback: function(err) {
		
		auth.loading = false;
		if (err) { auth.error = err.reason };
		return imba_commit();
	},
	
	toggleMode: function() {
		
		auth.signupMode = !auth.signupMode;
		auth.error = null;
		return imba_commit();
		
	},
	login: function(email,password) {
		
		auth.prepareRequest();
		return Meteor.loginWithPassword(email,password,function(err) { return auth.actionCallback((err)); });
	},
	
	signup: function(email,password) {
		
		console.log(email,password);
		auth.prepareRequest();
		return Accounts.createUser({email: email,password: password},function(err) { return auth.actionCallback((err)); });
	},
	
	logout: function() {
		
		return Meteor.logout(function() {
			
			auth.signupMode = false;
			return imba_commit();
		});
	}
};

export default auth;
