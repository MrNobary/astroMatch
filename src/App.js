import axios from "axios";
import styled from "styled-components";
import './index.css'
import { ScreenApp } from "./Pages/ScreenApp/screenApp";

function App() {

  const clearMatchs = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Enzo-Machado-Moreira/clear')
    .then((res) => {
      alert('Matches Deletados')
    })
  }

  return (
    <WebApp>
      <ScreenApp />
      <button onClick={clearMatchs}>Clear Matches</button>
    </WebApp>
  );
}

export default App;

const WebApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;

  height: 100vh;
  background-color: #6099CB;
`