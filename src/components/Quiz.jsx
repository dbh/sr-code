import React from 'react';
import styled from "@emotion/styled";
import { CssBaseline } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

import { Button } from '@material-ui/core';

import useStore from '../store';

const Title = styled.h1`
  text-align: center;`

const PageContainer = styled.div`
  margin: auto; 
  width: 800;
  paddingTop: lrem;
`

const Question = styled.h3`
  margin: auto;
`

const renderQuestionAndAnswers = (question, qIndex) => {
  return <div key={question.key}>
  <Question>{question.key}</Question>                                        
  { renderAnswers(qIndex, question.answers)}
  <p/>
</div>

};

const renderAnswers = (qIndex, answers) => {
  return answers.map((answer,aIndex) => (
    <div key={qIndex+'-'+aIndex}>
      <input type="radio" name={answer} value={aIndex}/>{answer}
    </div>
  ));
}

const Quiz = () => {
  const quiz = useStore(state => state.quiz);
  const setQuiz = useStore(state => state.setQuiz);

  React.useEffect(() => {
    fetch('http://localhost:3000/data/quiz.json')
      .then(resp => resp.json())
      .then(setQuiz)
  }, [setQuiz]);
  // with empty array, useEffect triggers only once at beginning

  if (!quiz) {
    console.log('Loading quiz');
    return <div>Loading Quiz</div>;
  } else {
    console.log(quiz);
  }


    return (
        <PageContainer>
        <CssBaseline />
        <Title>Quiz</Title>
        <center><h2>Shaindel Rivka's 1st Quiz</h2></center>

        {quiz
          .map((entry, index) => (
            renderQuestionAndAnswers(entry, index)
          ))} 
        
          <Button 
            variant="contained" 
            color="primary" 
            // onClick={() => onClick (entry)}
            onClick={() => {
              console.log("Button")
            }}
            >submit
          </Button>

        </PageContainer>
    );
}

export default Quiz;