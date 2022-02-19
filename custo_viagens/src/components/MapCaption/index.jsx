import * as S from './styles';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { Flex } from 'reflexbox';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const MapCaption = ({ distance }) => {
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
      {typeof distance.distance === 'number' && (
        <p>Distancia passando por cada capital:{distance.distance} Km</p>
      )}
    </S.Wrapper>
  );
};
export default MapCaption;
