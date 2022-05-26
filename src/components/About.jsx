import React from 'react';
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';
// import '../../App.css';

const Title = styled.h1`
  text-align: center;`

const PageContainer = styled.div`
  margin: auto; 
  width: 800;
  paddingTop: lrem;
`

const About = () => {
    return (
        <PageContainer>
        <CssBaseline />
        <Title>About</Title>
        </PageContainer>
    );
}

export default About;