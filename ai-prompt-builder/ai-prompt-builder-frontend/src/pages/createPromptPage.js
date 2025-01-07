import React from "react";
import { createPrompt } from "../api/api";
import CreatePrompt from "../components/createPrompt";

const CreatePromptPage = () => {
  const handleCreatePrompt = async (newPrompt) => {
    await createPrompt(newPrompt);
    alert("Prompt created successfully!");
  };

  return (
    <div>
      <h1>Create a New Prompt</h1>
      <CreatePrompt onSubmit={handleCreatePrompt} />
    </div>
  );
};

export default CreatePromptPage;
