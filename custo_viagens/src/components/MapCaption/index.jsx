import * as S from './styles';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { Flex } from 'reflexbox';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const MapCaption = ({ distanceArray }) => {
  return (
    <S.Wrapper>
      {distanceArray.map((capital, index) => {
        let color = index !== 0 ? '#58585a' : '#1cbe29';

        return (
          <Flex flexDirection="column" alignItems="center">
            {capital}

            {index !== distanceArray?.length - 1 && (
              <ArrowCircleDownOutlinedIcon style={{ color }} />
            )}
            {index === distanceArray?.length - 1 && (
              <LocationOnOutlinedIcon style={{ color: '#1c51c5' }} />
            )}
          </Flex>
        );
      })}
    </S.Wrapper>
  );
};
export default MapCaption;
