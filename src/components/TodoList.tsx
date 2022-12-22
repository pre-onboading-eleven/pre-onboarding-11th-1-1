import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './common/Button';
import InputField from './common/InputField';

import { apis } from '../apis/api';
import { TodoType } from '../pages/todo/todo';

interface TodoListItemProps {
  todo: TodoType;
  getTodo(): Promise<void>;
}

const TodoList = ({ todo, getTodo }: TodoListItemProps) => {
  const [todoText, setTodoText] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [readOnly, setReadOnly] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const onUpdateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onUpdateCheckBox = async () => {
    setIsCompleted(prev => !prev);
    try {
      await apis.updateTodo(todo.id, {
        todo: todoText,
        isCompleted: !isCompleted,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onUpdateMode = () => {
    setReadOnly(prevState => !prevState);
    setDisabled(prevState => !prevState);
  };

  const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
    if (!todo) return alert('수정할 내용을 입력하세요');

    try {
      await apis.updateTodo(id, {
        todo,
        isCompleted,
      });

      getTodo();
      setReadOnly(true);
      setDisabled(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onUpdatedTodo = (id: number, todo: string, isCompleted: boolean) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      updateTodo(id, todo, isCompleted);
    };
  };

  const deleteTodo = async (id: number) => {
    try {
      await apis.deleteTodo(id);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const onDeletedTodo = (id: number) => {
    return () => {
      deleteTodo(id);
    };
  };

  const onCancelTodo = () => {
    setTodoText(todo.todo);
    setIsCompleted(todo.isCompleted);
    setReadOnly(true);
    setDisabled(true);
  };

  return (
    <TodoItemWrapper>
      <div className="checkBox">
        <input
          type={'checkbox'}
          id={'checkbox' + todo.id}
          defaultChecked={isCompleted}
          onClick={onUpdateCheckBox}
        />
        <label htmlFor={'checkbox' + todo.id}>
          <strong>{isCompleted ? '' : '미완료'}</strong>
        </label>
      </div>
      <div className="todoInput">
        {!disabled ? (
          <InputField value={todoText} readOnly={readOnly} onChange={onUpdateText} width="300px" />
        ) : (
          <div className="todoText">{todoText}</div>
        )}
      </div>
      {disabled && (
        <div className="buttonGroup">
          <Button bgColor="#003049" onClick={onUpdateMode}>
            수정
          </Button>
          <Button bgColor="#c1121f" onClick={onDeletedTodo(todo.id)}>
            삭제
          </Button>
        </div>
      )}

      {!disabled && (
        <div className="buttonGroup">
          <Button bgColor="#003049" onClick={onUpdatedTodo(todo.id, todoText, isCompleted)}>
            완료
          </Button>
          <Button bgColor="#a8a8a8" onClick={onCancelTodo}>
            취소
          </Button>
        </div>
      )}
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  margin-bottom: 10px;
  padding: 15px;

  border-radius: 15px;

  background-color: #fff;

  .todoText {
    word-break: break-all;
  }

  .checkBox {
    margin-bottom: 10px;
  }

  .checkBox input {
    margin-right: 5px;
  }

  .todoInput {
    margin-bottom: 10px;
  }

  .buttonGroup {
    display: flex;
    justify-content: flex-end;

    button {
      margin: 5px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default TodoList;
