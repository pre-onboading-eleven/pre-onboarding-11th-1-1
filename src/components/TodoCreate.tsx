import * as React from 'react';
import { apis } from '../apis/api';

interface TodoListItemProps {
  getTodo(): Promise<void>;
}

const TodoCreate = ({ getTodo }: TodoListItemProps) => {
  const [todoInput, setTodoInput] = React.useState('');

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
    <div>
      <label htmlFor="create">추가</label>
      <input type="text" name="create" value={todoInput} onChange={onCreateInput} />
      <button type="button" onClick={onCreateTodo()}>
        추가
      </button>
    </div>
  );
};

export default TodoCreate;
