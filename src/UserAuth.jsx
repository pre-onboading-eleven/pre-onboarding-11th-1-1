import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import api from './api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 5px;
  }
`

function UserAuth() {
  const navigate = useNavigate();

  const [isSignin, setIsSignin] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // access token 있으면 todo로 redirect
  useEffect(() => { 
    const checkJwt = localStorage.getItem('access_token');

    if (checkJwt !== null) {
      navigate('/todo');
    };
  }, [navigate]);

  // 유효성 검사
  useEffect(() => { 
    if (email.includes('@') && password.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password])

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // fetch
  function handleUserAuth(e) {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    // console.log(data);

    // fetch
    fetch(isSignin ? api.signin() : api.signup(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token !== undefined) {
          alert(`정상적으로 ${isSignin ? "로그인" : "회원가입"} 되었습니다.`);
          localStorage.setItem("access_token", data.access_token);
          navigate("/todo");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(
          `${isSignin ? "로그인" : "회원가입"}에 문제가 있습니다. 확인해주세요`
        );
      });
  }

  return (
    <Container>
      <h2>프리온보딩 사전과제</h2>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          onChange={handleEmail}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          onChange={handlePassword}
          value={password}
        />
      </div>
      {disabled ? (
        <div style={{ color: "red" }}>
          이메일에는 @가 들어가고, 비밀번호는 8자 이상입니다
        </div>
      ) : null}
      <button
        type="button"
        disabled={disabled}
        onClick={handleUserAuth}
      >
        제출
      </button>
      {isSignin ? (
        <button
          type="button"
          onClick={() => setIsSignin(false)}
        >
          회원가입으로 전환
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsSignin(true)}
        >
          로그인으로 전환
        </button>
      )}
    </Container>
  );
}

export default UserAuth;
