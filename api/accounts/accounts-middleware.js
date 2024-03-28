exports.checkAccountPayload = (req, res, next) => {
  console.log('Check Account Payload middleware')
  // DO YOUR MAGIC 
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
console.log('Check Account Name Unique middleware')
  // DO YOUR MAGIC 
  next()
}

exports.checkAccountId = (req, res, next) => {
console.log('Check Account ID middleware')
  // DO YOUR MAGIC 
  next()
}
