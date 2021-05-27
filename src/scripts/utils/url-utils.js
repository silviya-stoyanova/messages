import { PORTS, ENDPOINTS, BASE_URL } from '../constants/url-constants';

const { SERVER_PORT } = PORTS;
const { THREADS_ENDPOINT } = ENDPOINTS;

const constructUrl = (port, endpoint) => `${BASE_URL}:${port}${endpoint}`;

const getThreads = () => {
    const threadsUrl = constructUrl(SERVER_PORT, THREADS_ENDPOINT);

    return fetch(threadsUrl)
        .then(res => res.json())
}

export {
    getThreads,
}