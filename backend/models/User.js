const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
    },
    skills: {
        type: [String]
    },
    interests: [String],
    startupIds: {
        type: [Schema.Types.ObjectId],
        ref: 'Startup'
    },
    likedStartups: {
        type: [Schema.Types.ObjectId],
        ref: 'Startup'
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;
