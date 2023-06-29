import { logOut } from 'redux/auth/operation';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper_userMenu}>
      <p className={css.username_userMenu}>
        Welcome, <span className={css.name_userMenu}>{user.name}</span>
      </p>
      <button
        className={css.button_userMenu}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
