import * as S from './styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Flex } from 'reflexbox';
const MapCaption = ({ distanceArray }) => {
  return (
    <S.Wrapper>
      {distanceArray.map((capital) => (
        <Flex flexDirection="column" alignItems="center">
          {capital}
          <ArrowDownwardIcon />
        </Flex>
      ))}
    </S.Wrapper>
  );
};
export default MapCaption;
