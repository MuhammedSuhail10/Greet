import axios from 'axios';
import ApiList from './ApiList';

// API Fetching Functions On User
export const getUserData = async (userId) => {}

// Send OTP Function
export const sendOtp = async (data) => {
    try {
        const response = await axios.post(`${ApiList.SEND_OTP}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status;
    } catch (error) {
        return null;
    }
}

// Verify OTP Function
export const verifyOtp = async (data) => {
    try {
        const response = await axios.post(`${ApiList.VERIFY_OTP}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status;
    } catch (error) {
        return null;
    }
}