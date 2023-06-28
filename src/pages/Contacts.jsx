// import css from 'components/App.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isContacts = contacts.length > 0;
  return (
    // <div className={css.container}>
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {isContacts && <Filter />}

      {isContacts && <ContactsList />}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
export default Contacts;
