import axios from 'axios';
import ApiList from './ApiList';

// Send OTP Function
export const sendOtp = async (data) => {
    try {
        const response = await axios.post(`${ApiList.SEND_OTP}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
        return response.status;
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') return 511;
        if (error.code === 'ETIMEDOUT' || !error.response) return 501;
    }
}

// Verify OTP Function
export const verifyOtp = async (data) => {
    try {
        const response = await axios.post(`${ApiList.VERIFY_OTP}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
        return { status: response.status, data: response.data };
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ECONNABORTED') { return { status: 511, message: error.response.data }; }
        if (error.code === 'ETIMEDOUT' || !error.response) { return { status: 501, message: error.response.data }; }
        return { status: error.response.status, data: error.response.data };
    }
}