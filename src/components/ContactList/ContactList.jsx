import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import  ContactItem  from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
  return contacts.length ? (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem
          name={name}
          phone={phone}
          id={id}
          key={id}
        />
      ))}
    </ul>
  ) : (
    <p>There is no contact yet</p>
  );
}
}
