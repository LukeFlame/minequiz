/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizPage from '../../src/screens/Quiz';

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((resDoServer) => {
      if (resDoServer.ok) {
        return resDoServer.json();
      }

      throw new Error('Falha ao pegar os dados');
    })
    .then((resInObject) => resInObject)
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}

function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPage db={dbExterno} />
    </ThemeProvider>
  );
}

export default QuizDaGaleraPage;
