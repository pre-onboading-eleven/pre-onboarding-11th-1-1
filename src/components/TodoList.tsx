import React, {useState} from 'react';
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
  const [, setShowDefaultBtn] = useState(true);
  const [, setShowUpdateBtn] = useState(false);


  const onUpdateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onUpdateCheckBox = async () => {
    setIsCompleted(prev => !prev);
    try {
      await apis.updateTodo(
        todo.id,
        {
          todo: todoText,
          isCompleted: !isCompleted,
        },
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onUpdateMode = () => {
    setReadOnly(!readOnly);
    setDisabled(!disabled);

    setShowDefaultBtn(false);
    setShowUpdateBtn(true);
  };

  const updateTodo = (e:any, id: number, todo: string, isCompleted: boolean) => {
    e.preventDefault();
    if (!todo) return alert('수정할 내용을 입력하세요');

    apis.updateTodo(id, {
        todo,
        isCompleted,
      })
      .then(res => {
        if (res.status === 200) {
          getTodo();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const deleteTodo = (id: number) => {
    apis
      .deleteTodo(id)
      .then(res => {
        if (res.status === 204) {
          getTodo();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const cancelTodo = () => {
    setTodoText(todo.todo);
    setIsCompleted(todo.isCompleted);
    setReadOnly(!readOnly);
    setDisabled(!disabled);
    setShowDefaultBtn(true);
    setShowUpdateBtn(false);
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
          // className={completed ? 'done' : ''}
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

// const Completed = styled.span`
//   display: inline-block;
//   margin-right: 10px;
//   font-weight: 700;
// `;
// const Todoitem = styled.span`
//   display: inline-block;
//   min-width: 100px;
// `;
