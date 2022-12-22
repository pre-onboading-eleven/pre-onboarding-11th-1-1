import React, { useState } from 'react';
// import styled from 'styled-components';
import { apis } from '../apis/api';
import { TodoType } from '../pages/todo/Todo';

interface TodoListItemProps {
  todo: TodoType;
  getTodo: () => void;
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
    setReadOnly(!readOnly);
    setDisabled(!disabled);
  };

  const updateTodo = async (e: React.SyntheticEvent, id: number, todo: string, isCompleted: boolean) => {
    e.preventDefault();
    if (!todo) return alert('수정할 내용을 입력하세요');

    
    try {
      await apis.updateTodo(id, {
        todo,
        isCompleted,
      });
      getTodo();
      setReadOnly(!readOnly);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await apis.deleteTodo(id);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const cancelTodo = () => {
    setTodoText(todo.todo);
    setIsCompleted(todo.isCompleted);
    setReadOnly(!readOnly);
    setDisabled(!disabled);
  };

  return (
    <div className="todoListItem">
      <input
        type="checkbox"
        id={'checkbox' + todo.id}
        defaultChecked={isCompleted}
        onClick={onUpdateCheckBox}
      ></input>
      <label htmlFor={'checkbox' + todo.id}></label>
      <form>
        <input
          type="text"
          value={todoText}
          readOnly={readOnly}
          onChange={onUpdateText}
        ></input>
        <button onClick={e => updateTodo(e, todo.id, todoText, isCompleted)}>완료</button>
      </form>
      <button onClick={onUpdateMode}>수정</button>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      <button onClick={cancelTodo}>취소</button>
    </div>
  );
};

export default TodoList;
