import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navpage_navigation}>
      <li className={css.list_navigation}>
        <NavLink className={css.link_navigation} to="/">
          Home
        </NavLink>
      </li>
      {/* если пользователь залогинен - переходим на станицу с контактами */}
      {isLoggedIn && (
        <li className={css.list_navigation}>
          <NavLink to="/contacts" className={css.link_navigation}>
            Contacts
          </NavLink>
        </li>
      )}
    </nav>
  );
};
