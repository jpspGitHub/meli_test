import axios from 'axios'

const AxiosService = () => {
    const get = (baseUrl, controller, ...args) =>
        axios.get(`${baseUrl}${controller}/${args.join('/')}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    const query = (baseUrl, controller, ...args) => {
        const queryParams = args?.reduce((prev, curr) => [...prev,Object.keys(curr).map(key => `${key}=${curr[key]}`)], []).flat();
        return axios.get(`${baseUrl}${controller}?${queryParams.join('&')}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
    };

    return { get, query };
}

export default AxiosService;