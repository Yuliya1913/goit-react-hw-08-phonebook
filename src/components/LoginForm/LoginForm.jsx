import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'redux/auth/operation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    'Enter the email you entered during registration'
  );
  const [passwordError, setPasswordError] = useState(
    'Enter the password you entered during registration'
  );

  const dispatch = useDispatch();

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

  const handleValid = e => {
    const { name } = e.currentTarget;

    // if (name === 'email') setEmailDirty(true);
    // if (name === 'password') setPasswordDirty(true);

    // через свитч
    switch (name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
    toast.success(`Congratulations you are login`, {
      position: 'top-right',
      duration: 1000,
      icon: '👏',
      style: {
        border: '5px solid #e5ccfd',
        borderRadius: '50px',
        background: '#ebffeb',
        color: '#1a01d4',
      },
    });

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form_login} onSubmit={handleSubmit} autoComplete="off">
      {emailDirty && emailError && (
        <div style={{ color: 'red' }}>{emailError}</div>
      )}
      <Toaster />
      <label className={css.label_login}>
        Email
        <input
          required
          onBlur={e => handleValid(e)}
          className={css.input_login}
          type="email"
          name="email"
          onChange={handleEmailValidet}
          value={email}
        />
      </label>
      {passwordDirty && passwordError && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <label className={css.label_login}>
        Password
        <input
          required
          onBlur={e => handleValid(e)}
          className={css.input_login}
          type="password"
          name="password"
          onChange={handlePasswordValidet}
          value={password}
        />
      </label>
      <button className={css.btn_login} type="submit">
        Log In
      </button>
    </form>
  );
};
