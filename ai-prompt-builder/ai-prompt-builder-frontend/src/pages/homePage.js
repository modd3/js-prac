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
      <h1>Prompt List</h1>
      <PromptList prompts={prompts} />
    </div>
  );
};

export default Home;
