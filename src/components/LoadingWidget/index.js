/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Widget from '../Widget';

const Load = styled(Loader)`
    display: flex;
    flex: 1;
    margin-left: 35%;
    margin-right: 35%;
`;

function LoadingWidget({ db }) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        <Load type="ThreeDots" color={db.theme.colors.primary} height="40" width="100" align="center" />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
