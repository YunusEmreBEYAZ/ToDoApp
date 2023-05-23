import mongoose from 'mongoose';
import bcrypt from 'bcrypt';  // for high level security
import validator from 'validator';

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup mehtod
userSchema.statics.signup = async function (email, password) {

    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Please enter a valid email!')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Please use strong password!')
    }
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email is already used!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user


}

// static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled!')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect email or user not found')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorect password!')
    }

    return user;
}

export default mongoose.model('User', userSchema)