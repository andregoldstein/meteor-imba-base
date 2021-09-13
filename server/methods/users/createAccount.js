import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check'

Meteor.methods({

  createAccount({ name, email, password } = {}) {

    check(name, String)
    check(email, String)
    check(password, String)

    // First create the new user
    const userId = Accounts.createUser({ email, password })

    // Now set the user's name or any other information (not possible during account creation)
    Meteor.users.update(userId, { $set: { name } })

    // Return the userId to the front-end in case required
    return userId

  }

})