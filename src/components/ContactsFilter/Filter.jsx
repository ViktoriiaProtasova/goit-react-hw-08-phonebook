import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, maxWidth: '100%' },
        }}
      >
        <Stack spacing={2} direction="column">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '100%',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find contacts by name"
              inputProps={{ 'aria-label': 'Find contacts by name' }}
              name="filter"
              onChange={handleFilter}
              value={filter}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default Filter;
