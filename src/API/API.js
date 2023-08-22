import axios from 'axios';

axios.defaults.baseURL = 'https://64d7333b2a017531bc13083b.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};

export const setContact = async credentials => {
  const { data } = await axios.post(`/contacts`, credentials);
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
