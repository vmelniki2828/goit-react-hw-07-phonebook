import axios from "axios";
axios.defaults.baseURL = 'https://649c1e0a0480757192377b6a.mockapi.io/'

export const getContacts = async () => {
    const { data } = await axios.get('/contacts');
    return data;
}

export const postContacts = async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
};

export const deleteContacts = async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};