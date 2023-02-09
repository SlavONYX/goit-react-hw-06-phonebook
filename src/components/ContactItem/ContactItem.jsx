import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';

export default function ContactItem ({ id, name, phone }) {
  const dispatch = useDispatch();
 
  return(
    <li key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        type="button"
        name={name}
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
