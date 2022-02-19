import React from 'react';
import Map from './components/Map';
import Navbar from './components/Navbar';
import { Flex, Box } from 'reflexbox';
import Form from './components/Form';
function App() {
  return (
    <Box minHeight="100vh">
      <Navbar />
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Map />
        <Form />
      </Flex>
    </Box>
  );
}

export default App;
