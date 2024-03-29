import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials:true,
    headers: {
        'Content-Type': 'application/json',
        Accept:'application/json'
    }
});

//all end-points

export const sendOtp = (data) => {
    return api.post('/api/send-otp', data);
}
export const verifyOtp = (data) => {
    return api.post('/api/verify-otp', data);
}
export default api;

