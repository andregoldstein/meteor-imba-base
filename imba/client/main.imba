import { Meteor } from 'meteor/meteor'
import { Auth } from '../imports/ui/pages'
import { Authenticated } from '../imports/ui/components'

import '../imports/ui/elements/forms'
import '../imports/ui/elements/messages'
import '../imports/ui/styles'

tag app

	def render
		
		<self>
			if Meteor.user!
				<Authenticated>
			else
				<Auth allowSignup=true>
			
imba.mount <app>