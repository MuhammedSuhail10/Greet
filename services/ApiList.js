const BASE_URL = "http://10.0.2.2:8000/api";

const ApiList = {
    BASE_URL,
    SEND_OTP: `${BASE_URL}/user/send_otp`,
    VERIFY_OTP: `${BASE_URL}/user/otp_verify`,
};

export default ApiList;