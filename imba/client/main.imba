import { Meteor } from 'meteor/meteor'
import { Authenticated, Visitor } from '../imports/ui/components'
import auth from '../imports/stores/auth'

import '../imports/ui/elements/forms'
import '../imports/ui/elements/messages'
import '../imports/ui/styles'

tag app

	def render

		<self>
			if auth.user
				<Authenticated>
			else
				<Visitor>
			
imba.mount <app>