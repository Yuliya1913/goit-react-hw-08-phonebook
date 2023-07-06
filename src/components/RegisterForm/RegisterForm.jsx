import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/operation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // были ли мы внутри инпута
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [nameError, setNameError] = useState('Enter your name');
  const [passwordError, setPasswordError] = useState(
    'Password cannot be empty'
  );

  const dispatch = useDispatch();

  // валидация name

  const handleNameValidet = e => {
    const { value } = e.currentTarget;
    setName(value);
    if (value.length < 1) {
      setNameError('Enter full name');
      if (!value) {
        setNameError('Enter full name');
      }
    } else {
      setNameError('');
    }
  };

  // валидация Email

  const handleEmailValidet = e => {
    const { value } = e.currentTarget;
    setEmail(value);

    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(value).toLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  // валидация пароля

  const handlePasswordValidet = e => {
    const { value } = e.currentTarget;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Enter password more than 8 charactersl');
      if (!value) {
        setPasswordError('Enter password more than 8 charactersl');
      }
    } else {
      setPasswordError('');
    }
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
    toast.success(`${name} congratulations you are registered`, {
      position: 'top-right',
      duration: 3000,
      icon: '👏',
      style: {
        border: '5px solid #e5ccfd',
        borderRadius: '50px',
        background: '#ebffeb',
        color: '#1a01d4',
        fontSize: '19px',
      },
    });

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleValid = e => {
    const { name } = e.currentTarget;

    // if (name === 'name') setNameDirty(true);
    // if (name === 'email') setEmailDirty(true);
    // if (name === 'password') setPasswordDirty(true);

    // через свитч
    switch (name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };

  return (
    <form
      className={css.form_register}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {/* если нажали на name и в имени есть ошибка, то выводим ошибку*/}
      {nameDirty && nameError && (
        <div style={{ color: 'red' }}>{nameError}</div>
      )}
      <label className={css.label_register}>
        Username
        <input
          required
          onBlur={e => handleValid(e)}
          className={css.input_register}
          type="text"
          name="name"
          onChange={handleNameValidet}
          value={name}
        />
      </label>

      {emailDirty && emailError && (
        <div style={{ color: 'red' }}>{emailError}</div>
      )}
      <label className={css.label_register}>
        Email
        <input
          required
          onBlur={e => handleValid(e)}
          className={css.input_register}
          type="email"
          name="email"
          onChange={handleEmailValidet}
          value={email}
        />
      </label>
      {passwordDirty && passwordError && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <label className={css.label_register}>
        Password
        <input
          required
          onBlur={e => handleValid(e)}
          className={css.input_register}
          type="password"
          name="password"
          onChange={handlePasswordValidet}
          value={password}
        />
      </label>
      <button className={css.btn_register} type="submit">
        Register
      </button>
    </form>
  );
};
