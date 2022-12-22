import React from 'react';
// import styled from 'styled-components';
// import { apis } from './apis/api';
import { TodoType } from '../pages/todo/Todo';

const TodoList = ({ todo }: {todo: TodoType}) => {
  console.log(todo);
  // const [updateValue, setUpdateValue] = useState('');
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [updateIdx, setUpdateIdx] = useState(null);

  // function handleDeleteTodo(serverId, arrayId) {
  //   setIsUpdate(false);

  //   fetch(api.deleteTodo(serverId), {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: AUTHORIZATION,
  //     },
  //   }).then(res => {
  //     // console.log(res);
  //     if (res.status === 204) {
  //       setTodos(todos.filter((item, idx) => idx !== arrayId));
  //       alert('삭제 되었습니다');
  //     } else {
  //       alert('삭제 되지 않았습니다.');
  //     }
  //   });
  // }

  // function handleUpdateValue(e, id) {
  //   setUpdateValue(e.target.value);
  // }

  // function handleUpdateTodo(serverId, arrayId, isCompleted) {
  //   fetch(api.updateTodo(serverId), {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: AUTHORIZATION,
  //     },
  //     body: JSON.stringify({
  //       todo: updateValue.length === 0 ? todos[arrayId].todo : updateValue,
  //       isCompleted: isCompleted,
  //     }),
  //   })
  //     .then(res => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //     })
  //     .then(data => {
  //       setTodos(todos.map((item, idx) => (idx === arrayId ? data : item)));
  //       setIsUpdate(false);
  //       setUpdateValue('');
  //     });
  // }

  return (
    <div className="todoListItem">
      <input
        type="checkbox"
        id={'checkbox' + todo.id}
        checked={todo.isCompleted}
        // disabled={disabled}
        // onChange={checkboxStatus}
      ></input>
      <label htmlFor={'checkbox' + todo.id}></label>
      <input
        // className={completed ? 'done' : ''}
        type="text"
        value={todo.todo}
        // readOnly={readOnly}
        // onChange={onChange}
        // onKeyUp={onKeyUp}
      ></input>
      {/* <div className={'btn' + (showDefaultBtn ? ' isShow' : ' isHide')} onClick={onUpdateMode}>
        수정
      </div>
      <div className={'btn' + (showDefaultBtn ? ' isShow' : ' isHide')} onClick={deleteTodo}>
        삭제
      </div>
      <div className={'btn light' + (showUpdateBtn ? ' isShow' : ' isHide')} onClick={updateTodo}>
        완료
      </div>
      <div className={'btn light' + (showUpdateBtn ? ' isShow' : ' isHide')} onClick={cancleTodo}>
        취소
      </div> */}
    </div>
  );
};

export default TodoList

// const Completed = styled.span`
//   display: inline-block;
//   margin-right: 10px;
//   font-weight: 700;
// `;
// const Todoitem = styled.span`
//   display: inline-block;
//   min-width: 100px;
// `;