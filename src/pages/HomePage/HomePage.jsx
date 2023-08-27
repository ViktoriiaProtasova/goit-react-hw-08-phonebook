import Container from '@mui/material/Container';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const HomePage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
      }}
    >
      <h1>Welcome to the Phonebook!</h1>
      <ContactPhoneIcon color="primary" sx={{ fontSize: 100 }} />
    </Container>
  );
};

export default HomePage;
