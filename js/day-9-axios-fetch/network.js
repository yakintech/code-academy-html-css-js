

const BASE_URL = 'https://northwind.vercel.app/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
  });

const network = {
    getAll: async (url) => {
        let responseData = [];
        await axiosInstance.get(`${url}`)
            .then(res => {
                responseData = res.data;
            })
        return responseData;
    },
    getById: async (url, id) => {

        let response = {}
        await axiosInstance.get(`${url}/${id}`)
            .then(res => {
                response = res.data;
            });
        if(response != null){
            throw "404 data not found!!"
        }
        return response;

    },
    add: async (url, data) => {

        let response = {};

        await axiosInstance.post(`${url}`, data)
            .then(res => {
                response = res.data;
            });

        return response;

    },
    delete: async (url, id) => {

        let response = {};
        await axiosInstance.delete(`${url}/${id}`)
            .then(res => {
                response = res.data;
            })
        return response;
    }
}


//async -> Promise


