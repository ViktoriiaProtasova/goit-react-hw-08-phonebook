import Form from '../../components/ContactsForm/Form';
import ContactList from '../../components/Contacts/ContactList';
import Filter from '../../components/ContactsFilter/Filter';
import Container from '@mui/material/Container';

const ContactsPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default ContactsPage;
