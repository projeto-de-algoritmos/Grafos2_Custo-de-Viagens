import * as S from './styles';
import Nodes from '../../utils/capitals.json';
import { edges } from '../../utils/distances';
import { useEffect, useState } from 'react';
import { ReactComponent as BrazilMap } from '../../assets/mapa-brasil.svg';
import dijkstra from '../../utils/dijkstra';
const Map = () => {
  useEffect(() => {
    var icone = document.getElementById('DF');
    icone.style.fill = '#ff0202';
    console.log(icone);
    // console.log('test', dijkstra('Acre', 'Bahia'));
  }, []);

  return <BrazilMap />;
};

export default Map;
