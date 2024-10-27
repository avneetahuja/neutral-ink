import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  color: #f97316; /* Orange text */
  background-color: #1e293b; /* Slate background */
  border: 2px solid white; /* White border */
  border-radius: 5px;
  resize: none;
  margin-top: 10px;
`;

const BackButton = styled.button`
  background-color: #1e40af;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

function TextInput({ content, setContent, onBack }) {
  return (
    <div>
      <h2>Enter Text</h2>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your text here..."
      />
      <BackButton onClick={onBack}>Back</BackButton>
    </div>
  );
}

export default TextInput;
