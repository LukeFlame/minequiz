/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../Widget';
import AlternativeForm from '../AlternativeForm';
import Button from '../Button';
import BackLinkArrow from '../BackLinkArrow';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasSelectedAlternative = selectedAlternative !== undefined;
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.4 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativeForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsFormSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setIsFormSubmited(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 3000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isFormSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  defaultChecked={false}
                  checked={false}
                  disabled={isFormSubmited}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}
          <Button type="submit" disabled={!hasSelectedAlternative || isFormSubmited}>
            Confirmar
          </Button>
          <p>
            Alternativa selecionada:
            {(selectedAlternative >= 0) ? selectedAlternative + 1 : ''}
          </p>
          {isFormSubmited && isCorrect && <p>Correto!</p>}
          {isFormSubmited && !isCorrect && <p>Incorreto!</p>}
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
