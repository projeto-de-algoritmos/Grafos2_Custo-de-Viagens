import React from 'react';
import Map from './components/Map';
import Navbar from './components/Navbar';
import { Flex, Box } from 'reflexbox';
import Form from './components/Form';
import * as S from './AppStyle';
function App() {
  return (
    <>
      <Navbar />
      <Flex minHeight="100vh" justifyContent="center">
        <S.Wrapper>
          <h2>Encontrar menor caminho para viajar pelas capitais</h2>
          <Flex justifyContent="space-between" alignItems="center">
            <Form />
            <Map />
          </Flex>
        </S.Wrapper>
      </Flex>
    </>
  );
}

export default App;
