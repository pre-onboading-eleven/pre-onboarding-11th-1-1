import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from './api';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 5px;
  }
`;
const Completed = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
`;
const Todoitem = styled.span`
  display: inline-block;
  min-width: 100px;
`;

function Todo() {
  const AUTHORIZATION = `Bearer ${localStorage.getItem("access_token")}`;
  
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIdx, setUpdateIdx] = useState(null);

  useEffect(() => {
    fetch(api.getTodos(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  useEffect(() => {
    const checkJwt = localStorage.getItem("access_token");

    if (checkJwt === null) {
      navigate("/");
    }
  }, [navigate]);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleCreateTodo() {
    fetch(api.createTodo(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
      body: JSON.stringify({todo: inputValue})
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } 
      })
      .then((data) => {
        setTodos([...todos, data]);
        console.log(todos)
        setInputValue('');
      });
  }

  function handleDeleteTodo(serverId, arrayId) {
    setIsUpdate(false);

    fetch(api.deleteTodo(serverId), {
      method: "DELETE",
      headers: {
        Authorization: AUTHORIZATION,
      },
    }).then((res) => {
      // console.log(res);
      if (res.status === 204) {
        setTodos(todos.filter((item, idx) => idx !== arrayId));
        alert("삭제 되었습니다")
      } else {
        alert("삭제 되지 않았습니다.");
      }
    });
  }

  function handleUpdateValue(e, id) {
    setUpdateValue(e.target.value)
  }
  
  function handleUpdateTodo(serverId, arrayId, isCompleted) {
    fetch(api.updateTodo(serverId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTHORIZATION,
      },
      body: JSON.stringify({
        todo: updateValue.length === 0 ? todos[arrayId].todo : updateValue,
        isCompleted: isCompleted,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(todos.map((item, idx) => (idx === arrayId ? data : item)));
        setIsUpdate(false);
        setUpdateValue('')
      });
  }

  return (
    <Container>
      <div>
        <label htmlFor="create">추가</label>
        <input
          type="text"
          name="create"
          value={inputValue}
          onChange={handleInput}
        />
        <button
          type="button"
          onClick={handleCreateTodo}
        >
          추가
        </button>
      </div>
      <ol>
        {todos.length > 0 &&
          todos.map((item, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) =>
                  handleUpdateTodo(item.id, idx, e.target.checked)
                }
              />
              <Completed>{item.isCompleted ? "완료" : "미완"}</Completed>
              {isUpdate && idx === updateIdx ? (
                <>
                  <input
                    type="text"
                    name="create"
                    value={updateValue}
                    onChange={(e) => handleUpdateValue(e, item.id)}
                  />
                  <button
                    onClick={() =>
                      handleUpdateTodo(item.id, idx, item.isCompleted)
                    }
                  >
                    제출
                  </button>
                  <button onClick={() => setIsUpdate(false)}>수정취소</button>
                </>
              ) : (
                <>
                  <Todoitem>{item.todo}</Todoitem>
                  <button
                    onClick={() => {
                      setUpdateIdx(idx);
                      setIsUpdate(true);
                    }}
                  >
                    수정
                  </button>
                  <button onClick={() => handleDeleteTodo(item.id, idx)}>
                    삭제
                  </button>
                </>
              )}
            </li>
          ))}
      </ol>
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          navigate("/");
        }}
      >
        로그아웃
      </button>
    </Container>
  );
}

export default Todo