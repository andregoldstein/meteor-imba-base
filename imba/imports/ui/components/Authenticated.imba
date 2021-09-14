import { Meteor } from 'meteor/meteor'
import auth from '../../stores/auth'
export default tag Authenticated

	get user do Meteor.user!
	
	<self>
		<h1> "Welcome back"
		<p> JSON.stringify user
		<button @click=auth.logout> "Logout"