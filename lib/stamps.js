const createdAt = {
  type: Date,
  autoValue() { if (this.isInsert) return new Date() }
}

const updatedAt = {
  type: Date,
  optional: true,
  autoValue() { if (this.isUpdate) return new Date() }
}

const createdBy = {
  type: String,
  optional: true,
  autoValue() {
    if (!this.isInsert) return
    return this.userId || "0"
  }
}

const updatedBy = {
  type: String,
  optional: true,
  autoValue() {
    if (!this.isUpdate) return
    return this.userId || "0"
  }
}

export default { createdAt, updatedAt, createdBy, updatedBy }