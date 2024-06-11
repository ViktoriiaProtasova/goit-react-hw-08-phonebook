import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { addContact } from '../../redux/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const createContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`Oops! ${name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    createContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginBottom: 5,
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack spacing={2} direction="column">
          <OutlinedInput
            type="text"
            name="name"
            placeholder="Name"
            autoFocus
            required
            onChange={handleChange}
            value={name}
          />
          <OutlinedInput
            type="tel"
            name="number"
            placeholder="Phone"
            required
            onChange={handleChange}
            value={number}
          />
          <Button type="submit" variant="contained">
            Add contact
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Form;
