const Prompt = require('../models/Prompt');

// Get all prompts
const getPrompts = async (req, res) => {
    try {
        const prompts = await Prompt.find();
        res.status(200).json(prompts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new prompt
const createPrompt = async (req, res) => {
    try {
        const { title, template, category } = req.body;
        const newPrompt = new Prompt({ title, template, category });
        await newPrompt.save();
        res.status(201).json(newPrompt);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getPrompts, createPrompt };
