const { default: mongoose } = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true}
})

const authLoginSchema = mongoose.models.authLoginSchema
  ? mongoose.models.authLoginSchema // If already defined, use the existing model
  : mongoose.model('authLoginSchema', LoginSchema); // Otherwise, create a new model

module.exports = authLoginSchema;