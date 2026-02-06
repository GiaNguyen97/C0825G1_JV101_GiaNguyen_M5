import axios from 'axios';

const BaseURL = 'http://localhost:8080/users';

export const userService = {
    getAll: async () => {
        const response = await axios.get(BaseURL);
        return response.data;
    },
    delete: async (id) => {
        const response = await axios.delete(`${BaseURL}/${id}`);
        return response.status;
    }
};
