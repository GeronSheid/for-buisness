import { configureStore } from "@reduxjs/toolkit";
import {viewerReducer} from '../../../entities/users/viewer';


const store = configureStore({
    reducer: {
        auth: viewerReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;