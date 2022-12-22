import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../apis/api';

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
  // const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('access_token')) navigate('/');

    (async () => {
      try {
        const { data } = await apis.getTodos();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navigate]);

  return (
    <Container>
      {/* <div>
        <label htmlFor="create">추가</label>
        <input type="text" name="create" value={inputValue} onChange={handleInput} />
        <button type="button" onClick={handleCreateTodo}>
          추가
        </button>
      </div> */}
      <ol>
        {todos.length > 0 && todos.map((todo: TodoType) => <TodoList key={todo.id} todo={todo} />)}
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
