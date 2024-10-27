import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./components/TextInput";
import FileUpload from "./components/FileUpload";
import BiasProgress from "./components/BiasProgress";

const Container = styled.div`
  background-color: #1e293b; /* Slate background */
  color: #f97316; /* Orange theme */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #f97316;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ea580c;
  }

  &.back-button {
    margin-top: 20px;
    background-color: #1e40af;
  }
`;

function App() {
  const [mode, setMode] = useState(null); // null for no selection
  const [content, setContent] = useState(""); // Controlled state for text content
  const [showBiasProgress, setShowBiasProgress] = useState(false);
  const [biasPercentage, setBiasPercentage] = useState(0);

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    setContent(""); // Reset content when switching modes
  };

  const handleBack = () => {
    setMode(null); // Reset mode to show selection view
    setShowBiasProgress(false); // Hide progress on back
    setBiasPercentage(0); // Reset bias percentage
  };

  const handleCheckForBias = () => {
    setShowBiasProgress(true);
    setBiasPercentage(67); // Set static percentage to 67
  };

  return (
    <Container>
      <h1>Choose Input Method</h1>
      {mode === null ? (
        <ButtonContainer>
          <Button onClick={() => handleModeChange("text")}>Text Input</Button>
          <Button onClick={() => handleModeChange("file")}>File Upload</Button>
        </ButtonContainer>
      ) : mode === "text" ? (
        <>
          <TextInput content={content} setContent={setContent} onBack={handleBack} />
          <Button onClick={handleCheckForBias}>Check for Bias</Button>
        </>
      ) : (
        <>
          <FileUpload content={content} setContent={setContent} onBack={handleBack} />
          <Button onClick={handleCheckForBias}>Check for Bias</Button>
        </>
      )}

      {showBiasProgress && (
        <BiasProgress heading="Bias Detection Progress" percentage={biasPercentage} />
      )}
    </Container>
  );
}

export default App;
