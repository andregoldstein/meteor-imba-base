import { Meteor } from 'meteor/meteor'

const auth = {
	
	signupMode: false
	loading: false
	error: null

	name: ""
	email: ""
	password: ""

	user: Meteor.user!

	prepareRequest: do
		auth.error = null
		auth.loading = true
	
	resetFields: do
		auth.name = ""
		auth.email = ""
		auth.email = ""
	
	actionCallback: do(err)
		auth.loading = false
		err ? auth.error = err.reason : auth.resetFields!
		imba.commit!
	
	toggleMode: do
		auth.signupMode = !auth.signupMode
		auth.error = null
		imba.commit!
		
	login: do
		auth.prepareRequest!
		Meteor.loginWithPassword auth.email, auth.password, do(err) auth.actionCallback (err)
	
	signup: do
		auth.prepareRequest!
		// We are using our custom method here as opposed to Accounts.createUser so we can add further information (name, role etc...)
		Meteor.call "createAccount", { name: auth.name, email: auth.email, password: auth.password } do(err, id)
			err ? auth.error = err.reason : auth.login!
			
	logout: do
		Meteor.logout do
			auth.signupMode = false
			imba.commit!

}

export default auth