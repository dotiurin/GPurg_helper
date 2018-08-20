import axios from 'axios';

const apiUrl = '/api/v1/get_domains'

const domainsServiceGet = () => {
    return axios.get(apiUrl);
};


export { domainsServiceGet }