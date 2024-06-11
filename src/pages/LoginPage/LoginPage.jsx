import Container from '@mui/material/Container';
import LoginForm from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
      }}
    >
      <h1>Hello, sign in</h1>
      <LoginForm />
    </Container>
  );
}
