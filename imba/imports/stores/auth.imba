import { Meteor } from 'meteor/meteor'

const auth = {
	
	mode: "login"
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
		auth.password = ""
	
	actionCallback: do(err)
		auth.loading = false
		err ? auth.error = err.reason : auth.resetFields!
		imba.commit!
	
	setMode: do(value)
		auth.mode = value
		imba.commit!
		
	login: do
		auth.prepareRequest!
		Meteor.loginWithPassword auth.email, auth.password, do(err) auth.actionCallback (err)
	
	signup: do
		auth.prepareRequest!
		Meteor.call "createAccount", { name: auth.name, email: auth.email, password: auth.password } do(err, id)
			err ? auth.error = err.reason : auth.login!
			
	logout: do
		Meteor.logout do
			auth.mode = "login"
			auth.resetFields!
			imba.commit!
	
	reset: do
		console.log "Reset password"

}

export default auth