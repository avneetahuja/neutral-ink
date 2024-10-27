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

const StyledFileButton = styled.button`
  background-color: #f97316;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;

  &:hover {
    background-color: #ea580c;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

function FileUpload({ content, setContent, onBack }) {
  const hiddenFileInput = React.useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target.result); // Set content as file's text
      };
      reader.readAsText(file);
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click(); // Trigger click on hidden file input
  };

  return (
    <div>
      <h2>Upload File</h2>
      <StyledFileButton onClick={handleClick}>Choose File</StyledFileButton>
      <HiddenFileInput
        type="file"
        accept=".txt"
        ref={hiddenFileInput}
        onChange={handleFileChange}
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your file content will appear here..."
      />
      <BackButton onClick={onBack}>Back</BackButton>
    </div>
  );
}

export default FileUpload;
