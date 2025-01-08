import React, { useEffect, useState } from "react";
import { fetchPrompts } from "../api/api";
import PromptList from "../components/promptList";


const Home = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const loadPrompts = async () => {
      const data = await fetchPrompts();
      setPrompts(data);
    };
    loadPrompts();
  }, []);

  return (
    <div>
      <div className="container my-5">
      <h1 className="display-4 text-center">Welcome to AI Prompt Builder</h1>
      <p className="lead text-center">
        Create and test your AI prompts with ease using our platform.
      </p>
      </div>
      <PromptList prompts={prompts} />
    </div>
  );
};

export default Home;
