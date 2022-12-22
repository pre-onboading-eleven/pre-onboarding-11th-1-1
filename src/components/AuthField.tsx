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
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onBlur={() => setTouched(true)}
          onChange={e => setValue(e.target.value)}
        />
      </div>

      {displayErrorMessage && <p>{displayErrorMessage}</p>}
    </Container>
  );
};

const Container = styled.div``;

export default Field;
