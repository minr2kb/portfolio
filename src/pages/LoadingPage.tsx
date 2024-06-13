import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 40vh;
`;

const LoadingPage = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default LoadingPage;
