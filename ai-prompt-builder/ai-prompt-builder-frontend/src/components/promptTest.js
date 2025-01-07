import React, { useState } from 'react';
import axios from 'axios';

const PromptTester = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const { data } = await axios.post('http://localhost:5000/api/hugface', { prompt });
      setResponse(data.response || 'No response received');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while fetching the response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Prompt Tester</h1>
      <form onSubmit={handlePromptSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="5"
          cols="50"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Submit Prompt'}
        </button>
      </form>
      <div>
        {loading && <p>Loading response...</p>}
        {response && (
          <div>
            <h3>AI Response:</h3>
            <p>{response}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default PromptTester;
