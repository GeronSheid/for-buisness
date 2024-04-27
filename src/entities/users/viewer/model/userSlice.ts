import { createSlice} from "@reduxjs/toolkit";

type IViewer = {
    name: string;
    surName: string;
    email: string;
    isAuth: boolean;
} 

const initialState: IViewer = {
    name: '',
    surName: '',
    email: '',
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorize(state) {
            state.isAuth = true;
        },
        unauthorize(state) {
            state.isAuth = false;
        }
    } 
})

export const {authorize} = authSlice.actions;

export default authSlice.reducer;