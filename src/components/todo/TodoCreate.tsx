import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import InputField from '../common/InputField';

import { apis } from '../../apis/api';

interface TodoListItemProps {
  getTodo(): Promise<void>;
}

const TodoCreate = ({ getTodo }: TodoListItemProps) => {
  const [todoInput, setTodoInput] = useState('');

  const onCreateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const createTodo = async () => {
    try {
      await apis.createTodo({
        todo: todoInput.trim(),
      });

      getTodo();
      setTodoInput('');
    } catch (error) {
      console.error(error);
    }
  };

  const onCreateTodo = () => {
    return () => {
      createTodo();
    };
  };

  return (
    <TodoCreateWrapper>
      <InputField
        value={todoInput}
        onChange={onCreateInput}
        width="300px"
        placeholder="추가할 Todo 작성해 주세요."
      />
      <Button bgColor="#003049" onClick={onCreateTodo()}>
        추가
      </Button>
    </TodoCreateWrapper>
  );
};

const TodoCreateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  border-radius: 20px;
  padding: 20px;

  label,
  input {
    margin-right: 10px;
  }
`;

export default TodoCreate;
