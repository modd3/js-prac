import React, { useState } from 'react';
import { createPrompt } from '../api/api';

const CreatePrompt = () => {
    const [title, setTitle] = useState('');
    const [template, setTemplate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPrompt({ title, template, category });
        setTitle('');
        setTemplate('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Template"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit">Create Prompt</button>
        </form>
    );
};

export default CreatePrompt;

