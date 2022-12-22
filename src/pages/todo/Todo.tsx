import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../apis/api';

import TodoCreate from '../../components/todo/TodoCreate';
import TodoList from '../../components/todo/TodoList';
import Button from '../../components/common/Button';

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

  const onClickLogoutButton = () => {
    localStorage.removeItem('access_token');
    navigate('/');
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
    <SectionLayout>
      <h2>Todo List Page</h2>
      <TodoCreate getTodo={getTodo} />
      <ol className="todoList">
        {todos.length === 0 ? (
          <strong>Todo 리스트가 비어 있습니다.</strong>
        ) : (
          todos.map(todo => <TodoList key={todo.id} todo={todo} getTodo={getTodo} />).reverse()
        )}
      </ol>
      <div className="logOutBtn">
        <Button bgColor="#c1121f" onClick={onClickLogoutButton}>
          로그아웃
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Todo;

const SectionLayout = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 768px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 10px;

  border-radius: 15px;

  background-color: #eeeeee;
  background-origin: content-box;

  .todoList {
    list-style-type: none;
    padding: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 500px;
    padding: 20px;

    border-radius: 10px;
  }

  .logOutBtn {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
