const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  
  firstName:{type:String},
  lastName:{type:String},
  age:{type:Number},
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

userSchema.virtual('events', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'orginzer'
});

module.exports = mongoose.model('User', userSchema)
