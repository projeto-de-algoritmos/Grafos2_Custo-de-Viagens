import * as S from './styles';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { Flex } from 'reflexbox';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const MapCaption = ({ distance, cost, car }) => {
  return (
    <S.Wrapper>
      {distance?.path?.map((capital, index) => {
        let color = index !== 0 ? '#58585a' : '#1cbe29';

        return (
          <Flex flexDirection="column" alignItems="center">
            {capital}

            {index !== distance?.path?.length - 1 && (
              <ArrowCircleDownOutlinedIcon style={{ color }} />
            )}
            {index === distance?.path?.length - 1 && (
              <LocationOnOutlinedIcon style={{ color: '#1c51c5' }} />
            )}
          </Flex>
        );
      })}
      <Flex alignItems="center" flexDirection="column" marginBottom="2rem">
        {typeof distance.distance === 'number' && (
          <p>Distância percorrida entre as capitais:{distance.distance} Km</p>
        )}
        {typeof cost === 'number' && (
          <p>Autonomia do carro:{car} Km/L</p>
        )}
        {typeof cost === 'number' && (
          <p>Custo:{Math.round(cost*100)/100} reais</p>
        )}
      </Flex>
    </S.Wrapper>
  );
};
export default MapCaption;
