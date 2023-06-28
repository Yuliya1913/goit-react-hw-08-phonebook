import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/operation';
import { useState } from 'react';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    //   при введении данных в инпут записываем эти значения в качестве свойств и их значений

    const { name, value } = e.currentTarget;

    if (name === 'name') setName(value);

    if (name === 'email') setEmail(value);

    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};
