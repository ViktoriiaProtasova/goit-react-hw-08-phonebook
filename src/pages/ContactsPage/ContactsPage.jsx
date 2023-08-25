import Form from '../../components/Form/Form';
import ContactList from '../../components/Contacts/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div className="formWrapper">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
