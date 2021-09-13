import SimpleSchema from 'simpl-schema'
import stamps from './stamps'
import { check } from 'meteor/check'

export const createSchema = (schemaObject) => {

  check(schemaObject, Object)

  const schema = Object.assign(schemaObject, stamps)

  return new SimpleSchema(schema)

}

export const userFields = { name: 1, role: 1, "emails.address": 1, suspended: 1 }