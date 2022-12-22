import React from 'react';
import styled from 'styled-components';

const Button = ({
  bgColor,
  children,
  onClick,
}: {
  bgColor: string;
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <ButtonWrapper bgColor={bgColor} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ bgColor: string }>`
  padding: 10px 20px;

  border: none;
  border-radius: 10px;

  background-color: ${props => props.bgColor};

  color: #fff;
  font-weight: 700;
  font-size: 16px;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${props => props.bgColor}ba;
  }
`;

export default Button;
