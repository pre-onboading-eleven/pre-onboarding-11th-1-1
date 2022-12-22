import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';

function Signin() {
  return (
    <Wrapper>
      <AuthForm type="signin" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Signin;
