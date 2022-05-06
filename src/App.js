import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';

import './App.css';

import EntryInfo from './components/EntryInfo';
// import DictionaryFilter from './components/DictionaryFilter';
// import DictionaryTable from "./components/DictionaryTable";
import Dictionary from './components/Dictionary';
import Translate from "./components/Translate"

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
  paddingTop: lrem;
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
      <Title>SR Code</Title>

      <TwoColumnLayout>

        <div>
          <Translate/>

          <Dictionary />

        </div>
        <EntryInfo />          

      </TwoColumnLayout>
      
    </PageContainer>
  );
}

export default App;
