import * as S from './styles';
import Graph from 'react-vis-network-graph';
import Nodes from '../../utils/capitals.json';
import { edges } from '../../utils/distances';
import { useEffect, useState } from 'react';
const Map = () => {
  const [edgesMap, setEdgesMap] = useState([]);
  const [graph, setGraph] = useState({});
  useEffect(() => {
    const edgeKeys = Object.keys(edges);
    const edgesArray = edgeKeys.map((key, id) => {
      const edgesObject = {
        from: key.split(':')[0],
        to: key.split(':')[1],
        id: id,
      };
      return edgesObject;
    });
    setEdgesMap(edgesArray);

    const graph = {
      nodes: Nodes,
      edges: edgesArray,
    };

    setGraph(graph);
  }, []);

  const options = {
    layout: {
      improvedLayout: true,
      randomSeed: '0.9558227310873193:1645152125451',
    },
    edges: {
      color: '#000000',
      arrows: {
        to: {
          enabled: false,
        },
      },
    },
    physics: {
      enabled: false,
    },
    nodes: {
      borderWidth: 1,
      size: 10,
      //fixed:true,
      physics: false,
      color: {
        border: '#b9a21f',
        background: '#cf0e0e',
      },
      font: {
        color: '#000000',
      },
    },
    fixed: {
      x: true,
      y: true,
    },

    height: '600px',
    width: '600px',
    // interaction: {
    //   dragNodes: false,
    //   dragView: false,
    //   zoomView: false,
    // },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
  return (
    <S.Wrapper>
      <S.GraphContainer>
        {graph?.edges?.length && (
          <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={(network) => {
              console.log(network.getSeed());
              //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
          />
        )}
      </S.GraphContainer>
      <S.MapContainer>
        <img
          src="/assets/imgs/mapa-brasil.jpg"
          alt="mapa brazil"
          width="600px"
        />
      </S.MapContainer>
    </S.Wrapper>
  );
};

export default Map;
