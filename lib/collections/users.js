import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'
import { createSchema } from '../utils'

const schema = {
  name: { type: String, optional: true },
  role: { type: String, optional: true, allowedValues: ['member', 'admin', 'superadmin'], defaultValue: 'member' },
  services: { type: Object, optional: true, blackbox: true },
  emails: { type: Array, optional: true },
  'emails.$': { type: Object, optional: true },
  'emails.$.address': { type: String, regEx: SimpleSchema.RegEx.Email },
  'emails.$.verified': { type: Boolean },
  suspended: { type: Boolean, defaultValue: false, optional: true }
}

Meteor.users.attachSchema(createSchema(schema))

Meteor.users.helpers({
  email() { return this.emails[0] && this.emails[0].address },
  isAdmin() { return this.role && this.role === "admin" },
  isSuperAdmin() { return this.role && this.role === "superadmin" }
})