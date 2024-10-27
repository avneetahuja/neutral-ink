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
  padding: 20px;
`;

const Navbar = styled.nav`
  width: 100%;
  background-color: #1e40af; /* Dark blue theme */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 20px;
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightPanel = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #f97316;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #ea580c;
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
    setBiasPercentage(0); // Reset percentage to start animation from 0

    // Animate filling to 67%
    let percentage = 0;
    const interval = setInterval(() => {
      percentage += 5;
      if (percentage >= 67) {
        setBiasPercentage(67);
        clearInterval(interval);
      } else {
        setBiasPercentage(percentage);
      }
    }, 50);
  };

  return (
    <Container>
      <Navbar>
        <Logo>Neutral-Ink</Logo>
      </Navbar>
      <MainContent>
        <LeftPanel>
          <h1>Choose Input Method</h1>
          {mode === null ? (
            <>
              <Button onClick={() => handleModeChange("text")}>Text Input</Button>
              <Button onClick={() => handleModeChange("file")}>File Upload</Button>
            </>
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
        </LeftPanel>
        <RightPanel>
          {showBiasProgress && (
            <BiasProgress heading="Bias Detection Progress" percentage={biasPercentage} />
          )}
        </RightPanel>
      </MainContent>
    </Container>
  );
}

export default App;
