import * as React from 'react';
import Field from '../../components/AuthField';

const fields = [
  { name: 'email', label: '이메일', type: 'email' },
  { name: 'password', label: '패스워드', type: 'password' },
];

function Auth() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
    setWasSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    setWasSubmitted(true);

    if (fieldValues) setSuccess(true);
    else setError(true);
  };

  React.useEffect(() => {
    if (success) return;
    if (error) return;
  }, [error, success]);

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <Field key={field.name} wasSubmitted={wasSubmitted} {...field} />
      ))}
      <button disabled={true}>제출</button>
    </form>
  );
}

export default Auth;
