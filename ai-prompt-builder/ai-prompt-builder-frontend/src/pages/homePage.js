import React, { useState, useEffect } from 'react';
import { fetchPrompts } from '../api/api';

const HomePage = () => {
  const [prompts, setPrompts] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        if (category) params.category = category;
        if (sort) params.sort = sort;

        const res = await fetchPrompts(params);
        setPrompts(res.data);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    };

    fetchData();
  }, [category, sort]);

  return (
    <div className="container">
      <h1>Prompts</h1>

      {/* Filter by category */}
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Filter by Category
        </label>
        <input
          type="text"
          id="category"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>

      {/* Sort prompts */}
      <div className="mb-3">
        <label htmlFor="sort" className="form-label">
          Sort by Title
        </label>
        <select
          id="sort"
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Display prompts */}
      <ul className="list-group">
        {prompts.map((prompt) => (
          <li key={prompt._id} className="list-group-item">
            <a href={`/test?prompt=${encodeURIComponent(prompt.template)}`}>
              {prompt.title}
            </a>
            <p>Category: {prompt.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
