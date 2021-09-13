import { Meteor } from 'meteor/meteor'
import auth from '../../stores/auth'

export default tag Authenticated
	<self>
		<h1> "Welcome back"
		<p> JSON.stringify Meteor.user!
		<button @click=auth.logout> "Logout"