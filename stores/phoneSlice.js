import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: {
        value: '',
    },
    reducers: {
        addPhone: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("phone", action.payload);
        },
        removePhone: (state) => {
            state.value = '';
            localStorage.removeItem("phone");
        },
    },
});

export const { addPhone, removePhone } = phoneSlice.actions;
export const phoneDetails = (state) => state.phone.value;
export default phoneSlice.reducer;