import mongoose from "mongoose";


const skillSwapSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
    },
    phoneNumber: {
        type: String,
        required: false,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please provide a valid phone number.']
    },
    skillsToLearn: {
        type: [String], // Array of strings
        required: true
    },
    skillsToTeach: {
        type: [String], // Array of strings
        required: true
    },
    socialLinks: {
        linkedin: {
            type: String,
            match: [/^https:\/\/(www\.)?linkedin\.com\/.*$/, 'Please provide a valid LinkedIn URL.']
        },
        github: {
            type: String,
            match: [/^https:\/\/(www\.)?github\.com\/.*$/, 'Please provide a valid GitHub URL.']
        },
        twitter: {
            type: String,
            match: [/^https:\/\/(www\.)?twitter\.com\/.*$/, 'Please provide a valid Twitter URL.']
        },
        instagram: {
            type: String,
            match: [/^https:\/\/(www\.)?instagram\.com\/.*$/, 'Please provide a valid Instagram URL.']
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model using ES Modules syntax
const SkillSwap = mongoose.model('SkillSwap', skillSwapSchema);
export default SkillSwap;
