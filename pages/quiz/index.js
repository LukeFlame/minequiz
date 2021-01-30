/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

export async function getServerSideProps(context) {
  const nameUser = context.query.name;

  return {
    props: {
      nameUser,
    },
  };
}

export default function QuizPageMain({ nameUser }) {
  return <QuizPage db={db} nameUser={nameUser} />;
}
