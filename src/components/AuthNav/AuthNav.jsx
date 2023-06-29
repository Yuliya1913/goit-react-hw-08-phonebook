import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper_authNav}>
      <NavLink className={css.link_authNav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link_authNav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
