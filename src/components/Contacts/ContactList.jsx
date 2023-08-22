import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);

  const onDelete = id => dispatch(deleteContact(id));

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <ul>
        {getFilteredContact()?.map(({ name, number, id }) => (
          <li className="contactListStile" key={id} name={name} number={number}>
            {name}: {number}
            <button
              className="btn btn-outline-primary deleteContactBtn"
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
