
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px ridge pink;
  &:hover {
   background-color: yellow;
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const OutsetBoxStyledC = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
  👤  CTRL+CMD+SPACE para los emoticonos
  </Div>
);

export default OutsetBoxStyledC;