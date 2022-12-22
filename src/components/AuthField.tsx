import * as React from 'react';
import styled from 'styled-components';

interface FieldProps {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  wasSubmitted: boolean;
}

const Field = ({ name, label, type, wasSubmitted }: FieldProps) => {
  const [value, setValue] = React.useState('');
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Field;
