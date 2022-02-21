import { Flex } from 'reflexbox';
import {
  FormHelperText,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from '@mui/material';
import { useState } from 'react';
import { edges } from '../../utils/distances';
import { Graph } from '../../utils/dijkstra';
import MapCaption from '../MapCaption';
import capitals from '../../utils/capitals.json';
import { handleTimeout } from '../../utils/handleTimeout';
import { asyncForEach } from '../../utils/asyncForEach';
import { ReactComponent as BrazilMap } from '../../assets/mapa-brasil.svg';
import * as S from './styles';
const Form = () => {
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const [distance, setDistance] = useState([]);
  const [cost, setCost] = useState([]);
  const [car, setCar] = useState([]);

  const capitalGraph = new Graph();

  capitals.forEach((capital) => {
    capitalGraph.addVertex(capital);
  });

  Object.entries(edges).forEach((edge, index) => {
    const key = edge[0];
    const value = edge[1];
    capitalGraph.addEdge(key.split(':')[0], key.split(':')[1], value);
  });

  const resetMap = () => {
    capitals.forEach((capital) => {
      var capitalMap = document.getElementById(capital);
      capitalMap.style.fill = '#D3DEE2';
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetMap();
    const sourceInput = event.target.source;
    const targetInput = event.target.target;
    const carInput = car;
    const shortestPath = capitalGraph.dijkstra(
      sourceInput.value,
      targetInput.value
    );

    setDistance(shortestPath);
    const distanceFloat = parseFloat(shortestPath.distance)
    setCost(distanceFloat * 7 / carInput);
    setCar(carInput);
    asyncForEach(shortestPath.path, async (capital, index) => {
      let capitalMap = document.getElementById(capital);
      await handleTimeout(0.5);
      if (index === 0) {
        capitalMap.style.fill = '#1cbe29';
      } else if (index === shortestPath.path.length - 1) {
        capitalMap.style.fill = '#1c51c5';
      } else {
        capitalMap.style.fill = '#58585a';
      }
    });
  };

  const handleChangeSource = (event) => {
    const sourceInput = event.target.value;
    setSource(sourceInput);
  };

  const handleChangeTarget = (event) => {
    const targetInput = event.target.value;
    setTarget(targetInput);
  };

  function carAutonomy(event) {
    setCar(event.target.value);
  }

  return (
    <Flex justifyContent="space-between" minWidth="100%">
      <div>
        <form onSubmit={handleSubmit}>
          <Flex width="310px" style={{ gap: '2rem' }} flexDirection="column">
            <h3 style={{ color: '#218d84' }}>
              Selecione as capitais e calcule a distância
            </h3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Cidade de Origem
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={source}
                name="source"
                label="Cidade de origem"
                onChange={handleChangeSource}
              >
                {capitals?.map((capital, index) => (
                  <MenuItem key={index} value={capital}>
                    {capital}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Cidade de Destino
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={target}
                name="target"
                label="Cidade de destino"
                onChange={handleChangeTarget}
              >
                {capitals?.map((capital, index) => (
                  <MenuItem key={index} value={capital}>
                    {capital}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id='demo-simple-input-label'>
                  Autonomia do carro em Km/L
              </InputLabel>
              <Input
                labelId="demo-simple-input-label"
                id="demo-simple-input-label"
                value={car}
                name="car"
                label = "Autonomia do carro em Km/L"
                onChange={carAutonomy}
              />
              <FormHelperText>Utilize o ponto para valores decimais</FormHelperText>            
            </FormControl>
            <Button type="submit" variant="contained">
              Calcular Menor Caminho
            </Button>
          </Flex>
        </form>
      </div>
      <S.MapContainer>
        <MapCaption distance={distance} cost={cost} car={car}/>
        <BrazilMap />
      </S.MapContainer>
    </Flex>
  );
};

export default Form;
