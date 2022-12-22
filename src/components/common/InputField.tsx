import React from 'react';
import styled from 'styled-components';

const InputField = ({
  id,
  value,
  onChange,
  readOnly,
  width,
  placeholder,
}: {
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  width?: string;
  placeholder?: string;
}) => {
  return (
    <InputFieldWrapper
      id={id}
      value={value}
      onChange={onChange}
      disabled={readOnly}
      widthSize={width}
      placeholder={placeholder ?? ''}
    />
  );
};

const InputFieldWrapper = styled.input<{ widthSize: string | undefined }>`
    font-family: inherit
    font-size: inherit
    outline: none;
    padding: 0;

    border: 1px solid #d4d4d4;
    border-radius: 10px;
    padding: 10px;
    padding-right: 0;

    width: ${props => props.widthSize ?? ''};

    transition: all 200ms ease-in-out;

    &:focus {
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default InputField;
