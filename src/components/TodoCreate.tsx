import React, { useState } from 'react';
import { apis } from '../apis/api';

interface TodoListItemProps {
  getTodo: () => void;
}

const TodoCreate = ({ getTodo }: TodoListItemProps) => {
  const [todoInput, setTodoInput] = useState('');

  const onCreateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const createTodo = async () => {
    try {
      await apis.createTodo({
        todo: todoInput,
      });
      getTodo();
      setTodoInput('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="create">추가</label>
      <input type="text" name="create" value={todoInput} onChange={onCreateInput} />
      <button type="button" onClick={createTodo}>
        추가
      </button>
    </div>
  );
};

export default TodoCreate;
