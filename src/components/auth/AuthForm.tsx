import { AxiosError } from 'axios';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <form onSubmit={handleSubmit}>
      <h1>{authInfo.title}</h1>
      {fields.map(field => (
        <Field key={field.name} wasSubmitted={wasSubmitted} setValid={setValid} {...field} />
      ))}
      <p>
        {authInfo.toLinkMessage}
        <Link to={authInfo.toLink}>
          <button type="button">{authInfo.toLinkButton}</button>
        </Link>
      </p>
      <button disabled={!disabled}>{authInfo.title}</button>
    </form>
  );
}

export default AuthForm;
