import Container from '@mui/material/Container';
import RegisterForm from 'components/Register/RegisterForm';

export default function RegisterPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
      }}
    >
      <h1>New customer? Start here</h1>
      <RegisterForm />
    </Container>
  );
}
