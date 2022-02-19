import { Flex } from 'reflexbox';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
const Form = () => {
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    const sourceInput = event.target.source;
    const targetInput = event.target.target;

    console.log(sourceInput.value);
    console.log(targetInput.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex width="300px" style={{ gap: '2rem' }} flexDirection="column">
        <TextField
          id="outlined-basic"
          label="Capital de Origem"
          variant="outlined"
          name="source"
          value={source}
        />
        <TextField
          id="outlined-basic"
          name="target"
          label="Capital de Destino"
          variant="outlined"
          value={target}
        />
        <Button type="submit" variant="contained">
          Calcular Menor Caminho
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
