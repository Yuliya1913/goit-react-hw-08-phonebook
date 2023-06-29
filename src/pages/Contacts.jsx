// import css from 'components/App.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import css from 'pages/Contacts.module.css';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';
import { useEffect } from 'react';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = contacts.length > 0;
  return (
    // <div className={css.container}>
    <div
      className={css.pages_contact}
      style={{
        textAlign: 'center',
      }}
    >
      <Helmet>
        <h1 className={css.title_contact}>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <div className={css.pages_wrapper}>
        <h2 className={css.pages_title}>Contacts</h2>
        {isContacts && <Filter />}
      </div>

      {isContacts && <ContactsList />}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
export default Contacts;
