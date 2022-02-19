import { Flex } from 'reflexbox';
import * as S from './styles';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
const Navbar = () => {
  return (
    <S.NavContainer>
      <DirectionsCarFilledOutlinedIcon fontSize="large" />
      <h2>Custo de viagem</h2>
    </S.NavContainer>
  );
};

export default Navbar;
