import css from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // инфа с инпута пришла и записываем в глобальный стейт
  const handleFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <label htmlFor="filterId" className={css.label_filter}>
      <p className={css.title_filter}>Find contacts by name</p>
      <input
        className={css.filter}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
