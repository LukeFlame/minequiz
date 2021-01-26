import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <>
      <Head>
        <title>
          Minecraft Quiz
        </title>
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Minecraft Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={(i) => {
                    setName(i.target.value);
                  }}
                  type="text"
                  placeholder="Nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizzes</h1>
              <p>bagulho muito louco mano</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner />
      </QuizBackground>
    </>
  );
}
