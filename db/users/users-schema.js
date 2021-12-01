const mongoose = require('mongoose')
const productsSchema = require('../products/products-schema')

const usersSchema = mongoose.Schema({
    // _id is automatically generated
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    dob: Date,
    email: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    role: {type: mongoose.Schema.Types.ObjectId, ref: 'RolesModel'},
    // for customers
    deliveryAddress: {
        addressLineOne: String,
        addressLineTwo: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
    referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    // shoppingCart
    shoppingCart: {totalPrice: Number, items: [{product: productsSchema, quantity: Number}]},
    // for suppliers
    companyName: String,
    revenue: Number,
}, {collection: "users", toObject: {virtuals: true}, toJSON: {virtuals: true}});

// to get referrals information
// to use it, Users.findOne().populate('referrals') to find all users
// referred by this user.
usersSchema.virtual('referrals', {
    ref: 'UsersModel',
    localField: '_id',
    foreignField: 'referredBy',
    justOne: false
});

module.exports = usersSchema;