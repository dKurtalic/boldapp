const User = require('../models/User')
const mongoose = require('mongoose')

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Id' })
    }
}

//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//get a single user
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        checkId(userId)
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }

}

//create new user
const createUser = async (req, res) => {
    console.log("Sta je poslano u create: ")
    console.log(req.body)
    const { fullName, email, password, city } = req.body
    try {
        const newUser = await User.create({ fullName, email, password, city, ...req.body })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a user
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        // Delete the user from the database based on the userId
        checkId(userId)
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }

};

//update a user
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log("Sta je poslano : ")
        console.log(req.body)
        // Update the user in the database based on the userId
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};



module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
}