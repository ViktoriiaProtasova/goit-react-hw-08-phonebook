import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { deleteContact, fetchContacts } from '../../redux/operations';
import LinearIndeterminate from 'Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 2,
        marginBottom: 5,
        textAlign: 'center',
      }}
    >
      {isLoading && <LinearIndeterminate />}
      <ul>
        {getFilteredContact()?.map(({ name, number, id }) => (
          <ListItem
            key={id}
            name={name}
            number={number}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <ContactPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${name}: ${number}`} />
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default ContactList;
