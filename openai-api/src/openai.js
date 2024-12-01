// src/openai.js
import axios from 'axios';

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const presetQuestion = "Write me a short headline, caption, and button text for a dental agency slider. Separate onto 3 different lines.";

export const fetchAnswer = async () => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: presetQuestion }],
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error.response?.data || error.message);
    throw error;
  }
};
