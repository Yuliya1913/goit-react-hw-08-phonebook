import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/auth/operation';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    //   при введении данных в инпут записываем эти значения в качестве свойств и их значений
    // console.log(e.currentTarget);
    const { name, value } = e.currentTarget;

    if (name === 'email') setEmail(value);

    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
