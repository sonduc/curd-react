import axios from 'axios';
import * as Config from '../store/constants/config.js';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch((error) => {
        console.log(error)
    });
};