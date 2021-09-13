import { Meteor } from 'meteor/meteor'

const auth = {
	
	signupMode: false
	loading: false
	error: null

	user: Meteor.user!

	prepareRequest: do
		auth.error = null
		auth.loading = true
	
	actionCallback: do(err)
		auth.loading = false
		auth.error = err.reason if err
		imba.commit!
	
	toggleMode: do
		auth.signupMode = !auth.signupMode
		auth.error = null
		imba.commit!
		
	login: do(email, password)
		auth.prepareRequest!
		Meteor.loginWithPassword email, password, do(err) auth.actionCallback (err)
	
	signup: do(email, password)
		console.log email, password
		auth.prepareRequest!
		Accounts.createUser { email, password }, do(err) auth.actionCallback (err)
	
	logout: do
		Meteor.logout do
			auth.signupMode = false
			imba.commit!

}

export default auth