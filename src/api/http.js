import axios from 'axios';

/*Sleep function to add delay to request*/
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

const post = async (route, payload) => {
    const response = await axios.post(route, payload);
    await sleep(20000);

    return response.data;
};

const get = async (route) => {
    const response = await axios.get(route);
    return response.data;
};

const put = async (route, payload) => {
    const response = await axios.put(route, payload);
    return response.data;
};

export { post, get, put };
