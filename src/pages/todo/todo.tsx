import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../apis/api';

import TodoCreate from '../../components/TodoCreate';
import TodoList from '../../components/TodoList';

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
}

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([] as TodoType[]);

  const getTodo = async () => {
    const { data } = await apis.getTodos();
    setTodos(data);
  };

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/');

    (async () => {
      try {
        getTodo();
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navigate]);

  return (
    <Container>
      <TodoCreate getTodo={getTodo} />
      <ol>
        {todos.length > 0 &&
          todos.map(todo => <TodoList key={todo.id} todo={todo} getTodo={getTodo} />).reverse()}
      </ol>
      <button
        onClick={() => {
          localStorage.removeItem('access_token');
          navigate('/');
        }}
      >
        로그아웃
      </button>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 5px;
  }
`;
