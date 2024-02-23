import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        noWrap
        marginBottom={2}
        gap={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          mr: 2,
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          flexGrow: 1500,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: {
            xs: '2rem',
            sm: '3rem',
            md: '4rem',
            lg: '5rem',
            xl: '6rem',
          },
        }}
      >
        <ContactPhoneIcon
          color="primary"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '3rem',
              md: '4rem',
            },
          }}
        />
        Phonebook
      </Typography>
      <Typography marginBottom={4}>
        Supports all necessary operations with the contact collection, as well
        as user registration, login and update.
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
      >
        {isRefreshing ? (
          <>{null}</>
        ) : (
          <>
            {!isLoggedIn && (
              <>
                <Button href="/phonebook-project/login" variant="contained">
                  Login
                </Button>
                <Button href="/phonebook-project/register" variant="outlined">
                  Register
                </Button>
              </>
            )}
          </>
        )}
      </Stack>
    </Container>
  );
};

export default HomePage;
