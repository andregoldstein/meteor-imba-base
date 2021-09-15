import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  
  console.log("Server started up")

  Accounts.urls.resetPassword = (token) => {
    return Meteor.absoluteUrl(`reset-password/${token}`)
  }
  
})