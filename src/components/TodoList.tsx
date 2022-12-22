import * as React from 'react';

import { apis } from '../apis/api';
import { TodoType } from '../pages/todo/Todo';

interface TodoListItemProps {
  todo: TodoType;
  getTodo(): Promise<void>;
}

const TodoList = ({ todo, getTodo }: TodoListItemProps) => {
  const [todoText, setTodoText] = React.useState(todo.todo);
  const [isCompleted, setIsCompleted] = React.useState(todo.isCompleted);
  const [readOnly, setReadOnly] = React.useState(true);
  const [disabled, setDisabled] = React.useState(true);

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
    <div className="todoListItem">
      <input
        type="checkbox"
        id={'checkbox' + todo.id}
        defaultChecked={isCompleted}
        onClick={onUpdateCheckBox}
      ></input>
      <label htmlFor={'checkbox' + todo.id}></label>
      <form>
        <input type="text" value={todoText} readOnly={readOnly} onChange={onUpdateText}></input>
        {!disabled && <button onClick={onUpdatedTodo(todo.id, todoText, isCompleted)}>완료</button>}
      </form>
      {disabled && <button onClick={onUpdateMode}>수정</button>}
      {disabled && <button onClick={onDeletedTodo(todo.id)}>삭제</button>}
      {!disabled && <button onClick={onCancelTodo}>취소</button>}
    </div>
  );
};

export default TodoList;
