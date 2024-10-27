import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #1e293b; /* Slate background */
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #475569; /* Dark slate background */
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 20px;
  width: ${(props) => props.percentage}%;
  background-color: #f97316; /* Orange theme */
  transition: width 0.3s ease;
`;

const Heading = styled.h3`
  color: #f97316; /* Orange text */
  margin-top: 10px;
`;

function BiasProgress({ heading, percentage }) {
  return (
    <ProgressContainer>
      <ProgressBar>
        <ProgressFill percentage={percentage} />
      </ProgressBar>
      <Heading>{heading}</Heading>
    </ProgressContainer>
  );
}

export default BiasProgress;
