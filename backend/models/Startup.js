const mongoose = require('mongoose')

const Schema = mongoose.Schema
const startupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    founders: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    members: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    skillsNeeded: {
        type: [String]
    },
    openPositions: {
        type: [String]
    },
    additionalFiles: {
        type: [{
            fileName: String,
            filePath: String
        }]
    },
    logo: {
        type: String
    },
    video: {
        type: String
    },
    location: {
        type: String
    }

}, { timestamps: true });

const Startup = mongoose.model('Startup', startupSchema);
module.exports = Startup;