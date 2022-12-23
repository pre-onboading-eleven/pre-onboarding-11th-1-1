import { AxiosError } from 'axios';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apis } from '../../apis/api';
import Field from './AuthField';

interface AuthFormProps {
  type: 'signin' | 'signup';
}

interface FieldType {
  name: 'email' | 'password';
  label: string;
  type: React.HTMLInputTypeAttribute;
}

const fields: FieldType[] = [
  { name: 'email', label: '이메일', type: 'email' },
  { name: 'password', label: '패스워드', type: 'password' },
];

function AuthForm({ type }: AuthFormProps) {
  const [valid, setValid] = React.useState({
    email: false,
    password: false,
  });
  const [success, setSuccess] = React.useState(false);
  const [wasSubmitted, setWasSubmitted] = React.useState(false);
  const navigate = useNavigate();
  const disabled = Object.values(valid).every(v => v);
  const authInfo =
    type === 'signin'
      ? {
          title: '로그인',
          toLink: '/signup',
          toLinkMessage: '아직 회원이 아니십니까?',
          toLinkButton: '회원가입',
        }
      : {
          title: '회원가입',
          toLink: '/',
          toLinkMessage: '이미 회원이십니까?',
          toLinkButton: '로그인',
        };

  const authApiCallback = (data: Object) => {
    if (type === 'signin') return apis.postSignIn(data);
    return apis.postSignUp(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(false);
    setWasSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    setWasSubmitted(true);

    try {
      const response = await authApiCallback(fieldValues);

      if (response.data) {
        alert(`${authInfo.title}에 성공했습니다.`);
        window.localStorage.setItem('access_token', response.data.access_token);
        setSuccess(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) alert(error.response?.data.message);
    }
  };

  React.useEffect(() => {
    if (success) return navigate('/todo', { replace: true });
  }, [navigate, success]);

  React.useEffect(() => {
    const accessToken = window.localStorage.getItem('access_token');
    if (accessToken) navigate('/todo', { replace: true });
  }, [navigate]);

  return (
    <AuthFrom onSubmit={handleSubmit}>
      <AuthTitle>{authInfo.title}</AuthTitle>
      {fields.map(field => (
        <Field key={field.name} wasSubmitted={wasSubmitted} setValid={setValid} {...field} />
      ))}
      <AuthP>
        {authInfo.toLinkMessage}
        <Link to={authInfo.toLink}>
          <LinkButton type="button">{authInfo.toLinkButton}</LinkButton>
        </Link>
      </AuthP>
      <AuthButton disabled={!disabled}>{authInfo.title}</AuthButton>
    </AuthFrom>
  );
}

const AuthFrom = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  height: 350px;
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  color: #003049;
`;

const AuthTitle = styled.h1`
  text-align: center;
  color: #003049;
  padding-bottom: 20px;
  border-bottom: 1px solid #003049;
`;

const AuthP = styled.p`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 0;
  margin: 0;
`;

const LinkButton = styled.button`
  background: #003049;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  padding: 5px 15px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  }
`;

const AuthButton = styled.button`
  background: #fdf0d5;
  color: #003049;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  padding: 5px 15px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  }

  &:disabled {
    cursor: not-allowed;
    background: #d2d2d2;
    color: white;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export default AuthForm;
