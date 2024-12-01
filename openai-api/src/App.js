// src/App.js
import React, { useState } from 'react';
import { fetchAnswer } from './openai'; // Import the function to call OpenAI API

function App() {
  const [answer, setAnswer] = useState(""); // State to store the answer
  const [loading, setLoading] = useState(false); // Loading state to show progress

  const handleFetchAnswer = async () => {
    setLoading(true); // Set loading state to true when fetching
    try {
      const response = await fetchAnswer();
      setAnswer(response); // Set the answer from OpenAI to state
    } catch (error) {
      setAnswer("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };

  return (
    <div className="App">
      <h1>OpenAI API Example</h1>
      <button onClick={handleFetchAnswer} disabled={loading}>
        {loading ? "Loading..." : "Generate Slider Text"}
      </button>
      {answer && (
        <div>
          <h2>Generated Content:</h2>
          <pre>{answer}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
