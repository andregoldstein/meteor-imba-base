import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

const auth = {
	
	mode: "login"
	loading: false
	error: null
	success: null
	
	name: ""
	email: ""
	password: ""

	get user
		let user
		Tracker.autorun do user = Meteor.user!
		imba.commit!
		return user

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
	
	sendReset: do
		auth.prepareRequest!
		Accounts.forgotPassword { email: auth.email }, do(err)
			auth.loading = false
			if err
				auth.error = err.reason
			else
				auth.success = "An email has been sent with password reset instructions"
				auth.mode = "login"
			imba.commit!

	reset: do(token, password)
		auth.prepareRequest!
		Accounts.resetPassword token, password, do(err)
			auth.loading = false
			return auth.error = err.reason if err
			globalThis.window.location.href = "/"
			imba.commit!
	

}

export default auth
