import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';

import './App.css';

// import WordInfo from './components/WordInfo';
import DictionaryFilter from './components/DictionaryFilter';
import DictionaryTable from "./components/DictionaryTable";

import useStore from './store';

const Title = styled.h1`
  text-align: center;`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`

const PageContainer = styled.div`
  margin: auto; 
  width: 800;
  paddingTop: lrem
`

function App() {
  const dictionary = useStore(state => state.dictionary);
  const setDictionary = useStore(state => state.setDictionary);

  React.useEffect(() => {
    fetch('http://localhost:3000/dictionary.json')
      .then(resp => resp.json())
      .then(setDictionary)
  }, [setDictionary]);
  // with empty array, useEffect triggers only once at beginning

  if (!dictionary) {
    return <div>Loading Data</div>;
  }

  return (
    <PageContainer>
      <CssBaseline />
      <Title>Dictionary Search</Title>

      <TwoColumnLayout>

        <div>

          <DictionaryFilter />
          <DictionaryTable />

        </div>
        {/* <WordInfo />           */}

      </TwoColumnLayout>
      
    </PageContainer>
  );
}

export default App;
