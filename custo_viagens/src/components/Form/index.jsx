import { Flex } from 'reflexbox';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import capitals from '../../utils/capitals.json';
import { edges } from '../../utils/distances';
import { dijkstra } from '../../utils/dijkstra';
import MapCaption from '../MapCaption';

const Form = () => {
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const [distanceArray, setDistance] = useState([]);

  const graph = {};

  capitals.forEach((capital) => {
    graph[capital] = {};
  });

  Object.entries(edges).forEach((edge) => {
    const key = edge[0];
    const value = edge[1];

    const firstCapital = { [key.split(':')[0]]: value };
    const secondCapital = { [key.split(':')[1]]: value };

    Object.assign(graph[key.split(':')[1]], firstCapital);
    Object.assign(graph[key.split(':')[0]], secondCapital);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const sourceInput = event.target.source;
    const targetInput = event.target.target;

    console.log(sourceInput.value, targetInput.value);
    const shortestPath = dijkstra(graph, sourceInput.value, targetInput.value);
    setDistance(shortestPath.path);
    shortestPath.path.forEach((path, index) => {
      var icone = document.getElementById(path);
      console.log(index, shortestPath.path.length);
      if (index === 0) icone.style.fill = '#1cbe29';
      else if (index === shortestPath.path.length - 1) {
        icone.style.fill = '#1c51c5';
      } else {
        icone.style.fill = '#58585a';
      }
    });
  };
  return (
    <Flex style={{ gap: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <Flex width="300px" style={{ gap: '2rem' }} flexDirection="column">
          <h3 style={{ color: '#218d84' }}>Preencha e calcule a distância</h3>
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
      <MapCaption distanceArray={distanceArray} />
    </Flex>
  );
};

export default Form;
