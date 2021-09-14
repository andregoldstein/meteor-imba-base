import {commit as imba_commit} from 'imba'/*$path$*/;

/*body*/
import {Meteor} from 'meteor/meteor'/*$path$*/;

const auth = {
	
	signupMode: false,
	loading: false,
	error: null,
	
	name: "",
	email: "",
	password: "",
	
	user: Meteor.user(),
	
	prepareRequest: function() {
		
		auth.error = null;
		return auth.loading = true;
	},
	
	resetFields: function() {
		
		auth.name = "";
		auth.email = "";
		return auth.email = "";
	},
	
	actionCallback: function(err) {
		
		auth.loading = false;
		err ? (auth.error = err.reason) : auth.resetFields();
		return imba_commit();
	},
	
	toggleMode: function() {
		
		auth.signupMode = !auth.signupMode;
		auth.error = null;
		return imba_commit();
		
	},
	login: function() {
		
		auth.prepareRequest();
		return Meteor.loginWithPassword(auth.email,auth.password,function(err) { return auth.actionCallback((err)); });
	},
	
	signup: function() {
		
		auth.prepareRequest();
		// We are using our custom method here as opposed to Accounts.createUser so we can add further information (name, role etc...)
		return Meteor.call("createAccount",{name: auth.name,email: auth.email,password: auth.password},function(err,id) {
			
			return err ? (auth.error = err.reason) : auth.login();
			
		});
	},
	logout: function() {
		
		return Meteor.logout(function() {
			
			auth.signupMode = false;
			return imba_commit();
		});
	}
};

export default auth;
