/* eslint-disable react/prop-types */

import React from 'react';
import Widget from '../Widget';

function ResultWidget({ results, nameUser }) {
  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <p>
          Parabéns,
          {' '}
          <strong>{nameUser}</strong>
          {' '}
          você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          pergunta(s).
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result_${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
