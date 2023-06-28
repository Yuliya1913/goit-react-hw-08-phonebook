import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navpage}>
      <li>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </li>
      {/* если пользователь залогинен - переходим на станицу с контактами */}
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        </li>
      )}
    </nav>
  );
};
