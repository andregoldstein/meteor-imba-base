import { Meteor } from 'meteor/meteor'
import { Dashboard } from '/imports/ui/pages'
import auth from '/imports/stores/auth'

export default tag Authenticated

	<self>
		<Dashboard route="/$">
		<button @click=auth.logout> "Logout"