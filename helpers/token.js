import AsyncStorage from '@react-native-async-storage/async-storage';
const TOKEN_KEY = 'userToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const TokenService = {
    // Save token
    async saveToken(token) {
        try {
            await AsyncStorage.setItem(TOKEN_KEY, token);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Get token
    async getToken() {
        try {
            const token = await AsyncStorage.getItem(TOKEN_KEY);
            return token;
        } catch (error) {
            return null;
        }
    },

    // Remove token
    async removeToken() {
        try {
            await AsyncStorage.removeItem(TOKEN_KEY);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Save refresh token
    async saveRefreshToken(refreshToken) {
        try {
            await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Get refresh token
    async getRefreshToken() {
        try {
            const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
            return refreshToken;
        } catch (error) {
            return null;
        }
    },

    // Remove refresh token
    async removeRefreshToken() {
        try {
            await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Save both tokens
    async saveTokens(token, refreshToken) {
        try {
            await AsyncStorage.multiSet([
                [TOKEN_KEY, token],
                [REFRESH_TOKEN_KEY, refreshToken || '']
            ]);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Clear all tokens
    async clearTokens() {
        try {
            await AsyncStorage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY]);
            return true;
        } catch (error) {
            return false;
        }
    },

    // Check if user is authenticated
    async isAuthenticated() {
        try {
            const token = await this.getToken();
            return token !== null && token !== '';
        } catch (error) {
            return false;
        }
    }
};

export default TokenService;