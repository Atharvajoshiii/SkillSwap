import express from 'express';
import SkillSwap from '../models/userinfo.js'; // Import your Mongoose model correctly

const router = express.Router();

// Middleware to validate userId in headers
const validateUserId = (req, res, next) => {
    const userId = req.header('Clerk-User-Id'); // Custom header to carry Clerk user ID

    if (!userId) {
        return res.status(400).json({ message: 'Missing user ID in headers.' });
    }

    req.userId = userId; // Attach userId to the request object
    next();
};

// POST: Add SkillSwap Details
router.post('/skillswap', validateUserId, async (req, res) => {
    try {
        const { name, email, phoneNumber, skillsToLearn, skillsToTeach, socialLinks } = req.body;
        const userId = req.userId;

        // Check if user already has details added
        const existingDetails = await SkillSwap.findOne({ userId });
        if (existingDetails) {
            return res.status(400).json({ message: 'Details already exist. Please update instead.' });
        }

        // Create a new SkillSwap entry
        const skillSwap = new SkillSwap({
            userId,
            name,
            email,
            phoneNumber,
            skillsToLearn,
            skillsToTeach,
            socialLinks
        });

        await skillSwap.save();
        res.status(201).json({ message: 'Details added successfully!', data: skillSwap });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Update SkillSwap Details
router.put('/skillswap', validateUserId, async (req, res) => {
    try {
        const { name, email, phoneNumber, skillsToLearn, skillsToTeach, socialLinks } = req.body;
        const userId = req.userId;

        // Find the user's existing details and update them
        const updatedDetails = await SkillSwap.findOneAndUpdate(
            { userId }, // Find by userId
            {
                name,
                email,
                phoneNumber,
                skillsToLearn,
                skillsToTeach,
                socialLinks
            },
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedDetails) {
            return res.status(404).json({ message: 'No details found to update. Please add details first.' });
        }

        res.status(200).json({ message: 'Details updated successfully!', data: updatedDetails });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Export the router as default
export default router;
