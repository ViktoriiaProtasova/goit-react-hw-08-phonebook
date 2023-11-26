import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { authOperations } from '../../redux/auth';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="current name"
            value={name}
            onChange={handleChange}
          />
          <OutlinedInput
            required
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="current email"
            value={email}
            onChange={handleChange}
          />
          <OutlinedInput
            required
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Sign up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
