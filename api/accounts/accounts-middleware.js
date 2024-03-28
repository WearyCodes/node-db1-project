const Account = require('./accounts-model')

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

exports.checkAccountId = async (req, res, next) => {
console.log('Check Account ID middleware')
try {
  const account = await Account.getById(req.params.id)
  if (!account) {
    next({status: 404, message: 'not found'})
  } else {
    console.log('account => ', account)
    req.account = account
    next()
  }
} catch (err) {
  next(err)
}
}
