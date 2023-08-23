import React from "react";
import { styled } from "styled-components";
import CSSContentBox from "./components/CSSContentBox";

function App() {
  return (
    <Container>
      <CSSContentBox />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
`;

export default App;
