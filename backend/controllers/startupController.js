const Startup = require('../models/Startup')
const mongoose = require('mongoose')

const checkId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Id' })
    }
}
const createStartup = async (req, res) => {
    const { name, description, founders } = req.body
    try {
        const newStartup = await Startup.create({ name, description, founders, ...req.body })
        res.status(200).json(newStartup)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllStartups = async (req, res) => {
    try {
        const startups = await Startup.find({}).sort({ createdAt: -1 })
        res.status(200).json(startups)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getStartup = async (req, res) => {
    try {
        const startupId = req.params.id;
        checkId(startupId)
        const startup = await Startup.findById(startupId);
        if (!startup) {
            return res.status(404).json({ message: 'Startup not found' });
        }
        res.json(startup);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteStartup = async (req, res) => {
    try {
        const startupId = req.params.id;

        checkId(startupId)
        const deletedStartup = await Startup.findByIdAndDelete(startupId);

        if (!deletedStartup) {
            return res.status(404).json({ message: 'Startup not found' });
        }
        res.status(200).json({ message: 'Startup deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateStartup = async (req, res) => {
    try {
        const startupId = req.params.id;
        const updatedStartup = await Startup.findByIdAndUpdate(startupId, req.body, { new: true });

        if (!updatedStartup) {
            return res.status(404).json({ message: 'Startup not found' });
        }

        res.status(200).json(updatedStartup);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    createStartup,
    getAllStartups,
    getStartup,
    deleteStartup,
    updateStartup
}