import css from 'components/ContactItem/ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  return (
    <div className={css.wrapper_contact}>
      <li className={css.item_contact}>
        {name}: {number}
      </li>
      <button
        className={css.button_contact}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
