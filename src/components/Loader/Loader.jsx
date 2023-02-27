import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => (
  <Wrapper>
    <ThreeDots
      height="60"
      width="160"
      radius="9"
      color="#148e59"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </Wrapper>
);
