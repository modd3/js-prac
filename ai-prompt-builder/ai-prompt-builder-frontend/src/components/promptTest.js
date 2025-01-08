import React, { useState } from "react";
import { fetchPrompts } from "../api/api";

const PromptTester = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleTestPrompt = async () => {
    try {
      const res = await fetchPrompts(prompt);
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Test Your Prompt</h2>
      <div className="mb-3">
        <label htmlFor="prompt" className="form-label">
          Enter Prompt
        </label>
        <textarea
          id="prompt"
          className="form-control"
          rows="4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here"
        />
      </div>
      <button onClick={handleTestPrompt} className="btn btn-success">
        Test Prompt
      </button>
      {response && (
        <div className="mt-4">
          <h5>AI Response:</h5>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default PromptTester;
