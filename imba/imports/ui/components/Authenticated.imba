import { Meteor } from 'meteor/meteor'
import { Dashboard } from '../pages'
import auth from '../../stores/auth'

export default tag Authenticated

	<self>
		<Dashboard route="/$">
		<button @click=auth.logout> "Logout"