const Prompt = require('../models/prompt');

// Get all prompts with optional filtering and sorting
const getPrompts = async (req, res) => {
    try {
        const { category, sort } = req.query; // Get query parameters

        // Build the query object for filtering
        const filter = category ? { category } : {};

        // Determine sorting order
        const sortOption = sort === 'asc' ? { title: 1 } : sort === 'desc' ? { title: -1 } : {};

        // Fetch filtered and sorted prompts
        const prompts = await Prompt.find(filter).sort(sortOption);

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
