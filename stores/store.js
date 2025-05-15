import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from './phoneSlice';

export default configureStore({
    reducer: {
        phone: phoneSlice,
    },
})