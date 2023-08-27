import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { authOperations } from '../../redux/auth';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
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
            required
            autoFocus
            placeholder="Email"
            autoComplete="current email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <OutlinedInput
            required
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
