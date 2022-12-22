import * as React from 'react';
import styled from 'styled-components';

interface FieldProps {
  label: string;
  name: 'email' | 'password';
  type: React.HTMLInputTypeAttribute;
  wasSubmitted: boolean;
  setValid: React.Dispatch<React.SetStateAction<{ email: boolean; password: boolean }>>;
}

const fieldValidator = {
  email: (value: string | undefined) => {
    if (!value) return '필수로 입력해야합니다.';

    const valueIsEmailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(value);

    if (!valueIsEmailPattern) {
      return '이메일을 양식에 맞게 입력해주세요.';
    }

    return null;
  },
  password: (value: string | undefined) => {
    if (!value) return '필수로 입력해야합니다.';

    const valueIsLongEnough = value.length >= 8;

    if (!valueIsLongEnough) {
      return '8글자 이상이여야 합니다.';
    }

    return null;
  },
};

const Field = ({ name, label, type, wasSubmitted, setValid }: FieldProps) => {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const errorMessage = fieldValidator[name](value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  React.useEffect(() => {
    if (displayErrorMessage) setValid(prev => ({ ...prev, [name]: false }));
    else setValid(prev => ({ ...prev, [name]: true }));
  }, [displayErrorMessage, name, setValid]);

  return (
    <Container>
      <InputContainer>
        <AuthLabel htmlFor={name}>{label}</AuthLabel>
        <AuthInput
          type={type}
          name={name}
          id={name}
          value={value}
          onBlur={() => setTouched(true)}
          onChange={e => setValue(e.target.value)}
        />
      </InputContainer>

      {displayErrorMessage && <ErrorP>{displayErrorMessage}</ErrorP>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: 60px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthLabel = styled.label`
  width: 20%;
`;

const AuthInput = styled.input`
  width: 80%;
  height: 25px;
`;

const ErrorP = styled.p`
  padding-left: 20%;
  margin: 0;
  margin-top: 10px;
  color: #c1111f;
`;

export default Field;
