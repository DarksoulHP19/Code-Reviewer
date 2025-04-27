import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from 'axios';
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

import './App.css';

function App() {
  const [code, setCode] = useState(`function sum(){
    return a + b;
  }`);
  
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setReview('');       // ← Clear previous review
      setIsLoading(true);  // ← Set loading to true

      const response = await axios.post(
        import.meta.env.VITE_BEND_API,
        { code }
      );

      const data = response.data; // Full response text
      fakeStreaming(data);        // ← Call fake stream function
    } catch (error) {
      console.error('Error fetching review:', error);
      setReview('Failed to fetch review. Please try again.');
      setIsLoading(false);
    }
  }

  // Simulate word-by-word typing animation
  function fakeStreaming(text) {
    let index = 0;
    const interval = setInterval(() => {
      setReview(prev => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 10); // typing speed (ms) per character
  }

  return (
    <>
    <header>
      <h1>Code-Reviewer</h1>
      <div className="scroll-text">
        <p>
          Please check your codes efficiency and understand your code.
          </p>
      </div>
    </header>
      <main>
        <div className="left">
          <div className="code">
            <Editor 
              value={code}
              onValueChange={setCode}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: '1px solid #ddd',
                borderRadius: '5px',
                height: '100%',
                width: '100%'
              }}
            />
          </div>
          <div 
            className="review"
            onClick={isLoading ? null : reviewCode}  // Disable click while loading
            style={{ opacity: isLoading ? 0.5 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
          >
            {isLoading ? 'Loading...' : 'Review'}
          </div>
        </div>

        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App;
