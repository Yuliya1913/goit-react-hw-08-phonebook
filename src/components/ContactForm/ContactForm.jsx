import { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operation';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  let nameId = nanoid();
  let numberId = nanoid();

  const handleChange = event => {
    //   при введении данных в инпут записываем эти значения в качестве свойств и их значений
    const { name, value } = event.currentTarget;

    if (name === 'name') setName(value);

    if (name === 'number') setNumber(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    // Забираем данные с контактами с глобального стэйта, и если имя уже было введено,
    // какое мы снова вводим в инпуте, то выведется сообщение и выходим

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // если вводим имя контакта, какое уже есть в телеф.книге, выводим сообщение, что имя такое есть такое и выходим
    if (isExist) {
      toast(
        t => (
          <span
            style={{
              color: '#1a01d4',
              fontSize: '19px',
            }}
          >
            {name} is already in contacts.
            <button
              style={{
                marginLeft: '15px',
                border: '1px solid rgb(205, 167, 244)',
                borderRadius: '50px',
                background: 'rgb(173, 236, 236)',
                color: '#1a01d4',
                padding: '7px',
                fontSize: '17px',
              }}
              onClick={() => toast.dismiss(t.id)}
            >
              Close
            </button>
          </span>
        ),
        {
          duduration: Infinity,
          icon: '😕',
          position: 'bottom-right',
          style: {
            border: '5px solid #e5ccfd',
            borderRadius: '50px',
            background: 'red',
            color: '#4f0381',
          },
        }
      );
      reset();
      return;
    } else {
      toast(`new contact ${name} added`, {
        position: 'bottom-right',
        duration: 1000,
        icon: '👏',
        style: {
          border: '5px solid #e5ccfd',
          borderRadius: '50px',
          background: '#ebffeb',
          color: '#1a01d4',
          fontSize: '19px',
        },
      });
    }

    //   иначе отправляем экшен с данными в глобальный стэйт контактов

    dispatch(addContact({ name, number, id: nanoid() }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form_contacts} onSubmit={handleSubmitForm}>
      <label className={css.label_contacts} htmlFor={nameId}>
        Name
        <input
          className={css.input_contacts}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
          id={nameId}
        />
      </label>
      <label className={css.label_contacts} htmlFor={numberId}>
        Number
        <input
          className={css.input_contacts}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberId}
        />
      </label>
      <button type="submit" className={css.btn_contacts}>
        Add contact
      </button>
    </form>
  );
};
