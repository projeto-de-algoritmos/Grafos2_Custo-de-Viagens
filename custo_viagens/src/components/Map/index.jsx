import * as S from './styles';
import Nodes from '../../utils/capitals.json';
import { edges } from '../../utils/distances';
import { useEffect, useState } from 'react';
import { ReactComponent as BrazilMap } from '../../assets/mapa-brasil.svg';
import dijkstra from '../../utils/dijkstra';
const Map = () => {
  useEffect(() => {
    // var icone = document.getElementById('Boa Vista');
    // console.log(icone);
    // icone.style.fill = '#58585a';
    // console.log('test', dijkstra('Acre', 'Bahia'));
  }, []);

  return <BrazilMap />;
};

export default Map;
