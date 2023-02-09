import { useSelector, useDispatch } from 'react-redux/es/exports';
import css from './Filter.module.css';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <form>
      <label className={css.filterLabel}>
        <span>Filter</span>
        <input
          type="text"
          onChange={evt => dispatch(setFilter(evt.target.value))}
          value={filter}
          required
        />
      </label>
    </form>
  );
}
