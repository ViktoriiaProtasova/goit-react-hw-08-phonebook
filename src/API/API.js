import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const getAllUserContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};

export const setUserContacts = async credentials => {
  const { data } = await axios.post('/contacts', credentials);
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
